# ICAN Education Platform

Hệ thống platform giáo dục ICAN - Dashboard học sinh với giao diện hiện đại và thân thiện với người dùng.

## 🚀 Tính năng chính

### 📊 Dashboard Tổng quan
- **Thống kê học tập**: Tổng quan về tiến độ học tập, giờ học, chứng chỉ đạt được
- **Khóa học đang học**: Hiển thị các khóa học với tiến độ chi tiết
- **Hoạt động gần đây**: Theo dõi các hoạt động học tập mới nhất
- **Lớp học sắp tới**: Lịch học trong ngày và tuần

### 📚 Quản lý Khóa học
- **Đa dạng lĩnh vực**: Tiếng Anh, Công nghệ, Toán học, Khoa học, Kinh doanh
- **Theo dõi tiến độ**: Progress bar và thống kê chi tiết cho từng khóa học
- **Tìm kiếm và lọc**: Hệ thống tìm kiếm và phân loại khóa học
- **Chế độ xem**: Grid và List view cho trải nghiệm tốt nhất

### 📅 Lịch học
- **Lịch tuần**: Xem lịch học theo tuần với giao diện trực quan
- **Lớp học trực tiếp/Online**: Phân biệt rõ ràng các loại lớp học
- **Thông tin chi tiết**: Giảng viên, phòng học, số lượng học sinh
- **Tham gia lớp học**: Nút tham gia trực tiếp cho các lớp sắp diễn ra

### 📈 Báo cáo học tập
- **Thống kê tổng quan**: Tổng giờ học, bài học hoàn thành, chứng chỉ
- **Biểu đồ tiến độ**: Biểu đồ theo dõi hoạt động học tập theo tháng
- **Thành tích**: Hệ thống achievement và badge
- **Mục tiêu học tập**: Đặt và theo dõi các mục tiêu cá nhân

### 👤 Hồ sơ cá nhân
- **Thông tin cá nhân**: Quản lý thông tin học sinh
- **Chứng chỉ**: Hiển thị các chứng chỉ đã đạt được
- **Cài đặt tài khoản**: Tùy chỉnh thông báo và ngôn ngữ
- **Thao tác nhanh**: Truy cập nhanh các tính năng chính

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: CSS3 với CSS Variables
- **UI/UX**: Modern Design System

## 📦 Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

### Build cho production
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 🎨 Thiết kế UI/UX

### Design System
- **Màu sắc**: Hệ thống màu nhất quán với primary, secondary, accent colors
- **Typography**: Font Inter với các kích thước và weight phù hợp
- **Spacing**: Hệ thống spacing nhất quán với CSS variables
- **Shadows**: Layered shadow system cho depth
- **Border Radius**: Consistent border radius cho các components

### Responsive Design
- **Desktop**: Layout 2 cột với sidebar cố định
- **Tablet**: Layout 1 cột với sidebar có thể thu gọn
- **Mobile**: Layout stack với navigation drawer

### Accessibility
- **Keyboard Navigation**: Hỗ trợ điều hướng bằng bàn phím
- **Screen Reader**: Semantic HTML và ARIA labels
- **Color Contrast**: Đảm bảo contrast ratio phù hợp
- **Focus States**: Clear focus indicators

## 📱 Tính năng Responsive

### Desktop (>= 1024px)
- Sidebar cố định 280px
- Grid layout 2 cột cho dashboard
- Full feature set

### Tablet (768px - 1023px)
- Sidebar có thể thu gọn
- Grid layout 1 cột
- Optimized touch targets

### Mobile (< 768px)
- Navigation drawer
- Stack layout
- Simplified interactions
- Touch-optimized UI

## 🎯 Cấu trúc dự án

```
src/
├── components/          # Reusable components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Header.tsx      # Top header
│   ├── CourseCard.tsx  # Course card component
│   ├── ProgressChart.tsx # Progress visualization
│   └── RecentActivity.tsx # Activity feed
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Courses.tsx    # Courses management
│   ├── Schedule.tsx   # Schedule view
│   ├── Reports.tsx    # Reports and analytics
│   └── Profile.tsx   # User profile
├── App.tsx            # Main app component
├── App.css            # Global styles
└── main.tsx           # App entry point
```

## 🔧 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `src/App.css`:
```css
:root {
  --primary-color: #3B82F6;
  --secondary-color: #10B981;
  --accent-color: #8B5CF6;
  /* ... */
}
```

### Thêm khóa học mới
Cập nhật data trong các component pages:
```typescript
const courses = [
  {
    id: 1,
    title: 'Tên khóa học',
    category: 'Danh mục',
    progress: 75,
    // ...
  }
];
```

### Tùy chỉnh layout
Chỉnh sửa grid system trong CSS:
```css
.dashboard-grid {
  grid-template-columns: 2fr 1fr; /* Thay đổi tỷ lệ cột */
}
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Upload dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng tạo issue trên GitHub repository.

---

**ICAN Education Platform** - Nơi học tập trở nên thú vị và hiệu quả! 🎓✨