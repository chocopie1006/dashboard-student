import { FC } from 'react';
import { X } from 'lucide-react';
import './OrderDetail.css';

interface OrderDetailProps {
  order: {
    id: string;
    type: string;
    quantity: string;
    amount: string;
    paymentMethod: string;
    status: string;
    dateTime: string;
  };
  onClose: () => void;
}

const OrderDetail: FC<OrderDetailProps> = ({ order, onClose }) => {
  const sessions = [
    { id: '1856', orderDate: '27/10/2025 09:41', startTime: '17/01/2026 18:00', endTime: '17/01/2026 18:15', status: 'scheduled' },
    { id: '1857', orderDate: '27/10/2025 09:41', startTime: '20/01/2026 18:00', endTime: '20/01/2026 18:15', status: 'scheduled' },
    { id: '1858', orderDate: '27/10/2025 09:41', startTime: '22/01/2026 18:00', endTime: '22/01/2026 18:15', status: 'scheduled' },
    { id: '1860', orderDate: '27/10/2025 09:41', startTime: '09/12/2025 18:00', endTime: '09/12/2025 18:15', status: 'scheduled' },
    { id: '1861', orderDate: '27/10/2025 09:41', startTime: '28/10/2025 18:00', endTime: '28/10/2025 18:15', status: 'completed' },
    { id: '1862', orderDate: '27/10/2025 09:41', startTime: '30/10/2025 18:00', endTime: '30/10/2025 18:15', status: 'scheduled' }
  ];

  return (
    <div className="order-detail-overlay" onClick={onClose}>
      <div className="order-detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="order-detail-header">
          <h2>Chi tiết đơn hàng</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="order-detail-content">
          {/* Summary Row */}
          <div className="order-summary-row">
            <div className="summary-cell">
              <span className="label">Mã đơn hàng</span>
              <span className="value">0002372</span>
            </div>
            <div className="summary-cell">
              <span className="label">Loại</span>
              <span className="value">{order.type}</span>
            </div>
            <div className="summary-cell">
              <span className="label">Số lượng</span>
              <span className="value">{order.quantity}</span>
            </div>
            <div className="summary-cell">
              <span className="label">Tổng tiền</span>
              <span className="value">{order.amount}</span>
            </div>
            <div className="summary-cell">
              <span className="label">Phương thức thanh toán</span>
              <span className="badge payment-paid">Được trả tiền</span>
            </div>
            <div className="summary-cell">
              <span className="label">Trạng thái</span>
              <span className="badge status-completed">{order.status}</span>
            </div>
            <div className="summary-cell">
              <span className="label">Ngày giờ</span>
              <span className="value">{order.dateTime}</span>
            </div>
          </div>

          {/* Three Column Details */}
          <div className="order-details-grid">
            <div className="detail-box">
              <h3>CHI TIẾT ĐƠN HÀNG</h3>
              <div className="detail-item">
                <span>Mã đơn hàng:</span>
                <span>0002372</span>
              </div>
              <div className="detail-item">
                <span>Ngày đặt hàng:</span>
                <span>27/10/2025 09:41</span>
              </div>
              <div className="detail-item">
                <span>Tổng số tiền:</span>
                <span>1.250.000₫</span>
              </div>
              <div className="detail-item">
                <span>Phiếu giảm giá:</span>
                <span>1250000</span>
              </div>
              <div className="detail-item">
                <span>Ưu đãi quy đổi điểm thưởng:</span>
                <span>0</span>
              </div>
              <div className="detail-item">
                <span>Tiền phí:</span>
                <span>0đ</span>
              </div>
              <div className="detail-item">
                <span>Phương thức thanh toán:</span>
                <span>N/A</span>
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
                <span></span>
                <span>Cơ bản, 15 Phút</span>
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

          {/* Sessions Table */}
          <div className="sessions-section">
            <h3>CÁC MẶT HÀNG THEO THỨ TỰ</h3>
            <table className="sessions-table">
              <thead>
                <tr>
                  <th>Mã buổi học</th>
                  <th>Ngày đặt hàng</th>
                  <th>Giờ bắt đầu buổi học</th>
                  <th>Giờ kết thúc buổi học</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr key={session.id}>
                    <td>{session.id}</td>
                    <td>{session.orderDate}</td>
                    <td>{session.startTime}</td>
                    <td>{session.endTime}</td>
                    <td>
                      <span className={`status-badge ${session.status === 'completed' ? 'status-completed' : 'status-scheduled'}`}>
                        {session.status === 'completed' ? 'Hoàn thành' : 'Đã lên lịch'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment History */}
          <div className="payment-history">
            <h3>LỊCH SỬ THANH TOÁN</h3>
            <table className="payment-table">
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
                  <td>27/10/2025 09:41</td>
                  <td>NA</td>
                  <td>N/A</td>
                  <td>0₫</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

