# Base Wayfinder Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle ScoutLocal into a calm Base Wayfinder UI with photo-led onboarding, destination-first Home, polished cards, and clearer detail actions.

**Architecture:** Keep the existing Expo/React Native structure and local/Supabase data flow. Make focused visual changes through shared tokens, reusable components, and screen-level layout updates without changing database behavior.

**Tech Stack:** Expo, React Native, TypeScript, existing Supabase-ready data layer, Vitest.

---

### Task 1: Tokens and Shared Visual Language

**Files:**
- Modify: `src/theme/tokens.ts`
- Modify: `src/components/Badge.tsx`
- Modify: `src/components/CategoryPills.tsx`
- Modify: `src/components/SkeletonCard.tsx`

- [x] Add soft app background, elevated surface, stronger headline type, and consistent action/icon colors.
- [x] Reduce badge visual weight and keep sage as the only active color.
- [x] Make category pills feel like destination chips, not filter clutter.

### Task 2: Business Card Polish

**Files:**
- Modify: `src/components/BusinessCard.tsx`

- [x] Make business cards calmer and more premium.
- [x] Improve spacing and hierarchy.
- [x] Keep save animation and trust badges.

### Task 3: Onboarding Redesign

**Files:**
- Modify: `src/screens/OnboardingFlow.tsx`

- [x] Replace the welcome screen with photo-led top area and bottom action panel.
- [x] Keep auth/business-owner flows intact.
- [x] Remove loud/emoji trust-row visual treatment from the first screen.

### Task 4: Destination-First Home

**Files:**
- Modify: `src/screens/HomeScreen.tsx`

- [x] Add base/location header.
- [x] Make the search field the primary object.
- [x] Rename the first section to “Trusted nearby.”
- [x] Keep Coming Soon base handling.

### Task 5: Detail and Supporting Screens

**Files:**
- Modify: `src/screens/BusinessDetailScreen.tsx`
- Modify: `src/screens/ProfileScreen.tsx`

- [x] Simplify contact rows into action-forward cards.
- [x] Reduce visual clutter on profile cards and menu rows.

### Task 6: Verification

**Files:**
- No new files.

- [x] Run `npm test -- --run`.
- [x] Run `npm run typecheck`.
- [x] Confirm Expo can continue hot-reloading the changed app.

