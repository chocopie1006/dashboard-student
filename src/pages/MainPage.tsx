import { FC } from 'react';
import './MainPage.css';

interface MainPageProps {
  onOpenICAN?: () => void;
}

const MainPage: FC<MainPageProps> = ({ onOpenICAN }) => {

  return (
    <div className="main-page">
      <div className="main-container">
        <div className="logo-section">
          <a href="https://galaxyedu.vn/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://static.ybox.vn/2023/4/1/1681724890818-logo_GE.png" 
              alt="Galaxy Education Logo" 
              className="main-logo"
            />
          </a>
        </div>
        
        {/* Calendar removed per request */}

        <div className="platforms-section">
          <div className="platform-card funix">
            <div className="platform-logo">
              <img 
                src="https://funix.edu.vn/wp-content/uploads/2021/12/FUNiX-full-logo-original.png" 
                alt="Funix Logo" 
                className="platform-logo-img"
              />
            </div>
            <p>Nền tảng học tập trực tuyến hàng đầu</p>
            <button className="platform-btn funix-btn">Truy cập Funix</button>
          </div>
          
          <div className="platform-card ican" onClick={onOpenICAN} role="button" tabIndex={0}>
            <div className="platform-logo">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/ICAN_logo.png" 
                alt="ICAN Logo" 
                className="platform-logo-img"
              />
            </div>
            <p>Học tập thông minh, phát triển tương lai</p>
            <button className="platform-btn ican-btn" onClick={onOpenICAN}>Truy cập ICAN</button>
          </div>
          
          <div className="platform-card hocmai">
            <div className="platform-logo">
              <img 
                src="http://blog.hocmai.vn/wp-content/uploads/2018/01/Logo-hocmai.png" 
                alt="HOCMAI Logo" 
                className="platform-logo-img"
              />
            </div>
            <p>Giáo dục chất lượng cao cho mọi lứa tuổi</p>
            <button className="platform-btn hocmai-btn">Truy cập HOCMAI</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
