import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

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
            backgroundColor: '#ed1f24',
            borderRadius: 4,
            barPercentage: 0.5,
          },
          {
            label: 'Negative Predictive Value (%)',
            data: [99.8, 99.0],
            backgroundColor: 'rgba(237, 31, 36, 0.3)',
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
      <div style={{ height: '300px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 5.</strong> Full-body MRI screening performance compared to mammography. Source: Prenuvo Polaris study (n=1,011).</p>
    </div>
  );
}
