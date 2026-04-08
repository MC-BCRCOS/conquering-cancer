import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function CostPerspective() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['All 13 Cancer Algorithms', 'Late-Stage Treatment\n(125 Patients/Year)', 'Single Cancer Drug\nDevelopment'],
        datasets: [
          {
            label: 'Cost ($ Millions)',
            data: [40, 75, 2600],
            backgroundColor: ['#ed1f24', '#c41920', '#8b1215'],
            borderRadius: 6,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `$${ctx.parsed.y}M`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Cost ($ Millions)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
            ticks: {
              callback: (value) => `$${value}M`,
            },
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
      <div style={{ height: '340px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 4.</strong> Cost comparison: building all 13 cancer algorithms ($40M) vs. single drug development ($2.6B) vs. treating 125 late-stage patients for one year ($75M).</p>
    </div>
  );
}
