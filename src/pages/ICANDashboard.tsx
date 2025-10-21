import { FC } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Bell, 
  Settings,
  Home,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import './ICANDashboard.css';
import UpcomingClassNotification from '../components/UpcomingClassNotification';
import CourseCard from '../components/CourseCard';
import CalendarView from '../components/CalendarView';

interface ICANDashboardProps {
  onBack?: () => void;
}

interface ICANDashboardNavProps extends ICANDashboardProps {
  onOpenSchedule?: () => void;
  onOpenCourses?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenSettings?: () => void;
}

const ICANDashboard: FC<ICANDashboardNavProps> = ({ onBack, onOpenSchedule, onOpenCourses, onOpenReports, onOpenMessages, onOpenSettings }) => {
  const courses = [
    {
      id: 1,
      title: 'SpeakWell - Bé tự tin giao tiếp tiếng Anh chỉ sau 3 tháng',
      subtitle: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết',
      description: 'Đồng thời nuôi dưỡng đam mê học tập, giúp bé hào hứng, yêu thích tiếng Anh hơn.',
      targetAudience: 'Học viên từ 7 - 12 tuổi',
      benefits: 'Mô hình học 1:1 hoặc 1:2 trực tiếp với giáo viên',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_speak_well_c9926de568.png&w=1920&q=75',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      nextLesson: 'Bài 16: Mua sắm',
      color: '#0057A5'
    },
    {
      id: 2,
      title: 'English Adventure with Milo - Tiếp thu dễ dàng, vững vàng nền tảng',
      subtitle: 'Tạo dựng và bổ trợ nền tảng Ngữ pháp cho trẻ',
      description: 'Đặt nền móng vững chắc để trẻ phát triển ở các trình độ cao hơn.',
      targetAudience: 'Học viên từ 5 - 11 tuổi',
      benefits: 'Chương trình tự học tại nhà',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_english_ab7ad07ae4.png&w=1920&q=75',
      progress: 60,
      totalLessons: 30,
      completedLessons: 18,
      nextLesson: 'Bài 19: Async/Await',
      color: '#8CC63F'
    }
  ];

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

        {/* Upcoming Class Notification */}
        <UpcomingClassNotification 
          className="Tiếng Anh Giao Tiếp Cơ Bản"
          instructor="Cô Sarah Johnson"
          startTime="10:30"
          endTime="11:30"
          date="21 thg 10 năm 2025"
          onJoinClass={() => {
            // Handle join class action
            console.log('Joining class...');
          }}
        />

        {/* Main Grid: Courses + Upcoming + Notifications */}
        <div className="dashboard-grid">
          {/* Courses Section */}
          <div className="courses-section">
            <div className="section-header">
              <h2>Khóa học của bạn</h2>
              <a href="#" className="view-all">Xem tất cả</a>
            </div>
            <div className="courses-list">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
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
              <div className="schedule-item">
                <div className="schedule-time">14:00</div>
                <div className="schedule-content">
                  <h4>Tiếng Anh Giao Tiếp</h4>
                  <p>Link online</p>
                </div>
                <button className="join-btn" style={{ backgroundColor: '#0057A5' }}>
                  Tham gia
                </button>
              </div>
              <div className="schedule-item">
                <div className="schedule-time">16:00</div>
                <div className="schedule-content">
                  <h4>Lập Trình JavaScript</h4>
                  <p>Link online</p>
                </div>
                <button className="join-btn" style={{ backgroundColor: '#8CC63F' }}>
                  Tham gia
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar on Dashboard */}
        <CalendarView onOpenSchedule={onOpenSchedule} />
      </div>
    </div>
  );
};

export default ICANDashboard;
