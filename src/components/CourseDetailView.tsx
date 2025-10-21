import { FC, useState } from 'react';
import { 
  ArrowLeft,
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Target, 
  Award,
  Video,
  Download,
  Share2,
  Globe,
  MessageCircle,
  Shield,
  Bookmark,
  User,
  GraduationCap,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import './CourseDetailView.css';

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

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onStartLesson?: (course: Course) => void;
}

const CourseDetailView: FC<CourseDetailViewProps> = ({ 
  course, 
  onBack, 
  onStartLesson 
}) => {
  const [expandedUnits, setExpandedUnits] = useState<Set<number>>(new Set([1])); // Mở Unit 1 mặc định

  const toggleUnit = (unitNumber: number) => {
    const newExpandedUnits = new Set(expandedUnits);
    if (newExpandedUnits.has(unitNumber)) {
      newExpandedUnits.delete(unitNumber);
    } else {
      newExpandedUnits.add(unitNumber);
    }
    setExpandedUnits(newExpandedUnits);
  };
  const handleStartLesson = () => {
    onStartLesson?.(course);
  };

  return (
    <div className="course-detail-view">
      {/* Header Navigation */}
      <div className="course-detail-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Quay lại
        </button>
        <div className="header-actions">
          <button className="action-btn">
            <Bookmark size={16} />
            Lưu khóa học
          </button>
          <button className="action-btn">
            <Share2 size={16} />
            Chia sẻ
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="course-hero">
        <div className="course-hero-content">
          <div className="course-hero-left">
            <div className="course-badge">
              Khóa học phổ biến
            </div>
            
            <h1 className="course-title">{course.title}</h1>
            <p className="course-subtitle">{course.subtitle}</p>
            
            <div className="course-meta-grid">
              <div className="meta-item">
                <div className="meta-icon">
                  <BookOpen size={20} />
                </div>
                <div className="meta-content">
                  <div className="meta-value">{course.totalLessons}</div>
                  <div className="meta-label">Bài học</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <Users size={20} />
                </div>
                <div className="meta-content">
                  <div className="meta-value">{course.students?.toLocaleString() || '1,250'}</div>
                  <div className="meta-label">Học viên</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <Star size={20} />
                </div>
                <div className="meta-content">
                  <div className="meta-value">{course.rating || '4.8'}</div>
                  <div className="meta-label">Đánh giá</div>
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-icon">
                  <Clock size={20} />
                </div>
                <div className="meta-content">
                  <div className="meta-value">{course.duration || '3 tháng'}</div>
                  <div className="meta-label">Thời gian</div>
                </div>
              </div>
            </div>

            <div className="course-progress-section">
              <div className="progress-header">
                <span className="progress-label">Tiến độ học tập</span>
                <span className="progress-percentage">{course.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                ></div>
              </div>
              <div className="progress-details">
                <span>{course.completedLessons}/{course.totalLessons} bài học đã hoàn thành</span>
              </div>
            </div>


            {/* Course Details Grid */}
            <div className="course-details-grid">
              <div className="detail-item">
                <div className="detail-icon">
                  <Target size={20} />
                </div>
                <div className="detail-content">
                  <h4>Đối tượng học viên</h4>
                  <p>{course.targetAudience}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <Award size={20} />
                </div>
                <div className="detail-content">
                  <h4>Lợi ích khóa học</h4>
                  <p>{course.benefits}</p>
                </div>
              </div>
              
              <div className="detail-item instructor-detail">
                <div className="detail-icon">
                  <User size={20} />
                </div>
                <div className="detail-content">
                  <h4>Giảng viên</h4>
                  <div className="instructor-info-compact">
                    <div className="instructor-avatar-small">
                      <img src="https://img.lovepik.com/free-png/20211228/lovepik-portraits-of-primary-school-students-png-image_400945059_wh860.png" alt="Instructor" />
                    </div>
                    <div className="instructor-details-compact">
                      <p className="instructor-name">{course.instructor || 'Giáo viên ICAN CONNECT'}</p>
                      <div className="instructor-stats-compact">
                        <span><Star size={14} /> 4.9/5</span>
                        <span><Users size={14} /> 2,500+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="detail-item features-detail">
                <div className="detail-icon">
                  <Video size={20} />
                </div>
                <div className="detail-content">
                  <h4>Tính năng khóa học</h4>
                  <div className="features-list-compact">
                    <div className="feature-item-compact">
                      <Video size={14} />
                      <span>Video chất lượng cao</span>
                    </div>
                    <div className="feature-item-compact">
                      <Download size={14} />
                      <span>Tài liệu tải về</span>
                    </div>
                    <div className="feature-item-compact">
                      <MessageCircle size={14} />
                      <span>Hỗ trợ 24/7</span>
                    </div>
                    <div className="feature-item-compact">
                      <Award size={14} />
                      <span>Chứng chỉ hoàn thành</span>
                    </div>
                    <div className="feature-item-compact">
                      <Shield size={14} />
                      <span>Bảo đảm chất lượng</span>
                    </div>
                    <div className="feature-item-compact">
                      <Globe size={14} />
                      <span>Truy cập mọi lúc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Tags */}
            {course.tags && course.tags.length > 0 && (
              <div className="course-tags-section">
                <div className="tags-header">
                  <Bookmark size={20} />
                  <h3>Thẻ khóa học</h3>
                </div>
                <div className="course-tags">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="course-actions">
              <button 
                className="btn-primary"
                onClick={handleStartLesson}
                style={{ backgroundColor: course.color }}
              >
                <Play size={20} />
                Bắt đầu học ngay
              </button>
              <button className="btn-secondary">
                <Download size={16} />
                Tải tài liệu
              </button>
            </div>
          </div>

          <div className="course-hero-right">
            <div className="course-image-container">
              <img src={course.imageUrl} alt={course.title} />
              <div className="image-overlay">
                <div className="play-button">
                  <Play size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content-wrapper">
        <div className="course-content-grid">
          {/* Course Curriculum Units */}
          <div className="curriculum-units-section">
            <h2 className="section-title">
              <GraduationCap size={24} />
              Danh sách các bài học
            </h2>
            
            <div className="units-container">
              {/* Unit 1: Hello */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(1)}
                >
                  <div className="unit-info">
                    <div className="unit-number">1</div>
                    <div className="unit-content">
                      <h3>Hello</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(1) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(1) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">1</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">2</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">3</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 2: My class */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(2)}
                >
                  <div className="unit-info">
                    <div className="unit-number">2</div>
                    <div className="unit-content">
                      <h3>My class</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(2) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(2) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">4</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">5</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">6</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 3: My colours */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(3)}
                >
                  <div className="unit-info">
                    <div className="unit-number">3</div>
                    <div className="unit-content">
                      <h3>My colours</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(3) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(3) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">7</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">8</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">9</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-reminder">Nhắc lịch ôn tập</span>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Review 1 */}
              <div className="unit-block review-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(10)}
                >
                  <div className="unit-info">
                    <div className="unit-number">R1</div>
                    <div className="unit-content">
                      <h3>Review 1</h3>
                      <p>1 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(10) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(10) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">10</div>
                      <div className="lesson-content">
                        <h4>Review 1</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hoạt động ngoại khoá 1 */}
              <div className="unit-block activity-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(11)}
                >
                  <div className="unit-info">
                    <div className="unit-number">A1</div>
                    <div className="unit-content">
                      <h3>Hoạt động ngoại khoá 1</h3>
                      <p>Topic: Answer nicely</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(11) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(11) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">11</div>
                      <div className="lesson-content">
                        <h4>Topic: Answer nicely</h4>
                        <p>Báo cáo định kỳ (đánh giá, nhận xét)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 4: My toys */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(4)}
                >
                  <div className="unit-info">
                    <div className="unit-number">4</div>
                    <div className="unit-content">
                      <h3>My toys</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(4) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(4) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">12</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">13</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">14</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 5: My house */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(5)}
                >
                  <div className="unit-info">
                    <div className="unit-number">5</div>
                    <div className="unit-content">
                      <h3>My house</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(5) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(5) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">15</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">16</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">17</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 6: My body */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(6)}
                >
                  <div className="unit-info">
                    <div className="unit-number">6</div>
                    <div className="unit-content">
                      <h3>My body</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(6) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(6) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">18</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">19</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">20</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-reminder">Nhắc lịch HV thi giữa kỳ</span>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Review 2 */}
              <div className="unit-block review-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(12)}
                >
                  <div className="unit-info">
                    <div className="unit-number">R2</div>
                    <div className="unit-content">
                      <h3>Review 2</h3>
                      <p>1 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(12) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(12) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">21</div>
                      <div className="lesson-content">
                        <h4>Review 2</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hoạt động ngoại khoá 2 */}
              <div className="unit-block activity-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(13)}
                >
                  <div className="unit-info">
                    <div className="unit-number">A2</div>
                    <div className="unit-content">
                      <h3>Hoạt động ngoại khoá 2</h3>
                      <p>Topic: Joy of Giving</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(13) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(13) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">22</div>
                      <div className="lesson-content">
                        <h4>Topic: Joy of Giving</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Test */}
              <div className="unit-block test-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(14)}
                >
                  <div className="unit-info">
                    <div className="unit-number">T1</div>
                    <div className="unit-content">
                      <h3>Mid-term Test</h3>
                      <p>Thi giữa kỳ</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(14) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(14) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">23</div>
                      <div className="lesson-content">
                        <h4>Mid-term Test (Thi giữa kỳ)</h4>
                        <p>Trả điểm và nhận xét sau thi</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">24</div>
                      <div className="lesson-content">
                        <h4>Mid-term Assessment</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 7-12 sẽ được thêm tương tự */}
              {/* Unit 7: My animals */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(7)}
                >
                  <div className="unit-info">
                    <div className="unit-number">7</div>
                    <div className="unit-content">
                      <h3>My animals</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(7) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(7) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">25</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">26</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">27</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 8: My food */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(8)}
                >
                  <div className="unit-info">
                    <div className="unit-number">8</div>
                    <div className="unit-content">
                      <h3>My food</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(8) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(8) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">28</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">29</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">30</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 9: My family */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(9)}
                >
                  <div className="unit-info">
                    <div className="unit-number">9</div>
                    <div className="unit-content">
                      <h3>My family</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(9) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(9) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">31</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">32</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">33</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-reminder">Nhắc lịch ôn tập</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Review 3 */}
              <div className="unit-block review-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(15)}
                >
                  <div className="unit-info">
                    <div className="unit-number">R3</div>
                    <div className="unit-content">
                      <h3>Review 3</h3>
                      <p>1 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(15) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(15) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">34</div>
                      <div className="lesson-content">
                        <h4>Review 3</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hoạt động ngoại khoá 3 */}
              <div className="unit-block activity-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(16)}
                >
                  <div className="unit-info">
                    <div className="unit-number">A3</div>
                    <div className="unit-content">
                      <h3>Hoạt động ngoại khoá 3</h3>
                      <p>Topic: Joy of Sharing</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(16) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(16) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">35</div>
                      <div className="lesson-content">
                        <h4>Topic: Joy of Sharing</h4>
                        <p>Báo cáo định kỳ (đánh giá, nhận xét)</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 10: My clothes */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(17)}
                >
                  <div className="unit-info">
                    <div className="unit-number">10</div>
                    <div className="unit-content">
                      <h3>My clothes</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(17) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(17) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">36</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">37</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">38</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 11: My feelings */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(18)}
                >
                  <div className="unit-info">
                    <div className="unit-number">11</div>
                    <div className="unit-content">
                      <h3>My feelings</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(18) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(18) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">39</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">40</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">41</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Unit 12: My jobs */}
              <div className="unit-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(19)}
                >
                  <div className="unit-info">
                    <div className="unit-number">12</div>
                    <div className="unit-content">
                      <h3>My jobs</h3>
                      <p>3 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(19) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(19) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">42</div>
                      <div className="lesson-content">
                        <h4>Từ vựng + Kỹ năng Nghe</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">43</div>
                      <div className="lesson-content">
                        <h4>Ngữ pháp + Kỹ năng Nói</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">44</div>
                      <div className="lesson-content">
                        <h4>Kỹ năng Đọc + Kỹ năng Viết</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-reminder">Nhắc lịch thi cuối kỳ</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Review 4 */}
              <div className="unit-block review-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(20)}
                >
                  <div className="unit-info">
                    <div className="unit-number">R4</div>
                    <div className="unit-content">
                      <h3>Review 4</h3>
                      <p>1 bài học</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(20) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(20) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">45</div>
                      <div className="lesson-content">
                        <h4>Review 4</h4>
                        <p>Báo cáo buổi học</p>
                        <span className="lesson-warning">Báo cáo chuyên cần và BTVN</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hoạt động ngoại khoá 4 */}
              <div className="unit-block activity-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(21)}
                >
                  <div className="unit-info">
                    <div className="unit-number">A4</div>
                    <div className="unit-content">
                      <h3>Hoạt động ngoại khoá 4</h3>
                      <p>Topic: Take turns</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(21) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(21) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">46</div>
                      <div className="lesson-content">
                        <h4>Topic: Take turns</h4>
                        <p>Báo cáo buổi học</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* End-term Test */}
              <div className="unit-block test-block">
                <div 
                  className="unit-header"
                  onClick={() => toggleUnit(22)}
                >
                  <div className="unit-info">
                    <div className="unit-number">T2</div>
                    <div className="unit-content">
                      <h3>End-term Test</h3>
                      <p>Thi cuối kỳ</p>
                    </div>
                  </div>
                  <div className="unit-toggle">
                    {expandedUnits.has(22) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedUnits.has(22) && (
                  <div className="unit-lessons">
                    <div className="lesson-item">
                      <div className="lesson-number">47</div>
                      <div className="lesson-content">
                        <h4>End-term Test (Thi cuối kỳ)</h4>
                        <p>Trả điểm và nhận xét sau thi</p>
                      </div>
                    </div>
                    <div className="lesson-item">
                      <div className="lesson-number">48</div>
                      <div className="lesson-content">
                        <h4>End-term Assessment</h4>
                        <p>LPA cuối khóa</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailView;
