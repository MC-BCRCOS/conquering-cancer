import { useEffect, useRef } from 'preact/hooks';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const diseases = [
  { name: 'Fam. Hypercholesterolemia', lo: 10, hi: 30 },
  { name: 'Hemochromatosis', lo: 5, hi: 10 },
  { name: 'Cardiovascular Disease', lo: 5, hi: 10 },
  { name: 'Wilson Disease', lo: 3, hi: 7 },
  { name: 'Primary Biliary Cholangitis', lo: 3, hi: 7 },
  { name: 'Type 2 Diabetes', lo: 3, hi: 5 },
  { name: 'Chronic Kidney Disease', lo: 2, hi: 5 },
  { name: 'NAFLD/Liver Fibrosis', lo: 2, hi: 4 },
  { name: 'Heart Failure', lo: 1, hi: 3 },
  { name: 'Hypothyroidism', lo: 1, hi: 5 },
  { name: "Addison's Disease", lo: 0.5, hi: 1.5 },
  { name: 'Sepsis', lo: 0, hi: 0.08 },
];

export default function DetectionLeadTime() {
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
            label: 'Lead Time Low (years)',
            data: diseases.map((d) => d.lo),
            backgroundColor: '#ed1f24',
            borderRadius: 4,
            barPercentage: 0.7,
          },
          {
            label: 'Additional Range (years)',
            data: diseases.map((d) => d.hi - d.lo),
            backgroundColor: 'rgba(237, 31, 36, 0.2)',
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
          legend: {
            position: 'bottom',
            labels: { font: { size: 12 }, padding: 16 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const d = diseases[ctx.dataIndex];
                return `${d.lo} \u2013 ${d.hi} years before conventional diagnosis`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            title: { display: true, text: 'Years Before Conventional Diagnosis', font: { size: 11 } },
            grid: { color: '#f0f0f0' },
          },
          y: {
            stacked: true,
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
      <div style={{ height: '440px' }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <p class="chart-caption"><strong>Figure 7.</strong> Detection lead time: how far in advance algorithms can identify disease before conventional diagnosis.</p>
    </div>
  );
}
