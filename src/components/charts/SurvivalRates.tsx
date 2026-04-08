import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const REDI_RED_LIGHT = 'rgba(237, 31, 36, 0.25)';

const cancers = [
  { name: 'Lung', early: 60, late: 8 },
  { name: 'Colorectal', early: 90, late: 29 },
  { name: 'Ovarian', early: 93, late: 29 },
  { name: 'Pancreatic', early: 50, late: 10 },
  { name: 'Liver', early: 65, late: 21 },
  { name: 'Gastric', early: 72, late: 32 },
  { name: 'Esophageal', early: 53, late: 6 },
];

export default function SurvivalRates() {
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
            label: 'Found Early — Stage I/II (%)',
            data: cancers.map((c) => c.early),
            backgroundColor: REDI_RED_LIGHT,
            borderRadius: 4,
            barPercentage: 0.7,
          },
          {
            label: 'Found Late — Stage III/IV (%)',
            data: cancers.map((c) => c.late),
            backgroundColor: REDI_RED,
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
          title: {
            display: true,
            text: 'Early Detection Transforms Survival',
            font: { size: 14, weight: 'bold' },
            padding: { bottom: 16 },
          },
          legend: {
            position: 'right',
            labels: { font: { size: 11 }, padding: 12 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.x}%`,
            },
          },
        },
        scales: {
          x: {
            min: 0,
            max: 100,
            title: { display: true, text: 'Five-Year Survival Rate (%)', font: { size: 11 } },
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
      <h4>Figure 1</h4>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#4a4a4a' }}>
        Five-year survival rates by stage at diagnosis. Data derived from SEER national cancer surveillance database.
      </p>
      <div style={{ height: '360px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
