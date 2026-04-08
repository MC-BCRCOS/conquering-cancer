import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const REDI_RED = '#ed1f24';
const GRAY_300 = '#b0b0b0';
const GRAY_500 = '#4a4a4a';

const data = {
  labels: [
    'Lung Cancer',
    'Colorectal Cancer',
    'NAFLD/Liver Fibrosis',
    'Type 2 Diabetes',
    'Cardiovascular Disease',
    'Chronic Kidney Disease',
  ],
  deployed: [0.82, 0.82, null, null, null, null],
  researchLo: [null, null, 0.82, 0.80, 0.78, 0.83],
  researchHi: [null, null, 0.82, 0.80, 0.82, 0.88],
};

export default function AlgorithmAccuracy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Deployed AUC',
            data: data.deployed,
            backgroundColor: REDI_RED,
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: 'Research AUC (low)',
            data: data.researchLo,
            backgroundColor: GRAY_300,
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: 'Research AUC (high)',
            data: data.researchHi,
            backgroundColor: GRAY_500,
            borderRadius: 4,
            barPercentage: 0.6,
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
              label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.x?.toFixed(2)}`,
            },
          },
        },
        scales: {
          x: {
            min: 0.5,
            max: 1.0,
            title: { display: true, text: 'AUC Score (0.5 = coin flip, 1.0 = perfect)', font: { size: 11 } },
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
        Demonstrated algorithm accuracy for diseases. AUC of 0.50 equals a coin flip; 1.0 equals perfect prediction.
      </p>
      <div style={{ height: '320px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
