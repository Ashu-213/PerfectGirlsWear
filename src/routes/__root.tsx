import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-charcoal">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-muted-ink">
          This page took a detour. Let's get you back to the collection.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-rose-glow)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-charcoal">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-ink">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:scale-[1.02] transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-white transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f7efe9" },
      { title: "Perfect Girls Wear — Style • Comfort • Confidence" },
      {
        name: "description",
        content:
          "Perfect Girls Wear in Sarangpur — a premium boutique for women's fashion. Kurtis, gowns, lehengas, and more. Style • Comfort • Confidence.",
      },
      { name: "author", content: "Perfect Girls Wear" },
      { property: "og:title", content: "Perfect Girls Wear — Premium Women's Fashion Boutique" },
      {
        property: "og:description",
        content:
          "A luxury fashion destination in Sarangpur. Explore kurtis, gowns, dupattas, and more. Visit our showroom or chat on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Perfect Girls Wear" },
      {
        name: "twitter:description",
        content: "Premium women's fashion boutique in Sarangpur. Style • Comfort • Confidence.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
