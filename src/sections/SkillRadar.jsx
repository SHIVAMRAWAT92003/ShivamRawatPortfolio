import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';
import styles from './SkillsRadar.module.css';


ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement);

const initialData = {
  labels: ['JavaScript', 'Python', 'React', 'Node.js', 'Data Science'],
  datasets: [
    {
      label: 'Skills',
      data: [80, 70, 85, 75, 90],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
  ],
};



const updatedData = {
  labels: ['JavaScript', 'Python', 'React', 'Node.js', 'Data Science'],
  datasets: [
    {
      label: 'Skills',
      data: [85, 75, 90, 80, 95],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ],
};

const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          backdropColor: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
  };
  

function SkillsRadar() {
  const [data, setData] = useState(initialData);

  const handleChangeData = () => {
    setData(data === initialData ? updatedData : initialData);
  };

  return (
    <div className={styles.skillsRadarContainer} onClick={handleChangeData}>
      <h2 className={styles.skillsRadarTitle}>Skills Radar</h2>
      <div className={styles.skillsRadarChart}>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}

export default SkillsRadar;
