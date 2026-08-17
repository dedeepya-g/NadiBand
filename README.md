# NADI WristBand — Interactive Prototype & Marketing Website

*Feel your energy.*

A single-page React application built in Figma Make combining a full 11-section marketing website and an interactive wristband prototype for NADI — a cognitive energy wristband that communicates biometric state through thermal sensation rather than screens or notifications.

## Overview

NADI reads physiological signals from your wrist and translates them into warmth or coolness you can feel. No numbers. No alerts. Just a felt sense — the oldest language your body already understands.

This project is the complete interactive prototype and marketing front-end, built as a single scrolling React page.

Try it out:)

NADI Band design: https://lnkd.in/e3Nvm-sK

NADI App: https://lnkd.in/euiAyC_y

Devpost: https://lnkd.in/eUr-Nk_Z

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS — utility styling with a custom warm token system
- Lucide React — iconography
- Motion (motion/react) — animations
- Radix UI — accessible primitives
- Google Fonts — Cormorant Garamond, IM Fell English, Josefin Sans

## Project Structure

```
src/
├── app/
│   ├── App.tsx                        # Root component — full marketing site
│   └── components/
│       ├── BraidBand.tsx              # Core wristband SVG renderer
│       └── ui/                        # Radix UI primitives (shadcn/ui)
├── imports/
│   ├── nadi-website-prompt.md         # Full website design brief
│   ├── nadi-prototype-prompt.md       # Prototype interaction brief
│   └── NADI_SVG_Reference.html        # Reference SVG for wristband geometry
└── styles/
    ├── fonts.css                      # Google Fonts imports
    ├── theme.css                      # CSS design tokens
    └── index.css                      # Tailwind + token contract
```

## Design System

### Typography

| Font | Weights | Usage |
|---|---|---|
| Cormorant Garamond | 300, 400, 500 italic | All body text, headings, manifesto |
| IM Fell English | italic | Tagline and waitlist subline only |
| Josefin Sans | 100, 200, 300 | All labels, captions, UI text, buttons, nav |

### Colour Palette

| Name | Hex | Role |
|---|---|---|
| Parchment | #F5F0EB | Page background — locked globally |
| Parchment Mid | #EDE5D8 | Card and panel backgrounds |
| Parchment Dark | #DDD0BC | Borders and dividers |
| Ink | #1E1508 | Primary dark — warm near-black |
| Ink Mid | #2E2010 | Secondary dark |
| Ink Light | #3E3018 | Tertiary dark |
| Terracotta | #C4722A | Primary brand accent |
| Terracotta Deep | #9A4E18 | Emphasis, callout borders |
| Terracotta Light | #E09050 | Highlights |
| Gold | #D4A847 | Balance Channel, flow state |
| Gold Light | #ECC870 | Highlights |
| Warm Stone | #C9B8A0 | Rest Channel, neutral strap |
| Warm Tone 1 | #6A5030 | Muted body text |
| Warm Tone 2 | #A08050 | Secondary text |
| Warm Tone 3 | #C8A870 | Tertiary text on dark |

## Website Sections

| # | Section | Description |
|---|---|---|
| 1 | Sticky Navbar | Ink background, NADI flame logo, wordmark |
| 2 | Hero | Floating logo, IM Fell English tagline, fade-up animations |
| 3 | Manifesto | Long-form brand prose, animated rhythm words |
| 4 | Science Strip | Dark panel — three statistics: 100 / 35,000 / 0 |
| 5 | Colour Picker | Interactive card selection with live wristband preview |
| 6 | Why the Braid | Dark text panel on the three-strand philosophy |
| 7 | Three Channels | Drive / Balance / Rest — channel explanations |
| 8 | Three States | Interactive tabs — Warm / Cooling / Neutral thermal states |
| 9 | The Seat | Annotated SVG pod diagram and sensor explanation |
| 10 | Capture Button | Four-step voice capture flow with highlighted SVG |
| 11 | Waitlist | Email form with validation and confirmation state |
| — | Footer | Flame logo + tagline |

## BraidBand Component

The core wristband renderer (`src/app/components/BraidBand.tsx`). Accepts strap colour and thermal state as props and renders a fully animated SVG wristband.

### Props

```ts
interface BraidBandProps {
  width?: number
  strapColor?: string         // hex colour for the strap base
  thermalState?: "warm" | "cool" | "neutral"
}
```

### Visual Architecture

- Strap pill — rounded rect with horizontal opacity fade at both edges to simulate wrist wrap
- Three woven strands — Q-curve bezier paths clipped inside the strap, each with a shadow pass, base colour pass, and dashed highlight pass
  - Amber #C4722A — Drive Channel
  - Gold #D4A847 — Balance Channel
  - Warm Stone #C9B8A0 — Rest Channel
- Over/under weave — strand with the smallest Y value at each horizontal position renders on top, creating a true woven appearance
- The Seat — centre pod: outer ellipse → inner ellipse → breathing ring → core orb → specular highlight
- Capture button — small rect to the right of the pod
- Clasps — left and right end caps with pin holes

### Thermal States

| State | Core | Ring | Animation |
|---|---|---|---|
| warm | #C4722A Amber | #ECC870 Gold Light | Fast — 1.8s |
| cool | #A89880 Stone Dark | #C9B8A0 Warm Stone | Slow — 4s |
| neutral | #A08050 Warm Tone 2 | #C8A870 Warm Tone 3 | Medium — 2.8s |

The pod core and ring continuously oscillate: scale 1.0 → 1.13, opacity 0.72 → 1.0, ease-in-out, infinite.

## NadiLogo Component

Two variants, both rendered as inline SVG pure gold flames with no white accents.

| Variant | Sizes | Description |
|---|---|---|
| hero | 120px (hero), 52px (waitlist) | Three layered petals, amber-gold radial gradients, floatLogo animation |
| nav | 28px (navbar), 20px (footer) | Same flame form, smaller scale |

## Animations

| Name | Description | Duration |
|---|---|---|
| floatLogo | translateY 0 → −8px → 0 | 4s ease-in-out infinite |
| fadeUp | opacity 0 + translateY 20px → visible | 1.2s ease forwards |
| panelFade | opacity 0 + translateY 8px → visible | 0.4s ease |
| breathe (fast) | scale + opacity oscillation | 1.8s |
| breathe (normal) | scale + opacity oscillation | 2.8s |
| breathe (slow) | scale + opacity oscillation | 4s |

## Interactions

- Colour card selection — updates active card border, shows "SELECTED ✓", updates live BraidBand strap colour in both the colour picker preview and the three states section simultaneously
- State tabs — switches between Warm / Cooling / Neutral panels with panelFade animation; BraidBand pod updates to the matching thermal state
- Manifesto rhythm words — hover triggers a terracotta underline that grows from width 0 to 100% over 0.4s
- Colour card hover — lifts card by 2px with amber glow shadow
- State tab hover — subtle amber background tint
- Waitlist form — validates @ in email on submit, hides form, shows gold star confirmation with fadeUp
- Breathing animation — always-on for all pod cores across every BraidBand instance on the page
- Smooth scroll — scroll-behavior: smooth on html

## Strap Colours

| Name | Hex | Character |
|---|---|---|
| Warm Stone | #C9B8A0 | "The quiet one." — blends into any outfit, any mood |
| Warm Charcoal | #2A2018 | "The composed one." — makes the channels glow by contrast |
| Natural Sand | #E0CBA8 | "The open one." — sits closest to skin |

## The Three Channels

**Drive Channel (Amber #C4722A) — Active · Solar**
The strand that heats. When your brain is under pressure or making decisions fast, Drive brightens. Sustained high Drive without rest is the first sign of overload.

**Balance Channel (Gold #D4A847) — Central · Integration**
When Drive and Rest find equilibrium, Balance illuminates fully. Flow state — effortless, clear, unhurried. The entire purpose of the band is to help you find and hold this channel.

**Rest Channel (Warm Stone #C9B8A0) — Receptive · Lunar**
The strand that receives. High Rest means your nervous system is recovering. When this channel fades, your reserves are emptying.

## The Seat

The central pod where all three strands converge. Houses four sensors:

- Heart rate sensor
- Skin conductance sensor
- Temperature reader
- Thermal actuator — emits warmth or coolness back into the wrist

The glowing animated core is a real-time visual readout of what The Seat is currently doing to your skin.

## The Capture Button

A hardware-gated voice capture button on the right side of The Seat. Never listens passively — activates only on physical press.

1. Press and hold — the core dims slightly to show it is listening
2. Speak freely — say anything, structured or not
3. Release — one gentle pulse confirms the thought is held
4. It comes back — when your energy is balanced, NADI resurfaces what you captured

## Noise Overlay

A fixed `<div>` with an SVG fractalNoise data URI as its backgroundImage sits at z-index: 9999 with pointer-events: none over the full viewport. This approach avoids SVG filter ID collisions that occur when multiple inline `<filter>` elements are present on the same page.

## License

This project is a design prototype. All content, branding, and copy are fictional and created for demonstration purposes.
