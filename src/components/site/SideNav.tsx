"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/content/navigation";
import { SITE } from "@/content/site";

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-[300px] shrink-0 bg-[#f3f3f0] lg:block">
      <div className="flex h-full flex-col overflow-hidden">
        <div className="pt-14">
          <Link href="/" className="flex flex-col items-center gap-2">
            <img
              src="/logo.jpg"
              alt={`${SITE.name} logo`}
              className="h-12 w-auto"
            />
            <div className="text-[10px] font-semibold tracking-[0.32em] text-[#c41e3a]">
              {SITE.name}
            </div>
          </Link>
        </div>

        <nav className="mt-16 flex-1">
          <ul className="flex flex-col items-center gap-9">
            {PRIMARY_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href + "/"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block text-[12.5px] font-medium uppercase tracking-[0.32em] transition-colors",
                      isActive
                        ? "text-black"
                        : "text-neutral-700 hover:text-black",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
