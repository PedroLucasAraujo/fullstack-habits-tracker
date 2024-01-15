interface ProgresBarProps {
  progress: number;
}

export function ProgressBar(props: ProgresBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progresBar"
        aria-Label="Progresso de Hábitos completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600 w-3/4 transition-all"
        style={{
          width: `${props.progress}%`,
        }}
      ></div>
    </div>
  );
}
