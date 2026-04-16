import { useEffect, useState } from 'preact/hooks';

const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'ch-01', label: '1. The Death of George Washington' },
  { id: 'ch-02', label: '2. The Long Road to the Pap Smear' },
  { id: 'ch-03', label: '3. The Signal in the Blood' },
  { id: 'ch-04', label: '4. Thirteen Cancers' },
  { id: 'ch-05', label: '5. ColonFlag and LungFlag' },
  { id: 'ch-06', label: '6. Beyond Cancer' },
  { id: 'ch-07', label: '7. From Flag to Finding' },
  { id: 'ch-08', label: '8. The Consortium Model' },
  { id: 'ch-09', label: '9. The Economics' },
  { id: 'ch-10', label: '10. The Equity Imperative' },
  { id: 'ch-11', label: '11. Conquer Cancer' },
  { id: 'endnotes', label: 'Endnotes' },
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
