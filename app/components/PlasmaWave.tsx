"use client";
import "./plasma.css";

export default function PlasmaWave() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full plasma-animation" />
    </div>
  );
}
