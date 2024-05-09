"use client";
import {
  FileBadge,
  FileClock,
  HandHelping,
  LayoutDashboard,
  MessageCircle,
  Plane,
  Users,
} from "lucide-react";

import { ActiveLink } from "./active-link";

export function Navbar() {
  return (
    <aside className="inset-y z-20 flex-col shrink-0 border-r hidden lg:flex gap-3 w-[234px]">
      <nav className="flex flex-col justify-between overflow-y-auto h-full p-6 w-[232px]">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-muted-foreground text-xs tracking-wider mb-3 whitespace-nowrap select-none">
              GERAL
            </h3>
            <ul className="flex flex-col gap-1">
              <li>
                <ActiveLink shouldMatchExactHref href="/dashboard">
                  <LayoutDashboard className="size-5" />
                  Dashboard
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#">
                  <FileBadge className="size-5" />
                  Cotações
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#">
                  <Plane className="size-5" />
                  Voos
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-muted-foreground text-xs tracking-wider mb-3 whitespace-nowrap select-none">
              LISTAS
            </h3>
            <ul className="flex flex-col gap-1">
              <li>
                <ActiveLink shouldMatchExactHref href="/">
                  <Users className="size-5" />
                  Clientes
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-muted-foreground text-xs tracking-wider mb-3 whitespace-nowrap select-none">
              RECURSOS
            </h3>
            <ul>
              <li>
                <ActiveLink shouldMatchExactHref href="#">
                  <MessageCircle className="size-5" />
                  Feedback
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#">
                  <HandHelping className="size-5" />
                  Suporte
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="#">
                  <FileClock className="size-5" />
                  Novidades
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
