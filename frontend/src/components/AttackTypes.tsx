import { Link } from "react-router-dom";

const attacks = [
  {
    number: "01",
    title: "Direct Injection",
    description: "Commands that explicitly override system instructions with phrases like \"ignore previous\"",
    href: "/learn#direct-injection"
  },
  {
    number: "02",
    title: "Role Manipulation",
    description: "Jailbreak attempts using DAN, developer mode, or fictional persona scenarios",
    href: "/learn#role-manipulation"
  },
  {
    number: "03",
    title: "Zero-Width Injection",
    description: "Zero-width characters, Unicode tricks, and invisible instructions embedded in text",
    href: "/learn#zero-width-injection"
  },
  {
    number: "04",
    title: "Delimiter Injection",
    description: "Structural attacks using markdown, XML tags, or JSON to break prompt boundaries",
    href: "/learn#delimiter-injection"
  },
  {
    number: "05",
    title: "Encoded Payloads",
    description: "Base64, hex, or other encoding schemes used to obfuscate malicious instructions",
    href: "/learn#encoded-payloads"
  }
];

const AttackTypes = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
      <div className="flex justify-between items-end mb-4 sm:mb-6">
        <div>
          <h2 className="text-[1.75rem] sm:text-[2rem] font-semibold tracking-tight text-[#fafafa]">What we detect</h2>
          <p className="text-[#a1a1aa] text-xs sm:text-sm">Five categories of prompt injection attacks</p>
        </div>
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px sm:gap-px rounded-xl overflow-hidden"
        style={{ background: '#27272a', border: '1px solid #27272a', position: 'relative', zIndex: 1 }}
      >
        {attacks.map((attack) => (
          <Link
            key={attack.number}
            to={attack.href}
            className="p-4 sm:p-6 lg:p-8 transition-all duration-200 hover:-translate-y-0.5 group"
            style={{ background: '#111113' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#18181b';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#111113';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="font-mono text-[0.625rem] sm:text-xs text-[#a1a1aa] mb-2 sm:mb-3 tracking-wide">
              {attack.number}
            </div>
            <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-[#fafafa] transition-colors group-hover:text-[#ef4444]">
              {attack.title}
            </h3>
            <p className="text-[0.75rem] sm:text-[0.8125rem] text-[#a1a1aa] leading-relaxed">
              {attack.description}
            </p>
            <div className="mt-2 sm:mt-3 lg:mt-4 text-sm opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#ef4444]">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AttackTypes;