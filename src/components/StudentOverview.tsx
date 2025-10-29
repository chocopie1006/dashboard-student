import { FC } from 'react';
import { Clock, BookOpen, CheckCircle2, ClipboardList } from 'lucide-react';

interface StudentOverviewProps {
  totalSessions?: number;
  totalHours?: number;
  completedLessons?: number;
  pendingAssignments?: number;
}

const StudentOverview: FC<StudentOverviewProps> = ({
  totalSessions = 24,
  totalHours = 36,
  completedLessons = 58,
  pendingAssignments = 3
}) => {
  return (
    <div className="overview-section">
      <div className="section-header">
        <h2>Tổng quan học tập</h2>
      </div>
      <div className="overview-grid">
        <div className="overview-card primary">
          <div className="icon-wrap">
            <BookOpen size={20} />
          </div>
          <div className="overview-content">
            <div className="value">{completedLessons}</div>
            <div className="label">Bài học đã hoàn thành</div>
          </div>
        </div>

        <div className="overview-card success">
          <div className="icon-wrap">
            <Clock size={20} />
          </div>
          <div className="overview-content">
            <div className="value">{totalHours}h</div>
            <div className="label">Tổng giờ học</div>
          </div>
        </div>

        <div className="overview-card info">
          <div className="icon-wrap">
            <CheckCircle2 size={20} />
          </div>
          <div className="overview-content">
            <div className="value">{totalSessions}</div>
            <div className="label">Số buổi học</div>
          </div>
        </div>

        <div className="overview-card warning">
          <div className="icon-wrap">
            <ClipboardList size={20} />
          </div>
          <div className="overview-content">
            <div className="value">{pendingAssignments}</div>
            <div className="label">Bài tập còn lại</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;


