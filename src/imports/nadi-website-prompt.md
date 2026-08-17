NADI — FIGMA MAKE PROMPT (FINAL — EXACT MATCH)
================================================
Copy everything below this line exactly.
------------------------------------------------

Build a single-page scrolling website for NADI, a cognitive energy wristband. Match every detail below precisely — colours, fonts, spacing, content, interactions, and animations.

=============================================
FONTS — import from Google Fonts
=============================================
- Cormorant Garamond: italic weights 300, 400, 500 — used for ALL body text, headings, manifesto
- IM Fell English: italic — used for tagline and waitlist subline
- Josefin Sans: weights 100, 200, 300 — used for ALL labels, captions, UI text, nav, buttons

=============================================
COLOUR SYSTEM — strict, no other colours
=============================================
--parchment:        #F5F0EB  (page background throughout)
--parchment-mid:    #EDE5D8  (card/panel backgrounds)
--parchment-dark:   #DDD0BC  (borders, dividers)
--ink:              #1E1508  (primary dark — warm near-black, NOT blue-black)
--ink-mid:          #2E2010
--ink-light:        #3E3018
--terracotta:       #C4722A  (primary accent, NADI brand colour)
--terracotta-deep:  #9A4E18
--terracotta-light: #E09050
--gold:             #D4A847
--gold-light:       #ECC870
--warm-tone-1:      #6A5030  (muted body text)
--warm-tone-2:      #A08050  (secondary text)
--warm-tone-3:      #C8A870  (tertiary text on dark)
--stone:            #C9B8A0

Page background: #F5F0EB throughout all light sections.
Add a fixed noise texture overlay on body using SVG fractalNoise, baseFrequency 0.9, opacity 0.4, pointer-events none, z-index 9999.

=============================================
ANIMATIONS — global
=============================================
floatLogo: translateY 0px → -8px → 0px, 4s ease-in-out infinite
fadeUp: opacity 0 + translateY(20px) → opacity 1 + translateY(0), 1.2s ease forwards
panelFade: opacity 0 + translateY(8px) → opacity 1 + translateY(0), 0.4s ease
breathe: scale 1.0→1.13, opacity 0.72→1.0, ease-in-out infinite
  - .pod-core: 2.8s, no delay
  - .pod-ring: 2.8s, delay -1.4s
  - .pod-core-fast: 1.8s, no delay
  - .pod-ring-fast: 1.8s, delay -0.9s
  - .pod-core-slow: 4s, no delay
  - .pod-ring-slow: 4s, delay -2s

=============================================
REUSABLE DIVIDER COMPONENT
=============================================
Full-width. Top and bottom margin 52px.
1px horizontal line in #DDD0BC.
Centred on the line: a single 6px circle dot in #C9B8A0.

=============================================
SECTION 1 — STICKY NAVBAR
=============================================
Background: #1E1508. Height: 52px. Position: sticky top 0. z-index 100.
Border-bottom: 1px solid #3E3018.
Padding: 0 32px.
Left side only — flex row, align-items center, gap 12px:

LOGO SVG (28×28px, viewBox 0 0 120 120):
  Background tile: rect 120×120 rx=26, linearGradient from #C4722A to #8A4E1A (top-left to bottom-right)
  Warm glow ellipse: cx=60 cy=76 rx=22 ry=12, fill rgba(180,60,20,0.45)
  Outer flame path: "M60 25 C60 25 38 55 38 72 C38 85 48 95 60 95 C72 95 82 85 82 72 C82 55 60 25 60 25Z"
    radialGradient cx=50% cy=60% r=50%: #F0C84A opacity 0.9 → #E09050 opacity 0.8 → #8A4E1A opacity 0.6
  Mid flame path: "M60 38 C60 38 44 60 44 73 C44 83 51 90 60 90 C69 90 76 83 76 73 C76 60 60 38 60 38Z"
    radialGradient cx=50% cy=55%: #ECC870 opacity 0.95 → #D4A847 opacity 0.7 → #C4722A opacity 0.5
  Inner flame path: "M60 52 C60 52 50 66 50 74 C50 80 54 86 60 86 C66 86 70 80 70 74 C70 66 60 52 60 52Z"
    radialGradient cx=50% cy=50%: #FFFBE8 opacity 1 → #F0C84A opacity 0.9 → #D4A847 opacity 0.7
  Top dot circle: cx=60 cy=32 r=4, radialGradient #FFFBE8 → #ECC870

NADI text: Josefin Sans weight 200, 13px, letter-spacing 6px, color #E09050

=============================================
SECTION 2 — HERO
=============================================
min-height: 100vh. Flex column, align-items center, justify-content center.
Padding: 80px 32px 60px. Text-align center. Position relative.

Ambient glow div: position absolute, 480×480px, radial-gradient ellipse rgba(196,114,42,0.12) → transparent 70%, top 50% left 50%, translate -50% -55%.

HERO LOGO (120×120px, viewBox 0 0 200 200) — floatLogo animation, marginBottom 32px, drop-shadow(0 12px 32px rgba(196,114,42,0.35)):
  Background tile: rect 200×200 rx=42, linearGradient #CE7E35 → #8A4E1A
  Warm glow ellipse: cx=100 cy=130 rx=50 ry=22, fill rgba(180,60,20,0.35)
  Outer petal: "M100 30 C100 30 58 82 58 118 C58 145 76 168 100 168 C124 168 142 145 142 118 C142 82 100 30 100 30Z"
    radialGradient cx=50% cy=65%: #F0C84A 0.7 → #C4722A 0.75 → #7A3810 0.9
  Mid petal: "M100 52 C100 52 68 94 68 120 C68 142 82 158 100 158 C118 158 132 142 132 120 C132 94 100 52 100 52Z"
    radialGradient cx=50% cy=60%: #F5D870 0.85 → #D4A847 0.8 → #C4722A 0.7
  Inner petal: "M100 74 C100 74 80 106 80 122 C80 138 89 150 100 150 C111 150 120 138 120 122 C120 106 100 74 100 74Z"
    radialGradient cx=50% cy=55%: #FFFBE8 1.0 → #F0D060 0.95 → #D4A847 0.8
  Core highlight ellipse: cx=100 cy=118 rx=12 ry=18, radialGradient #FFFFFF 0.6 → #F0C84A 0
  NO top dot circle on the hero logo.

NADI heading: Josefin Sans weight 100, 52px, letter-spacing 18px, color #C4722A.
  fadeUp animation, opacity 0 start, delay 0.3s.

Tagline: IM Fell English italic, 16px, letter-spacing 2px, color #A08050, marginBottom 52px.
  Text: "feel your energy"
  fadeUp animation, opacity 0 start, delay 0.6s.

Divider line: 1px wide × 60px tall, linearGradient top #DDD0BC → transparent. Margin auto.
  fadeUp animation, delay 0.9s.

[DIVIDER]

=============================================
SECTION 3 — MANIFESTO
=============================================
Max-width 680px, margin 0 auto, padding 0 32px 60px. Text-align center.

Opening paragraph: Cormorant Garamond 28px weight 300, line-height 1.55, color #1E1508, marginBottom 36px, letter-spacing 0.3px:
  "Ancient wisdom always knew —
  your body was never broken.
  It was always communicating."

Body paragraph 1: Cormorant Garamond 15px weight 300, line-height 2, color #6A5030, marginBottom 28px:
  "In Sanskrit, [em]Nadi[/em] means channel. The path through which your life force moves. Your energy doesn't hide — it flows. It just needs to be heard."
  [em] tag: color #C4722A, italic

Body paragraph 2: same style:
  "NADI reads what your body has always been saying — and whispers it back. Not in numbers. Not in alerts. In the oldest language there is. The one your skin never forgot."

Rhythm line: Josefin Sans weight 200, 20px, letter-spacing 10px, color #1E1508, margin 40px 0. Flex row justify-center gap 20px.
  Three spans: "Push."  "Pause."  "Rest."
  On hover each span: a 1px terracotta underline animates from width 0 to 100%, 0.4s ease.

Closing paragraph: Cormorant Garamond 14px italic, line-height 1.95, color #6A5030. Border-top 1px #DDD0BC, padding-top 32px, margin-top 32px:
  "We didn't build a smarter watch.
  [strong]We remembered what the body always knew[/strong] —
  and built the first wearable your body would have designed for itself."
  [strong]: color #9A4E18, not italic, weight 400

[DIVIDER]

=============================================
SECTION 4 — SCIENCE STRIP (dark)
=============================================
Background #1E1508. Padding 60px 32px.
Inner max-width 900px, margin auto. CSS grid 3 equal columns, gap 40px.

Card 1 — border-top 2px #C4722A:
  Number: Josefin Sans weight 100, 36px, color #E09050, letter-spacing 2px, marginBottom 8px: "100"
  Label: Josefin Sans 9px letter-spacing 3px color #C8A870 uppercase marginBottom 12px: "Small decisions"
  Desc: 12px line-height 1.85 color #A08050: "Can drain your prefrontal cortex more than one major decision. Decision load — not difficulty — is the primary driver of cognitive depletion."

Card 2 — border-top 2px #D4A847:
  Number color #ECC870: "35,000"
  Label: "Daily decisions"
  Desc: "The average adult makes 35,000 choices per day. Most are invisible — and collectively, they silently bankrupt your cognitive reserves by afternoon."

Card 3 — border-top 2px #C9B8A0:
  Number color #C9B8A0: "0"
  Label: "Tools that sense it"
  Desc: "Existing wearables track time spent. None track cognitive capacity remaining — the metric that actually determines the quality of everything you do."

[DIVIDER]

=============================================
SECTION 5 — COLOUR PICKER (interactive)
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.

Label (9px Josefin Sans letter-spacing 4px color #A08050 uppercase marginBottom 12px): "CHOOSE YOUR COLOUR"
Heading (32px Cormorant Garamond weight 300 color #1E1508 marginBottom 8px): "Three colours. Three personalities."
Sub (13px italic color #6A5030 line-height 1.75 marginBottom 40px):
  "The channels stay the same in every band. What you choose is the base that carries them."

THREE COLOUR CARDS — CSS grid 3 columns gap 14px, marginBottom 40px.
Each card: background #F5F0EB, border-radius 16px, padding 18px 16px, border 1.5px #DDD0BC, cursor pointer.
Hover: translateY(-2px), box-shadow 0 8px 24px rgba(196,114,42,0.12).
Active/selected: border 1.5px #C4722A, box-shadow 0 0 0 3px rgba(196,114,42,0.12).

Card 1 (default selected):
  Swatch: 40×40px borderRadius 10px background #C9B8A0, marginBottom 12px, border 1px rgba(0,0,0,0.08)
  Name (13px Cormorant Garamond weight 400 color #1E1508 marginBottom 4px): "Warm Stone"
  Personality (12px italic color #C4722A marginBottom 10px): "The quiet one."
  Desc (10px Josefin Sans weight 200 line-height 1.72 color #6A5030):
    "You don't need the band to say anything — you already know. Warm Stone blends into any outfit, any occasion, any mood. Wear it and forget it's there."
  Selected label (8px Josefin Sans letter-spacing 1px color #C4722A hidden unless active): "SELECTED ✓"

Card 2:
  Swatch background #2A2018
  Name: "Warm Charcoal"
  Personality: "The composed one."
  Desc: "Understated but intentional. Warm Charcoal makes the amber and gold channels glow by contrast — the more you look, the more you see. Works with everything."

Card 3:
  Swatch background #E0CBA8
  Name: "Natural Sand"
  Personality: "The open one."
  Desc: "Light, easy, and at home anywhere. Natural Sand sits closest to skin — the band seems to grow from the wrist rather than sit on it. A soft, open presence."

LIVE BAND PREVIEW BOX (below cards):
Background #EDE5D8, border-radius 18px, border 1px #DDD0BC, padding 32px 24px, flex column align-items center gap 16px.

Preview label (9px Josefin Sans letter-spacing 3px color #A08050 uppercase): "[SELECTED NAME] — NEUTRAL STATE"

BAND SVG (480×72px) — see BAND COMPONENT SPEC below. Uses selected strap colour. Pod in neutral state.

Caption (10px italic color #A08050 text-align center max-width 360px line-height 1.6):
  "The braid always carries the same three channels. Only the base changes."

INTERACTION: Clicking a colour card → updates active card border/selected label → updates preview band label and strap fill colour.

[DIVIDER]

=============================================
SECTION 6 — WHY THE BRAID (dark panel, text only)
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.

Dark panel: background #1E1508, border-radius 20px, padding 32px 36px. No illustration.

Label (9px Josefin Sans letter-spacing 4px color #A08050 uppercase marginBottom 12px): "WHY THE BRAID"
Body text (13px Cormorant Garamond weight 300 line-height 1.85 color #C9B8A0):
  "When three things are woven together, they hold what a single strand cannot. The braid keeps each channel distinct while binding them into one — so the energy carried in each strand stays within the whole, rather than dispersing outward. This is not decoration. It is how the band works."

[DIVIDER]

=============================================
SECTION 7 — THREE CHANNELS (dark panel)
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.

Label (9px Josefin Sans letter-spacing 4px color #C8A870 uppercase marginBottom 12px): "THE THREE CHANNELS"
Heading (32px Cormorant Garamond weight 300 color #1E1508 marginBottom 28px): "Woven. Not separate."

Dark panel: background #1E1508, border-radius 18px, padding 28px 32px. CSS grid 3 equal columns gap 32px.

Column 1 — border-top 2px #C4722A, padding-top 18px:
  Colour bar: 24×3px borderRadius 2 background #C4722A, marginBottom 12px
  Title (13px Cormorant Garamond color #F5F0EB weight 400 marginBottom 4px): "Drive Channel"
  Subtitle (9px Josefin Sans italic color #C8A870 letter-spacing 0.5px marginBottom 12px): "Active · Solar"
  Body (10px Josefin Sans weight 200 line-height 1.75 color #A08050):
    "The strand that heats. When your brain is in full gear — making decisions, processing fast, under pressure — Drive brightens. High Drive is useful. Sustained high Drive without rest is the first sign of overload."

Column 2 — border-top 2px #D4A847:
  Bar background #D4A847
  Title: "Balance Channel"
  Subtitle: "Central · Integration"
  Body: "When Drive and Rest find equilibrium, Balance illuminates fully. This is your flow state — effortless, clear, unhurried. The entire purpose of the band is to help you find and hold this channel."

Column 3 — border-top 2px #C9B8A0:
  Bar background #C9B8A0
  Title: "Rest Channel"
  Subtitle: "Receptive · Lunar"
  Body: "The strand that receives. High Rest means your nervous system is recovering — taking in rather than pushing out. When this channel fades, your reserves are emptying."

[DIVIDER]

=============================================
SECTION 8 — WHAT NADI SAYS (interactive tabs)
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.

Label: "THE THREE STATES"
Heading (32px Cormorant Garamond weight 300 color #1E1508 marginBottom 8px): "What NADI says on your wrist."
Sub (13px italic color #6A5030 line-height 1.75 marginBottom 40px):
  "The band never uses words or numbers. It speaks in temperature — the same language your body already uses."

TAB ROW — flex row, border-bottom 1px #DDD0BC, margin-bottom 0.
Each tab: padding 14px 28px, cursor pointer, border-bottom 2.5px transparent (margin-bottom -1px), flex row align-items center gap 8px. Josefin Sans weight 200 12px letter-spacing 2px color #A08050. Hover: background rgba(196,114,42,0.04).
Active tab: border-bottom 2.5px in accent colour, color #1E1508, background #F5F0EB.

Tab 1 (accent #C4722A): 8px dot #C4722A + "Warm Band" + "37–38 °C" in 9px
Tab 2 (accent #A89880): 8px dot #A89880 + "Cooling Band" + "30–32 °C"
Tab 3 (accent #A08050): 8px dot #A08050 + "Neutral Band" + "34–35 °C"

STATE PANELS — hidden by default, visible one at a time with panelFade animation (0.4s).
Layout: CSS grid 2 columns (1fr 1.4fr), gap 40px, padding 40px.
Background #EDE5D8, border 1px #DDD0BC, border-top none, border-radius 0 0 20px 20px.

LEFT COLUMN (all panels):
  Band container: background #F5F0EB, border-radius 16px, border 1px #DDD0BC, padding 24px 16px, centered.
    → BAND SVG 260×60 (see BAND COMPONENT SPEC) in the panel's thermal state.
  Temp badge: flex row gap 6px, background #F5F0EB, border 1px #DDD0BC, border-radius 20px, padding 6px 14px.
    Josefin Sans 11px letter-spacing 2px color #6A5030. Coloured 8px dot + temp text.
  Pod badge: 11px italic color #A08050, background #F5F0EB, border 1px #DDD0BC, border-radius 8px, padding 6px 12px, text-align center.

RIGHT COLUMN:
  State label: 26px Cormorant Garamond weight 300 in accent colour, marginBottom 6px
  Subtitle: 11px italic color #6A5030, marginBottom 20px
  Body: 14px Cormorant Garamond weight 300 line-height 1.95 color #1E1508

PANEL 1 — WARM (default visible):
  Label colour #C4722A: "Warm Band"
  Subtitle: "Balanced — or entering high capacity"
  Pod badge: "Glows amber-gold. Steady and alive."
  Temp: 37–38 °C
  Body: "Your cognitive energy is strong and building. The band feels gently warm — like holding a cup of tea against your wrist. This is your signal that your prefrontal cortex is firing well and you're ready for focused work, important conversations, or decisions that matter."

PANEL 2 — COOLING:
  Label colour #A89880: "Cooling Band"
  Subtitle: "Cognitive depletion beginning"
  Pod badge: "Dims to muted stone. Quieting down."
  Temp: 30–32 °C
  Body: "Your cognitive energy is starting to slip. The band feels subtly cooler than your skin — like a light breeze settling on your wrist. This is an early signal, not a crisis. Time to pause, take one breath, or close a thought loop before it becomes harder to recover from."

PANEL 3 — NEUTRAL:
  Label colour #A08050: "Neutral Band"
  Subtitle: "No strong shift detected"
  Pod badge: "Holds warm sand. Still and steady."
  Temp: 34–35 °C
  Body: "Your cognitive energy is neither building nor draining — it's simply resting. The band matches your skin temperature so precisely you barely notice it. A stable, unhurried state. Good for reflection, light reading, or just being present."

THERMAL LANGUAGE STRIP (below panels):
Border-top 1px #DDD0BC, padding-top 28px, margin-top 32px.
Label: Josefin Sans 9px letter-spacing 3px color #A08050 uppercase marginBottom 14px: "THERMAL LANGUAGE"
Four pill chips — flex row wrap gap 8px. Each chip: border-radius 20px, padding 7px 16px, flex column gap 1px.
  Chip 1: bg rgba(196,114,42,0.10) border 1px #C4722A — main "Warm + Steady" color #C4722A / sub "Balanced"
  Chip 2: bg rgba(138,78,26,0.10) border 1px #8A4E1A — main "Heating" color #8A4E1A / sub "Drive Overload"
  Chip 3: bg rgba(168,152,128,0.10) border 1px #A89880 — main "Cooling" color #A89880 / sub "Energy Leaking"
  Chip 4: bg rgba(46,32,16,0.08) border 1px #3E3018 — main "Cold + Still" color #3E3018 / sub "Rest Now"
  Main text: 11px Josefin Sans weight 200 letter-spacing 1px
  Sub text: 8px Josefin Sans letter-spacing 1px color #A08050

[DIVIDER]

=============================================
SECTION 9 — THE SEAT
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.
CSS grid 2 columns (260px 1fr) gap 48px, align-items start.

LEFT — Visual panel:
Background #EDE5D8, border-radius 18px, border 1px #DDD0BC, padding 32px 20px, centered.
SVG 220×110px viewBox 0 0 220 110:
  Left strap stub: rect x=0 y=38 width=80 height=34 rx=17, linearGradient left-to-right #C9B8A0 opacity 0 → opacity 0.6
  Right strap stub: rect x=140 y=38 width=80 height=34 rx=17, linearGradient left-to-right #C9B8A0 opacity 0.6 → opacity 0
  Outer pod ellipse: cx=110 cy=55 rx=34 ry=28, fill #2E2010 stroke #6A5030 1.5px
  Inner pod ellipse: cx=110 cy=55 rx=26 ry=20, fill #1E1508 stroke #8A4E1A 1px
  Breathing ring: circle cx=110 cy=55 r=22, fill #C4722A opacity 0.18, pod-ring-fast animation
  Core orb: circle cx=110 cy=55 r=14, radialGradient #ECC870 → #C4722A → #8A4E1A, pod-core-fast animation
  Specular ellipse: cx=104 cy=48 rx=5 ry=3, fill white opacity 0.28
  Capture button rect: x=146 y=47 width=14 height=16 rx=3, fill #3E3018 stroke #A08050 0.8px
  Button inner circle: cx=153 cy=55 r=4, fill #8A4E1A opacity 0.72
  Annotation line to pod: x1=110 y1=27 x2=110 y2=15, stroke #A08050 0.8px dasharray 3 3
  Annotation text "THE SEAT": x=110 y=10, text-anchor middle, Josefin Sans 7px fill #A08050 letter-spacing 1
  Annotation line to button: x1=153 y1=44 x2=170 y2=22, stroke #A08050 0.8px dasharray 3 3
  Annotation text "CAPTURE": x=174 y=18, text-anchor start, Josefin Sans 7px fill #A08050 letter-spacing 1

RIGHT — Text:
Label: "THE CONVERGENCE POINT"
Heading: "The Seat"
Para 1 (13px Cormorant weight 300 line-height 1.85 color #6A5030 marginBottom 16px):
  "Where all three strands meet, the band holds its most important component. We call it The Seat — the central point where sensing, processing, and output converge."
Para 2 (same style):
  "Physiologically, The Seat houses the heart rate sensor, the skin conductance sensor, the temperature reader, and the thermal actuator — the element that emits warmth or coolness back into your wrist. The glowing core you see is a real-time readout of what The Seat is currently doing to your skin."
Callout box (border-left 2px #C4722A, padding-left 14px, margin-top 20px):
  Label (9px Josefin Sans letter-spacing 2px color #C4722A display block marginBottom 8px): "THE NAME"
  Body (11px Cormorant italic line-height 1.72 color #6A5030):
    "In autonomic physiology, the body's regulatory centre is described as the place where all incoming signals are received and all outgoing responses originate. In contemplative tradition, the same concept is expressed as the point where energy gathers before moving outward. The Seat holds both meanings at once."

[DIVIDER]

=============================================
SECTION 10 — CAPTURE BUTTON
=============================================
Max-width 900px, margin auto, padding 0 32px 60px.
CSS grid 2 columns (1fr 280px) gap 48px, align-items start.

LEFT — Steps column:
Label: "THE CAPTURE BUTTON"
Heading: "Press. Speak. Let go."

Four steps — vertical layout. Between each step: a 1px vertical connector line 20px tall, margin-left 15px.
Each step: flex row gap 16px align-items flex-start.

Step number circle: 30×30px border-radius 50%.
  Step 01: background #C4722A border #C4722A, text color #F5F0EB — "01"
  Steps 02–04: background #EDE5D8 border 1px #DDD0BC, text color #A08050

Step title (13px Cormorant weight 400 color #1E1508 marginBottom 4px)
Step detail (11px Josefin Sans weight 200 line-height 1.72 color #6A5030)

Step 01 — Title: "Press and hold"
  Detail: "Press the small button on the right side of The Seat. The core dims slightly to show it's listening. No need to unlock your phone."
Step 02 — Title: "Speak freely"
  Detail: "Say anything — a task, a worry, an idea, a question. It doesn't need to be structured. Messy is fine. Half-formed is fine. Three words or three sentences."
Step 03 — Title: "Release"
  Detail: "Let go of the button. The band gives one gentle pulse to confirm. Your thought is held. Nothing else happens now."
Step 04 — Title: "It comes back at the right moment"
  Detail: "When your energy is balanced and you have a clear window, NADI resurfaces what you captured — with the context of when you said it and why it matters now."

RIGHT — Capture panel:
Background #EDE5D8, border-radius 16px, border 1px #DDD0BC, padding 24px 20px, flex column align-items center gap 16px, text-align center.
Label: "THE BUTTON"

SVG 130×130px viewBox 0 0 130 130:
  Outer pod ellipse: cx=65 cy=65 rx=36 ry=30, fill #2E2010 stroke #6A5030 1.5px
  Inner ellipse: cx=65 cy=65 rx=28 ry=22, fill #1E1508 stroke #8A4E1A 1px
  Ring: circle cx=65 cy=65 r=25, fill #C4722A opacity 0.15, pod-ring-fast
  Core: circle cx=65 cy=65 r=16, radialGradient #ECC870 → #C4722A → #8A4E1A, pod-core-fast
  Specular: ellipse cx=59 cy=58 rx=5 ry=3 fill white opacity 0.28
  Button highlighted: rect x=96 y=56 width=16 height=18 rx=4, fill #3E3018 stroke #C4722A 1.5px
  Button glow ring: circle cx=104 cy=65 r=5, fill radialGradient #C4722A 0.4→0, pod-ring-fast
  Button core: circle cx=104 cy=65 r=4, fill #C4722A opacity 0.85, pod-core-fast
  Press annotation line: x1=104 y1=52 x2=104 y2=38, stroke #C4722A 0.8px dasharray 3 3
  Press text: "press" x=104 y=33 text-anchor middle Josefin Sans 8px fill #C4722A letter-spacing 1

Three lines below SVG (10px Josefin Sans color #6A5030 letter-spacing 0.5px, flex column gap 4px):
  "Hardware-gated."
  "Never listens passively."
  "Only activates on press."

[DIVIDER]

=============================================
SECTION 11 — WAITLIST / EARLY ACCESS (dark)
=============================================
Background #1E1508. Padding 100px 32px. Text-align center. Position relative. Overflow hidden.

Ambient glow: position absolute, 600×600px, radial-gradient ellipse rgba(196,114,42,0.10) → transparent 68%, top 50% left 50%, translate -50% -50%.

Inner container: position relative z-index 1, max-width 520px, margin auto, flex column align-items center.

LOGO SVG 52×52px (same as hero logo, NO top dot circle) — floatLogo animation, marginBottom 28px, drop-shadow(0 8px 24px rgba(196,114,42,0.3))

Eyebrow (9px Josefin Sans weight 200 letter-spacing 5px color #E09050 uppercase marginBottom 20px): "Early Access"

Heading (38px Cormorant Garamond weight 300 color #F5F0EB marginBottom 20px line-height 1.2 letter-spacing 0.3px):
  "NADI is in prototype."

Subline (IM Fell English italic 16px line-height 1.85 color #C8A870 marginBottom 36px):
  "We're inviting the first 100 people
  who trust their body more than their calendar."

Thin vertical line: 1px × 40px, linearGradient top #3E3018 → transparent, margin 0 auto 36px.

EMAIL FORM (flex row, max-width 380px, marginBottom 20px):
  Container: border 1px #3E3018, border-radius 40px, overflow hidden, background #2E2010.
  Focus-within: border-color #C4722A, box-shadow 0 0 0 3px rgba(196,114,42,0.12).
  Input: flex 1, background transparent, border none, outline none, padding 14px 20px.
    Josefin Sans 12px weight 200 letter-spacing 1px color #F5F0EB.
    Placeholder: color #6A5030 letter-spacing 1px, text "your@email.com"
  Button: background #C4722A, border none, padding 14px 22px, flex row gap 8px.
    Hover: background #E09050.
    Label text: Josefin Sans 11px weight 200 letter-spacing 2px color #F5F0EB: "I'm ready"
    Arrow: "→" color #F5F0EB 14px

CONFIRMATION STATE (hidden until submit, then replaces form with fadeUp animation):
  Gold star glyph "✦" 20px color #ECC870, breathe animation
  Text (16px Cormorant weight 300 color #F5F0EB line-height 1.7 text-align center):
    "You're on the list."
    span (13px italic color #C8A870): "We'll reach out when your band is ready."

SUBMIT BEHAVIOUR: validate email contains "@". If valid → hide form → show confirmation. Enter key also triggers submit.

Note text (9px Josefin Sans letter-spacing 1.5px color #A08050 marginBottom 52px):
  "No noise. No newsletters. Just one message — when it's time."

Closing text (20px Cormorant Garamond weight 300 color #A08050 line-height 1.7, border-top 1px #2E2010, padding-top 40px, width 100% text-align center):
  "Your body speaks all day.
  [em]NADI just makes sure you hear it.[/em]"
  [em]: color #E09050, italic

[DIVIDER]

=============================================
FOOTER
=============================================
Border-top 1px #DDD0BC. Padding 20px 32px. Background #F5F0EB. Flex row space-between align-items center.

Left — flex row gap 10px align-items center:
  Footer logo SVG 20×20px (same flame logo, small)
  "NADI" — Josefin Sans weight 200, 10px, letter-spacing 4px, color #1E1508

Right:
  "Feel your energy." — Cormorant Garamond italic 11px color #A08050

=============================================
BAND COMPONENT SPECIFICATION
(Used in colour picker preview + three states section)
=============================================
Width: 260px in states section, 480px in colour picker preview. Height proportional.
ViewBox 0 0 260 60 (states) / 0 0 480 72 (preview).

Strap base: rect full width height, rx=30, fill linearGradient horizontal — selected strap colour opacity 0 at 0% → full opacity at 20% → full opacity at 80% → opacity 0 at 100%. Stroke #A89880 0.5px.

THREE WOVEN STRANDS inside clipPath matching strap rect:
  Strand 1 AMBER (#C4722A): sinusoidal path top-arc (peaks high)
    Shadow: same path, stroke #8A3A10 width 16 opacity 0.5
    Main: stroke #C4722A width 10
    Highlight: same path, stroke #E09050 width 3 opacity 0.45 dasharray 4 10
  Strand 2 GOLD (#D4A847): sinusoidal path bottom-arc (peaks low, inverse of amber)
    Shadow: stroke #7A5810 width 18 opacity 0.45
    Main: stroke #D4A847 width 11
    Highlight: stroke #ECC870 width 3 opacity 0.4 dasharray 4 10
  Strand 3 STONE (#C9B8A0): gentle horizontal undulating path
    Shadow: stroke #504030 width 12 opacity 0.5
    Main: stroke #C9B8A0 width 7 opacity 0.85

Left clasp: rect at left edge, height strap-height minus padding, rx 2.5, fill #2E2010 stroke #6A5030 0.8. Three pin circles fill #6A5030.
Right clasp: same mirrored.

THE SEAT POD (centred):
  Outer ellipse: rx~26 ry~21, fill #2E2010 stroke #6A5030 1.8px
  Inner ellipse: rx~19 ry~15, fill #1E1508 stroke #8A4E1A 1px
  Ring circle: radius ~17, fill thermal-colour opacity 0.18, breathing animation
  Core orb: radius ~11, radialGradient GoldLight → ThermalColour → AmberDark, breathing animation
  Specular ellipse: small, fill white opacity 0.28–0.30
  Capture button rect: right of pod, ~12×16px rx=3, fill #3E3018 stroke #A08050 0.8
  Button circle: fill #8A4E1A opacity 0.72

THERMAL STATE → POD:
  Warm: core #C4722A ring #ECC870, pod-core-fast + pod-ring-fast (1.8s)
  Cool: core #A89880 ring #C9B8A0, pod-core-slow + pod-ring-slow (4s)
  Neutral: core #A08050 ring #C8A870, pod-core + pod-ring (2.8s)

STRAP COLOUR per selection:
  Warm Stone: #C9B8A0
  Warm Charcoal: #2A2018
  Natural Sand: #E0CBA8

=============================================
INTERACTIONS SUMMARY
=============================================
1. Colour cards — click to select: updates active border/glow, shows "SELECTED ✓", updates preview band strap colour and label.
2. State tabs — click to switch: hides all panels, shows selected panel with panelFade animation, updates active tab border/colour.
3. Pod core — always breathing animation on all band renders.
4. Colour card hover — translateY(-2px) amber glow shadow.
5. State tab hover — subtle rgba(196,114,42,0.04) background.
6. Waitlist — email validation on submit, hide form, show confirmation.
7. Manifesto rhythm words — hover triggers terracotta underline grow animation.
8. Smooth scroll — html scroll-behavior smooth.

=============================================
FONT USAGE SUMMARY
=============================================
ALL headings, body, manifesto, closing text → Cormorant Garamond (serif)
ALL italic body text → Cormorant Garamond italic OR IM Fell English italic (tagline + waitlist sub only)
ALL labels, captions, tabs, chips, badges, nav, buttons → Josefin Sans
NO Inter, Roboto, Arial, or system fonts anywhere.

=============================================
END OF PROMPT
=============================================