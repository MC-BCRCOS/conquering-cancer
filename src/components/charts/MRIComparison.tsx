import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const GRAY_500 = '#4a4a4a';

export default function MRIComparison() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Full-Body MRI (Prenuvo Polaris)', 'Mammography (Gold Standard)'],
        datasets: [
          {
            label: 'Biopsy Cancer Yield (%)',
            data: [51.0, 44.5],
            backgroundColor: REDI_RED,
            borderRadius: 4,
            barPercentage: 0.5,
          },
          {
            label: 'Negative Predictive Value (%)',
            data: [99.8, 99.0],
            backgroundColor: GRAY_500,
            borderRadius: 4,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { size: 12 }, padding: 16 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Percentage (%)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          x: {
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
      <h4>Figure 5</h4>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#4a4a4a' }}>
        Full-body MRI screening performance compared to mammography. Data from Prenuvo Polaris study (n=1,011).
      </p>
      <div style={{ height: '300px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
