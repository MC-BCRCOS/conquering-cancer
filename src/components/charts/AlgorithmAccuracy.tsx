import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const data = [
  { name: 'Chronic Kidney Disease', deployed: null, lo: 0.83, hi: 0.88 },
  { name: 'NAFLD/Liver Fibrosis', deployed: 0.82, lo: null, hi: null },
  { name: 'Cardiovascular Disease', deployed: null, lo: 0.78, hi: 0.82 },
  { name: 'Type 2 Diabetes', deployed: 0.80, lo: null, hi: null },
  { name: 'Colorectal Cancer (deployed)', deployed: 0.82, lo: null, hi: null },
  { name: 'Lung Cancer (deployed)', deployed: 0.82, lo: null, hi: null },
];

export default function AlgorithmAccuracy() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: 'Deployed / Validated AUC',
            data: data.map((d) => d.deployed || d.lo),
            backgroundColor: 'rgba(237, 31, 36, 0.3)',
            borderRadius: 4,
            barPercentage: 0.6,
          },
          {
            label: 'Research High AUC',
            data: data.map((d) => d.hi ? d.hi - (d.lo || 0) : 0),
            backgroundColor: '#ed1f24',
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
              label: (ctx) => {
                const d = data[ctx.dataIndex];
                if (d.deployed) return `AUC: ${d.deployed.toFixed(2)}`;
                return `AUC: ${d.lo?.toFixed(2)} \u2013 ${d.hi?.toFixed(2)}`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            min: 0.5,
            max: 1.0,
            title: { display: true, text: 'AUC Score (0.5 = coin flip, 1.0 = perfect)', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          y: {
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
      <div style={{ height: '320px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 6.</strong> Demonstrated algorithm accuracy for non-cancer diseases compared to deployed cancer detection algorithms. AUC of 0.50 = coin flip; 1.0 = perfect prediction.</p>
    </div>
  );
}
