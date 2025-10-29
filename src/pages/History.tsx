import { FC, useState } from 'react';
import {
  Home,
  BookOpen,
  Calendar,
  BarChart3,
  FileText,
  MessageCircle,
  Settings,
  AlignJustify,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import './History.css';

interface HistoryProps {
  onBack?: () => void;
  onOpenDashboard?: () => void;
  onOpenCourses?: () => void;
  onOpenSchedule?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenSettings?: () => void;
}

const History: FC<HistoryProps> = ({ onBack, onOpenDashboard, onOpenCourses, onOpenSchedule, onOpenReports, onOpenMessages, onOpenSettings }) => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState('all');
  const historyData = [
    { id: 'O002372', type: 'Lớp 1-1', quantity: '20', amount: '0đ', paymentMethod: 'Được trả tiền', status: 'Hoàn thành', dateTime: '27/10/2025 09:41' },
    { id: 'O002371', type: 'Khóa học', quantity: '1', amount: '2,500,000đ', paymentMethod: 'Chuyển khoản', status: 'Hoàn thành', dateTime: '25/10/2025 14:20' },
    { id: 'O002370', type: 'Lớp học thử', quantity: '1', amount: '0đ', paymentMethod: 'Miễn phí', status: 'Hoàn thành', dateTime: '20/10/2025 10:15' },
    { id: 'O002369', type: 'Lớp nhóm', quantity: '1', amount: '0đ', paymentMethod: 'Được trả tiền', status: 'Hoàn thành', dateTime: '12/08/2025 15:20' },
    { id: 'O002368', type: 'Lớp 1-n', quantity: '15', amount: '1,500,000đ', paymentMethod: 'Chuyển khoản', status: 'Hoàn thành', dateTime: '10/08/2025 09:30' },
    { id: 'O002367', type: 'Khóa học', quantity: '1', amount: '3,000,000đ', paymentMethod: 'Ví điện tử', status: 'Hoàn thành', dateTime: '05/08/2025 16:45' },
    { id: 'O002366', type: 'Lớp học thử', quantity: '2', amount: '0đ', paymentMethod: 'Miễn phí', status: 'Hoàn thành', dateTime: '01/08/2025 11:20' }
  ];
  
  const filteredData = historyData.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const matchesPayment = filterPaymentMethod === 'all' || item.paymentMethod === filterPaymentMethod;
    return matchesSearch && matchesType && matchesStatus && matchesPayment;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const displayedData = filteredData.slice(startIdx, startIdx + pageSize);

  return (
    <div className="ican-history">
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
          <a href="#" className="nav-item active">
            <FileText size={20} />
            <span>Lịch sử</span>
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
        {/* Header */}
        <header className="history-header">
          <div className="header-left">
            <div className="header-title-group">
              <h1>Lịch sử giao dịch</h1>
            </div>
          </div>
          <div className="header-right">
            {onBack && (
              <button className="back-main-btn" onClick={onBack}>
                Quay về Main Page
              </button>
            )}
            <div className="notification-icon">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </div>
            <div className="user-avatar">
              <img src="https://img.lovepik.com/free-png/20211228/lovepik-portraits-of-primary-school-students-png-image_400945059_wh860.png" alt="User" />
            </div>
          </div>
        </header>

        {/* History Table */}
        <div className="history-content">
          <div className="search-filter-box">
            <div className="search-field">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm mã đơn hàng, loại, phương thức..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-row">
              <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="all">Tất cả loại</option>
                <option value="Lớp 1-1">Lớp 1-1</option>
                <option value="Lớp 1-n">Lớp 1-n</option>
                <option value="Lớp nhóm">Lớp nhóm</option>
                <option value="Khóa học">Khóa học</option>
                <option value="Lớp học thử">Lớp học thử</option>
              </select>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="Hoàn thành">Hoàn thành</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Đã hủy">Đã hủy</option>
              </select>
              <select value={filterPaymentMethod} onChange={(e) => setFilterPaymentMethod(e.target.value)}>
                <option value="all">Tất cả phương thức</option>
                <option value="Được trả tiền">Được trả tiền</option>
                <option value="Chuyển khoản">Chuyển khoản</option>
                <option value="Ví điện tử">Ví điện tử</option>
                <option value="Miễn phí">Miễn phí</option>
              </select>
              {(searchTerm || filterType !== 'all' || filterStatus !== 'all' || filterPaymentMethod !== 'all') && (
                <button className="btn-clear-filters" onClick={() => { setSearchTerm(''); setFilterType('all'); setFilterStatus('all'); setFilterPaymentMethod('all'); }}>
                  Xóa bộ lọc
                </button>
              )}
            </div>
          </div>
          <div className="history-table-card">
            <div className="table-responsive">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Mã đơn hàng</th>
                    <th>Loại</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Phương thức thanh toán</th>
                    <th>Trạng thái</th>
                    <th>Ngày giờ</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedData.map((item, index) => {
                    const actualIndex = startIdx + index;
                    const isExpanded = expandedOrder === item.id;
                    return (
                      <>
                        <tr key={index}>
                          <td className="order-id">{item.id}</td>
                          <td>{item.type}</td>
                          <td>{item.quantity}</td>
                          <td className="amount">{item.amount}</td>
                          <td>{item.paymentMethod}</td>
                          <td>
                            <span className="status-badge completed">{item.status}</span>
                          </td>
                          <td>{item.dateTime}</td>
                          <td>
                            <div className="action-buttons">
                              <button className="btn-icon" title="Xem chi tiết" onClick={() => setExpandedOrder(isExpanded ? null : item.id)}>
                                <AlignJustify size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                        {isExpanded && (
                          <tr key={`${actualIndex}-detail`}>
                            <td colSpan={8} className="order-detail-cell">
                              <div className="order-detail-expanded">
                                <div className="order-details-grid">
                                  <div className="detail-box">
                                    <h3>CHI TIẾT ĐƠN HÀNG</h3>
                                    <div className="detail-item">
                                      <span>Mã đơn hàng:</span>
                                      <span>0002372</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Ngày đặt hàng:</span>
                                      <span>{item.dateTime}</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Tổng số tiền:</span>
                                      <span>1.250.000₫</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Phiếu giảm giá:</span>
                                      <span>1250000</span>
                                    </div>
                                  </div>
                                  <div className="detail-box">
                                    <h3>CHI TIẾT GIÁO VIÊN</h3>
                                    <div className="detail-item">
                                      <span>Tên giáo viên:</span>
                                      <span className="link">Diệu Linh Đỗ</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Quốc gia:</span>
                                      <span>Việt Nam</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Múi giờ:</span>
                                      <span>Asia/Ho_Chi_Minh</span>
                                    </div>
                                  </div>
                                  <div className="detail-box">
                                    <h3>LOẠI ĐƠN HÀNG</h3>
                                    <div className="detail-item">
                                      <span>Kiểu:</span>
                                      <span>Lớp 1-1</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Số lượng:</span>
                                      <span>20 Lớp 1-1</span>
                                    </div>
                                    <div className="detail-item">
                                      <span>Giá:</span>
                                      <span>62.500₫/ Lớp 1-1</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="sessions-table-section">
                                  <h3>CÁC MẶT HÀNG THEO THỨ TỰ</h3>
                                  <div className="sessions-table-container">
                                    <table className="sessions-table">
                                    <thead>
                                      <tr>
                                        <th>Mã lớp nhóm</th>
                                        <th>Ngày đặt hàng</th>
                                        <th>Giờ bắt đầu lớp học</th>
                                        <th>Giờ kết thúc lớp học</th>
                                        <th>Trạng thái</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Array.from({ length: 20 }, (_, i) => {
                                        const sessionId = 385 + i;
                                        const status = i === 18 ? 'completed' : 'scheduled';
                                        const dates = [
                                          '13/08/2025', '14/08/2025', '15/08/2025', '16/08/2025', '17/08/2025',
                                          '18/08/2025', '19/08/2025', '20/08/2025', '21/08/2025', '22/08/2025',
                                          '23/08/2025', '24/08/2025', '25/08/2025', '26/08/2025', '27/08/2025',
                                          '28/08/2025', '29/08/2025', '30/08/2025', '31/08/2025', '01/09/2025'
                                        ];
                                        const startHour = i % 2 === 0 ? '22:00' : '23:00';
                                        const endHour = i % 2 === 0 ? '23:00' : '00:00';
                                        return (
                                          <tr key={sessionId}>
                                            <td>{sessionId}</td>
                                            <td>12/08/2025 15:20</td>
                                            <td>{dates[i]} {startHour}</td>
                                            <td>{dates[i]} {endHour}</td>
                                            <td>
                                              <span className={`badge ${status === 'completed' ? 'status-completed-small' : 'status-scheduled'}`}>
                                                {status === 'completed' ? 'Hoàn thành' : 'Đã lên lịch'}
                                              </span>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                                <div className="payment-history-section">
                                  <h3>LỊCH SỬ THANH TOÁN</h3>
                                  <table className="payment-history-table">
                                    <thead>
                                      <tr>
                                        <th>Thời gian thanh toán</th>
                                        <th>Mã giao dịch</th>
                                        <th>Phương thức thanh toán</th>
                                        <th>Số lượng</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>12/08/2025 15:20</td>
                                        <td>NA</td>
                                        <td>N/A</td>
                                        <td>0₫                                        </td>
                                      </tr>
                                    </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <div className="pagination-left">
                <span>Hiển thị {startIdx + 1}-{Math.min(startIdx + pageSize, filteredData.length)} / {filteredData.length}</span>
                <select value={pageSize} onChange={(e) => { setCurrentPage(1); setPageSize(parseInt(e.target.value, 10)); }}>
                  <option value={5}>5 / trang</option>
                  <option value={10}>10 / trang</option>
                  <option value={20}>20 / trang</option>
                </select>
              </div>
              <div className="pagination-right">
                <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>{'«'}</button>
                <button className="page-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{'‹'}</button>
                <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>{'›'}</button>
                <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)}>{'»'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

