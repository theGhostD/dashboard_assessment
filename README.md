# CRM Dashboard (Next.js)

A lightweight CRM dashboard built with Next.js 16 (App Router), React 19, Ant Design, TypeScript and React Query for data fetching/caching. The project is a small, component-driven admin interface demonstrating common dashboard patterns: authentication (mocked), sidebar navigation, header , tables, product context/provider, and a proxy for protected route.

This README documents how to run the project, explains the structure and key modules.

## Quick links

- Repo root: `/`
- App entry: `src/app/page.tsx` (login)
- Dashboard layout: `src/app/(dashboard)/layout.tsx`
- Product context/provider: `src/app/context/productContext.tsx`
- Axios service: `src/services/fetchInterceptor.tsx`
- React Query provider: `src/services/ReactQueryProvider.tsx`

## Requirements

- Node.js (recommended >= 20.x)
- npm or pnpm (this project uses standard npm scripts)


## Install & Run

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will usually be available at http://localhost:3000 when running `npm run dev`.

## Technology stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Ant Design (v5)
- Tailwind
- Axios for HTTP requests
- React Query (@tanstack/react-query) for data fetching & caching

## Project structure (high-level)

src/
- app/ — Next.js App Router pages and layouts
  - page.tsx — login page (client-side)
  - layout.tsx — root app layout wiring providers
  - (dashboard)/ — dashboard area (Sidebar + Header)
    - layout.tsx — dashboard layout
    - customers/ — customers page
    - products/ — products page (uses ProductProvider)
  - components/ — reusable UI components (sidebar, topbar, table, inputs, buttons)
- app/context — ProductProvider
- services/ — network and provider utilities
  - fetchInterceptor.tsx — axios instance (baseURL from env)
  - ReactQueryProvider.tsx — QueryClientProvider wrapper + devtools
  - utils/ — helper functions, auth utilities, routes, interfaces
- theme/ — images and antd theme helpers

Public assets live under  `assets/`.

## Key modules explained

- `src/app/page.tsx`
  - Login page (client component). Uses Ant Design Form and custom inputs. On submit it stores `userDetails` in `localStorage` and sets a cookie named `ABCD` (base64-encoded JSON) then navigates to `/customers`.

- `src/app/(dashboard)/layout.tsx`
  - Dashboard layout which renders the `Sidebar` and `Header` components and an area for page content. Uses responsive utility classes.

- `src/app/context/productContext.tsx`
  - Client-side React context using React Query to fetch a products list from `https://dummyjson.com/products`. 

- `src/services/ReactQueryProvider.tsx`
  - Wraps the app in a `QueryClientProvider` with sensible defaults (staleTime, gcTime, retry=1). Also includes `ReactQueryDevtools` for debugging.

- `src/proxy.tsx`
    - Serves as the protected route, It allows running code before a request is completed, enabling modifications to the response by rewriting, redirecting, adjusting headers, or responding directly


## Styling & assets

- The project uses utility classes for layout and styling.
- Ant Design components are used throughout for inputs, tables, drawers, and other UI elements.
- Images and icons are in  `assets/` and imported via a `theme/images.ts` helper.

## Authentication & session

- Authentication is currently mocked in the login flow (`src/app/page.tsx`). On successful submit it writes `userDetails` to `localStorage` and sets a cookie named `ABCD` containing a base64-encoded JSON of the form values. There's also a `logoutHandler` utility referenced by the Sidebar that clears auth state (see `src/services/utils/auth.js`).

## How to add pages/components

- Add a page in the `src/app` directory to use the App Router.
- Place dashboard pages inside `src/app/(dashboard)/` if they should be wrapped by the dashboard shell.
- Reuse existing components under `src/app/components` for consistency.



## Recommended improvements

- Replace mocked login with a real auth flow (API + secure tokens).
- Use the centralized Axios instance everywhere and add request/response interceptors for auth and error handling.

## Files of interest

- `package.json` — scripts & dependencies
- `src/app/page.tsx` — login flow
- `src/app/(dashboard)/layout.tsx` — dashboard layout
- `src/app/context/productContext.tsx` — product provider using React Query
- `src/services/fetchInterceptor.tsx` — Axios instance
- `src/services/ReactQueryProvider.tsx` — React Query wrapper

---

