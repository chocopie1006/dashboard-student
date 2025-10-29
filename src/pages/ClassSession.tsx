import { FC, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, GraduationCap, ArrowRight } from 'lucide-react';
import './ClassSession.css';

interface ClassSessionProps {
  onExit?: () => void;
  sessionData?: {
    id: string;
    module: string;
    title: string;
    startTime: string;
    teacher: string;
    duration: string;
    status: 'upcoming' | 'in-progress' | 'completed';
    date?: string;
    description?: string;
  };
}

const ClassSession: FC<ClassSessionProps> = ({ onExit, sessionData }) => {
  const [countdown, setCountdown] = useState({ days: 1, hours: 16, minutes: 11, seconds: 23 });
  const [rating, setRating] = useState(0);
  
  // Skills data với %
  const skills = [
    { name: 'Từ vựng', percentage: 95 },
    { name: 'Ngữ pháp', percentage: 75 },
    { name: 'Phát âm', percentage: 90 },
    { name: 'Đọc và Đánh vần', percentage: 80 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const defaultSession = {
    id: '1',
    module: 'Speakwell Hero -> Unit 1> Lesson 1',
    title: 'Unit1: Hello - Lesson 1: Nghe nói',
    startTime: '18:00 - 18:15',
    date: '30 tháng 10, 2025',
    teacher: 'Sarah Johnson',
    duration: '15 phút học',
    status: 'upcoming' as const,
    description: 'Cơ bản, 15 phút học'
  };

  const session = sessionData || defaultSession;

  return (
    <div className="class-session-page">
      {/* Top Header */}
      <div className="session-header">
        <div className="header-left">
          <button className="nav-arrow-btn">
            <ChevronLeft size={20} />
          </button>
          <span className="module-label">{session.module}</span>
          <button className="nav-arrow-btn">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="header-center">
          <div className="title-with-badge">
            <h1 className="lesson-title">{session.title}</h1>
            <span className="status-badge-inline">Đã lên lịch</span>
          </div>
        </div>

        <div className="header-right">
          <button className="cancel-header-btn">Hủy</button>
          <button className="reschedule-header-btn">Đặt lại lịch</button>
          <button className="exit-btn" onClick={onExit}>
            Thoát lớp học
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="session-content">
        <div className="main-content-area">
          <div className="preparation-screen">
            <div className="background-image-overlay"></div>
            <div className="preparation-content">
              <div className="countdown-display">
                <div className="countdown-label">Lớp học bắt đầu trong</div>
                <div className="countdown-time">
                  <div className="countdown-unit">
                    <span className="countdown-value">{countdown.days}</span>
                    <span className="countdown-label-small">Ngày</span>
                  </div>
                  <span className="countdown-separator">:</span>
                  <div className="countdown-unit">
                    <span className="countdown-value">{formatTime(countdown.hours)}</span>
                    <span className="countdown-label-small">Giờ</span>
                  </div>
                  <span className="countdown-separator">:</span>
                  <div className="countdown-unit">
                    <span className="countdown-value">{formatTime(countdown.minutes)}</span>
                    <span className="countdown-label-small">Phút</span>
                  </div>
                  <span className="countdown-separator">:</span>
                  <div className="countdown-unit">
                    <span className="countdown-value">{formatTime(countdown.seconds)}</span>
                    <span className="countdown-label-small">Giây</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="session-sidebar">
          {/* ClassIn App Info */}
          <div className="classin-app-card">
            <div className="classin-header">
              <GraduationCap size={40} className="classin-icon" />
              <p className="classin-text">Để có trải nghiệm học tập tốt nhất, vui lòng cài đặt ứng dụng ClassIn. <span className="download-link">Tải ClassIn</span></p>
            </div>
            <div className="session-schedule">
              <div className="schedule-row">
                <span className="schedule-label">Giờ học:</span>
                <span className="schedule-value">{session.startTime}</span>
              </div>
              <div className="schedule-row">
                <span className="schedule-label">Ngày học:</span>
                <span className="schedule-value">{session.date}</span>
              </div>
              <div className="schedule-row">
                <span className="schedule-label">Độ khó:</span>
                <span className="schedule-value">Cơ bản</span>
              </div>
              <div className="schedule-row">
                <span className="schedule-label">Thời lượng:</span>
                <span className="schedule-value">15 phút</span>
              </div>
            </div>
          </div>

          {/* Student Info */}
          <div className="student-info-card">
            <img src="https://i.pravatar.cc/64?img=12" alt="Student" className="student-avatar" />
            <div className="student-details">
              <h3>Nguyen Minh Khoa</h3>
              <p>Lớp 1</p>
              <div className="points-display">
                <Star size={16} />
                <span>x 02</span>
              </div>
            </div>
          </div>

          {/* Class Info */}
          <div className="class-info">
            <h4>Kids Academic / Cambridge English Class 38</h4>
            <h3>{session.title}</h3>
          </div>

          {/* Progress */}
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '96%' }}></div>
            </div>
            <p className="progress-text">69/72 chủ đề hoàn thành</p>
          </div>

          {/* Teacher Feedback */}
          <div className="teacher-feedback">
            <div className="feedback-header">
              <img src="https://i.pravatar.cc/64?img=47" alt="Teacher" className="teacher-avatar" />
              <div>
                <p className="teacher-name">Giáo viên GIVIEANN C. TABUGA</p>
                <p className="feedback-label">Đánh giá</p>
              </div>
            </div>
            <p className="feedback-text">
              Nguyen Minh Khoa đã thể hiện xuất sắc trong buổi học Unit1: Hello - Lesson 1 của Kids Academic... <span className="read-more">Đọc thêm</span>
            </p>
            <div className="skills-progress">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-label">{skill.name}</div>
                  <div className="skill-circle-wrapper">
                    <div 
                      className="skill-circle-percentage" 
                      style={{
                        background: `conic-gradient(
                          #4ade80 0deg,
                          #4ade80 ${skill.percentage * 3.6}deg,
                          #e5e7eb ${skill.percentage * 3.6}deg,
                          #e5e7eb 360deg
                        )`
                      } as React.CSSProperties}
                    >
                      <span className="skill-percentage-inside">{skill.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Feedback */}
          <div className="session-feedback-card">
            <h3 className="feedback-title">Đánh giá của bạn về lớp học</h3>
            <div className="stars-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`star-btn ${rating >= star ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    <Star size={28} fill={rating >= star ? 'currentColor' : 'none'} />
                  </button>
              ))}
            </div>
            
            <div className="homework-section">
              <p className="homework-text">Làm bài tập về nhà ngay</p>
                <div className="score-retake-row">
                  <div className="score-badge">
                    <span className="score-text">Điểm của bạn - 10/10</span>
                  </div>
                  <button className="retake-btn">Làm lại <ArrowRight size={14} /></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSession;

