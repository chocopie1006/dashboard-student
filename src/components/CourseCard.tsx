import { FC } from 'react';
import { Play, Clock, Users, Target } from 'lucide-react';
import './CourseCard.css';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  benefits: string;
  imageUrl: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLesson: string;
  color: string;
}

interface CourseCardProps {
  course: Course;
  onContinueCourse?: (course: Course) => void;
}

const CourseCard: FC<CourseCardProps> = ({ course, onContinueCourse }) => {
  return (
    <div className="course-card-rectangular">
      <div className="course-image">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      
      <div className="course-content">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-subtitle">{course.subtitle}</p>
        </div>
        
        <div className="course-description">
          <p>{course.description}</p>
        </div>
        
        <div className="course-details">
          <div className="detail-item">
            <Users size={16} />
            <span>{course.targetAudience}</span>
          </div>
          <div className="detail-item">
            <Target size={16} />
            <span>{course.benefits}</span>
          </div>
        </div>
        
        <div className="course-progress-section">
          <div className="progress-info">
            <span className="progress-text">{course.progress}% hoàn thành</span>
            <span className="lessons-text">{course.completedLessons}/{course.totalLessons} bài học</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${course.progress}%` }}
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
          onClick={() => onContinueCourse?.(course)}
        >
          <Play size={16} />
          Tiếp tục học
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

