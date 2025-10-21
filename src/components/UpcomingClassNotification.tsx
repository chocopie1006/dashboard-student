import { FC, useState, useEffect } from 'react';
import { Video, Clock } from 'lucide-react';
import './UpcomingClassNotification.css';

interface UpcomingClassNotificationProps {
  className?: string;
  instructor?: string;
  startTime?: string;
  date?: string;
  onJoinClass?: () => void;
}

const UpcomingClassNotification: FC<UpcomingClassNotificationProps> = ({
  className = "Tiếng Anh Giao Tiếp Cơ Bản",
  instructor = "Cô Sarah Johnson",
  startTime = "10:30",
  date = "21 thg 10 năm 2025",
  onJoinClass
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 3,
    seconds: 46
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="upcoming-class-notification">
      <div className="notification-content">
        <div className="class-icon">
          <div className="icon-circle">
            <Video size={24} />
          </div>
        </div>
        
        <div className="class-details">
          <div className="class-title">Lớp học tiếp theo: {date} lúc {startTime}</div>
          <div className="class-subtitle">{className} - {instructor}</div>
        </div>
        
        <div className="class-actions">
          <div className="countdown">
            <Clock size={16} />
            <span className="countdown-text">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
          <button className="join-class-btn" onClick={onJoinClass}>
            Vào lớp học
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingClassNotification;
