import { FC } from 'react';
import { TrendingUp, BookOpen, Award } from 'lucide-react';

const ProgressChart: FC = () => {
  const weeklyData = [
    { day: 'T2', hours: 2.5, lessons: 3 },
    { day: 'T3', hours: 1.8, lessons: 2 },
    { day: 'T4', hours: 3.2, lessons: 4 },
    { day: 'T5', hours: 2.1, lessons: 2 },
    { day: 'T6', hours: 4.0, lessons: 5 },
    { day: 'T7', hours: 1.5, lessons: 2 },
    { day: 'CN', hours: 2.8, lessons: 3 },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <div className="progress-chart">
      <div className="chart-header">
        <div className="chart-stats">
          <div className="stat-item">
            <TrendingUp size={20} className="stat-icon" />
            <div>
              <span className="stat-value">18.9h</span>
              <span className="stat-label">Tổng giờ học</span>
            </div>
          </div>
          <div className="stat-item">
            <BookOpen size={20} className="stat-icon" />
            <div>
              <span className="stat-value">21</span>
              <span className="stat-label">Bài học hoàn thành</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="chart-content">
        <div className="chart-bars">
          {weeklyData.map((data, index) => (
            <div key={index} className="bar-container">
              <div 
                className="bar" 
                style={{ 
                  height: `${(data.hours / maxHours) * 100}%`,
                  backgroundColor: data.hours > 3 ? '#10B981' : data.hours > 2 ? '#3B82F6' : '#F59E0B'
                }}
              ></div>
              <div className="bar-label">
                <span className="day">{data.day}</span>
                <span className="hours">{data.hours}h</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-footer">
        <div className="achievement">
          <Award size={16} />
          <span>Đã học liên tiếp 7 ngày!</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
