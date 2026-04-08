import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const REDI_RED_LIGHT = 'rgba(237, 31, 36, 0.2)';

const diseases = [
  { name: 'Cardiovascular', lo: 100, hi: 175 },
  { name: 'Sepsis', lo: 55, hi: 80 },
  { name: 'Type 2 Diabetes', lo: 25, hi: 45 },
  { name: 'Chronic Kidney Disease', lo: 20, hi: 35 },
  { name: 'Heart Failure', lo: 20, hi: 35 },
  { name: 'NAFLD / Liver Fibrosis', lo: 8, hi: 15 },
  { name: 'Familial Hypercholesterolemia', lo: 10, hi: 15 },
  { name: 'Hemochromatosis', lo: 3, hi: 6 },
  { name: 'Hypothyroidism', lo: 2, hi: 5 },
  { name: 'PBC', lo: 1, hi: 3 },
  { name: "Addison's Disease", lo: 0.5, hi: 1.5 },
  { name: "Wilson Disease", lo: 0.3, hi: 1 },
];

export default function DeathsPreventable() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: diseases.map((d) => d.name),
        datasets: [
          {
            label: 'Conservative (K)',
            data: diseases.map((d) => d.lo),
            backgroundColor: REDI_RED,
            borderRadius: 4,
            barPercentage: 0.7,
          },
          {
            label: 'Upper Estimate (K)',
            data: diseases.map((d) => d.hi - d.lo),
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
                const d = diseases[ctx.dataIndex];
                return `${d.lo}K - ${d.hi}K deaths preventable/year`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            title: { display: true, text: 'Deaths Preventable Annually (thousands)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          y: {
            stacked: true,
            grid: { display: false },
            ticks: { font: { size: 11 } },
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
        Estimated deaths preventable annually across 14 non-cancer conditions, assuming 50% population penetration.
      </p>
      <div style={{ height: '440px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
