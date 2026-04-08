import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const diseases = [
  { name: 'Hemochromatosis\n(Cirrhosis)', late: 300, early: 0.5 },
  { name: 'Diabetes\n(Complications)', late: 250, early: 3.5 },
  { name: 'Heart Attack', late: 200, early: 5 },
  { name: 'Kidney Disease\n(Dialysis)', late: 90, early: 8 },
];

export default function Economics() {
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
            label: 'Late Detection Cost ($K)',
            data: diseases.map((d) => d.late),
            backgroundColor: '#8b1215',
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: 'Early Detection Cost ($K)',
            data: diseases.map((d) => d.early),
            backgroundColor: 'rgba(237, 31, 36, 0.3)',
            borderRadius: 4,
            barPercentage: 0.6,
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
              label: (ctx) => `${ctx.dataset.label}: $${ctx.parsed.y}K`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Per-Patient Cost ($K)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
            ticks: {
              callback: (value) => `$${value}K`,
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
      <p class="chart-caption"><strong>Figure 8.</strong> Per-patient cost comparison: treating disease after late detection vs. intervening after early algorithmic detection.</p>
    </div>
  );
}
