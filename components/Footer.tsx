import Link from "next/link";
import { Container } from "@/components/Container";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

/** Link groups for Karo Pitch, KaroStartup, contact, and social. */
const footerLinkGroups = {
  karopitch: [
    { label: "Apply", href: "#apply" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Featured Startups", href: "#startups" },
  ],
  karostartup: [
    { label: "About KaroStartup", href: "#about-karostartup" },
    { label: "About Karo Pitch", href: "#about" },
  ],
};

const socialPlaceholders = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
] as const;

/** Site footer: link groups, contact email, social placeholders, copyright. */
export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-border mt-auto bg-muted/30"
      role="contentinfo"
    >
      <Container>
        <div className="py-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Karo Pitch */}
            <nav aria-label="Karo Pitch links">
              <h3 className="text-sm font-semibold text-foreground">
                Karo Pitch
              </h3>
              <ul className="mt-3 space-y-2">
                {footerLinkGroups.karopitch.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* KaroStartup */}
            <nav aria-label="KaroStartup links">
              <h3 className="text-sm font-semibold text-foreground">
                KaroStartup
              </h3>
              <ul className="mt-3 space-y-2">
                {footerLinkGroups.karostartup.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Contact</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Get in touch for partnerships or support.
              </p>
              <a
                href="mailto:hello@karostartup.com"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              >
                <Mail className="h-4 w-4" aria-hidden />
                hello@karostartup.com
              </a>
            </div>

            {/* Social placeholders */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Follow</h3>
              <ul className="mt-3 flex gap-3" aria-label="Social links">
                {socialPlaceholders.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KaroStartup. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Karo Pitch is a program by KaroStartup.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
