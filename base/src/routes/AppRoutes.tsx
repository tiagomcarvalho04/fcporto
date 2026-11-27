import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import { AppLayout } from "@layout";
import { NotFoundScreen } from "@screens";
import { ROUTE_PATHS } from "@config";

const MatchdayPage = lazy(async () => {
  const remoteModule = await import("football/MatchdayPage");

  console.info("football/MatchdayPage exports:", Object.keys(remoteModule));

  if (typeof remoteModule.default !== "function") {
    throw new Error(
      `football/MatchdayPage: default export is ${typeof remoteModule.default}. ` +
        `Exports: ${Object.keys(remoteModule).join(", ")}`,
    );
  }

  return { default: remoteModule.default };
});

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={ROUTE_PATHS.matchday} replace />} />
        <Route
          path="matchday"
          element={
            <Suspense
              fallback={
                <Center py="xl">
                  <Loader />
                </Center>
              }
            >
              <MatchdayPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}
