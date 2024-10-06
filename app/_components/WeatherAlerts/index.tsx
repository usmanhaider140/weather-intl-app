"use client";

import { useState } from "react";

export default function ClientWeatherAlerts({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  // We can only use React state in Client
  // Components.
  const [isOpen, setIsOpen] = useState(false);
  const toggleAlerts = () => setIsOpen(!isOpen);
  console.log(title);
  return (
    <div className="my-20 text-xl text-center bg-cyan-400 py-2 rounded-md">
      <div onClick={toggleAlerts}>
        {title}
        <span>&#9660; {/* Chevron down icon */}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
