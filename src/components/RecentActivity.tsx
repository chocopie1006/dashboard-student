import { FC } from 'react';
import { Clock, BookOpen, Award, CheckCircle } from 'lucide-react';

const RecentActivity: FC = () => {
  const activities = [
    {
      id: 1,
      type: 'lesson_completed',
      title: 'Hoàn thành bài học',
      description: 'Bài 15: Thì hiện tại hoàn thành',
      course: 'Tiếng Anh Giao Tiếp',
      time: '2 giờ trước',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'quiz_passed',
      title: 'Vượt qua bài kiểm tra',
      description: 'Kiểm tra JavaScript cơ bản - 85/100 điểm',
      course: 'Lập Trình JavaScript',
      time: '4 giờ trước',
      icon: Award,
      color: 'blue'
    },
    {
      id: 3,
      type: 'lesson_started',
      title: 'Bắt đầu bài học mới',
      description: 'Bài 19: Async/Await trong JavaScript',
      course: 'Lập Trình JavaScript',
      time: '6 giờ trước',
      icon: BookOpen,
      color: '#DB2691'
    },
    {
      id: 4,
      type: 'streak_milestone',
      title: 'Đạt mốc học tập',
      description: 'Học liên tiếp 7 ngày',
      course: 'Tất cả khóa học',
      time: '1 ngày trước',
      icon: Award,
      color: 'orange'
    },
    {
      id: 5,
      type: 'lesson_completed',
      title: 'Hoàn thành bài học',
      description: 'Bài 11: Tích phân cơ bản',
      course: 'Toán Nâng Cao',
      time: '2 ngày trước',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  const getActivityIcon = (type: string) => {
    const iconMap: { [key: string]: any } = {
      'lesson_completed': CheckCircle,
      'quiz_passed': Award,
      'lesson_started': BookOpen,
      'streak_milestone': Award
    };
    return iconMap[type] || Clock;
  };

  return (
    <div className="recent-activity">
      <div className="activity-list">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div key={activity.id} className="activity-item">
              <div className={`activity-icon ${activity.color}`}>
                <Icon size={16} />
              </div>
              <div className="activity-content">
                <h4 className="activity-title">{activity.title}</h4>
                <p className="activity-description">{activity.description}</p>
                <div className="activity-meta">
                  <span className="activity-course">{activity.course}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="view-all-btn">
        Xem tất cả hoạt động
      </button>
    </div>
  );
};

export default RecentActivity;

