import { FC } from 'react';
import { Clock, Users, Video } from 'lucide-react';
import './CalendarModal.css';

interface ClassSchedule {
  id: number;
  title: string;
  time: string;
  instructor: string;
  type: 'online' | 'offline';
  room?: string;
  link?: string;
}

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  classes: ClassSchedule[];
}

const CalendarModal: FC<CalendarModalProps> = ({ isOpen, onClose, selectedDate, classes }) => {
  if (!isOpen) return null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Lịch học ngày {formatDate(selectedDate)}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          {classes.length === 0 ? (
            <div className="no-classes">
              <p>Không có lớp học nào trong ngày này</p>
            </div>
          ) : (
            <div className="classes-list">
              {classes.map((classItem) => (
                <div key={classItem.id} className="class-item">
                  <div className="class-time">
                    <Clock size={16} />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="class-info">
                    <h4>{classItem.title}</h4>
                    <p>{classItem.instructor}</p>
                    <div className="class-meta">
                      {classItem.type === 'online' ? (
                        <div className="meta-item">
                          <Video size={14} />
                          <span>Online</span>
                        </div>
                      ) : (
                        <div className="meta-item">
                          <Users size={14} />
                          <span>{classItem.room}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="join-class-btn">
                    Tham gia
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
