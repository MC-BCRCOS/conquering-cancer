import { useEffect, useRef, useState } from 'preact/hooks';

type Section = {
  id: string;
  label: string;
  short: string;
};

const sections: Section[] = [
  { id: 'intro', label: 'Introduction', short: 'Intro' },
  { id: 'ch-01', label: '1. The Death of George Washington', short: 'Ch 1' },
  { id: 'ch-02', label: '2. The Long Road to the Pap Smear', short: 'Ch 2' },
  { id: 'ch-03', label: '3. The Signal in the Blood', short: 'Ch 3' },
  { id: 'ch-04', label: '4. Thirteen Cancers', short: 'Ch 4' },
  { id: 'ch-05', label: '5. ColonFlag and LungFlag', short: 'Ch 5' },
  { id: 'ch-06', label: '6. Beyond Cancer', short: 'Ch 6' },
  { id: 'ch-07', label: '7. From Flag to Finding', short: 'Ch 7' },
  { id: 'ch-08', label: '8. The Consortium Model', short: 'Ch 8' },
  { id: 'ch-09', label: '9. The Economics', short: 'Ch 9' },
  { id: 'ch-10', label: '10. The Equity Imperative', short: 'Ch 10' },
  { id: 'ch-11', label: '11. Conquer Cancer', short: 'Ch 11' },
  { id: 'endnotes', label: 'Endnotes', short: 'Notes' },
];

const stripNumber = (label: string) => label.replace(/^\d+\.\s*/, '');

export default function ScrollNav() {
  const [active, setActive] = useState('intro');
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const skipRestoreRef = useRef(false);

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

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      if (skipRestoreRef.current) {
        skipRestoreRef.current = false;
      } else {
        window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior });
      }
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const scrollTo = (id: string) => {
    skipRestoreRef.current = true;
    const body = document.body;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const activeSection = sections.find((s) => s.id === active) ?? sections[0];
  const activeIdx = sections.findIndex((s) => s.id === active);

  return (
    <>
      <div
        class="reading-progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div class="reading-progress-bar" style={{ width: `${progress * 100}%` }} />
      </div>

      <nav class="scroll-nav" aria-label="Paper navigation">
        {sections.map((s) => (
          <button
            key={s.id}
            class={`scroll-nav-item ${active === s.id ? 'active' : ''}`}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        class="chapter-fab"
        aria-label="Browse chapters"
        aria-expanded={open}
        aria-controls="chapter-drawer"
        onClick={() => setOpen(true)}
      >
        <span class="chapter-fab-marker" aria-hidden="true">
          {activeSection.short}
        </span>
        <span class="chapter-fab-title">{stripNumber(activeSection.label)}</span>
        <svg
          class="chapter-fab-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      <div
        class={`chapter-backdrop ${open ? 'open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="chapter-drawer"
        class={`chapter-drawer ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Chapters"
        aria-hidden={!open}
      >
        <div class="chapter-drawer-handle" aria-hidden="true" />
        <div class="chapter-drawer-header">
          <div>
            <span class="chapter-drawer-eyebrow">Chapters</span>
            <span class="chapter-drawer-progress">
              {activeIdx + 1} of {sections.length}
            </span>
          </div>
          <button
            type="button"
            class="chapter-drawer-close"
            aria-label="Close chapters"
            onClick={() => setOpen(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
        <ul class="chapter-drawer-list">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                class={`chapter-drawer-item ${active === s.id ? 'active' : ''}`}
                onClick={() => scrollTo(s.id)}
              >
                <span class="chapter-drawer-marker" aria-hidden="true">
                  {s.short}
                </span>
                <span class="chapter-drawer-label">{stripNumber(s.label)}</span>
                {active === s.id && (
                  <span class="chapter-drawer-current" aria-label="Currently reading">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="5" />
                    </svg>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
