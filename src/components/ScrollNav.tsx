import { useEffect, useState } from 'preact/hooks';

const sections = [
  { id: 'letter', label: 'Dear Friends and Colleagues,' },
  { id: 'paper-01', label: 'What Your Blood Already Knows' },
  { id: 'paper-02', label: 'Beyond Cancer' },
  { id: 'paper-03', label: 'The Evidence Behind the Numbers' },
  { id: 'summary-tables', label: 'Disease Detection Summary' },
];

export default function ScrollNav() {
  const [active, setActive] = useState('letter');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav class="scroll-nav" aria-label="Paper navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          class={`scroll-nav-item ${active === s.id ? 'active' : ''}`}
          onClick={() => handleClick(s.id)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
