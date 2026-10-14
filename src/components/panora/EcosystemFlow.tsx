const nodes = [
  { label: "Merchant", x: 60 },
  { label: "Distributor", x: 300 },
  { label: "Delivery Partner", x: 540 },
];

export function EcosystemFlow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const stroke = tone === "light" ? "#0188FD" : "#016BFC";
  const text = tone === "light" ? "#FFFFFF" : "#07152F";
  return (
    <svg viewBox="0 0 600 90" className="h-24 w-full max-w-2xl" role="img" aria-label="Merchant to distributor to delivery partner flow">
      <line x1="60" y1="34" x2="300" y2="34" stroke={stroke} strokeWidth="2" className="animate-dash" />
      <line x1="300" y1="34" x2="540" y2="34" stroke="#6EC30D" strokeWidth="2" className="animate-dash" />
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy="34" r="11" fill={i === 2 ? "#6EC30D" : stroke} opacity="0.25" className="animate-pulse-ring" />
          <circle cx={n.x} cy="34" r="7" fill={i === 2 ? "#6EC30D" : stroke} />
          <text x={n.x} y="68" textAnchor="middle" fontSize="13" fontWeight="600" fill={text}>
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
