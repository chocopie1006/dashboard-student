import { FC } from 'react';
import { BarChart3, Award, Calendar, BookOpen, Clock } from 'lucide-react';

const Reports: FC = () => {
  const overallStats = [
    { label: 'Tổng giờ học', value: '156h', icon: Clock, color: 'blue' },
    { label: 'Bài học hoàn thành', value: '89', icon: BookOpen, color: 'green' },
    { label: 'Chứng chỉ đạt được', value: '5', icon: Award, color: '#DB2691' },
    { label: 'Ngày học liên tiếp', value: '12', icon: Calendar, color: 'orange' },
  ];

  const courseProgress = [
    { name: 'Tiếng Anh Giao Tiếp', progress: 75, hours: 30, lessons: 15 },
    { name: 'Lập Trình JavaScript', progress: 60, hours: 24, lessons: 18 },
    { name: 'Toán Nâng Cao', progress: 45, hours: 18, lessons: 11 },
    { name: 'Vật Lý Cơ Bản', progress: 30, hours: 12, lessons: 5 },
  ];

  const monthlyData = [
    { month: 'T1', hours: 45, lessons: 25 },
    { month: 'T2', hours: 52, lessons: 28 },
    { month: 'T3', hours: 38, lessons: 22 },
    { month: 'T4', hours: 48, lessons: 26 },
    { month: 'T5', hours: 55, lessons: 30 },
    { month: 'T6', hours: 42, lessons: 24 },
  ];

  const achievements = [
    { title: 'Học sinh chăm chỉ', description: 'Học liên tiếp 7 ngày', earned: true },
    { title: 'Người học nhanh', description: 'Hoàn thành 10 bài trong 1 tuần', earned: true },
    { title: 'Chuyên gia JavaScript', description: 'Hoàn thành khóa JavaScript', earned: false },
    { title: 'Thành thạo tiếng Anh', description: 'Đạt điểm cao trong bài kiểm tra', earned: true },
  ];

  return (
    <div className="reports-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Báo cáo học tập</h1>
          <p>Theo dõi tiến độ và thành tích học tập của bạn</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <BarChart3 size={20} />
            Xuất báo cáo
          </button>
        </div>
      </div>

      <div className="reports-content">
        {/* Overall Stats */}
        <div className="stats-section">
          <h2>Tổng quan</h2>
          <div className="stats-grid">
            {overallStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <div className="stat-icon">
                    <Icon size={24} />
                  </div>
                  <div className="stat-content">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reports-grid">
          {/* Course Progress */}
          <div className="progress-section">
            <div className="section-header">
              <h3>Tiến độ khóa học</h3>
              <button className="btn-text">Xem chi tiết</button>
            </div>
            <div className="progress-list">
              {courseProgress.map((course, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-header">
                    <h4>{course.name}</h4>
                    <span className="progress-percentage">{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-details">
                    <span>{course.hours}h học</span>
                    <span>{course.lessons} bài</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Chart */}
          <div className="chart-section">
            <div className="section-header">
              <h3>Hoạt động học tập</h3>
              <span className="period-selector">6 tháng qua</span>
            </div>
            <div className="chart-container">
              <div className="chart-bars">
                {monthlyData.map((data, index) => (
                  <div key={index} className="bar-container">
                    <div className="bar-group">
                      <div 
                        className="bar hours-bar" 
                        style={{ height: `${(data.hours / 60) * 100}%` }}
                      ></div>
                      <div 
                        className="bar lessons-bar" 
                        style={{ height: `${(data.lessons / 35) * 100}%` }}
                      ></div>
                    </div>
                    <div className="bar-label">
                      <span className="month">{data.month}</span>
                      <span className="hours">{data.hours}h</span>
                      <span className="lessons">{data.lessons} bài</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color hours"></div>
                  <span>Giờ học</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color lessons"></div>
                  <span>Bài học</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="achievements-section">
            <div className="section-header">
              <h3>Thành tích</h3>
              <button className="btn-text">Xem tất cả</button>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
                  <div className="achievement-icon">
                    <Award size={24} />
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <div className="achievement-badge">
                      <span>Đã đạt</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="goals-section">
            <div className="section-header">
              <h3>Mục tiêu học tập</h3>
              <button className="btn-text">Chỉnh sửa</button>
            </div>
            <div className="goals-list">
              <div className="goal-item">
                <div className="goal-header">
                  <h4>Hoàn thành khóa JavaScript</h4>
                  <span className="goal-progress">60%</span>
                </div>
                <div className="goal-bar">
                  <div className="goal-fill" style={{ width: '60%' }}></div>
                </div>
                <p className="goal-deadline">Còn lại: 2 tuần</p>
              </div>
              <div className="goal-item">
                <div className="goal-header">
                  <h4>Học 100 giờ trong tháng</h4>
                  <span className="goal-progress">75%</span>
                </div>
                <div className="goal-bar">
                  <div className="goal-fill" style={{ width: '75%' }}></div>
                </div>
                <p className="goal-deadline">Còn lại: 1 tuần</p>
              </div>
              <div className="goal-item">
                <div className="goal-header">
                  <h4>Đạt điểm cao bài kiểm tra</h4>
                  <span className="goal-progress">90%</span>
                </div>
                <div className="goal-bar">
                  <div className="goal-fill" style={{ width: '90%' }}></div>
                </div>
                <p className="goal-deadline">Sắp hoàn thành</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

