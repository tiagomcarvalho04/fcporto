# FC Porto · Matchday micro-frontends

Three independently built apps wired together with Webpack 5 Module Federation.

| App        | Role                                              | Port |
|------------|---------------------------------------------------|------|
| `base`     | Host shell: routing, header, member profile, 404  | 3000 |
| `football` | Remote exposing the `/matchday` page              | 3001 |
| `utilities`| Remote exposing shared UI components and the theme| 3002 |

Design system: [Mantine](https://mantine.dev) v7 (MIT licence).

## Run

Start the remotes first, then the host:

```bash
cd utilities && npm install && npm start   # http://localhost:3002
cd football  && npm install && npm start   # http://localhost:3001
cd base      && npm install && npm start   # http://localhost:3000
```

Open http://localhost:3000. The app redirects to `/matchday`.

`football` can also run on its own at http://localhost:3001 (it needs `utilities` running).

## Conventions

- Screen folders contain `<name>.screen.tsx`, `<name>.helper.ts`, `<name>.types.ts` and an `index.ts` that defines the module boundary.
- `services/api.ts` holds the mock data and the REST-style endpoints. Swap the mock for `fetch` without changing the exported signatures.
- Cross-app types are declared in `src/types/remotes.d.ts`. Keep them in sync with the exposed modules.
