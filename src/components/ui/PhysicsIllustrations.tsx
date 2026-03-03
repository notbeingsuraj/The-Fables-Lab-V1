"use client";

export function TopographicPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full opacity-20 pointer-events-none stroke-current ${className}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 0 50 Q 50 100 100 50 T 200 50" fill="none" strokeWidth="1.5" className="stroke-neon-cyan opacity-70" />
          <path d="M 0 100 Q 50 150 100 100 T 200 100" fill="none" strokeWidth="1" className="stroke-hot-pink opacity-70" />
          <path d="M 0 150 Q 50 200 100 150 T 200 150" fill="none" strokeWidth="0.5" className="stroke-cyber-yellow opacity-70" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
  );
}

export function MagneticField({ className = "" }: { className?: string }) {
  return (
    <svg className={`opacity-40 pointer-events-none fill-none stroke-current ${className}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="250" r="4" className="fill-neon-cyan glow-cyan" />
      {[...Array(20)].map((_, i) => (
         <ellipse key={i} cx="250" cy="250" rx={10 + i * 15} ry={10 + i * 25} transform={`rotate(${i * 5} 250 250)`} strokeWidth={i % 3 === 0 ? "1.5" : "0.5"} className={i % 2 === 0 ? "stroke-neon-purple opacity-50" : "stroke-hot-pink opacity-30"} />
      ))}
    </svg>
  );
}

export function VectorGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-10 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crosses" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M28,30 h4 M30,28 v4" className="stroke-neon-green glow-green" strokeWidth="1.5" fill="none"/>
            <path d="M58,60 h4 M60,58 v4" className="stroke-electric-blue" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosses)" />
      </svg>
    </div>
  );
}

export function GeometricShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-40 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,100 150,200 50,200" fill="none" strokeWidth="3" className="stroke-cyber-yellow glow-yellow opacity-60" />
        <rect x="800" y="300" width="80" height="80" fill="none" strokeWidth="2" className="stroke-neon-cyan opacity-50" transform="rotate(15 840 340)" />
        <polygon points="400,800 460,700 520,800" fill="none" strokeWidth="4" className="stroke-hot-pink glow-pink opacity-50" transform="rotate(-20 460 750)" />
        <circle cx="200" cy="800" r="40" fill="none" strokeWidth="2" className="stroke-neon-green glow-green opacity-40" />
        <rect x="600" y="100" width="100" height="100" fill="none" strokeWidth="1.5" className="stroke-neon-purple opacity-60" transform="rotate(45 650 150)" />
        <polygon points="900,800 950,900 850,900" fill="none" strokeWidth="2" className="stroke-electric-blue opacity-50" transform="rotate(60 900 850)" />
      </svg>
    </div>
  );
}

export function HandDrawnLines({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-30 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 400 Q 150 350 250 450 T 450 400 T 650 500 T 950 400" strokeWidth="3" className="stroke-hot-pink opacity-60" strokeLinecap="round" strokeDasharray="10 15" />
        <path d="M 100 600 L 150 550 L 200 650 L 250 500 L 300 700" strokeWidth="2" className="stroke-neon-cyan opacity-70" strokeLinejoin="round" />
        <path d="M 700 700 C 750 600, 850 800, 950 700" strokeWidth="4" className="stroke-cyber-yellow glow-yellow opacity-40" strokeLinecap="round" />
      </svg>
    </div>
  );
}
