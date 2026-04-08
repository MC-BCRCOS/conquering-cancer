import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const REDI_RED_LIGHT = 'rgba(237, 31, 36, 0.2)';

const cancers = [
  { name: 'Lung', lo: 31, hi: 54 },
  { name: 'Colorectal', lo: 16, hi: 28 },
  { name: 'Pancreatic', lo: 14, hi: 25 },
  { name: 'Liver', lo: 8, hi: 14 },
  { name: 'Leukemia', lo: 6, hi: 10 },
  { name: 'Ovarian', lo: 5, hi: 9 },
  { name: 'Lymphoma', lo: 5, hi: 9 },
  { name: 'Esophageal', lo: 4, hi: 7 },
  { name: 'Myeloma', lo: 3, hi: 5 },
  { name: 'Gastric', lo: 3, hi: 5 },
  { name: 'Bladder', lo: 2.5, hi: 4 },
  { name: 'Kidney', lo: 2, hi: 3.5 },
  { name: 'Thyroid', lo: 0.5, hi: 1 },
];

export default function LivesSaveable() {
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
            label: 'Conservative Estimate (K)',
            data: cancers.map((c) => c.lo),
            backgroundColor: REDI_RED,
            borderRadius: 4,
            barPercentage: 0.7,
          },
          {
            label: 'Upper Estimate (K)',
            data: cancers.map((c) => c.hi - c.lo),
            backgroundColor: REDI_RED_LIGHT,
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
          legend: {
            position: 'bottom',
            labels: { font: { size: 12 }, padding: 16 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const cancer = cancers[ctx.dataIndex];
                return `${cancer.lo}K - ${cancer.hi}K lives per year`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            title: { display: true, text: 'Lives Saveable Annually (thousands)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          y: {
            stacked: true,
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
      <h4>Figure 3</h4>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#4a4a4a' }}>
        Conservative estimates of lives saveable annually per cancer type, assuming 50% population penetration. Total: ~100,000 to 175,000 lives per year.
      </p>
      <div style={{ height: '440px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
