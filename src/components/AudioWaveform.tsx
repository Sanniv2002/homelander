export function AudioWaveform() {
  return (
    <div className="flex items-center justify-center gap-1 h-full">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-orange-400 to-red-400"
          style={{
            height: `${Math.sin(Date.now() / 200 + i) * 20 + 30}px`,
            transition: 'height 150ms ease',
          }}
        />
      ))}
    </div>
  );
}