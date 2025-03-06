import { useEffect, useState } from 'react';

export function AudioWaveform() {
  return (
    <div className="flex items-center justify-center gap-[2px] h-full">
      {Array.from({ length: 32 }).map((_, i) => {
        const baseHeight = 20;
        const variableHeight = 15;
        const delay = i * 30;

        return (
          <div
            key={i}
            className="w-full rounded-full bg-gradient-to-t from-purple-500 to-pink-500"
            style={{
              height: `${baseHeight}px`,
              animation: `wave 1s ease-in-out infinite ${delay}ms`,
              transformOrigin: 'center',
            }}
          />
        );
      })}

      {/* Define the keyframes in a style tag */}
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              height: 20px;
            }
            50% {
              height: 35px;
            }
          }
        `}
      </style>
    </div>
  );
}