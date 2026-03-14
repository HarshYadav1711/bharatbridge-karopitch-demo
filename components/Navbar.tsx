"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
}

const defaultLinks: NavLink[] = [
  { label: "For Founders", href: "#" },
  { label: "For Investors", href: "#" },
  { label: "About", href: "#" },
];

interface NavbarProps {
  links?: NavLink[];
  applyHref?: string;
  applyLabel?: string;
}

export function Navbar({
  links = defaultLinks,
  applyHref = "#apply",
  applyLabel = "Apply",
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container as="div">
        <nav
          className="flex h-14 sm:h-16 items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-lg font-semibold text-foreground hover:opacity-80 transition-opacity duration-200 shrink-0"
          >
            BharatBridge
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link href={applyHref}>
              <Button variant="accent" size="sm">
                {applyLabel}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none transition-colors duration-200"
            {...(mobileOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </nav>

        {/* Mobile nav panel */}
        <div
          id="mobile-nav"
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-200 ease-in-out",
            mobileOpen ? "max-h-80" : "max-h-0"
          )}
          {...(!mobileOpen ? { "aria-hidden": "true" } : { "aria-hidden": "false" })}
        >
          <div className="flex flex-col gap-1 py-4 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Link href={applyHref} onClick={() => setMobileOpen(false)}>
                <Button variant="accent" size="default" className="w-full">
                  {applyLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
