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
    <section className="px-12 py-12">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-[2rem] font-semibold tracking-tight text-[#fafafa]">What we detect</h2>
          <p className="text-[#52525b] text-sm">Five categories of prompt injection attacks</p>
        </div>
      </div>

      <div 
        className="grid grid-cols-5 gap-px rounded-xl overflow-hidden"
        style={{ background: '#27272a', border: '1px solid #27272a' }}
      >
        {attacks.map((attack) => (
          <Link
            key={attack.number}
            to={attack.href}
            className="p-8 transition-all duration-200 hover:-translate-y-0.5 group"
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
            <div className="font-mono text-xs text-[#52525b] mb-4 tracking-wide">
              {attack.number}
            </div>
            <h3 className="text-base font-semibold mb-2 text-[#fafafa] transition-colors group-hover:text-[#ef4444]">
              {attack.title}
            </h3>
            <p className="text-[0.8125rem] text-[#52525b] leading-relaxed">
              {attack.description}
            </p>
            <div className="mt-4 text-sm opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#ef4444]">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AttackTypes;