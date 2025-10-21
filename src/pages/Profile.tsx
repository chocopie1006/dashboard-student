import { FC } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Edit, Save, Award, BookOpen, Clock } from 'lucide-react';

const Profile: FC = () => {
  const userInfo = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    phone: '0123 456 789',
    birthday: '15/03/2000',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    studentId: 'STU001',
    joinDate: '01/09/2023',
    level: 'Trung cấp',
    avatar: null
  };

  const stats = [
    { label: 'Khóa học đã học', value: '8', icon: BookOpen },
    { label: 'Giờ học tổng cộng', value: '156h', icon: Clock },
    { label: 'Chứng chỉ đạt được', value: '5', icon: Award },
    { label: 'Điểm trung bình', value: '8.5', icon: Award },
  ];

  const recentCertificates = [
    { title: 'Tiếng Anh Giao Tiếp Cơ Bản', date: '15/12/2023', score: '85/100' },
    { title: 'JavaScript Fundamentals', date: '10/12/2023', score: '92/100' },
    { title: 'Toán Nâng Cao', date: '05/12/2023', score: '88/100' },
  ];

  return (
    <div className="profile-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Hồ sơ cá nhân</h1>
          <p>Quản lý thông tin và cài đặt tài khoản</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <Edit size={20} />
            Chỉnh sửa hồ sơ
          </button>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-main">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar-section">
                <div className="user-avatar">
                  <User size={48} />
                </div>
                <button className="change-avatar-btn">
                  <Edit size={16} />
                  Thay đổi ảnh
                </button>
              </div>
              <div className="user-info">
                <h2>{userInfo.name}</h2>
                <p className="user-level">{userInfo.level}</p>
                <p className="user-id">Mã học sinh: {userInfo.studentId}</p>
              </div>
            </div>

            <div className="profile-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">
                      <Icon size={20} />
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Personal Information */}
          <div className="info-section">
            <div className="section-header">
              <h3>Thông tin cá nhân</h3>
              <button className="btn-outline">
                <Edit size={16} />
                Chỉnh sửa
              </button>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">
                  <Mail size={16} />
                  <span>Email</span>
                </div>
                <div className="info-value">{userInfo.email}</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <Phone size={16} />
                  <span>Số điện thoại</span>
                </div>
                <div className="info-value">{userInfo.phone}</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <Calendar size={16} />
                  <span>Ngày sinh</span>
                </div>
                <div className="info-value">{userInfo.birthday}</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <MapPin size={16} />
                  <span>Địa chỉ</span>
                </div>
                <div className="info-value">{userInfo.address}</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <Calendar size={16} />
                  <span>Ngày tham gia</span>
                </div>
                <div className="info-value">{userInfo.joinDate}</div>
              </div>
            </div>
          </div>

          {/* Recent Certificates */}
          <div className="certificates-section">
            <div className="section-header">
              <h3>Chứng chỉ gần đây</h3>
              <button className="btn-text">Xem tất cả</button>
            </div>
            <div className="certificates-list">
              {recentCertificates.map((cert, index) => (
                <div key={index} className="certificate-item">
                  <div className="certificate-icon">
                    <Award size={24} />
                  </div>
                  <div className="certificate-content">
                    <h4>{cert.title}</h4>
                    <p>Hoàn thành ngày {cert.date}</p>
                    <span className="certificate-score">Điểm: {cert.score}</span>
                  </div>
                  <button className="btn-outline btn-sm">Xem chứng chỉ</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="profile-sidebar">
          {/* Quick Actions */}
          <div className="quick-actions">
            <h3>Thao tác nhanh</h3>
            <div className="actions-list">
              <button className="action-btn">
                <BookOpen size={20} />
                <span>Khóa học của tôi</span>
              </button>
              <button className="action-btn">
                <Award size={20} />
                <span>Chứng chỉ</span>
              </button>
              <button className="action-btn">
                <Clock size={20} />
                <span>Lịch học</span>
              </button>
              <button className="action-btn">
                <User size={20} />
                <span>Cài đặt tài khoản</span>
              </button>
            </div>
          </div>

          {/* Learning Progress */}
          <div className="learning-progress">
            <h3>Tiến độ học tập</h3>
            <div className="progress-summary">
              <div className="progress-item">
                <span className="progress-label">Khóa học hoàn thành</span>
                <span className="progress-value">5/8</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">Mục tiêu tháng này</span>
                <span className="progress-value">75%</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">Ngày học liên tiếp</span>
                <span className="progress-value">12 ngày</span>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="account-settings">
            <h3>Cài đặt tài khoản</h3>
            <div className="settings-list">
              <div className="setting-item">
                <span>Thông báo email</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="setting-item">
                <span>Thông báo SMS</span>
                <input type="checkbox" />
              </div>
              <div className="setting-item">
                <span>Chế độ tối</span>
                <input type="checkbox" />
              </div>
              <div className="setting-item">
                <span>Ngôn ngữ</span>
                <select defaultValue="vi">
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <button className="btn-primary btn-sm">
              <Save size={16} />
              Lưu cài đặt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
