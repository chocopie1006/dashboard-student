import { FC, useState } from 'react';
import {
  BookOpen,
  Calendar,
  Bell,
  Settings,
  Home,
  MessageCircle,
  BarChart3,
  Search,
  Star,
  Clock,
  Users,
  Play,
  Award,
  TrendingUp
} from 'lucide-react';
import './ICANCourses.css';
import CourseDetailView from '../components/CourseDetailView';

interface ICANCoursesProps {
  onBack?: () => void;
  onOpenDashboard?: () => void;
  onOpenSchedule?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenSettings?: () => void;
}

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  instructor?: string;
  rating?: number;
  students?: number;
  duration?: string;
  price?: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLesson: string;
  color: string;
  imageUrl: string;
  category?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  isEnrolled?: boolean;
  startDate?: string;
  endDate?: string;
  targetAudience: string;
  benefits: string;
}

const ICANCourses: FC<ICANCoursesProps> = ({ onBack, onOpenDashboard, onOpenSchedule, onOpenReports, onOpenMessages, onOpenSettings }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showCourseDetail, setShowCourseDetail] = useState(false);

  const handleContinueCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowCourseDetail(true);
  };

  const handleBackToCourses = () => {
    setShowCourseDetail(false);
    setSelectedCourse(null);
  };

  const handleStartLesson = (course: Course) => {
    console.log('Starting lesson for course:', course.title);
    // Here you would typically navigate to the lesson or open a video player
  };

  const categories = [
    { id: 'all', name: 'Tất cả khóa học', count: 6 },
    { id: 'speakwell', name: 'SpeakWell', count: 2 },
    { id: 'easy-speak-teens', name: 'Easy Speak For Teens', count: 2 },
    { id: 'easy-ielts', name: 'Easy IELTS', count: 2 }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: 'SpeakWell - Bé tự tin giao tiếp tiếng Anh chỉ sau 3 tháng',
      subtitle: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết',
      description: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết đồng thời nuôi dưỡng đam mê học tập, giúp bé hào hứng, yêu thích tiếng Anh hơn. Chương trình dành cho học viên từ 7 - 12 tuổi ở mọi trình độ với mô hình học 1:1 hoặc 1:2 trực tiếp với giáo viên.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.9,
      students: 2500,
      duration: '3 tháng',
      price: 'Liên hệ tư vấn',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      nextLesson: 'Bài 16: Giao tiếp hàng ngày',
      color: '#0057A5',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_speak_well_c9926de568.png&w=1920&q=75',
      category: 'speakwell',
      level: 'Beginner',
      tags: ['Tiếng Anh trẻ em', 'Giao tiếp', '1:1 với giáo viên'],
      isEnrolled: true,
      startDate: '2025-01-15',
      endDate: '2025-04-15',
      targetAudience: 'Học viên từ 7 - 12 tuổi',
      benefits: 'Mô hình học 1:1 hoặc 1:2 trực tiếp với giáo viên'
    },
    {
      id: 2,
      title: 'English Adventure with Milo - Tiếp thu dễ dàng, vững vàng nền tảng',
      subtitle: 'Tạo dựng và bổ trợ nền tảng Ngữ pháp cho trẻ',
      description: 'Tạo dựng và bổ trợ nền tảng Ngữ pháp cho trẻ ngay từ đầu, đặt nền móng vững chắc để trẻ phát triển ở các trình độ cao hơn. Chương trình tự học tại nhà dành cho học viên từ 5 - 11 tuổi.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.8,
      students: 1800,
      duration: '6 tháng',
      price: 'Liên hệ tư vấn',
      progress: 60,
      totalLessons: 30,
      completedLessons: 18,
      nextLesson: 'Bài 19: Ngữ pháp cơ bản',
      color: '#8CC63F',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_english_ab7ad07ae4.png&w=1920&q=75',
      category: 'easy-speak-teens',
      level: 'Beginner',
      tags: ['Ngữ pháp', 'Tự học tại nhà', 'Trẻ em'],
      isEnrolled: true,
      startDate: '2025-01-20',
      endDate: '2025-07-20',
      targetAudience: 'Học viên từ 5 - 11 tuổi',
      benefits: 'Tăng khả năng sử dụng ngôn ngữ thông qua việc luyện tập'
    },
    {
      id: 3,
      title: 'Easy Speak For Teens - Tiếng Anh thiếu niên',
      subtitle: 'Nâng cao kỹ năng giao tiếp cho thanh thiếu niên',
      description: 'Chương trình học tiếng Anh được thiết kế đặc biệt cho thanh thiếu niên, giúp các em tự tin giao tiếp và chuẩn bị tốt cho các kỳ thi quốc tế.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.7,
      students: 1200,
      duration: '4 tháng',
      price: 'Liên hệ tư vấn',
      progress: 45,
      totalLessons: 25,
      completedLessons: 11,
      nextLesson: 'Bài 12: Thuyết trình',
      color: '#DB2691',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_easy_pass_6f72975b0e.png&w=1920&q=75',
      category: 'easy-speak-teens',
      level: 'Intermediate',
      tags: ['Tiếng Anh thiếu niên', 'Giao tiếp', 'Kỳ thi quốc tế'],
      isEnrolled: true,
      startDate: '2025-01-10',
      endDate: '2025-05-10',
      targetAudience: 'Học viên từ 13 - 17 tuổi',
      benefits: 'Phát triển kỹ năng giao tiếp tự tin và hiệu quả'
    },
    {
      id: 4,
      title: 'Easy IELTS - Luyện thi IELTS cam kết đầu ra',
      subtitle: 'Phương pháp LIPE - Lý thuyết, Tương tác, Thực hành, Kiểm tra',
      description: 'Khóa học luyện thi IELTS với cam kết đầu ra, áp dụng phương pháp LIPE giúp học viên đạt kết quả cao trong kỳ thi IELTS.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.9,
      students: 2100,
      duration: '6 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 30,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu IELTS',
      color: '#F59E0B',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_easy_ielts_727e1a6281.png&w=1920&q=75',
      category: 'easy-ielts',
      level: 'Advanced',
      tags: ['IELTS', 'Cam kết đầu ra', 'Phương pháp LIPE'],
      isEnrolled: false,
      startDate: '2025-02-01',
      endDate: '2025-08-01',
      targetAudience: 'Học viên từ 13 - 17 tuổi',
      benefits: 'Chuẩn bị tốt nhất cho kỳ thi IELTS'
    },
    {
      id: 5,
      title: 'SpeakWell Advanced - Tiếng Anh người lớn',
      subtitle: 'Giao tiếp chuyên nghiệp cho người lớn',
      description: 'Khóa học tiếng Anh giao tiếp nâng cao dành cho người lớn, tập trung vào kỹ năng thuyết trình và giao tiếp trong môi trường công việc.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.8,
      students: 680,
      duration: '3 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 15,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu khóa học',
      color: '#0057A5',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_adult_easy_speak_903d04821e.png&w=1920&q=75',
      category: 'speakwell',
      level: 'Advanced',
      tags: ['Tiếng Anh người lớn', 'Giao tiếp', 'Công việc'],
      isEnrolled: false,
      startDate: '2025-03-01',
      endDate: '2025-06-01',
      targetAudience: 'Học viên từ 18 tuổi trở lên',
      benefits: 'Cải thiện kỹ năng giao tiếp tiếng Anh trong công việc'
    },
    {
      id: 6,
      title: 'Easy IELTS Foundation - Nền tảng IELTS',
      subtitle: 'Xây dựng nền tảng vững chắc cho IELTS',
      description: 'Khóa học nền tảng IELTS dành cho người mới bắt đầu, giúp học viên làm quen với format bài thi và xây dựng kiến thức cơ bản.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.6,
      students: 950,
      duration: '4 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu IELTS Foundation',
      color: '#06B6D4',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_public_speaking_15b6909efc.png&w=1920&q=75',
      category: 'easy-ielts',
      level: 'Beginner',
      tags: ['IELTS Foundation', 'Nền tảng', 'Người mới bắt đầu'],
      isEnrolled: false,
      startDate: '2025-02-15',
      endDate: '2025-06-15',
      targetAudience: 'Học viên từ 18 tuổi trở lên',
      benefits: 'Đạt điểm IELTS mong muốn trong thời gian ngắn'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.instructor?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (course.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) || false);
    return matchesCategory && matchesSearch;
  });

  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const availableCourses = courses.filter(course => !course.isEnrolled);

  return (
    <div className="ican-courses">
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
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenDashboard?.(); }}>
            <Home size={20} />
            <span>Trang chủ</span>
          </a>
          <a href="#" className="nav-item active">
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
        {showCourseDetail && selectedCourse ? (
          <CourseDetailView
            course={selectedCourse}
            onBack={handleBackToCourses}
            onStartLesson={handleStartLesson}
          />
        ) : (
          <>
            {/* Header */}
            <header className="courses-header">
          <div className="header-left">
            <h1>Khóa học của tôi</h1>
            <p>Quản lý và theo dõi tiến độ học tập</p>
          </div>
          <div className="header-right">
            {onBack && (
              <button className="back-main-btn" onClick={onBack}>
                Quay về Main Page
              </button>
            )}
            <div className="notification-icon">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-avatar">
              <img src="https://img.lovepik.com/free-png/20211228/lovepik-portraits-of-primary-school-students-png-image_400945059_wh860.png" alt="User" />
            </div>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f0f7ff' }}>
              <BookOpen size={24} color="#0057A5" />
            </div>
            <div className="stat-content">
              <h3>{enrolledCourses.length}</h3>
              <p>Khóa học đang học</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f5fdf0' }}>
              <TrendingUp size={24} color="#8CC63F" />
            </div>
            <div className="stat-content">
              <h3>78%</h3>
              <p>Tiến độ trung bình</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#fdf0f7' }}>
              <Award size={24} color="#DB2691" />
            </div>
            <div className="stat-content">
              <h3>5</h3>
              <p>Chứng chỉ đạt được</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f0f7ff' }}>
              <Clock size={24} color="#0057A5" />
            </div>
            <div className="stat-content">
              <h3>156h</h3>
              <p>Tổng giờ học</p>
            </div>
          </div>
        </div>

        {/* Courses Content */}
        <div className="courses-content">
          {/* Sidebar Categories */}
          <div className="courses-sidebar">
            <div className="search-section">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="categories-section">
              <h3>Danh mục khóa học</h3>
              <div className="categories-list">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="view-controls">
              <h3>Chế độ xem</h3>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <div className="grid-icon"></div>
                  Lưới
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <div className="list-icon"></div>
                  Danh sách
                </button>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="courses-main">
            {/* Enrolled Courses */}
            {enrolledCourses.length > 0 && (
              <div className="courses-section">
                <div className="section-header">
                  <h2>Khóa học đang học</h2>
                  <span className="course-count">{enrolledCourses.length} khóa học</span>
                </div>
                <div className={`courses-grid ${viewMode}`}>
                  {enrolledCourses.map(course => (
                    <div key={course.id} className="course-card">
                      <div className="course-image">
                        <img src={course.imageUrl} alt={course.title} />
                        <div className="course-badge enrolled">Đang học</div>
                      </div>

                      <div className="course-content">
                        <div className="course-header">
                          <h3 className="course-title">{course.title}</h3>
                          <p className="course-subtitle">{course.subtitle}</p>
                        </div>

                        <div className="course-meta">
                          <div className="meta-item">
                            <Users size={14} />
                            <span>{course.instructor}</span>
                          </div>
                          <div className="meta-item">
                            <Star size={14} />
                            <span>{course.rating}</span>
                          </div>
                          <div className="meta-item">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        <div className="course-progress">
                          <div className="progress-info">
                            <span className="progress-text">{course.progress}% hoàn thành</span>
                            <span className="lessons-text">{course.completedLessons}/{course.totalLessons} bài học</span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                            ></div>
                          </div>
                        </div>

                        <div className="next-lesson">
                          <Clock size={16} />
                          <span>Tiếp theo: {course.nextLesson}</span>
                        </div>
                      </div>

                      <div className="course-actions">
                        <button 
                          className="btn-continue" 
                          style={{ backgroundColor: course.color }}
                          onClick={() => handleContinueCourse(course)}
                        >
                          <Play size={16} />
                          Tiếp tục học
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Courses */}
            {availableCourses.length > 0 && (
              <div className="courses-section">
                <div className="section-header">
                  <h2>Khóa học có sẵn</h2>
                  <span className="course-count">{availableCourses.length} khóa học</span>
                </div>
                <div className={`courses-grid ${viewMode}`}>
                  {availableCourses.map(course => (
                    <div key={course.id} className="course-card">
                      <div className="course-image">
                        <img src={course.imageUrl} alt={course.title} />
                        <div className="course-badge available">Có sẵn</div>
                        <div className="course-price">{course.price}</div>
                      </div>

                      <div className="course-content">
                        <div className="course-header">
                          <h3 className="course-title">{course.title}</h3>
                          <p className="course-subtitle">{course.subtitle}</p>
                        </div>

                        <div className="course-meta">
                          <div className="meta-item">
                            <Users size={14} />
                            <span>{course.instructor}</span>
                          </div>
                          <div className="meta-item">
                            <Star size={14} />
                            <span>{course.rating}</span>
                          </div>
                          <div className="meta-item">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        <div className="course-description">
                          <p>{course.description}</p>
                        </div>

                        <div className="course-tags">
                          {course.tags?.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="course-actions">
                        <button className="btn-enroll" style={{ backgroundColor: course.color }}>
                          Đăng ký ngay
                        </button>
                        <button className="btn-outline" style={{ borderColor: course.color, color: course.color }}>
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">
                  <Search size={48} />
                </div>
                <h3>Không tìm thấy khóa học</h3>
                <p>Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác</p>
                <button className="btn-primary">Khám phá khóa học</button>
              </div>
            )}
          </div>
        </div>
      </>
        )}
      </div>
    </div>
  );
};

export default ICANCourses;
