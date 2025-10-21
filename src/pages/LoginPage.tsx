import { FC, useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === 'abc' && password === '123456') {
      onLoginSuccess();
    } else {
      setError('Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="login-page">
      
      <div className="login-container">
        <div className="login-card">
          <div className="login-left">
            <div className="login-image">
              <img 
                src="https://galaxyedu.vn/wp-content/uploads/2023/09/thumbnail-galaxy.png" 
                alt="Educational illustration" 
                className="left-illustration-img" 
              />
            </div>
          </div>
          
          <div className="login-right">
            <div className="login-form">
              <div className="logo">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/ICAN_logo.png" 
                  alt="ICAN Logo" 
                  className="ican-logo-img" 
                />
              </div>
              
              <h1>Đăng nhập</h1>
              
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <div className="password-input">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nhập mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="show-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      Hiện mật khẩu
                    </button>
                  </div>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Ghi nhớ</span>
                  </label>
                  <a href="#" className="forgot-password">Quên mật khẩu?</a>
                </div>
                
                <button type="submit" className="login-btn">
                  Đăng nhập
                </button>
              </form>
              
              <div className="divider">
                <span>hoặc đăng nhập bằng email</span>
              </div>
              
              <button className="google-btn">
                <div className="google-icon">G</div>
                Đăng nhập bằng Google
              </button>
              
              <div className="signup-link">
                Không có tài khoản? <a href="#">Đăng ký</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-icons">
        <div className="icon rocket">🚀</div>
        <div className="icon graduation">🎓</div>
        <div className="icon balloon">🎈</div>
      </div>
    </div>
  );
};

export default LoginPage;
