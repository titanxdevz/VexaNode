"use client";

import { Suspense } from "react";
import GameServerList from "./GameServerList";

function GameServerListFallback() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );
}

export default function GameServerListWrapper() {
  return (
    <Suspense fallback={<GameServerListFallback />}>
      <GameServerList />
    </Suspense>
  );
}
