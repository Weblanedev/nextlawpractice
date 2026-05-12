"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4500,
        style: {
          borderRadius: 12,
          background: "#0b0f19",
          color: "#ffffff",
        },
      }}
    />
  );
}

