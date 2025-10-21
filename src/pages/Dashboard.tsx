import { FC } from 'react';
import { 
  Calendar,
  Target,
  Clock
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import CalendarView from '../components/CalendarView';

const Dashboard: FC = () => {
  const courses = [
    {
      id: 1,
      title: 'Tiếng Anh Giao Tiếp Cơ Bản',
      subtitle: 'Phát triển kỹ năng giao tiếp',
      description: 'Khóa học giúp bạn tự tin giao tiếp tiếng Anh trong cuộc sống hàng ngày.',
      targetAudience: 'Người mới bắt đầu',
      benefits: 'Luyện tập thực hành',
      imageUrl: 'https://via.placeholder.com/400x200/0057A5/ffffff?text=English',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      nextLesson: 'Bài 16: Mua sắm',
      color: '#0057A5'
    },
    {
      id: 2,
      title: 'Lập Trình JavaScript',
      subtitle: 'Từ cơ bản đến nâng cao',
      description: 'Học lập trình JavaScript một cách bài bản và thực tế.',
      targetAudience: 'Người có kinh nghiệm',
      benefits: 'Dự án thực tế',
      imageUrl: 'https://via.placeholder.com/400x200/8CC63F/ffffff?text=JavaScript',
      progress: 60,
      totalLessons: 30,
      completedLessons: 18,
      nextLesson: 'Bài 19: Async/Await',
      color: '#8CC63F'
    },
    {
      id: 3,
      title: 'Toán Nâng Cao Lớp 12',
      subtitle: 'Chuẩn bị thi THPT',
      description: 'Ôn tập và nâng cao kiến thức toán học cho kỳ thi quan trọng.',
      targetAudience: 'Học sinh lớp 12',
      benefits: 'Luyện thi chuyên sâu',
      imageUrl: 'https://via.placeholder.com/400x200/DB2691/ffffff?text=Math',
      progress: 45,
      totalLessons: 25,
      completedLessons: 11,
      nextLesson: 'Bài 12: Tích phân',
      color: '#DB2691'
    },
    {
      id: 4,
      title: 'Vật Lý Cơ Bản',
      subtitle: 'Hiểu về thế giới tự nhiên',
      description: 'Khám phá các nguyên lý vật lý cơ bản qua thí nghiệm thú vị.',
      targetAudience: 'Học sinh THPT',
      benefits: 'Thí nghiệm trực quan',
      imageUrl: 'https://via.placeholder.com/400x200/F59E0B/ffffff?text=Physics',
      progress: 30,
      totalLessons: 18,
      completedLessons: 5,
      nextLesson: 'Bài 6: Động học',
      color: '#F59E0B'
    }
  ];

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2>Chào mừng bạn quay trở lại!</h2>
          <p>Hãy tiếp tục hành trình học tập của bạn với ICAN</p>
        </div>
        <div className="welcome-actions">
          <button className="btn-primary">
            <Calendar size={20} />
            Xem lịch học
          </button>
          <button className="btn-secondary">
            <Target size={20} />
            Đặt mục tiêu
          </button>
        </div>
      </div>


      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Courses Section */}
        <div className="courses-section">
          <div className="section-header">
            <h3>Khóa học của bạn</h3>
            <button className="btn-text">Xem tất cả</button>
          </div>
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="upcoming-section">
          <div className="section-header">
            <h3>Lớp học sắp tới</h3>
            <button className="btn-text">Xem lịch</button>
          </div>
          <div className="upcoming-classes">
            <div className="class-item">
              <div className="class-time">
                <Clock size={16} />
                <span>14:00</span>
              </div>
              <div className="class-info">
                <h4>Tiếng Anh Giao Tiếp</h4>
                <p>Phòng học 101</p>
              </div>
              <button className="join-btn">Tham gia</button>
            </div>
            <div className="class-item">
              <div className="class-time">
                <Clock size={16} />
                <span>16:00</span>
              </div>
              <div className="class-info">
                <h4>Lập Trình JavaScript</h4>
                <p>Phòng học 203</p>
              </div>
              <button className="join-btn">Tham gia</button>
            </div>
          </div>
        </div>

        {/* Calendar - Larger */}
        <div className="calendar-section calendar-large">
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
