import { useCountdown } from "../hooks/useCountdown";
import { pad } from "../utils/format";

interface CountdownProps {
  target: string;
}

export function Countdown({ target }: CountdownProps) {
  const time = useCountdown(target);

  if (time.finished) {
    return <p>O jogo já começou.</p>;
  }

  return (
    <p>
      Faltam {time.days} dias, {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
    </p>
  );
}
