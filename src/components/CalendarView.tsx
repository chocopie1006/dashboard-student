import { FC, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Video } from 'lucide-react';
import CalendarModal from './CalendarModal';
import './CalendarView.css';

interface ClassSchedule {
  id: number;
  title: string;
  time: string;
  instructor: string;
  type: 'online' | 'offline';
  room?: string;
  link?: string;
}

interface CalendarViewProps {
  onOpenSchedule?: () => void;
}

const CalendarView: FC<CalendarViewProps> = ({ onOpenSchedule }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dữ liệu lớp học mẫu
  const classSchedules: { [key: string]: ClassSchedule[] } = {
    // Tháng 10/2025
    '2025-10-15': [
      {
        id: 1,
        title: 'SpeakWell - Bài 16: Mua sắm',
        time: '14:00 - 15:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/abc-def-ghi'
      },
      {
        id: 2,
        title: 'English Adventure - Ngữ pháp cơ bản',
        time: '16:00 - 17:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/room-203'
      }
    ],
    '2025-10-16': [
      {
        id: 3,
        title: 'SpeakWell - Bài 17: Du lịch',
        time: '10:00 - 11:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/xyz-123-abc'
      },
      {
        id: 4,
        title: 'Toán Nâng Cao - Tích phân',
        time: '19:00 - 20:30',
        instructor: 'Cô Lan Anh',
        type: 'online',
        link: 'https://meet.google.com/room-101'
      }
    ],
    '2025-10-17': [
      {
        id: 5,
        title: 'SpeakWell - Bài 18: Gia đình',
        time: '15:00 - 16:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/family-123'
      }
    ],
    '2025-10-20': [
      {
        id: 6,
        title: 'English Adventure - Từ vựng nâng cao',
        time: '15:00 - 16:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/room-101'
      },
      {
        id: 7,
        title: 'Lập Trình JavaScript - Async/Await',
        time: '16:30 - 18:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/js-async-123'
      }
    ],
    '2025-10-21': [
      {
        id: 8,
        title: 'SpeakWell - Bài 19: Công việc',
        time: '14:00 - 15:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/work-123'
      },
      {
        id: 9,
        title: 'Toán Nâng Cao - Đạo hàm',
        time: '19:00 - 20:30',
        instructor: 'Cô Lan Anh',
        type: 'online',
        link: 'https://meet.google.com/room-201'
      }
    ],
    '2025-10-22': [
      {
        id: 10,
        title: 'English Adventure - Ngữ pháp nâng cao',
        time: '10:00 - 11:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/room-203'
      },
      {
        id: 11,
        title: 'Lập Trình JavaScript - Promises',
        time: '16:00 - 17:30',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/promises-123'
      }
    ],
    '2025-10-23': [
      {
        id: 12,
        title: 'SpeakWell - Bài 20: Sở thích',
        time: '15:00 - 16:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/hobbies-123'
      }
    ],
    '2025-10-24': [
      {
        id: 13,
        title: 'Toán Nâng Cao - Giới hạn',
        time: '19:00 - 20:30',
        instructor: 'Cô Lan Anh',
        type: 'online',
        link: 'https://meet.google.com/room-101'
      }
    ],
    '2025-10-27': [
      {
        id: 14,
        title: 'SpeakWell - Bài 21: Thời tiết',
        time: '14:00 - 15:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/weather-123'
      },
      {
        id: 15,
        title: 'English Adventure - Đọc hiểu',
        time: '16:00 - 17:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/room-203'
      }
    ],
    '2025-10-28': [
      {
        id: 16,
        title: 'Lập Trình JavaScript - DOM Manipulation',
        time: '16:30 - 18:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/dom-123'
      }
    ],
    '2025-10-29': [
      {
        id: 17,
        title: 'SpeakWell - Bài 22: Thể thao',
        time: '15:00 - 16:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/sports-123'
      },
      {
        id: 18,
        title: 'Toán Nâng Cao - Phương trình',
        time: '19:00 - 20:30',
        instructor: 'Cô Lan Anh',
        type: 'online',
        link: 'https://meet.google.com/room-201'
      }
    ],
    '2025-10-30': [
      {
        id: 19,
        title: 'English Adventure - Viết luận',
        time: '10:00 - 11:00',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/room-101'
      }
    ],
    '2025-10-31': [
      {
        id: 20,
        title: 'SpeakWell - Bài 23: Nghề nghiệp',
        time: '14:00 - 15:00',
        instructor: 'Cô Sarah Johnson',
        type: 'online',
        link: 'https://meet.google.com/career-123'
      },
      {
        id: 21,
        title: 'Lập Trình JavaScript - Events',
        time: '16:00 - 17:30',
        instructor: 'Thầy Minh Đức',
        type: 'online',
        link: 'https://meet.google.com/events-123'
      }
    ]
  };

  const getClassesForDate = (date: Date): ClassSchedule[] => {
    const dateKey = date.toISOString().split('T')[0];
    return classSchedules[dateKey] || [];
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Thêm các ngày trống của tuần trước
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Thêm các ngày trong tháng
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getWeekDays = (date: Date) => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    
    return week;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long'
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const hasClasses = (date: Date) => {
    return getClassesForDate(date).length > 0;
  };

  const renderMonthView = () => {
    const days = getDaysInMonth(currentDate);

  return (
      <div className="month-grid">
        {['CN','T2','T3','T4','T5','T6','T7'].map(d => (
          <div key={d} className="dow">{d}</div>
        ))}
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`month-cell ${day && isToday(day) ? 'today' : ''} ${day && hasClasses(day) ? 'has-classes' : ''} ${!day ? 'empty' : ''}`}
            onClick={() => day && handleDateClick(day)}
          >
            {day && (
              <>
                <div className="date-number">{day.getDate()}</div>
                {hasClasses(day) && (
                  <div className="class-list">
                    {getClassesForDate(day).slice(0, 2).map((classItem) => (
                      <div key={classItem.id} className="class-item-small">
                        <div className="class-time-small">{classItem.time.split(' - ')[0]}</div>
                        <div className="class-title-small">{classItem.title.split(' - ')[0]}</div>
                      </div>
                    ))}
                    {getClassesForDate(day).length > 2 && (
                      <div className="more-classes">
                        +{getClassesForDate(day).length - 2} lớp khác
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderWeekView = () => {
    const weekDays = getWeekDays(currentDate);
    
    return (
      <div className="week-grid">
        <div className="week-header">
          {weekDays.map((day, index) => (
            <div key={index} className="week-day-header">
              <div className="day-name">{['CN','T2','T3','T4','T5','T6','T7'][index]}</div>
              <div className={`day-number ${isToday(day) ? 'today' : ''}`}>
                {day.getDate()}
              </div>
            </div>
          ))}
        </div>
        <div className="week-content">
          {weekDays.map((day, index) => (
            <div 
              key={index} 
              className={`week-day-cell ${hasClasses(day) ? 'has-classes' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {getClassesForDate(day).map((classItem) => (
                <div key={classItem.id} className="week-class-item">
                  <div className="class-time-small">{classItem.time.split(' - ')[0]}</div>
                  <div className="class-title-small">{classItem.title}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    const classes = getClassesForDate(currentDate);
    
    return (
      <div className="day-view">
        <div className="day-header">
          <h3>{formatDate(currentDate)}</h3>
        </div>
        <div className="day-classes">
          {classes.length === 0 ? (
            <div className="no-classes">
              <p>Không có lớp học nào trong ngày này</p>
            </div>
          ) : (
            classes.map((classItem) => (
              <div key={classItem.id} className="day-class-item">
                <div className="class-time">
                  <Clock size={16} />
                  <span>{classItem.time}</span>
                </div>
                <div className="class-info">
                  <h4>{classItem.title}</h4>
                  <p>{classItem.instructor}</p>
                  <div className="class-meta">
                    {classItem.type === 'online' ? (
                      <div className="meta-item">
                        <Video size={14} />
                        <span>Online</span>
                      </div>
                    ) : (
                      <div className="meta-item">
                        <Users size={14} />
                        <span>{classItem.room}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="join-class-btn">
                  Tham gia
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="calendar-home">
      <div className="calendar-home-header">
        <h2>Lịch học</h2>
        <div className="calendar-actions">
          <div className="calendar-navigation">
            <button 
              className="nav-btn" 
              onClick={() => navigateMonth('prev')}
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="current-month">{formatDate(currentDate)}</h3>
            <button 
              className="nav-btn" 
              onClick={() => navigateMonth('next')}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="view-switch">
            <button 
              className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
              onClick={() => setViewMode('month')}
            >
              Tháng
            </button>
            <button 
              className={`view-btn ${viewMode === 'week' ? 'active' : ''}`}
              onClick={() => setViewMode('week')}
            >
              Tuần
            </button>
            <button 
              className={`view-btn ${viewMode === 'day' ? 'active' : ''}`}
              onClick={() => setViewMode('day')}
            >
              Ngày
            </button>
          </div>
          <button className="btn-text" onClick={onOpenSchedule}>
            Xem tất cả
          </button>
        </div>
      </div>
      
      {viewMode === 'month' && renderMonthView()}
      {viewMode === 'week' && renderWeekView()}
      {viewMode === 'day' && renderDayView()}
      
      {selectedDate && (
        <CalendarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedDate={selectedDate}
          classes={getClassesForDate(selectedDate)}
        />
      )}
    </div>
  );
};

export default CalendarView;