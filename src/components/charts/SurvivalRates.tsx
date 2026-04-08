import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const cancers = [
  { name: 'Lung', early: 60, late: 8 },
  { name: 'Colorectal', early: 90, late: 29 },
  { name: 'Ovarian', early: 93, late: 29 },
  { name: 'Pancreatic', early: 50, late: 10 },
  { name: 'Liver', early: 70, late: 18 },
  { name: 'Gastric', early: 68, late: 31 },
  { name: 'Esophageal', early: 47, late: 5 },
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
            backgroundColor: 'rgba(237, 31, 36, 0.25)',
            borderRadius: 4,
            barPercentage: 0.7,
          },
          {
            label: 'Found Late — Stage III/IV (%)',
            data: cancers.map((c) => c.late),
            backgroundColor: '#8b1215',
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
      <div style={{ height: '360px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 1.</strong> Five-year survival rates by stage at diagnosis. Early = Stage I/II. Late = Stage III/IV. Data derived from SEER national cancer surveillance database.</p>
    </div>
  );
}
