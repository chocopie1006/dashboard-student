import { FC, useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const Courses: FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'language', name: 'Ngôn ngữ' },
    { id: 'technology', name: 'Công nghệ' },
    { id: 'math', name: 'Toán học' },
    { id: 'science', name: 'Khoa học' },
    { id: 'business', name: 'Kinh doanh' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Tiếng Anh Giao Tiếp Cơ Bản',
      subtitle: 'Phát triển kỹ năng giao tiếp',
      category: 'Ngôn ngữ',
      instructor: 'Ms. Sarah Johnson',
      rating: 4.8,
      students: 1250,
      duration: '40 giờ',
      price: '2,500,000 VNĐ',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      nextLesson: 'Bài 16: Mua sắm',
      color: '#0057A5',
      description: 'Khóa học tiếng Anh giao tiếp từ cơ bản đến nâng cao, phù hợp cho người mới bắt đầu.',
      targetAudience: 'Người mới bắt đầu',
      benefits: 'Luyện tập thực hành',
      imageUrl: 'https://via.placeholder.com/400x200/0057A5/ffffff?text=English',
      tags: ['Cơ bản', 'Giao tiếp', 'Thực hành']
    },
    {
      id: 2,
      title: 'Lập Trình JavaScript Từ A-Z',
      subtitle: 'Từ cơ bản đến nâng cao',
      category: 'Công nghệ',
      instructor: 'Mr. David Chen',
      rating: 4.9,
      students: 2100,
      duration: '60 giờ',
      price: '3,500,000 VNĐ',
      progress: 60,
      totalLessons: 30,
      completedLessons: 18,
      nextLesson: 'Bài 19: Async/Await',
      color: '#8CC63F',
      description: 'Học JavaScript từ cơ bản đến nâng cao, bao gồm ES6+, Node.js và React.',
      targetAudience: 'Người có kinh nghiệm',
      benefits: 'Dự án thực tế',
      imageUrl: 'https://via.placeholder.com/400x200/8CC63F/ffffff?text=JavaScript',
      tags: ['JavaScript', 'Web Development', 'React']
    },
    {
      id: 3,
      title: 'Toán Nâng Cao Lớp 12',
      subtitle: 'Chuẩn bị thi THPT',
      category: 'Toán học',
      instructor: 'Dr. Minh Nguyen',
      rating: 4.7,
      students: 890,
      duration: '50 giờ',
      price: '2,800,000 VNĐ',
      progress: 45,
      totalLessons: 25,
      completedLessons: 11,
      nextLesson: 'Bài 12: Tích phân',
      color: '#DB2691',
      description: 'Chuẩn bị tốt nhất cho kỳ thi THPT Quốc gia với các dạng bài nâng cao.',
      targetAudience: 'Học sinh lớp 12',
      benefits: 'Luyện thi chuyên sâu',
      imageUrl: 'https://via.placeholder.com/400x200/DB2691/ffffff?text=Math',
      tags: ['THPT', 'Nâng cao', 'Thi quốc gia']
    },
    {
      id: 4,
      title: 'Vật Lý Cơ Bản',
      subtitle: 'Hiểu về thế giới tự nhiên',
      category: 'Khoa học',
      instructor: 'Prof. Lan Tran',
      rating: 4.6,
      students: 650,
      duration: '35 giờ',
      price: '2,200,000 VNĐ',
      progress: 30,
      totalLessons: 18,
      completedLessons: 5,
      nextLesson: 'Bài 6: Động học',
      color: '#F59E0B',
      description: 'Nắm vững các khái niệm vật lý cơ bản và ứng dụng thực tế.',
      targetAudience: 'Học sinh THPT',
      benefits: 'Thí nghiệm trực quan',
      imageUrl: 'https://via.placeholder.com/400x200/F59E0B/ffffff?text=Physics',
      tags: ['Cơ bản', 'Thực hành', 'Ứng dụng']
    },
    {
      id: 5,
      title: 'Hóa Học Hữu Cơ',
      subtitle: 'Tìm hiểu hợp chất hữu cơ',
      category: 'Khoa học',
      instructor: 'Dr. Hoa Le',
      rating: 4.5,
      students: 420,
      duration: '30 giờ',
      price: '2,000,000 VNĐ',
      progress: 0,
      totalLessons: 15,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu',
      color: '#F43F5E',
      description: 'Tìm hiểu về các hợp chất hữu cơ và phản ứng hóa học.',
      targetAudience: 'Học sinh THPT',
      benefits: 'Thí nghiệm phân tích',
      imageUrl: 'https://via.placeholder.com/400x200/F43F5E/ffffff?text=Chemistry',
      tags: ['Hữu cơ', 'Phản ứng', 'Phân tích']
    },
    {
      id: 6,
      title: 'Kinh Doanh Online',
      subtitle: 'Xây dựng doanh nghiệp online',
      category: 'Kinh doanh',
      instructor: 'Mr. Tony Vu',
      rating: 4.8,
      students: 1500,
      duration: '45 giờ',
      price: '3,000,000 VNĐ',
      progress: 0,
      totalLessons: 22,
      completedLessons: 0,
      nextLesson: 'Bài 1: Tổng quan',
      color: '#06B6D4',
      description: 'Học cách xây dựng và phát triển doanh nghiệp online thành công.',
      targetAudience: 'Doanh nhân',
      benefits: 'Case study thực tế',
      imageUrl: 'https://via.placeholder.com/400x200/06B6D4/ffffff?text=Business',
      tags: ['E-commerce', 'Marketing', 'Startup']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="courses-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Khóa học của tôi</h1>
          <p>Quản lý và theo dõi tiến độ học tập của bạn</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <Search size={20} />
            Tìm khóa học mới
          </button>
        </div>
      </div>

      <div className="courses-controls">
        <div className="search-filter">
          <div className="search-box">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm khóa học..." 
              className="search-input"
            />
          </div>
          <div className="filter-dropdown">
            <Filter size={20} />
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="view-controls">
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={20} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className={`courses-content ${viewMode}`}>
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

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
  );
};

export default Courses;
