"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <>
      {children}
      <Toaster position="top-right" />
    </>
  );
}
