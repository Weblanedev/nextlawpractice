import type { ReactNode } from "react";
import { SideNav } from "@/components/site/SideNav";
import { MobileNav } from "@/components/site/MobileNav";
import { Footer } from "@/components/site/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh overflow-hidden bg-white">
      <MobileNav />
      <div className="mx-auto flex h-[calc(100dvh-65px)] w-full max-w-[1400px] lg:h-dvh">
        <SideNav />
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto overscroll-contain">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

