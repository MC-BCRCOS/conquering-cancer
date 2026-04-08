import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const cancers = [
  { name: 'Ovarian', auc: 0.968, status: 'research' },
  { name: 'Myeloma', auc: 0.968, status: 'research' },
  { name: 'Kidney', auc: 0.932, status: 'research' },
  { name: 'Leukemia', auc: 0.92, status: 'near-deployable' },
  { name: 'Gastric', auc: 0.91, status: 'research' },
  { name: 'Bladder', auc: 0.90, status: 'research' },
  { name: 'Liver', auc: 0.894, status: 'research' },
  { name: 'Lung', auc: 0.86, status: 'validated' },
  { name: 'Pancreatic', auc: 0.84, status: 'research' },
  { name: 'Lymphoma', auc: 0.84, status: 'research' },
  { name: 'Colorectal', auc: 0.82, status: 'deployed' },
  { name: 'Prostate', auc: 0.72, status: 'research' },
  { name: 'Breast', auc: 0.64, status: 'research' },
];

const statusColors: Record<string, string> = {
  deployed: '#ed1f24',
  validated: '#c41920',
  'near-deployable': '#a01518',
  research: 'rgba(237, 31, 36, 0.3)',
};

export default function CancerSummary() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: cancers.map((c) => c.name),
        datasets: [
          {
            label: 'AUC Score',
            data: cancers.map((c) => c.auc),
            backgroundColor: cancers.map((c) => statusColors[c.status]),
            borderRadius: 4,
            barPercentage: 0.7,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const c = cancers[ctx.dataIndex];
                const statusLabel = c.status === 'deployed' ? 'Deployed' :
                  c.status === 'validated' ? 'Validated' :
                  c.status === 'near-deployable' ? 'Near Deployable' : 'Research';
                return `AUC: ${c.auc.toFixed(3)} (${statusLabel})`;
              },
            },
          },
        },
        scales: {
          x: {
            min: 0.5,
            max: 1.0,
            title: { display: true, text: 'AUC Score (0.5 = coin flip, 1.0 = perfect)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 12 } },
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, []);

  return (
    <div class="chart-container">
      <div style={{ height: '440px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#ed1f24', display: 'inline-block' }}></span> Deployed
        </span>
        <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#c41920', display: 'inline-block' }}></span> Validated
        </span>
        <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: '#a01518', display: 'inline-block' }}></span> Near Deployable
        </span>
        <span style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(237, 31, 36, 0.3)', display: 'inline-block' }}></span> Research
        </span>
      </div>
      <p class="chart-caption"><strong>Cancer Detection Summary.</strong> AUC performance of ML algorithms across 13 cancer types from routine blood tests (CBC/CMP). Sorted by accuracy. Color indicates deployment status.</p>
    </div>
  );
}
