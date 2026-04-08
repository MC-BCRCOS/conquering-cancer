import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const AMBER = '#f59e0b';
const GRAY_300 = '#b0b0b0';

export default function DevStatus() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Validated & Deployed', 'Validated, Awaiting Deployment', 'Algorithm Needed'],
        datasets: [
          {
            label: 'Number of Cancers',
            data: [2, 2, 9],
            backgroundColor: [REDI_RED, AMBER, GRAY_300],
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
              afterLabel: (ctx) => {
                const details = [
                  'Colorectal, Lung',
                  'Gastric, Liver',
                  'Pancreatic, Ovarian, Myeloma, Leukemia, Lymphoma, Esophageal, Bladder, Kidney, Thyroid',
                ];
                return details[ctx.dataIndex];
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            title: { display: true, text: 'Number of Cancer Types', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
            ticks: { stepSize: 2 },
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
      <h4>Figure 2</h4>
      <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#4a4a4a' }}>
        Current development status of cancer detection algorithms for 13 target cancers.
      </p>
      <div style={{ height: '300px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
