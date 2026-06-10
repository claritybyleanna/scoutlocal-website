# ScoutLocal Expo Beta Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Expo/React Native beta app foundation for ScoutLocal from the PRD, TSD, DDD, and approved wireframe.

**Architecture:** The app uses a single Expo TypeScript codebase with lightweight stateful navigation for the beta wireframe flows. Domain logic is isolated in pure TypeScript modules and tested with Vitest. Supabase-facing files include SQL migrations, seed data, storage policy setup, and Edge Function stubs for Kit, Stripe, and base activation.

**Tech Stack:** Expo managed workflow, React Native, TypeScript, Supabase JS, Vitest, PostgreSQL SQL migrations, Supabase Edge Functions.

---

### Task 1: Project Foundation and Domain Tests

**Files:**
- Create: `package.json`
- Create: `app.json`
- Create: `tsconfig.json`
- Create: `babel.config.js`
- Create: `src/domain/scoutlocal.test.ts`
- Create: `src/domain/types.ts`
- Create: `src/domain/directory.ts`

- [x] **Step 1: Write failing tests for directory behavior**

Create tests for Home filtering, Explore filtering, Coming Soon home behavior, favorites origin labels, and listing freshness.

- [x] **Step 2: Run tests to verify they fail**

Run: `npm test -- --run`
Expected: fails before `src/domain/directory.ts` exists.

- [x] **Step 3: Implement minimal domain logic**

Implement pure helpers for business visibility, origin labels, freshness status, and base demand ranking.

- [x] **Step 4: Run tests to verify they pass**

Run: `npm test -- --run`
Expected: all domain tests pass.

### Task 2: Supabase Schema, Seeds, and Edge Functions

**Files:**
- Create: `supabase/migrations/202605090001_initial_schema.sql`
- Create: `supabase/migrations/202605090002_seed_beta_data.sql`
- Create: `supabase/functions/kit-sync/index.ts`
- Create: `supabase/functions/stripe-webhook/index.ts`
- Create: `supabase/functions/base-activation/index.ts`

- [x] **Step 1: Create schema migration**

Include tables, constraints, indexes, RLS, storage bucket setup, profile trigger, freshness function, and explicit grants for current Supabase Data API behavior.

- [x] **Step 2: Create seed migration**

Seed Fort Johnson, Coming Soon bases, beta categories, 5 local businesses, and 5 online AMSE businesses.

- [x] **Step 3: Add Edge Function stubs**

Add deployable Deno functions with clear environment variables and idempotent request handling shapes.

### Task 3: React Native App UI

**Files:**
- Create: `App.tsx`
- Create: `src/theme/tokens.ts`
- Create: `src/data/seed.ts`
- Create: `src/lib/supabase.ts`
- Create: `src/components/BusinessCard.tsx`
- Create: `src/components/Badge.tsx`
- Create: `src/components/SkeletonCard.tsx`
- Create: `src/components/CategoryPills.tsx`
- Create: `src/screens/OnboardingScreen.tsx`
- Create: `src/screens/HomeScreen.tsx`
- Create: `src/screens/ExploreScreen.tsx`
- Create: `src/screens/FavoritesScreen.tsx`
- Create: `src/screens/ProfileScreen.tsx`
- Create: `src/screens/BusinessDetailScreen.tsx`
- Create: `src/screens/ReportProblemScreen.tsx`
- Create: `src/screens/BusinessOwnerScreen.tsx`
- Create: `src/screens/AdminPanelScreen.tsx`

- [x] **Step 1: Build reusable components**

Implement cards, badges, category pills, skeleton loading rows, and design tokens from the DDD.

- [x] **Step 2: Build app screens**

Implement onboarding, tabs, detail/reporting, owner profile/listing flow, admin queues, and Coming Soon behavior.

- [x] **Step 3: Wire local state and Supabase-ready data layer**

Use seeded local data for immediate development and a Supabase client helper for real backend integration.

### Task 4: Verification

**Files:**
- Modify: all implementation files as needed.

- [x] **Step 1: Run tests**

Run: `npm test -- --run`
Expected: all tests pass.

- [x] **Step 2: Run TypeScript check**

Run: `npm run typecheck`
Expected: TypeScript passes.

- [x] **Step 3: Start Expo**

Run: `npm run start`
Expected: Expo dev server starts.

