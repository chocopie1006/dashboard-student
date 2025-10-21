import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Calendar,
  BarChart3,
  User,
  GraduationCap,
  Settings,
  Palette
} from 'lucide-react';

const Sidebar: FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Trang chủ' },
    { path: '/courses', icon: BookOpen, label: 'Khóa học' },
    { path: '/schedule', icon: Calendar, label: 'Lịch học' },
    { path: '/reports', icon: BarChart3, label: 'Báo cáo' },
    { path: '/profile', icon: User, label: 'Hồ sơ' },
    { path: '/design-system', icon: Palette, label: 'Design System' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <GraduationCap size={32} className="logo-icon" />
          <span className="logo-text">ICAN</span>
        </div>
        <p className="logo-subtitle">Hệ thống giáo dục</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="settings-btn">
          <Settings size={20} />
          <span>Cài đặt</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

