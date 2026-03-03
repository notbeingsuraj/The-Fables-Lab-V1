"use client";

export function TopographicPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-current ${className}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M 0 50 Q 50 100 100 50 T 200 50" fill="none" strokeWidth="0.5" />
          <path d="M 0 100 Q 50 150 100 100 T 200 100" fill="none" strokeWidth="0.5" />
          <path d="M 0 150 Q 50 200 100 150 T 200 150" fill="none" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo)" />
    </svg>
  );
}

export function MagneticField({ className = "" }: { className?: string }) {
  return (
    <svg className={`opacity-20 pointer-events-none fill-none stroke-current ${className}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="250" r="2" fill="currentColor" />
      {[...Array(20)].map((_, i) => (
         <ellipse key={i} cx="250" cy="250" rx={10 + i * 15} ry={10 + i * 25} transform={`rotate(${i * 5} 250 250)`} strokeWidth="0.5" className="opacity-50" />
      ))}
    </svg>
  );
}

export function VectorGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crosses" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M18,20 h4 M20,18 v4" stroke="currentColor" strokeWidth="1" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosses)" />
      </svg>
    </div>
  );
}
