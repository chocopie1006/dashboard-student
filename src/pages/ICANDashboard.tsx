import { FC, useEffect, useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Bell, 
  Settings,
  Home,
  MessageCircle,
  BarChart3,
  Video,
  Users,
  FileText
} from 'lucide-react';
import './ICANDashboard.css';
import UpcomingClassNotification from '../components/UpcomingClassNotification';
import CalendarView from '../components/CalendarView';
import CourseDetailView from '../components/CourseDetailView';
import StudentOverview from '../components/StudentOverview';

interface ICANDashboardProps {
  onBack?: () => void;
}

interface ICANDashboardNavProps extends ICANDashboardProps {
  onOpenSchedule?: () => void;
  onOpenCourses?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenSettings?: () => void;
  onOpenHistory?: () => void;
  onJoinClass?: () => void;
}

const ICANDashboard: FC<ICANDashboardNavProps> = ({ onBack, onOpenSchedule, onOpenCourses, onOpenReports, onOpenMessages, onOpenSettings, onOpenHistory, onJoinClass }) => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [now, setNow] = useState<Date>(new Date());

  const handleBackToDashboard = () => {
    setShowCourseDetail(false);
    setSelectedCourse(null);
  };

  const handleStartLesson = (course: any) => {
    console.log('Starting lesson for course:', course.title);
    // Here you would typically navigate to the lesson or open a video player
  };

  // Schedule data for today
  const todaySchedule = [
    {
      id: 's1',
      startDateTime: new Date(new Date().setHours(14, 0, 0, 0)).toISOString(),
      durationMinutes: 60,
      lessonName: 'Speakwell Get ready -> KB Beginners -> Unit 1: Hello',
      teacher: { name: 'Đỗ Diệu Linh', avatar: 'https://i.pravatar.cc/64?img=47' },
      classType: '1-1',
      meetingLink: '#',
      color: '#0057A5'
    },
    {
      id: 's2',
      startDateTime: new Date(new Date().setHours(16, 0, 0, 0)).toISOString(),
      durationMinutes: 90,
      lessonName: 'Tiếng Anh > Giao tiếp > Mua sắm',
      teacher: { name: 'Cô Sarah Johnson', avatar: 'https://i.pravatar.cc/64?img=32' },
      classType: '1-n',
      meetingLink: '#',
      color: '#8CC63F'
    }
  ];

  // Tick every second for countdowns
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const notifications = [
    {
      id: 1,
      title: 'Bài tập mới được giao',
      message: 'Hoàn thành bài tập Toán chương 5',
      time: '2 giờ trước',
      type: 'assignment',
      color: '#0057A5'
    },
    {
      id: 2,
      title: 'Lịch học thay đổi',
      message: 'Lớp Tiếng Anh chuyển từ 14:00 sang 15:00',
      time: '1 ngày trước',
      type: 'schedule',
      color: '#8CC63F'
    },
    {
      id: 3,
      title: 'Kết quả kiểm tra',
      message: 'Điểm kiểm tra Lập trình: 9.0/10',
      time: '3 ngày trước',
      type: 'result',
      color: '#DB2691'
    }
  ];

  return (
    <div className="ican-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/ff/ICAN_logo.png" 
              alt="ICAN Logo" 
              className="sidebar-logo-img"
            />
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <Home size={20} />
            <span>Trang chủ</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenCourses?.(); }}>
            <BookOpen size={20} />
            <span>Khóa học</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenSchedule?.(); }}>
            <Calendar size={20} />
            <span>Lịch học</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenReports?.(); }}>
            <BarChart3 size={20} />
            <span>Báo cáo</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenHistory?.(); }}>
            <FileText size={20} />
            <span>Lịch sử</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenMessages?.(); }}>
            <MessageCircle size={20} />
            <span>Tin nhắn</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenSettings?.(); }}>
            <Settings size={20} />
            <span>Cài đặt</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Chào mừng trở lại, Minh!</h1>
            <p>Hãy tiếp tục hành trình học tập của bạn</p>
          </div>
          <div className="header-right">
            {onBack && (
              <button className="back-main-btn" onClick={onBack}>
                Quay về Main Page
              </button>
            )}
            <div className="notification-icon">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </div>
            <div className="user-avatar">
              <img src="https://img.lovepik.com/free-png/20211228/lovepik-portraits-of-primary-school-students-png-image_400945059_wh860.png" alt="User" />
            </div>
          </div>
        </header>

        {showCourseDetail && selectedCourse ? (
          <CourseDetailView
            course={selectedCourse}
            onBack={handleBackToDashboard}
            onStartLesson={handleStartLesson}
          />
        ) : (
          <>
            {/* Upcoming Class Notification */}
        <UpcomingClassNotification
          className="Tiếng Anh Giao Tiếp Cơ Bản"
          instructor="Cô Sarah Johnson"
          startTime="10:30"
          date="21 thg 10 năm 2025"
          onJoinClass={() => {
            // Handle join class action
            console.log('Joining class...');
          }}
        />

        {/* Main Grid: Overview + Upcoming + Notifications */}
        <div className="dashboard-grid">
          {/* Overview Section (replaces Courses) */}
          <div className="overview-wrapper">
            <StudentOverview />
          </div>

          {/* Notifications Section */}
          <div className="notifications-section">
            <div className="section-header">
              <h2>Thông báo</h2>
              <a href="#" className="view-all">Xem tất cả</a>
            </div>
            <div className="notifications-list">
              {notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <div 
                    className="notification-icon-small" 
                    style={{ backgroundColor: notification.color }}
                  ></div>
                  <div className="notification-content">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Section */}
          <div className="schedule-section">
            <div className="section-header">
              <h2>Lịch học hôm nay</h2>
              <a href="#" className="view-all">Xem lịch</a>
            </div>
            <div className="schedule-list">
              {todaySchedule.map(item => {
                const start = new Date(item.startDateTime);
                const dateLabel = start.toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' });
                const timeLabel = start.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false });
                const diffMs = Math.max(0, start.getTime() - now.getTime());
                const totalSeconds = Math.floor(diffMs / 1000);
                const days = Math.floor(totalSeconds / 86400);
                const hours = Math.floor((totalSeconds % 86400) / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                const pad = (n: number) => n.toString().padStart(2, '0');
                const countdown = days > 0
                  ? `${days}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
                  : `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
                return (
                  <div key={item.id} className="schedule-item">
                    <div className="schedule-timebox">
                      <div className="time time-accent">{timeLabel}</div>
                      <div className="date">{dateLabel}</div>
                      <div className="countdown-row">
                        <span className="countdown-icon">🕒</span>
                        <span className="countdown-text">{countdown}</span>
                      </div>
                    </div>
                    <div className="schedule-content">
                      <div className="title-grid">
                        <div className="title-left">
                          <span className="dot" style={{ backgroundColor: '#a16207' }}></span>
                          <h4 className="lesson-name">{item.lessonName}</h4>
                          <span className="class-type class-type-pill"><Users size={14} /> {item.classType}</span>
                        </div>
                        <span className="teacher-inline">
                          <img className="teacher-avatar" src={item.teacher.avatar} alt={item.teacher.name} />
                          {item.teacher.name}
                        </span>
                        <div className="status-row">
                          <span className="badge badge-scheduled-soft">Đã lên lịch</span>
                        </div>
                      </div>
                    </div>
                    <button className="join-icon-btn" onClick={onJoinClass} aria-label="Tham gia buổi học">
                      <Video size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calendar on Dashboard */}
        <CalendarView onOpenSchedule={onOpenSchedule} />
      </>
        )}
      </div>
    </div>
  );
};

export default ICANDashboard;
