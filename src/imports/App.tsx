import { useState } from 'react';
import { BraidBand } from './components/BraidBand';

// ── Colour system ────────────────────────────────────────────────────────────
const C = {
  parchment:      '#F5F0EB',
  parchmentMid:   '#EDE5D8',
  parchmentDark:  '#DDD0BC',
  ink:            '#1E1508',
  inkMid:         '#2E2010',
  inkLight:       '#3E3018',
  terracotta:     '#C4722A',
  terracottaDeep: '#9A4E18',
  terracottaLight:'#E09050',
  gold:           '#D4A847',
  goldLight:      '#ECC870',
  wt1:            '#6A5030',
  wt2:            '#A08050',
  wt3:            '#C8A870',
  stone:          '#C9B8A0',
  stoneDark:      '#A89880',
};

// ── Font constants ───────────────────────────────────────────────────────────
const CG  = "'Cormorant Garamond', serif";
const IMF = "'IM Fell English', serif";
const JS  = "'Josefin Sans', sans-serif";

// ── Data ─────────────────────────────────────────────────────────────────────
const STRAP_OPTIONS = [
  {
    name: 'Warm Stone',
    color: '#C9B8A0',
    personality: 'The quiet one.',
    desc: "You don't need the band to say anything — you already know. Warm Stone blends into any outfit, any occasion, any mood. Wear it and forget it's there.",
  },
  {
    name: 'Warm Charcoal',
    color: '#2A2018',
    personality: 'The composed one.',
    desc: 'Understated but intentional. Warm Charcoal makes the amber and gold channels glow by contrast — the more you look, the more you see. Works with everything.',
  },
  {
    name: 'Natural Sand',
    color: '#E0CBA8',
    personality: 'The open one.',
    desc: "Light, easy, and at home anywhere. Natural Sand sits closest to skin — the band seems to grow from the wrist rather than sit on it. A soft, open presence.",
  },
];

const THERMAL_TABS = [
  { label: 'Warm Band',    temp: '37–38 °C', accent: C.terracotta, thermalState: 'warm'    as const },
  { label: 'Cooling Band', temp: '30–32 °C', accent: C.stoneDark,  thermalState: 'cool'    as const },
  { label: 'Neutral Band', temp: '34–35 °C', accent: C.wt2,        thermalState: 'neutral' as const },
];

const STATE_CONTENT = {
  warm: {
    subtitle: 'Balanced — or entering high capacity',
    podBadge: 'Glows amber-gold. Steady and alive.',
    body: "Your cognitive energy is strong and building. The band feels gently warm — like holding a cup of tea against your wrist. This is your signal that your prefrontal cortex is firing well and you're ready for focused work, important conversations, or decisions that matter.",
  },
  cool: {
    subtitle: 'Cognitive depletion beginning',
    podBadge: 'Dims to muted stone. Quieting down.',
    body: "Your cognitive energy is starting to slip. The band feels subtly cooler than your skin — like a light breeze settling on your wrist. This is an early signal, not a crisis. Time to pause, take one breath, or close a thought loop before it becomes harder to recover from.",
  },
  neutral: {
    subtitle: 'No strong shift detected',
    podBadge: 'Holds warm sand. Still and steady.',
    body: "Your cognitive energy is neither building nor draining — it's simply resting. The band matches your skin temperature so precisely you barely notice it. A stable, unhurried state. Good for reflection, light reading, or just being present.",
  },
};

const CAPTURE_STEPS = [
  {
    num: '01', active: true,
    title: 'Press and hold',
    detail: "Press the small button on the right side of The Seat. The core dims slightly to show it's listening. No need to unlock your phone.",
  },
  {
    num: '02', active: false,
    title: 'Speak freely',
    detail: "Say anything — a task, a worry, an idea, a question. It doesn't need to be structured. Messy is fine. Half-formed is fine. Three words or three sentences.",
  },
  {
    num: '03', active: false,
    title: 'Release',
    detail: "Let go of the button. The band gives one gentle pulse to confirm. Your thought is held. Nothing else happens now.",
  },
  {
    num: '04', active: false,
    title: 'It comes back at the right moment',
    detail: "When your energy is balanced and you have a clear window, NADI resurfaces what you captured — with the context of when you said it and why it matters now.",
  },
];

// ── NADI Logo — exact three-petal flame on amber tile ────────────────────────
// Hero logo (uid="hero", uid="wait"): viewBox 0 0 200 200 — NO top dot
// Navbar / footer logo (uid="nav", uid="ft"): viewBox 0 0 120 120 — HAS top dot
// Each instance needs a unique `uid` string to avoid SVG gradient ID collisions.
function NadiLogo({ size, uid, variant = 'hero' }: { size: number; uid: string; variant?: 'hero' | 'nav' }) {
  if (variant === 'nav') {
    // ── Small logo (navbar + footer) — 120×120 viewBox, three flame layers + top dot ──
    return (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`${uid}tile`} x1="0" y1="0" x2="120" y2="120">
            <stop offset="0%"   stopColor="#C4722A"/>
            <stop offset="100%" stopColor="#8A4E1A"/>
          </linearGradient>
          <radialGradient id={`${uid}f1`} cx="50%" cy="60%" r="50%">
            <stop offset="0%"   stopColor="#F0C84A" stopOpacity="0.9"/>
            <stop offset="60%"  stopColor="#E09050" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#8A4E1A" stopOpacity="0.6"/>
          </radialGradient>
          <radialGradient id={`${uid}f2`} cx="50%" cy="55%" r="50%">
            <stop offset="0%"   stopColor="#ECC870" stopOpacity="0.95"/>
            <stop offset="70%"  stopColor="#D4A847" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#C4722A" stopOpacity="0.5"/>
          </radialGradient>
          <radialGradient id={`${uid}f3`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFFBE8" stopOpacity="1"/>
            <stop offset="50%"  stopColor="#F0C84A" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#D4A847" stopOpacity="0.7"/>
          </radialGradient>
          <radialGradient id={`${uid}dot`} cx="50%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#FFFBE8"/>
            <stop offset="100%" stopColor="#ECC870"/>
          </radialGradient>
        </defs>
        {/* Tile background — amber diagonal gradient */}
        <rect width="120" height="120" rx="26" fill={`url(#${uid}tile)`}/>
        {/* Warm glow base */}
        <ellipse cx="60" cy="76" rx="22" ry="12" fill="rgba(180,60,20,0.45)"/>
        {/* Outer flame petal */}
        <path d="M60 25 C60 25 38 55 38 72 C38 85 48 95 60 95 C72 95 82 85 82 72 C82 55 60 25 60 25Z"
              fill={`url(#${uid}f1)`}/>
        {/* Mid flame petal */}
        <path d="M60 38 C60 38 44 60 44 73 C44 83 51 90 60 90 C69 90 76 83 76 73 C76 60 60 38 60 38Z"
              fill={`url(#${uid}f2)`}/>
        {/* Inner flame petal */}
        <path d="M60 52 C60 52 50 66 50 74 C50 80 54 86 60 86 C66 86 70 80 70 74 C70 66 60 52 60 52Z"
              fill={`url(#${uid}f3)`}/>
        {/* Top dot — present on nav/footer logo */}
        <circle cx="60" cy="32" r="4" fill={`url(#${uid}dot)`}/>
      </svg>
    );
  }

  // ── Large logo (hero + waitlist) — 200×200 viewBox, three petals, NO top dot ──
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`${uid}tile`} x1="0" y1="0" x2="200" y2="200">
          <stop offset="0%"   stopColor="#CE7E35"/>
          <stop offset="100%" stopColor="#8A4E1A"/>
        </linearGradient>
        {/* Outer petal — deep amber-red */}
        <radialGradient id={`${uid}p1`} cx="50%" cy="65%" r="55%">
          <stop offset="0%"   stopColor="#F0C84A" stopOpacity="0.7"/>
          <stop offset="50%"  stopColor="#C4722A" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#7A3810" stopOpacity="0.9"/>
        </radialGradient>
        {/* Mid petal — warm amber-gold */}
        <radialGradient id={`${uid}p2`} cx="50%" cy="60%" r="55%">
          <stop offset="0%"   stopColor="#F5D870" stopOpacity="0.85"/>
          <stop offset="55%"  stopColor="#D4A847" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#C4722A" stopOpacity="0.7"/>
        </radialGradient>
        {/* Inner petal — bright gold */}
        <radialGradient id={`${uid}p3`} cx="50%" cy="55%" r="55%">
          <stop offset="0%"   stopColor="#FFFBE8" stopOpacity="1"/>
          <stop offset="40%"  stopColor="#F0D060" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#D4A847" stopOpacity="0.8"/>
        </radialGradient>
        {/* Core highlight */}
        <radialGradient id={`${uid}cg`} cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="#FFFFFF"  stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#F0C84A"  stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Tile background */}
      <rect width="200" height="200" rx="42" fill={`url(#${uid}tile)`}/>
      {/* Warm glow base beneath petals */}
      <ellipse cx="100" cy="130" rx="50" ry="22" fill="rgba(180,60,20,0.35)"/>
      {/* Outer petal — widest, deep amber-red */}
      <path d="M100 30 C100 30 58 82 58 118 C58 145 76 168 100 168 C124 168 142 145 142 118 C142 82 100 30 100 30Z"
            fill={`url(#${uid}p1)`}/>
      {/* Mid petal — warm amber-gold */}
      <path d="M100 52 C100 52 68 94 68 120 C68 142 82 158 100 158 C118 158 132 142 132 120 C132 94 100 52 100 52Z"
            fill={`url(#${uid}p2)`}/>
      {/* Inner petal — bright gold, narrowest */}
      <path d="M100 74 C100 74 80 106 80 122 C80 138 89 150 100 150 C111 150 120 138 120 122 C120 106 100 74 100 74Z"
            fill={`url(#${uid}p3)`}/>
      {/* Core highlight glow */}
      <ellipse cx="100" cy="118" rx="12" ry="18" fill={`url(#${uid}cg)`}/>
      {/* NO top dot on hero/waitlist logo */}
    </svg>
  );
}

// ── Section 9: Seat SVG illustration ─────────────────────────────────────────
function SeatSVG() {
  return (
    <svg width="220" height="110" viewBox="0 0 220 110" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="strapL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={C.stone} stopOpacity="0" />
          <stop offset="100%" stopColor={C.stone} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="strapR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={C.stone} stopOpacity="0.6" />
          <stop offset="100%" stopColor={C.stone} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="seatCore" cx="38%" cy="32%" r="62%">
          <stop offset="0%"   stopColor={C.goldLight} />
          <stop offset="50%"  stopColor={C.terracotta} />
          <stop offset="100%" stopColor={C.terracottaDeep} />
        </radialGradient>
        <style>{`
          .seatRing { animation: seatB 1.8s ease-in-out -0.9s infinite; transform-box: fill-box; transform-origin: center; }
          .seatCore { animation: seatB 1.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          @keyframes seatB { 0%,100%{transform:scale(1);opacity:0.72} 50%{transform:scale(1.13);opacity:1} }
        `}</style>
      </defs>
      <rect x="0"   y="38" width="80"  height="34" rx="17" fill="url(#strapL)" />
      <rect x="140" y="38" width="80"  height="34" rx="17" fill="url(#strapR)" />
      <g transform="translate(110,55)">
        <circle r="22" fill={C.terracotta} fillOpacity="0.15" className="seatRing" />
        <ellipse rx="34" ry="28" fill="#2A1E0C" stroke="#5A4828" strokeWidth="2" />
        <ellipse rx="26" ry="20" fill="#1E1508" stroke="#7A4818" strokeWidth="1.2" />
        <circle r="14" fill="url(#seatCore)" className="seatCore" />
        <ellipse rx="5" ry="3" cx="-5" cy="-4" fill="white" fillOpacity="0.30" />
        <rect x="36" y="-8" width="14" height="16" rx="3" fill="#2A1E0C" stroke="#8A7050" strokeWidth="0.8" />
        <circle cx="43" cy="0" r="4" fill="#6A4020" fillOpacity="0.72" />
      </g>
      <line x1="110" y1="27" x2="110" y2="15" stroke="#A08050" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="110" y="10" textAnchor="middle" fontSize="7" fill="#A08050" fontFamily={JS} letterSpacing="1">THE SEAT</text>
      <line x1="153" y1="44" x2="170" y2="22" stroke="#A08050" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="174" y="18" textAnchor="start" fontSize="7" fill="#A08050" fontFamily={JS} letterSpacing="1">CAPTURE</text>
    </svg>
  );
}

// ── Section 10: Capture button SVG ───────────────────────────────────────────
function CaptureSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id="capCore" cx="38%" cy="32%" r="62%">
          <stop offset="0%"   stopColor={C.goldLight} />
          <stop offset="50%"  stopColor={C.terracotta} />
          <stop offset="100%" stopColor={C.terracottaDeep} />
        </radialGradient>
        <style>{`
          .capRing { animation: capB 1.8s ease-in-out -0.9s infinite; transform-box: fill-box; transform-origin: center; }
          .capCore { animation: capB 1.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          @keyframes capB { 0%,100%{transform:scale(1);opacity:0.72} 50%{transform:scale(1.13);opacity:1} }
        `}</style>
      </defs>
      <ellipse cx="65" cy="65" rx="36" ry="30" fill="#2A1E0C" stroke="#5A4828" strokeWidth="2" />
      <ellipse cx="65" cy="65" rx="28" ry="22" fill="#1E1508" stroke="#7A4818" strokeWidth="1.2" />
      <circle  cx="65" cy="65" r="25" fill={C.terracotta} fillOpacity="0.14" className="capRing" />
      <circle  cx="65" cy="65" r="16" fill="url(#capCore)" className="capCore" />
      <ellipse cx="59" cy="58" rx="5" ry="3" fill="white" fillOpacity="0.30" />
      <rect x="96" y="56" width="16" height="18" rx="4" fill="#2A1E0C" stroke={C.terracotta} strokeWidth="1.5" />
      <circle cx="104" cy="65" r="4" fill={C.terracotta} fillOpacity="0.88" className="capCore" />
      <line x1="104" y1="52" x2="104" y2="38" stroke={C.terracotta} strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="104" y="33" textAnchor="middle" fontSize="8" fill={C.terracotta} fontFamily={JS} letterSpacing="1">press</text>
    </svg>
  );
}

// ── Reusable UI components ────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ position: 'relative', margin: '52px 0', height: '1px' }}>
      <div style={{ background: C.parchmentDark, height: '1px', width: '100%' }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '6px', height: '6px', borderRadius: '50%', background: C.stone,
      }} />
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div style={{
      fontSize: '9px', letterSpacing: '4px', fontFamily: JS, fontWeight: 200,
      color: dark ? C.wt3 : C.wt2,
      marginBottom: '12px', textTransform: 'uppercase',
    }}>
      {children}
    </div>
  );
}

function SectionHeading({ children, size = 32 }: { children: string; size?: number }) {
  return (
    <h2 style={{
      fontSize: `${size}px`, fontFamily: CG, color: C.ink,
      fontWeight: 300, margin: '0 0 8px 0', lineHeight: 1.2, letterSpacing: '0.3px',
    }}>
      {children}
    </h2>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedStrap, setSelectedStrap] = useState(0);
  const [activeTab, setActiveTab]         = useState(0);
  const [email, setEmail]                 = useState('');
  const [submitted, setSubmitted]         = useState(false);
  const [hoveredCard, setHoveredCard]     = useState<number | null>(null);
  const [hoveredTab, setHoveredTab]       = useState<number | null>(null);

  const strapColor   = STRAP_OPTIONS[selectedStrap].color;
  const { thermalState, accent } = THERMAL_TABS[activeTab];
  const stateContent = STATE_CONTENT[thermalState];

  const handleSubmit = () => { if (email.includes('@')) setSubmitted(true); };

  return (
    <div style={{ background: C.parchment, fontFamily: CG, minHeight: '100vh' }}>

      {/* ── Global styles ──────────────────────────────────────────────────── */}
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes floatLogo {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes panelFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes breatheStar {
          0%,100% { transform: scale(1); opacity: 0.72; }
          50%     { transform: scale(1.13); opacity: 1.0; }
        }
        .float-logo   { animation: floatLogo 4s ease-in-out infinite; }
        .panel-fade   { animation: panelFade 0.4s ease both; }
        .breathe-star { animation: breatheStar 2.8s ease-in-out infinite; display: inline-block; }
        .rhythm-word  { position: relative; cursor: default; display: inline-block; }
        .rhythm-word::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #C4722A; transition: width 0.4s ease;
        }
        .rhythm-word:hover::after { width: 100%; }
        ::-webkit-scrollbar       { width: 6px; }
        ::-webkit-scrollbar-track { background: #EDE5D8; }
        ::-webkit-scrollbar-thumb { background: #DDD0BC; border-radius: 3px; }

        /* ── Pod breathing — applied to SVG circle elements in BraidBand ── */
        @keyframes breathe {
          0%, 100% { transform: scale(1);    opacity: 0.72; }
          50%       { transform: scale(1.13); opacity: 1;    }
        }
        .pod-core      { animation: breathe 2.8s ease-in-out infinite;        transform-box: fill-box; transform-origin: center; }
        .pod-ring      { animation: breathe 2.8s ease-in-out -1.4s  infinite; transform-box: fill-box; transform-origin: center; }
        .pod-core-fast { animation: breathe 1.8s ease-in-out infinite;        transform-box: fill-box; transform-origin: center; }
        .pod-ring-fast { animation: breathe 1.8s ease-in-out -0.9s  infinite; transform-box: fill-box; transform-origin: center; }
        .pod-core-slow { animation: breathe 4s   ease-in-out infinite;        transform-box: fill-box; transform-origin: center; }
        .pod-ring-slow { animation: breathe 4s   ease-in-out -2s    infinite; transform-box: fill-box; transform-origin: center; }
      `}</style>

      {/* ── Noise texture overlay — subtle grain, matches original ──────────── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 9999, opacity: 0.4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* ══════════════════════════════════════════════════════════════════════
          §1 — STICKY NAVBAR
      ════════════════════════════════════════════════════════════════════════ */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: C.ink, height: '52px',
        borderBottom: `1px solid ${C.inkLight}`,
        display: 'flex', alignItems: 'center',
        padding: '0 32px', gap: '12px',
      }}>
        <NadiLogo size={28} uid="nav" variant="nav" />
        <span style={{
          fontFamily: JS, fontWeight: 200, fontSize: '13px',
          letterSpacing: '6px', color: C.terracottaLight,
        }}>
          NADI
        </span>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          §2 — HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '80px 32px 60px', textAlign: 'center', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', width: '480px', height: '480px',
          background: 'radial-gradient(ellipse, rgba(196,114,42,0.12) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -55%)', pointerEvents: 'none',
        }} />

        {/* Hero logo — 120px, floating */}
        <div className="float-logo" style={{
          marginBottom: '32px',
          filter: 'drop-shadow(0 12px 32px rgba(196,114,42,0.38))',
        }}>
          <NadiLogo size={120} uid="hero" />
        </div>

        <h1 style={{
          fontFamily: JS, fontWeight: 100, fontSize: '52px',
          letterSpacing: '18px', color: C.terracotta,
          animation: 'fadeUp 1.2s ease 0.3s forwards', opacity: 0,
          margin: '0 0 14px 0',
        }}>
          NADI
        </h1>
        <p style={{
          fontFamily: IMF, fontStyle: 'italic', fontSize: '16px',
          letterSpacing: '2px', color: C.wt2, marginBottom: '52px',
          animation: 'fadeUp 1.2s ease 0.6s forwards', opacity: 0,
        }}>
          feel your energy
        </p>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(to bottom, #DDD0BC, transparent)',
          margin: '0 auto',
          animation: 'fadeUp 1.2s ease 0.9s forwards', opacity: 0,
        }} />
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §3 — MANIFESTO
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '0 32px 60px', textAlign: 'center' }}>
        <p style={{
          fontFamily: CG, fontSize: '28px', fontWeight: 300,
          lineHeight: 1.55, color: C.ink, marginBottom: '36px', letterSpacing: '0.3px',
        }}>
          Ancient wisdom always knew —<br />
          your body was never broken.<br />
          It was always communicating.
        </p>
        <p style={{ fontFamily: CG, fontSize: '15px', fontWeight: 300, lineHeight: 2, color: C.wt1, marginBottom: '28px' }}>
          In Sanskrit, <em style={{ color: C.terracotta }}>Nadi</em> means channel. The path through which your life force moves. Your energy doesn't hide — it flows. It just needs to be heard.
        </p>
        <p style={{ fontFamily: CG, fontSize: '15px', fontWeight: 300, lineHeight: 2, color: C.wt1, marginBottom: '40px' }}>
          NADI reads what your body has always been saying — and whispers it back. Not in numbers. Not in alerts. In the oldest language there is. The one your skin never forgot.
        </p>
        <div style={{
          fontFamily: JS, fontWeight: 200, fontSize: '20px', letterSpacing: '10px', color: C.ink,
          display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px 0',
        }}>
          {['Push.', 'Pause.', 'Rest.'].map(w => (
            <span key={w} className="rhythm-word">{w}</span>
          ))}
        </div>
        <p style={{
          fontFamily: CG, fontSize: '14px', fontStyle: 'italic',
          lineHeight: 1.95, color: C.wt1,
          borderTop: `1px solid ${C.parchmentDark}`, paddingTop: '32px', marginTop: '32px',
        }}>
          We didn't build a smarter watch.<br />
          <strong style={{ color: C.terracottaDeep, fontStyle: 'normal', fontWeight: 400 }}>
            We remembered what the body always knew
          </strong>{' '}—<br />
          and built the first wearable your body would have designed for itself.
        </p>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §4 — SCIENCE STRIP (dark)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.ink, padding: '60px 32px' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px',
        }}>
          {[
            {
              border: C.terracotta, num: '100',    numColor: C.terracottaLight,
              label: 'Small decisions',
              desc: 'Can drain your prefrontal cortex more than one major decision. Decision load — not difficulty — is the primary driver of cognitive depletion.',
            },
            {
              border: C.gold, num: '35,000', numColor: C.goldLight,
              label: 'Daily decisions',
              desc: 'The average adult makes 35,000 choices per day. Most are invisible — and collectively, they silently bankrupt your cognitive reserves by afternoon.',
            },
            {
              border: C.stone, num: '0', numColor: C.stone,
              label: 'Tools that sense it',
              desc: 'Existing wearables track time spent. None track cognitive capacity remaining — the metric that actually determines the quality of everything you do.',
            },
          ].map((card, i) => (
            <div key={i} style={{ borderTop: `2px solid ${card.border}`, paddingTop: '18px' }}>
              <div style={{ fontFamily: JS, fontWeight: 100, fontSize: '36px', color: card.numColor, letterSpacing: '2px', marginBottom: '8px' }}>{card.num}</div>
              <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '3px', color: C.wt3, textTransform: 'uppercase', marginBottom: '12px' }}>{card.label}</div>
              <div style={{ fontSize: '12px', fontFamily: CG, fontWeight: 300, lineHeight: 1.85, color: C.wt2 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §5 — COLOUR PICKER (interactive)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <SectionLabel>Choose Your Colour</SectionLabel>
        <SectionHeading>Three colours. Three personalities.</SectionHeading>
        <p style={{ fontFamily: CG, fontSize: '13px', fontStyle: 'italic', color: C.wt1, lineHeight: 1.75, marginBottom: '40px' }}>
          The channels stay the same in every band. What you choose is the base that carries them.
        </p>

        {/* Colour cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '40px' }}>
          {STRAP_OPTIONS.map((opt, i) => {
            const isSel = selectedStrap === i;
            const isHov = hoveredCard === i;
            return (
              <div key={i}
                onClick={() => setSelectedStrap(i)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: C.parchment, borderRadius: '16px', padding: '18px 16px', cursor: 'pointer',
                  border: isSel ? `1.5px solid ${C.terracotta}` : `1.5px solid ${C.parchmentDark}`,
                  boxShadow: isSel ? '0 0 0 3px rgba(196,114,42,0.12)' : isHov ? '0 8px 24px rgba(196,114,42,0.12)' : '0 2px 6px rgba(30,21,8,0.04)',
                  transform: isHov ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.22s ease',
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: opt.color, border: '1px solid rgba(0,0,0,0.08)', marginBottom: '12px' }} />
                <div style={{ fontFamily: CG, fontSize: '13px', fontWeight: 400, color: C.ink, marginBottom: '4px' }}>{opt.name}</div>
                {isSel && <div style={{ fontFamily: JS, fontSize: '8px', letterSpacing: '1px', color: C.terracotta, marginBottom: '4px' }}>SELECTED ✓</div>}
                <div style={{ fontFamily: CG, fontSize: '12px', fontStyle: 'italic', color: C.terracotta, marginBottom: '10px' }}>{opt.personality}</div>
                <div style={{ fontFamily: JS, fontWeight: 200, fontSize: '10px', color: C.wt1, lineHeight: 1.72 }}>{opt.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Live band preview */}
        <div style={{
          background: C.parchmentMid, borderRadius: '18px', border: `1px solid ${C.parchmentDark}`,
          padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
        }}>
          <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '3px', color: C.wt2, textTransform: 'uppercase' }}>
            {STRAP_OPTIONS[selectedStrap].name} — Neutral State
          </div>
          <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
            <BraidBand width={480} strapColor={strapColor} thermalState="neutral" />
          </div>
          <p style={{ fontFamily: CG, fontSize: '10px', fontStyle: 'italic', color: C.wt2, textAlign: 'center', maxWidth: '360px', lineHeight: 1.6 }}>
            The braid always carries the same three channels. Only the base changes.
          </p>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §6 — WHY THE BRAID (dark panel)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <div style={{ background: C.ink, borderRadius: '20px', padding: '32px 36px' }}>
          <SectionLabel dark>Why the Braid</SectionLabel>
          <p style={{ fontFamily: CG, fontWeight: 300, fontSize: '13px', lineHeight: 1.85, color: C.stone }}>
            When three things are woven together, they hold what a single strand cannot. The braid keeps each channel distinct while binding them into one — so the energy carried in each strand stays within the whole, rather than dispersing outward. This is not decoration. It is how the band works.
          </p>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §7 — THREE CHANNELS (dark panel)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '4px', color: C.wt3, textTransform: 'uppercase', marginBottom: '12px' }}>
          The Three Channels
        </div>
        <SectionHeading>Woven. Not separate.</SectionHeading>
        <div style={{ marginBottom: '28px' }} />
        <div style={{
          background: C.ink, borderRadius: '18px', padding: '28px 32px',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px',
        }}>
          {[
            { border: C.terracotta, bar: C.terracotta, title: 'Drive Channel',   sub: 'Active · Solar',        body: 'The strand that heats. When your brain is in full gear — making decisions, processing fast, under pressure — Drive brightens. High Drive is useful. Sustained high Drive without rest is the first sign of overload.' },
            { border: C.gold,       bar: C.gold,       title: 'Balance Channel', sub: 'Central · Integration', body: 'When Drive and Rest find equilibrium, Balance illuminates fully. This is your flow state — effortless, clear, unhurried. The entire purpose of the band is to help you find and hold this channel.' },
            { border: C.stone,      bar: C.stone,      title: 'Rest Channel',    sub: 'Receptive · Lunar',     body: 'The strand that receives. High Rest means your nervous system is recovering — taking in rather than pushing out. When this channel fades, your reserves are emptying.' },
          ].map((ch, i) => (
            <div key={i} style={{ borderTop: `2px solid ${ch.border}`, paddingTop: '18px' }}>
              <div style={{ width: '24px', height: '3px', borderRadius: '2px', background: ch.bar, marginBottom: '12px' }} />
              <div style={{ fontFamily: CG, fontSize: '13px', fontWeight: 400, color: C.parchment, marginBottom: '4px' }}>{ch.title}</div>
              <div style={{ fontFamily: JS, fontSize: '9px', fontStyle: 'italic', letterSpacing: '0.5px', color: C.wt3, marginBottom: '12px' }}>{ch.sub}</div>
              <div style={{ fontFamily: JS, fontWeight: 200, fontSize: '10px', lineHeight: 1.75, color: C.wt2 }}>{ch.body}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §8 — WHAT NADI SAYS (interactive tabs)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <SectionLabel>The Three States</SectionLabel>
        <SectionHeading>What NADI says on your wrist.</SectionHeading>
        <p style={{ fontFamily: CG, fontSize: '13px', fontStyle: 'italic', color: C.wt1, lineHeight: 1.75, marginBottom: '40px' }}>
          The band never uses words or numbers. It speaks in temperature — the same language your body already uses.
        </p>

        {/* Tab row */}
        <div style={{ display: 'flex', borderBottom: `1px solid ${C.parchmentDark}` }}>
          {THERMAL_TABS.map((tab, i) => {
            const isA = activeTab === i;
            const isH = hoveredTab === i;
            return (
              <button key={i}
                onClick={() => setActiveTab(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                style={{
                  padding: '14px 28px', cursor: 'pointer', border: 'none',
                  borderBottom: isA ? `2.5px solid ${tab.accent}` : '2.5px solid transparent',
                  background: isA ? C.parchment : isH ? 'rgba(196,114,42,0.04)' : 'transparent',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  marginBottom: '-1px', borderRadius: '6px 6px 0 0',
                  transition: 'all 0.18s ease',
                  fontFamily: JS, fontWeight: 200, fontSize: '12px',
                  letterSpacing: '2px', color: isA ? C.ink : C.wt2,
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: tab.accent, flexShrink: 0 }} />
                {tab.label}
                <span style={{ fontFamily: JS, fontSize: '9px', color: isA ? C.wt1 : C.wt2 }}>{tab.temp}</span>
              </button>
            );
          })}
        </div>

        {/* State panel */}
        <div key={activeTab} className="panel-fade" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', padding: '40px',
          background: C.parchmentMid, border: `1px solid ${C.parchmentDark}`,
          borderTop: 'none', borderRadius: '0 0 20px 20px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: C.parchment, borderRadius: '16px', border: `1px solid ${C.parchmentDark}`, padding: '20px 12px', display: 'flex', justifyContent: 'center' }}>
              <BraidBand width={260} strapColor={strapColor} thermalState={thermalState} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: C.parchment, border: `1px solid ${C.parchmentDark}`, borderRadius: '20px', padding: '6px 14px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: accent }} />
              <span style={{ fontFamily: JS, fontSize: '11px', letterSpacing: '2px', color: C.wt1 }}>{THERMAL_TABS[activeTab].temp}</span>
            </div>
            <div style={{ fontFamily: CG, fontSize: '11px', fontStyle: 'italic', color: C.wt2, background: C.parchment, border: `1px solid ${C.parchmentDark}`, borderRadius: '8px', padding: '6px 12px', textAlign: 'center' }}>
              {stateContent.podBadge}
            </div>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div style={{ fontFamily: CG, fontSize: '26px', fontWeight: 300, color: accent, marginBottom: '6px' }}>{THERMAL_TABS[activeTab].label}</div>
            <div style={{ fontFamily: CG, fontSize: '11px', fontStyle: 'italic', color: C.wt1, marginBottom: '20px' }}>{stateContent.subtitle}</div>
            <p style={{ fontFamily: CG, fontWeight: 300, fontSize: '14px', lineHeight: 1.95, color: C.ink }}>{stateContent.body}</p>
          </div>
        </div>

        {/* Thermal language strip */}
        <div style={{ borderTop: `1px solid ${C.parchmentDark}`, paddingTop: '28px', marginTop: '32px' }}>
          <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '3px', color: C.wt2, textTransform: 'uppercase', marginBottom: '14px' }}>Thermal Language</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { bg: 'rgba(196,114,42,0.10)', border: '#C4722A', main: 'Warm + Steady', mc: '#C4722A', sub: 'Balanced' },
              { bg: 'rgba(138,78,26,0.10)',  border: '#8A4E1A', main: 'Heating',        mc: '#8A4E1A', sub: 'Drive Overload' },
              { bg: 'rgba(168,152,128,0.10)',border: '#A89880', main: 'Cooling',        mc: '#A89880', sub: 'Energy Leaking' },
              { bg: 'rgba(46,32,16,0.08)',   border: '#3E3018', main: 'Cold + Still',   mc: '#3E3018', sub: 'Rest Now' },
            ].map((chip, i) => (
              <div key={i} style={{ borderRadius: '20px', padding: '7px 16px', background: chip.bg, border: `1px solid ${chip.border}`, display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span style={{ fontFamily: JS, fontWeight: 200, fontSize: '11px', letterSpacing: '1px', color: chip.mc }}>{chip.main}</span>
                <span style={{ fontFamily: JS, fontSize: '8px', letterSpacing: '1px', color: C.wt2 }}>{chip.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §9 — THE SEAT
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '48px', alignItems: 'start' }}>
          <div style={{ background: C.parchmentMid, borderRadius: '18px', border: `1px solid ${C.parchmentDark}`, padding: '32px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SeatSVG />
          </div>
          <div>
            <SectionLabel>The Convergence Point</SectionLabel>
            <SectionHeading size={28}>The Seat</SectionHeading>
            <div style={{ marginBottom: '16px' }} />
            <p style={{ fontFamily: CG, fontWeight: 300, fontSize: '13px', lineHeight: 1.85, color: C.wt1, marginBottom: '16px' }}>
              Where all three strands meet, the band holds its most important component. We call it The Seat — the central point where sensing, processing, and output converge.
            </p>
            <p style={{ fontFamily: CG, fontWeight: 300, fontSize: '13px', lineHeight: 1.85, color: C.wt1 }}>
              Physiologically, The Seat houses the heart rate sensor, the skin conductance sensor, the temperature reader, and the thermal actuator — the element that emits warmth or coolness back into your wrist.
            </p>
            <div style={{ borderLeft: `2px solid ${C.terracotta}`, paddingLeft: '14px', marginTop: '20px' }}>
              <span style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '2px', color: C.terracotta, display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>The Name</span>
              <p style={{ fontFamily: CG, fontWeight: 300, fontSize: '11px', fontStyle: 'italic', lineHeight: 1.72, color: C.wt1 }}>
                In autonomic physiology, the body's regulatory centre is described as the place where all incoming signals are received and all outgoing responses originate. In contemplative tradition, the same concept is expressed as the point where energy gathers before moving outward. The Seat holds both meanings at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §10 — CAPTURE BUTTON
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>
          <div>
            <SectionLabel>The Capture Button</SectionLabel>
            <SectionHeading>Press. Speak. Let go.</SectionHeading>
            <div style={{ marginTop: '28px' }}>
              {CAPTURE_STEPS.map((step, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                      background: step.active ? C.terracotta : C.parchmentMid,
                      border: step.active ? `1px solid ${C.terracotta}` : `1px solid ${C.parchmentDark}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: JS, fontSize: '10px',
                      color: step.active ? C.parchment : C.wt2,
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontFamily: CG, fontWeight: 400, fontSize: '13px', color: C.ink, marginBottom: '4px' }}>{step.title}</div>
                      <div style={{ fontFamily: JS, fontWeight: 200, fontSize: '11px', lineHeight: 1.72, color: C.wt1 }}>{step.detail}</div>
                    </div>
                  </div>
                  {i < 3 && <div style={{ width: '1px', height: '20px', background: C.parchmentDark, marginTop: '6px', marginBottom: '6px', marginLeft: '15px', marginRight: 0 }} />}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: C.parchmentMid, borderRadius: '16px', border: `1px solid ${C.parchmentDark}`, padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
            <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '3px', color: C.wt2, textTransform: 'uppercase' }}>The Button</div>
            <CaptureSVG />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {['Hardware-gated.', 'Never listens passively.', 'Only activates on press.'].map((line, i) => (
                <div key={i} style={{ fontFamily: JS, fontSize: '10px', color: C.wt1, letterSpacing: '0.5px' }}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════════════════════════
          §11 — WAITLIST / EARLY ACCESS (dark)
      ════════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.ink, padding: '100px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(196,114,42,0.10) 0%, transparent 68%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Waitlist logo — 52px, floating */}
          <div className="float-logo" style={{ marginBottom: '28px', filter: 'drop-shadow(0 8px 24px rgba(196,114,42,0.32))' }}>
            <NadiLogo size={52} uid="wait" />
          </div>
          <div style={{ fontFamily: JS, fontWeight: 200, fontSize: '9px', letterSpacing: '5px', color: C.terracottaLight, textTransform: 'uppercase', marginBottom: '20px' }}>
            Early Access
          </div>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: '38px', color: C.parchment, marginBottom: '20px', lineHeight: 1.2, letterSpacing: '0.3px' }}>
            NADI is in prototype.
          </h2>
          <p style={{ fontFamily: IMF, fontStyle: 'italic', fontSize: '16px', lineHeight: 1.85, color: C.wt3, marginBottom: '36px' }}>
            We're inviting the first 100 people<br />
            who trust their body more than their calendar.
          </p>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #3E3018, transparent)', margin: '0 auto 36px' }} />

          {!submitted ? (
            <div style={{ width: '100%', maxWidth: '380px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', border: `1px solid ${C.inkLight}`, borderRadius: '40px', overflow: 'hidden', background: C.inkMid }}>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder="your@email.com"
                  style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '14px 20px', fontFamily: JS, fontWeight: 200, fontSize: '12px', letterSpacing: '1px', color: C.parchment }}
                />
                <button onClick={handleSubmit}
                  style={{ background: C.terracotta, border: 'none', padding: '14px 22px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.background = C.terracottaLight)}
                  onMouseLeave={e => (e.currentTarget.style.background = C.terracotta)}
                >
                  <span style={{ fontFamily: JS, fontWeight: 200, fontSize: '11px', letterSpacing: '2px', color: C.parchment }}>I'm ready</span>
                  <span style={{ color: C.parchment, fontSize: '14px' }}>→</span>
                </button>
              </div>
            </div>
          ) : (
            <div style={{ marginBottom: '20px', animation: 'fadeUp 0.8s ease forwards', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span className="breathe-star" style={{ fontSize: '20px', color: C.goldLight }}>✦</span>
              <div style={{ fontFamily: CG, fontWeight: 300, fontSize: '16px', color: C.parchment, lineHeight: 1.7, textAlign: 'center' }}>
                You're on the list.<br />
                <span style={{ fontFamily: CG, fontSize: '13px', fontStyle: 'italic', color: C.wt3 }}>We'll reach out when your band is ready.</span>
              </div>
            </div>
          )}

          <div style={{ fontFamily: JS, fontSize: '9px', letterSpacing: '1.5px', color: C.wt2, marginBottom: '52px' }}>
            No noise. No newsletters. Just one message — when it's time.
          </div>
          <div style={{ fontFamily: CG, fontWeight: 300, fontSize: '20px', color: C.wt2, lineHeight: 1.7, borderTop: `1px solid ${C.inkMid}`, paddingTop: '40px', width: '100%', textAlign: 'center' }}>
            Your body speaks all day.<br />
            <em style={{ color: C.terracottaLight }}>NADI just makes sure you hear it.</em>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.parchmentDark}`, padding: '20px 32px', background: C.parchment, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <NadiLogo size={20} uid="ft" variant="nav" />
          <span style={{ fontFamily: JS, fontWeight: 200, fontSize: '10px', letterSpacing: '4px', color: C.ink }}>NADI</span>
        </div>
        <span style={{ fontFamily: CG, fontStyle: 'italic', fontSize: '11px', color: C.wt2 }}>Feel your energy.</span>
      </footer>
    </div>
  );
}