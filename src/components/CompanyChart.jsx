import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CompanyChart = ({ data }) => {
  // data: 月次の人数推移データを想定。例：
  // data = {
  //   labels: ["2024-01", "2024-02", ...],
  //   datasets: [{
  //     label: '従業員数',
  //     data: [120, 130, ...],
  //     borderColor: 'rgba(75,192,192,1)',
  //     backgroundColor: 'rgba(75,192,192,0.2)',
  //   }]
  // }

  return (
    <div>
      <h3>人数の月次推移</h3>
      <Line data={data} />
    </div>
  );
};

export default CompanyChart;
