import { createFileRoute } from "@tanstack/react-router";
import { getPunkSongs } from "@/data/demo.punk-songs";
import { useState } from "react";

export const Route = createFileRoute("/demo/start/ssr/full-ssr")({
  component: RouteComponent,
  loader: async () => await getPunkSongs(),
});

function RouteComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // (claude 땡큐)
    // ✅ State 사용이 가능한 이유:
    // 1. 이것은 RSC(React Server Component)가 아니라 일반 SSR입니다.
    // 2. 서버는 초기 HTML만 렌더링하고, 클라이언트(브라우저)에서 하이드레이션됩니다.
    // 3. handleClick은 클라이언트에서 실행되므로 useState를 자유롭게 사용 가능합니다.
    // 4. RSC는 'use client'가 없으면 서버 전용이라 state 불가, 하지만 이 컴포넌트는 클라이언트 컴포넌트입니다.
    setCount(count + 1);
    console.log(count);
  };

  const punkSongs = Route.useLoaderData();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 20% 60%, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)",
      }}
    >
      <div className="w-full max-w-2xl p-8 rounded-xl backdrop-blur-md bg-black/50 shadow-xl border-8 border-black/10">
        <h1
          className="text-3xl font-bold mb-6 text-purple-400"
          onClick={handleClick}
        >
          Full SSR - Punk Songs
        </h1>
        <ul className="space-y-3">
          {punkSongs.map((song) => (
            <li
              key={song.id}
              className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm shadow-md"
            >
              <span className="text-lg text-white font-medium">
                {song.name}
              </span>
              <span className="text-white/60"> - {song.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
