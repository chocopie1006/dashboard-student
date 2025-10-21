import { FC } from 'react';
import { Calendar, Clock, MapPin, Users, Video } from 'lucide-react';

interface ScheduleProps {
  onBack?: () => void;
}

const Schedule: FC<ScheduleProps> = () => {
  const today = new Date();
  const currentWeek = getWeekDates(today);

  const scheduleData = [
    {
      id: 1,
      title: 'Tiếng Anh Giao Tiếp',
      instructor: 'Ms. Sarah Johnson',
      time: '14:00 - 15:30',
      date: '2024-01-15',
      room: 'Phòng 101',
      type: 'live',
      students: 25,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Lập Trình JavaScript',
      instructor: 'Mr. David Chen',
      time: '16:00 - 17:30',
      date: '2024-01-15',
      room: 'Phòng 203',
      type: 'live',
      students: 20,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Toán Nâng Cao',
      instructor: 'Dr. Minh Nguyen',
      time: '09:00 - 10:30',
      date: '2024-01-16',
      room: 'Phòng 105',
      type: 'live',
      students: 18,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Vật Lý Cơ Bản',
      instructor: 'Prof. Lan Tran',
      time: '10:00 - 11:30',
      date: '2024-01-17',
      room: 'Phòng 201',
      type: 'online',
      students: 30,
      status: 'upcoming'
    }
  ];

  function getWeekDates(date: Date) {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  }

  const getDayClasses = (date: Date) => {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    const isPast = date < today && !isToday;
    
    return `day-header ${isToday ? 'today' : ''} ${isPast ? 'past' : ''}`;
  };

  const getClassesForDay = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return scheduleData.filter(cls => cls.date === dateStr);
  };

  return (
    <div className="schedule-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Lịch học</h1>
          <p>Xem lịch học và lớp học của bạn</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <Calendar size={20} />
            Thêm sự kiện
          </button>
        </div>
      </div>

      <div className="schedule-content">
        <div className="week-view">
          <div className="week-header">
            {currentWeek.map((day, index) => (
              <div key={index} className={getDayClasses(day)}>
                <div className="day-name">
                  {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][day.getDay()]}
                </div>
                <div className="day-number">{day.getDate()}</div>
                <div className="day-month">
                  {day.toLocaleDateString('vi-VN', { month: 'short' })}
                </div>
              </div>
            ))}
          </div>

          <div className="week-content">
            {currentWeek.map((day, index) => {
              const dayClasses = getClassesForDay(day);
              return (
                <div key={index} className="day-column">
                  {dayClasses.map((cls) => (
                    <div key={cls.id} className={`class-card ${cls.type} ${cls.status}`}>
                      <div className="class-header">
                        <div className="class-time">
                          <Clock size={14} />
                          <span>{cls.time}</span>
                        </div>
                        <div className={`class-type ${cls.type}`}>
                          {cls.type === 'live' ? 'Trực tiếp' : 'Online'}
                        </div>
                      </div>
                      
                      <div className="class-content">
                        <h4 className="class-title">{cls.title}</h4>
                        <p className="class-instructor">{cls.instructor}</p>
                        
                        <div className="class-details">
                          <div className="detail-item">
                            <MapPin size={14} />
                            <span>{cls.room}</span>
                          </div>
                          <div className="detail-item">
                            <Users size={14} />
                            <span>{cls.students} học sinh</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="class-actions">
                        <button className="btn-primary btn-sm">
                          <Video size={16} />
                          Tham gia
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {dayClasses.length === 0 && (
                    <div className="empty-day">
                      <p>Không có lớp học</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="schedule-sidebar">
          <div className="upcoming-classes">
            <h3>Lớp học sắp tới</h3>
            <div className="upcoming-list">
              {scheduleData.slice(0, 3).map((cls) => (
                <div key={cls.id} className="upcoming-item">
                  <div className="upcoming-time">
                    <Clock size={16} />
                    <span>{cls.time}</span>
                  </div>
                  <div className="upcoming-content">
                    <h4>{cls.title}</h4>
                    <p>{cls.instructor}</p>
                  </div>
                  <button className="btn-outline btn-sm">Tham gia</button>
                </div>
              ))}
            </div>
          </div>

          <div className="schedule-stats">
            <h3>Thống kê tuần này</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">8</div>
                <div className="stat-label">Giờ học</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4</div>
                <div className="stat-label">Lớp học</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Tham gia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
