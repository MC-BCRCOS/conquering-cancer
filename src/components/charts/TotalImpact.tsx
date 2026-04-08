import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function TotalImpact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Cancer Deaths\nPreventable', 'Non-Cancer Deaths\nPreventable', 'Combined Total'],
        datasets: [
          {
            label: 'Conservative (K)',
            data: [100, 300, 400],
            backgroundColor: '#ed1f24',
            borderRadius: 4,
            barPercentage: 0.5,
          },
          {
            label: 'Upper Estimate (K)',
            data: [75, 200, 275],
            backgroundColor: 'rgba(237, 31, 36, 0.2)',
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
              label: (ctx) => {
                const totals = [
                  { lo: 100, hi: 175 },
                  { lo: 300, hi: 500 },
                  { lo: 400, hi: 675 },
                ];
                const t = totals[ctx.dataIndex];
                return `${t.lo}K \u2013 ${t.hi}K deaths preventable/year`;
              },
            },
          },
        },
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            title: { display: true, text: 'Deaths Preventable Annually (thousands)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
            ticks: {
              callback: (value) => `${value}K`,
            },
          },
          x: {
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
      <div style={{ height: '340px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 10.</strong> Combined annual impact of cancer and non-cancer algorithmic early detection. Total: 400,000 to 675,000 deaths preventable per year (13\u201322% of all U.S. annual deaths). Assumes 50% population penetration.</p>
    </div>
  );
}
