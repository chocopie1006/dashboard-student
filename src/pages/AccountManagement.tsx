import { FC, useState } from 'react';
import {
  Home,
  BookOpen,
  Calendar,
  BarChart3,
  FileText,
  MessageCircle,
  Settings,
  Bell,
  Edit,
  Trash2,
  Search
} from 'lucide-react';
import './AccountManagement.css';

interface AccountManagementProps {
  onBack?: () => void;
  onOpenDashboard?: () => void;
  onOpenCourses?: () => void;
  onOpenSchedule?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenHistory?: () => void;
}

const AccountManagement: FC<AccountManagementProps> = ({
  onOpenDashboard,
  onOpenCourses,
  onOpenSchedule,
  onOpenReports,
  onOpenMessages,
  onOpenHistory
}) => {
  const [activeTab, setActiveTab] = useState<'personal' | 'guardian' | 'payment' | 'password' | 'report'>('personal');
  const [activePasswordTab, setActivePasswordTab] = useState<'password' | 'email'>('password');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [guardianCount, setGuardianCount] = useState(1);

  return (
    <div className="ican-dashboard">
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
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenCourses?.(); }}>
            <BookOpen size={20} />
            <span>Lớp học</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenSchedule?.(); }}>
            <Calendar size={20} />
            <span>Lịch học</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenReports?.(); }}>
            <BarChart3 size={20} />
            <span>Báo cáo</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenHistory?.(); }}>
            <FileText size={20} />
            <span>Lịch sử</span>
          </a>
          <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); onOpenMessages?.(); }}>
            <MessageCircle size={20} />
            <span>Tin nhắn</span>
          </a>
          <a href="#" className="nav-item active">
            <Settings size={20} />
            <span>Quản lý tài khoản</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-left">
            <h1 className="page-title">Quản lý tài khoản</h1>
          </div>
          <div className="header-right">
            <button className="notification-btn">
              <Bell size={24} />
              <span className="notification-badge">4</span>
            </button>
            <button className="avatar-btn">
              <img src="https://i.pravatar.cc/64?img=47" alt="User" className="avatar-img" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="account-main-content">
          <div className="account-tabs">
            <button 
              className={`account-tab ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              Thông tin cá nhân
            </button>
            <button 
              className={`account-tab ${activeTab === 'guardian' ? 'active' : ''}`}
              onClick={() => setActiveTab('guardian')}
            >
              Người giám hộ
            </button>
            <button 
              className={`account-tab ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              Thanh toán
            </button>
            <button 
              className={`account-tab ${activeTab === 'password' ? 'active' : ''}`}
              onClick={() => setActiveTab('password')}
            >
              Mật khẩu/ Email
            </button>
            <button 
              className={`account-tab ${activeTab === 'report' ? 'active' : ''}`}
              onClick={() => setActiveTab('report')}
            >
              Vấn đề đã báo cáo
            </button>
          </div>

          {activeTab === 'personal' && (
            <div className="account-content">
              <h2 className="section-title">Hồ sơ</h2>
              
              <div className="profile-form-layout">
                <div className="profile-avatar-section">
                  <div className="profile-avatar-container">
                    <img src="https://i.pravatar.cc/64?img=47" alt="Profile" className="profile-avatar" />
                  </div>
                  <div className="profile-info-section">
                    <div>
                      <div className="profile-name">Nguyễn Văn A</div>
                      <div className="profile-email">nguyenvana@example.com</div>
                      <div className="profile-id">ID: 123456</div>
                    </div>
                    <div className="profile-actions">
                      <button className="btn-edit">
                        <Edit size={16} />
                        <span>Chỉnh sửa</span>
                      </button>
                      <button className="btn-delete">
                        <Trash2 size={16} />
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-title">Thông tin cá nhân</h3>
                  <div className="form-grid">
                  <div className="form-group">
                    <label>Tên *</label>
                    <input type="text" defaultValue="HM" />
                  </div>
                  <div className="form-group">
                    <label>Giới tính *</label>
                    <input type="text" defaultValue="Nam" />
                  </div>
                  <div className="form-group">
                    <label>Điện thoại *</label>
                    <div className="phone-group">
                      <select className="phone-code">
                        <option>+84</option>
                      </select>
                      <input type="text" defaultValue="0903456789" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Ngôn ngữ thông báo *</label>
                    <select defaultValue="vi">
                      <option value="vi">Tiếng Việt</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Họ *</label>
                    <input type="text" defaultValue="Test" />
                  </div>
                  <div className="form-group">
                    <label>Quốc tịch *</label>
                    <select defaultValue="vn">
                      <option value="vn">Việt Nam</option>
                      <option value="us">USA</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Múi giờ *</label>
                    <select defaultValue="asia-hcm">
                      <option value="asia-hcm">UTC +07:00 Châu Á/Hồ Chí Minh</option>
                    </select>
                  </div>
                </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="btn-primary">Lưu & Đi tiếp</button>
              </div>
            </div>
          )}

          {activeTab === 'guardian' && (
            <div className="account-content">
              <h2 className="section-title">Thông tin người giám hộ</h2>
              <div className="form-section">
                <h3 className="form-subtitle">Thông tin người giám hộ</h3>
                
                {Array.from({ length: guardianCount }).map((_, index) => (
                  <div key={index} className="guardian-card">
                    <h4 className="guardian-title">Người giám hộ {index + 1}</h4>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Ngày sinh *</label>
                        <input 
                          type="date" 
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Quan hệ *</label>
                        <select>
                          <option value="">Chọn quan hệ</option>
                          <option value="father">Bố</option>
                          <option value="mother">Mẹ</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Họ và tên *</label>
                        <input type="text" defaultValue="Nguyễn Văn A" />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input type="email" defaultValue="nguyenvana@gmail.com" />
                      </div>
                      <div className="form-group">
                        <label>Điện thoại *</label>
                        <div className="phone-group">
                          <select className="phone-code">
                            <option>Việt Nam (+84)</option>
                          </select>
                          <input type="text" defaultValue="903456789" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button 
                  className="btn-add-guardian"
                  onClick={() => setGuardianCount(guardianCount + 1)}
                >
                  + Thêm người giám hộ
                </button>
              </div>

              <div className="form-actions">
                <button className="btn-primary">Lưu & Đi tiếp</button>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="account-content">
              <h2 className="section-title">Quản lý thanh toán</h2>
              <p className="section-description" style={{ marginTop: '8px' }}>
                Cung cấp chi tiết tài khoản thanh toán để hợp lý hóa việc trả tiền.
              </p>

              <div className="form-section">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Tên ngân hàng *</label>
                    <select>
                      <option value="">Chọn ngân hàng</option>
                      <option value="vietcombank">Vietcombank</option>
                      <option value="techcombank">Techcombank</option>
                      <option value="bidv">BIDV</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Địa chỉ ngân hàng *</label>
                    <input type="text" placeholder="Địa chỉ ngân hàng" />
                  </div>
                  <div className="form-group">
                    <label>Số tài khoản *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Chủ tài khoản *</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button className="btn-primary">Lưu lại</button>
              </div>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="account-content">
              <h2 className="section-title">Thay đổi mật khẩu / Email</h2>
              <p className="section-description" style={{ marginTop: '8px' }}>
                Cập nhật thông tin đăng nhập của bạn.
              </p>
              
              <div className="sub-tabs">
                <button 
                  className={`sub-tab ${activePasswordTab === 'password' ? 'active' : ''}`}
                  onClick={() => setActivePasswordTab('password')}
                >
                  Mật khẩu
                </button>
                <button 
                  className={`sub-tab ${activePasswordTab === 'email' ? 'active' : ''}`}
                  onClick={() => setActivePasswordTab('email')}
                >
                  Email
                </button>
              </div>

              {activePasswordTab === 'password' && (
                <div className="form-section">
                  <div className="form-group-full">
                    <label>Mật khẩu hiện tại *</label>
                    <div className="password-input-wrapper">
                      <input type="password" />
                      <button className="password-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="form-group-full">
                    <label>Mật khẩu mới *</label>
                    <div className="password-input-wrapper">
                      <input type="password" />
                      <button className="password-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="form-group-full">
                    <label>Xác nhận mật khẩu mới *</label>
                    <div className="password-input-wrapper">
                      <input type="password" />
                      <button className="password-toggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activePasswordTab === 'email' && (
                <div className="form-section">
                  <div className="form-group-full">
                    <label>Email hiện tại *</label>
                    <input type="email" />
                  </div>
                  <div className="form-group-full">
                    <label>Email mới *</label>
                    <input type="email" />
                  </div>
                </div>
              )}

              <div className="form-actions">
                <button className="btn-primary">Lưu lại</button>
              </div>
            </div>
          )}

          {activeTab === 'report' && (
            <div className="account-content">
              <div className="report-header">
                <h2 className="section-title">Vấn đề đã báo cáo</h2>
                <button className="btn-primary">
                  <Search size={16} />
                  <span>Tìm kiếm</span>
                </button>
              </div>

              <div className="report-filter-box">
                <div className="filter-row">
                  <div className="form-group">
                    <label>Loại lớp</label>
                    <select>
                      <option value="">Chọn loại lớp</option>
                      <option value="1-1">Lớp 1-1</option>
                      <option value="1-n">Lớp 1-N</option>
                      <option value="trial">Lớp học thử</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Trạng thái vấn đề</label>
                    <select>
                      <option value="">Chọn trạng thái</option>
                      <option value="pending">Đang chờ</option>
                      <option value="resolved">Đã giải quyết</option>
                      <option value="rejected">Đã từ chối</option>
                    </select>
                  </div>
                </div>
                <div className="filter-actions">
                  <button className="btn-primary">Tìm kiếm</button>
                  <button className="btn-clear-filters">Xóa</button>
                </div>
              </div>

              <div className="report-table-card">
                <div className="report-table-header">
                  <div className="report-table-col">Học viên</div>
                  <div className="report-table-col">Môn học</div>
                  <div className="report-table-col">Thời gian buổi học</div>
                  <div className="report-table-col">Trạng thái buổi học</div>
                  <div className="report-table-col">Lý do vấn đề</div>
                  <div className="report-table-col">Trạng thái vấn đề</div>
                  <div className="report-table-col">Hành động</div>
                </div>
                <div className="report-table-body">
                  <p className="no-data-message">Không có dữ liệu</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
