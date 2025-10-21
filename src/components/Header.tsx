import { FC } from 'react';
import { Bell, Search, User as UserIcon } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-left">
       
      </div>
      
      <div className="header-right">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Tìm kiếm khóa học, bài học..." 
            className="search-input"
          />
        </div>
        
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-profile">
          <div className="user-avatar">
            <UserIcon size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Nguyễn Văn A</span>
            <span className="user-role">Học sinh</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

