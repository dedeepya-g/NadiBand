import { useId } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface BraidBandProps {
  /** Display width in px. All x-coords scale from the 260-unit reference. */
  width?: number;
  /** Strap base colour (changed by colour picker). */
  strapColor: string;
  /** Thermal state drives pod colour, breathing speed, and strand opacity. */
  thermalState: 'warm' | 'cool' | 'neutral';
}

// ── Per-state strand opacities (from reference Section G) ────────────────────
const OPACITIES = {
  warm:    { amberShadow: 0.5, amber: 1.0, goldShadow: 0.5, gold: 1.0, stone: 0.8 },
  neutral: { amberShadow: 0.4, amber: 0.8, goldShadow: 0.4, gold: 0.8, stone: 0.7 },
  cool:    { amberShadow: 0.3, amber: 0.6, goldShadow: 0.3, gold: 0.6, stone: 0.5 },
} as const;

// ── Pod core radial gradient stops ───────────────────────────────────────────
const CORE_GRAD = {
  warm:    ['#ECC870', '#C4722A', '#8A4E1A'],
  neutral: ['#C8A870', '#A08050', '#6A5030'],
  cool:    ['#E4D8C4', '#A89880', '#6A5030'],
} as const;

// ── Breathing ring colour + CSS class names ──────────────────────────────────
const RING_CFG = {
  warm:    { color: '#C4722A', ringCls: 'pod-ring-fast', coreCls: 'pod-core-fast', specOp: 0.28 },
  neutral: { color: '#A08050', ringCls: 'pod-ring',      coreCls: 'pod-core',      specOp: 0.22 },
  cool:    { color: '#A89880', ringCls: 'pod-ring-slow', coreCls: 'pod-core-slow', specOp: 0.18 },
} as const;

// ── Component ─────────────────────────────────────────────────────────────────
export function BraidBand({
  width = 260,
  strapColor,
  thermalState,
}: BraidBandProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, 'u');

  // All reference x-coords are in a 260-unit space; scale to `width`
  const S  = width / 260;
  const px = (v: number) => +(v * S).toFixed(2);   // scaled x helper
  const CX = px(130);                                // pod centre x

  const op   = OPACITIES[thermalState];
  const grad = CORE_GRAD[thermalState];
  const ring = RING_CFG[thermalState];

  // Clasp width scales proportionally with the band
  const claspW = Math.max(8, Math.round(12 * S));

  return (
    <svg
      width={width}
      height={60}
      viewBox={`0 0 ${width} 60`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        {/* Clip strands to strap shape */}
        <clipPath id={`${uid}cl`}>
          <rect x={px(10)} y={5} width={px(240)} height={50} rx={25} />
        </clipPath>

        {/* Strap: selected colour, fades at both ends */}
        <linearGradient id={`${uid}sg`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={strapColor} stopOpacity="0" />
          <stop offset="25%"  stopColor={strapColor} stopOpacity="1" />
          <stop offset="75%"  stopColor={strapColor} stopOpacity="1" />
          <stop offset="100%" stopColor={strapColor} stopOpacity="0" />
        </linearGradient>

        {/* Pod core radial gradient */}
        <radialGradient id={`${uid}cg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={grad[0]} />
          <stop offset="60%"  stopColor={grad[1]} />
          <stop offset="100%" stopColor={grad[2]} />
        </radialGradient>
      </defs>

      {/* ── Strap base ─────────────────────────────────────────────────────── */}
      <rect
        x={px(10)} y={5} width={px(240)} height={50} rx={25}
        fill={`url(#${uid}sg)`}
        stroke="#A89880" strokeWidth={0.5}
      />

      {/* ── Three woven strands (clipped to strap) ──────────────────────────── */}
      <g clipPath={`url(#${uid}cl)`}>

        {/* AMBER strand — shadow */}
        <path
          d={`M${px(10)},30 Q${px(50)},17 ${px(90)},30 Q${px(130)},43 ${px(170)},30 Q${px(210)},17 ${px(250)},30`}
          fill="none" stroke="#8A4E1A" strokeWidth={13} strokeOpacity={op.amberShadow}
        />
        {/* AMBER strand — colour */}
        <path
          d={`M${px(10)},30 Q${px(50)},17 ${px(90)},30 Q${px(130)},43 ${px(170)},30 Q${px(210)},17 ${px(250)},30`}
          fill="none" stroke="#C4722A" strokeWidth={8} strokeOpacity={op.amber}
        />

        {/* GOLD strand — shadow */}
        <path
          d={`M${px(10)},30 Q${px(50)},43 ${px(90)},30 Q${px(130)},17 ${px(170)},30 Q${px(210)},43 ${px(250)},30`}
          fill="none" stroke="#9A7828" strokeWidth={14} strokeOpacity={op.goldShadow}
        />
        {/* GOLD strand — colour */}
        <path
          d={`M${px(10)},30 Q${px(50)},43 ${px(90)},30 Q${px(130)},17 ${px(170)},30 Q${px(210)},43 ${px(250)},30`}
          fill="none" stroke="#D4A847" strokeWidth={9} strokeOpacity={op.gold}
        />

        {/* STONE strand — single gentle undulation */}
        <path
          d={`M${px(10)},25 Q${px(50)},30 ${px(90)},25 Q${px(130)},20 ${px(170)},25 Q${px(210)},30 ${px(250)},25`}
          fill="none" stroke="#A89880" strokeWidth={7} strokeOpacity={op.stone}
        />
      </g>

      {/* ── Left clasp ─────────────────────────────────────────────────────── */}
      <rect x={px(8)} y={14} width={claspW} height={32} rx={2}
        fill="#3E3018" stroke="#6A5030" strokeWidth={0.8} />
      <circle cx={px(14)} cy={22} r={1.5} fill="#6A5030" />
      <circle cx={px(14)} cy={30} r={1.5} fill="#6A5030" />
      <circle cx={px(14)} cy={38} r={1.5} fill="#6A5030" />

      {/* ── Right clasp ────────────────────────────────────────────────────── */}
      <rect x={px(240)} y={14} width={claspW} height={32} rx={2}
        fill="#3E3018" stroke="#6A5030" strokeWidth={0.8} />
      <circle cx={px(246)} cy={22} r={1.5} fill="#6A5030" />
      <circle cx={px(246)} cy={30} r={1.5} fill="#6A5030" />
      <circle cx={px(246)} cy={38} r={1.5} fill="#6A5030" />

      {/* ── The Seat — centre pod ──────────────────────────────────────────── */}
      {/* Outer bezel */}
      <ellipse cx={CX} cy={30} rx={20} ry={16}
        fill="#2E2010" stroke="#6A5030" strokeWidth={1.5} />
      {/* Inner dark chamber */}
      <ellipse cx={CX} cy={30} rx={14} ry={11}
        fill="#1E1508" stroke="#8A4E1A" strokeWidth={0.8} />
      {/* Breathing ring — state-speed class applied globally */}
      <circle cx={CX} cy={30} r={14}
        fill={ring.color} fillOpacity={0.18}
        className={ring.ringCls}
      />
      {/* Core orb */}
      <circle cx={CX} cy={30} r={9}
        fill={`url(#${uid}cg)`}
        className={ring.coreCls}
      />
      {/* Specular highlight */}
      <ellipse cx={CX - 4} cy={26} rx={3} ry={2}
        fill="white" fillOpacity={ring.specOp} />

      {/* ── Capture button (right of pod) ──────────────────────────────────── */}
      <rect x={CX + 18} y={26} width={9} height={8} rx={2}
        fill="#3E3018" stroke="#A08050" strokeWidth={0.7} />
      <circle cx={CX + 22.5} cy={30} r={2.5}
        fill="#8A4E1A" fillOpacity={0.72} />
    </svg>
  );
}
