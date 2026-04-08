import { useState, useMemo } from 'preact/hooks';

interface Paper {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
}

interface Props {
  papers: Paper[];
}

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'cancer', label: 'Cancer' },
  { value: 'non-cancer-disease', label: 'Non-Cancer Disease' },
  { value: 'regulatory', label: 'Regulatory' },
  { value: 'strategic', label: 'Strategic' },
  { value: 'summary', label: 'Summary Tables' },
];

export default function AppendixFilter({ papers }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    return papers.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category, papers]);

  return (
    <div class="repo-layout">
      <aside class="repo-sidebar-filters">
        <input
          type="text"
          placeholder="Search papers..."
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          class="filter-search"
        />
        <div class="filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              class={`filter-pill ${category === cat.value ? 'active' : ''}`}
              onClick={() => setCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <p class="filter-count">
          {filtered.length} of {papers.length} papers
        </p>
      </aside>

      <div class="repo-results">
        <header class="repo-header">
          <h1>Research Repository</h1>
          <p class="repo-lead">
            Explore the full collection of disease-specific white papers, regulatory analysis, and technical documentation.
          </p>
        </header>
        <div class="paper-grid">
          {filtered.map((paper) => (
            <a key={paper.slug} href={`/appendix/${paper.slug}`} class="paper-card">
              <span class="paper-category">{paper.category.replace(/-/g, ' ')}</span>
              <h3 class="paper-card-title">{paper.title}</h3>
              {paper.subtitle && <p class="paper-card-subtitle">{paper.subtitle}</p>}
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p class="no-results">No papers match your search. Try a different term or category.</p>
        )}
      </div>
    </div>
  );
}
