NADI WRISTBAND PROTOTYPE — FIGMA MAKE PROMPT
=============================================
Copy everything below this line.
---------------------------------------------

Build a single-page interactive prototype for NADI, a cognitive energy wristband. The page scrolls continuously. Use warm parchment (#F5F0EB) as the page background throughout. Typography: Georgia or any warm serif for headings and body; monospace or clean sans-serif only for labels and captions. No cool greys, no blue tones anywhere.

COLOUR SYSTEM (strict — no other colours)
- Amber #C4722A — Drive Channel, warm signal, primary accent
- Amber Light #E09050 — highlights
- Amber Dark #8A4E1A — shadows, depth
- Gold #D4A847 — Balance Channel, flow state, reward signal
- Gold Light #ECC870 — highlights
- Gold Dark #9A7828 — depth
- Warm Stone #C9B8A0 — Rest Channel, neutral strap, default
- Stone Dark #A89880 — shadows
- Stone Light #E4D8C4 — highlights
- Parchment #F5F0EB — page background
- Parchment Mid #EDE5D8 — card/panel backgrounds
- Parchment Dark #DDD0BC — borders, dividers
- Ink #1E1508 — primary dark background (warm near-black, NOT blue-black)
- Ink Mid #2E2010 — secondary dark
- Ink Light #3E3018 — tertiary dark
- Warm Tone 1 #6A5030 — muted body text
- Warm Tone 2 #A08050 — secondary text
- Warm Tone 3 #C8A870 — tertiary text on dark

---

SECTION 1 — STICKY NAVBAR
Background: Ink (#1E1508). Height 52px. Left side: flame icon (amber-orange gradient square with rounded corners, white flame shape inside) + "NADI" in letterSpacing 5px, parchment colour. No other nav items. No right-side text. Border bottom: 1px Ink Light.

---

SECTION 2 — HERO
Centred. Padding top 64px.
Headline: "Feel your energy." — 44px serif, Ink colour, fontWeight 400.
Subline (italic, 14px, Warm Tone 1, lineHeight 1.8):
"A wristband that speaks in temperature.
No screen. No notifications. Just a felt sense."

---

THIN DIVIDER COMPONENT (reuse between all sections)
Full width. 1px Parchment Dark line with a small 6px warm stone dot centred on it. Top and bottom margin 52px.

---

SECTION 3 — WHY THE BRAID
Dark panel (Ink background, borderRadius 20px, padding 32px 36px).
Left side: small circular SVG illustration — three looping curved paths in amber, gold, and warm stone weaving around a central gold dot.
Right side text (parchment body colour):
Label (9px, letterSpacing 4px, Warm Tone 1 sans-serif): "WHY THE BRAID"
Body (13px, lineHeight 1.85):
"When three things are woven together, they hold what a single strand cannot. The braid keeps each channel distinct while binding them into one — so the energy carried in each strand stays within the whole, rather than dispersing outward. This is not decoration. It is how the band works."

---

SECTION 4 — THE SEAT (pod naming)
Label: "THE CONVERGENCE POINT" — 9px, letterSpacing 4px, Warm Tone 1, sans-serif
Heading: "The Seat" — 26px serif, Ink, fontWeight 400
Layout: two columns — left is a close-up SVG illustration of the wristband centre pod; right is text.

LEFT ILLUSTRATION (SVG, 160×100px):
- Two short strap stubs extending left and right in Warm Stone colour with opacity fade toward edges
- Central ellipse pod: outer bezel in Ink Light with 1.5px Warm Tone 1 stroke, inner ellipse in Ink with Amber Dark stroke
- Animated glowing core circle: amber-gold radial gradient, slow breathing pulse animation (scale 1 to 1.13, opacity 0.72 to 1, 2.8s ease-in-out loop)
- White specular ellipse top-left of core (opacity 0.28)
- Small rectangular button on right side of pod: Ink Light fill, Amber Dark circle inside
- Dashed annotation lines pointing to pod ("The Seat") and button ("Capture"), 7px Warm Tone 1 labels

RIGHT TEXT:
Paragraph 1 (13px, Warm Tone 1, lineHeight 1.85):
"Where all three strands meet, the band holds its most important component. We call it The Seat — the central point where sensing, processing, and output converge."
Paragraph 2 (13px, Warm Tone 1, lineHeight 1.85):
"Physiologically, The Seat houses the heart rate sensor, the skin conductance sensor, the temperature reader, and the thermal actuator — the element that emits warmth or coolness back into your wrist. The glowing core you see is a real-time readout of what The Seat is currently doing to your skin."
Callout box (left border 2px Amber, padding-left 14px):
Label: "THE NAME" — 9px, Amber, letterSpacing 1px, sans-serif
Body (11px, Warm Tone 1, lineHeight 1.72, italic):
"In autonomic physiology, the body's regulatory centre is described as the place where all incoming signals are received and all outgoing responses originate. In contemplative tradition, the same concept is expressed as the point where energy gathers before moving outward. The Seat holds both meanings at once."

---

SECTION 5 — THE CAPTURE BUTTON
Label: "THE CAPTURE BUTTON" — 9px, letterSpacing 4px, Warm Tone 1, sans-serif
Heading: "Press. Speak. Let go." — 26px serif, Ink, fontWeight 400
Layout: two columns — left is a four-step vertical flow; right is a small pod illustration with button highlighted.

LEFT — FOUR STEPS (vertical timeline with connecting line):
Each step: numbered circle (30px, amber fill for step 01, Parchment Mid for others) + title (13px serif Ink) + detail (11px sans-serif Warm Tone 1, lineHeight 1.72)

Step 01 circle filled Amber, text Parchment:
Title: "Press and hold"
Detail: "Press the small button on the right side of The Seat. The core dims slightly to show it's listening. No need to unlock your phone."

Step 02:
Title: "Speak freely"
Detail: "Say anything — a task, a worry, an idea, a question. It doesn't need to be structured. Messy is fine. Half-formed is fine. Three words or three sentences."

Step 03:
Title: "Release"
Detail: "Let go of the button. The band gives one gentle pulse to confirm. Your thought is held. Nothing else happens now."

Step 04:
Title: "It comes back at the right moment"
Detail: "When your energy is balanced and you have a clear window, NADI resurfaces what you captured — with the context of when you said it and why it matters now."

RIGHT PANEL (Parchment Mid background, borderRadius 16px, border 1px Parchment Dark):
Label: "THE BUTTON" — 9px, letterSpacing 3px, Warm Tone 1
SVG illustration of pod with the right-side button highlighted in Amber (glowing), and a dashed arrow pointing to it labelled "press"
Three lines of text (10px, Warm Tone 1, centred, sans-serif):
"Hardware-gated.
Never listens passively.
Only activates on press."

---

SECTION 6 — THREE CHANNELS
Label: "THE THREE CHANNELS" — 9px, letterSpacing 4px, Warm Tone 1, sans-serif
Heading: "Woven. Not separate." — 26px serif, Ink, fontWeight 400
Dark panel (Ink background, borderRadius 18px, padding 28px 32px).
Three equal columns. Each column: top border 2px in channel colour, small colour bar (24×3px borderRadius 2), title, subtitle italic small, description.

Column 1 — border Amber:
Title (13px, Parchment): "Drive Channel"
Subtitle (9px, Warm Tone 3, italic): "Active · Solar"
Body (10px, Warm Tone 1, lineHeight 1.75, sans-serif): "The strand that heats. When your brain is in full gear — making decisions, processing fast, under pressure — Drive brightens. High Drive is useful. Sustained high Drive without rest is the first sign of overload."

Column 2 — border Gold:
Title: "Balance Channel"
Subtitle: "Central · Integration"
Body: "When Drive and Rest find equilibrium, Balance illuminates fully. This is your flow state — effortless, clear, unhurried. The entire purpose of the band is to help you find and hold this channel."

Column 3 — border Warm Stone:
Title: "Rest Channel"
Subtitle: "Receptive · Lunar"
Body: "The strand that receives. High Rest means your nervous system is recovering — taking in rather than pushing out. When this channel fades, your reserves are emptying."

---

SECTION 7 — COLOUR PICKER (interactive)
Label: "CHOOSE YOUR COLOUR" — 9px, letterSpacing 4px, Warm Tone 1, sans-serif
Heading: "Three colours. Three personalities." — 26px serif, Ink, fontWeight 400
Intro (12px, Warm Tone 1, italic, lineHeight 1.75):
"The channels stay the same in every band. What you choose is the base that carries them."

THREE COLOUR CARDS (grid, 3 columns, gap 12px):
Each card: Parchment background, borderRadius 16px, padding 18px 16px, border 1.5px Parchment Dark (active: 1.5px Amber with amber shadow). Click to select.

Card 1 — Warm Stone (#C9B8A0):
Swatch: 40×40px, borderRadius 10px
Name: "Warm Stone" (12px serif Ink)
Personality (12px Amber italic): "The quiet one."
Description (10px, Warm Tone 1, sans-serif, lineHeight 1.72):
"You don't need the band to say anything — you already know. Warm Stone blends into any outfit, any occasion, any mood. Wear it and forget it's there."

Card 2 — Warm Charcoal (#2A2018):
Personality: "The composed one."
Description: "Understated but intentional. Warm Charcoal makes the amber and gold channels glow by contrast — the more you look, the more you see. Works with everything."

Card 3 — Natural Sand (#E0CBA8):
Personality: "The open one."
Description: "Light, easy, and at home anywhere. Natural Sand sits closest to skin — the band seems to grow from the wrist rather than sit on it. A soft, open presence."

When a card is selected: border becomes 1.5px Amber, add small "SELECTED ✓" label in 8px Amber below name. A box-shadow of amber glow appears.

LIVE BAND PREVIEW (below the cards):
Parchment Mid background, borderRadius 18px, padding 32px 24px, border 1px Parchment Dark, centred.
Label: "[SELECTED COLOUR NAME] — NEUTRAL STATE" — 9px letterSpacing 3px Warm Tone 1
Braid band SVG (see BRAID BAND COMPONENT below) — 500px wide, uses selected strap colour, thermalState neutral.
Caption (10px, Warm Tone 1, italic, centred, max-width 360px):
"The braid always carries the same three channels. Only the base changes."

---

SECTION 8 — THREE STATES (interactive)
Label: "THE THREE STATES" — 9px, letterSpacing 4px, Warm Tone 1, sans-serif
Heading: "What NADI says on your wrist." — 26px serif, Ink, fontWeight 400
Intro (12px, Warm Tone 1, italic, lineHeight 1.75):
"The band never uses words or numbers. It speaks in temperature — the same language your body already uses."

THREE TABS (horizontal tab row, border-bottom 1px Parchment Dark):
Each tab shows: coloured dot + label + temperature. Active tab: border-bottom 2.5px in tab accent colour, background Parchment, ink text. Inactive: transparent background, Warm Tone 1 text.

Tab 1 — accent Amber #C4722A:
Label: "Warm Band" | Temp: "37–38 °C"

Tab 2 — accent Stone Dark #A89880:
Label: "Cooling Band" | Temp: "30–32 °C"

Tab 3 — accent Warm Tone 2 #A08050:
Label: "Neutral Band" | Temp: "34–35 °C"

ACTIVE STATE PANEL (two columns):
Left (Parchment Mid bg, borderRadius 18px, border 1px Parchment Dark, centred):
- Braid band SVG at scale 0.82 using selected strap colour and active thermal state
- Temperature badge (Parchment bg, border accent colour, borderRadius 20, coloured dot + temp text)
- Pod description badge (italic, Parchment bg, border Parchment Dark)

Right (text):
State label (22px serif, accent colour, fontWeight 400)
Subtitle (10px, Warm Tone 1, italic)
Body (13px, Ink, lineHeight 1.9)

WARM STATE content:
Subtitle: "Balanced — or entering high capacity"
Pod badge: "Glows amber-gold. Steady and alive."
Body: "Your energy is strong and building. The band feels gently warm — like holding a cup of tea against your wrist. This is your signal that your brain is firing well and you're ready for focused work, important conversations, or decisions that matter."

COOLING STATE content:
Subtitle: "Cognitive depletion beginning"
Pod badge: "Dims to muted stone. Quieting down."
Body: "Your energy is starting to slip. The band feels subtly cooler than your skin — like a light breeze settling on your wrist. This is an early signal, not a crisis. Time to pause, take one breath, or close a thought loop before it becomes harder."

NEUTRAL STATE content:
Subtitle: "No strong shift detected"
Pod badge: "Holds warm sand. Still and steady."
Body: "Your energy is neither building nor draining — it's simply resting. The band matches your skin temperature so precisely you barely notice it. A stable, unhurried state. Good for reflection, light reading, or just being present."

THERMAL LANGUAGE STRIP (below tab panel, separated by 1px Parchment Dark border, margin-top 36px):
Label: "THERMAL LANGUAGE" — 9px letterSpacing 3px Warm Tone 1 sans-serif
Four pill chips (borderRadius 20px, padding 7px 16px, flex row wrap gap 8px):
Chip 1: bg #C4722A1A, border #C4722A — "Warm + Steady" / "Balanced"
Chip 2: bg #8A4E1A1A, border #8A4E1A — "Heating" / "Drive Overload"
Chip 3: bg #A898801A, border #A89880 — "Cooling" / "Energy Leaking"
Chip 4: bg #2E201018, border #3E3018 — "Cold + Still" / "Rest Now"
Each chip: upper text 11px sans-serif in border colour, lower text 8px Warm Tone 1 sans-serif

---

FOOTER
Border top 1px Parchment Dark. Padding 16px 32px. Parchment background. Flex row space-between.
Left: flame icon (size 20) + "NADI" in 10px letterSpacing 4px Ink sans-serif
Right: "Feel your energy." in 10px Warm Tone 1 italic

---

BRAID BAND COMPONENT SPECIFICATION
Width 500px (scales by multiplier). Height 80px. Background: selected strap colour pill (borderRadius full, shadow: 0 3px 5px Ink 28% opacity).

THREE WOVEN STRANDS clipped inside the pill:
Strand 1 — Amber (#C4722A): sinusoidal path, phase 0, amplitude 13px, 6 full cycles, strokeWidth 8px
Strand 2 — Gold (#D4A847): phase 2π/3, strokeWidth 9px
Strand 3 — Warm Stone (#C9B8A0): phase 4π/3, strokeWidth 8px

Each strand: shadow stroke (colour + 5px wider, 50% opacity) drawn first, then base colour stroke on top, then a subtle dashed highlight stroke (2.5px, 36% opacity, dasharray 3 9) offset 2px upward.

Over/under weave: strand with smallest Y value (highest on screen) at each x position draws on top. All others draw behind. This creates true over-under weave appearance.

Left and right 68px: gradient fade from strap colour to transparent (to simulate band wrapping around wrist).

Two clasp ends (left and right): 16×(H-32)px rectangles, Ink Light fill, Warm Tone 1 stroke, 3 small pin holes.

THE SEAT (centre pod):
Outer ellipse: 27×22px, Ink Light fill, 1.5px Warm Tone 1 stroke
Inner ellipse: 20×16px, Ink fill, 0.8px Amber Dark stroke
Animated ring circle: radius 14px, filled in thermal colour at 18% opacity, breathing animation
Core orb: radius 9px, radial gradient (Gold Light → thermal colour → Amber Dark), breathing animation
Specular: small white ellipse top-left at 28% opacity

Capture button (right of pod):
12×12px rectangle, borderRadius 4px, Ink Light fill, Warm Tone 2 stroke
Inner circle: radius 3px, Amber Dark fill, 72% opacity

THERMAL STATE → POD APPEARANCE:
Warm state: core colour Amber, ring Gold Light — faster breathing
Cool state: core colour Warm Stone, ring Stone Dark — slower breathing
Neutral state: core colour Warm Tone 2, ring Warm Tone 3 — medium breathing

BREATHING ANIMATION: transform scale oscillates between 1.0 and 1.13, opacity between 0.72 and 1.0, duration 2.8s, ease-in-out, infinite loop.

---

INTERACTIONS REQUIRED:
1. Clicking a colour card selects that strap — the live band preview in Section 7 AND the band renders in Section 8 both update to use the new strap colour. Selected card shows amber border and "SELECTED ✓" label.
2. Clicking a state tab in Section 8 switches the active state panel content (band render + text) with a smooth fade.
3. The band pod core has a continuous breathing pulse animation always running.
4. Hover on colour cards: translateY(-2px), amber glow shadow.
5. Hover on state tabs: subtle amber background tint.

---

FONT USAGE SUMMARY:
- All headings and body paragraphs: Georgia or equivalent warm serif
- All labels (SMALL CAPS style), captions, badges, UI metadata: system sans-serif or monospace
- All italic text: serif italic
- No Inter, Roboto, Space Grotesk, or system UI fonts as primary text

---

END OF PROMPT