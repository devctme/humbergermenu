"use client";

import DarkModeToggle from "./DarkToggle";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-center items-center bg-slate-200 p-3">
        <div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
