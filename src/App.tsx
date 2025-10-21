import { FC, useState } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ICANDashboard from './pages/ICANDashboard';
import ICANCourses from './pages/ICANCourses';
import Schedule from './pages/Schedule';
import './App.css';

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState<'main' | 'ican' | 'ican-courses' | 'schedule' | 'reports' | 'messages' | 'settings'>('main');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setView('main');
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : view === 'main' ? (
        <MainPage onOpenICAN={() => setView('ican')} />
      ) : view === 'ican' ? (
        <ICANDashboard 
          onBack={() => setView('main')} 
          onOpenSchedule={() => setView('schedule')} 
          onOpenCourses={() => setView('ican-courses')}
          onOpenReports={() => setView('reports')}
          onOpenMessages={() => setView('messages')}
          onOpenSettings={() => setView('settings')}
        />
      ) : view === 'ican-courses' ? (
        <ICANCourses 
          onBack={() => setView('ican')} 
          onOpenDashboard={() => setView('ican')}
          onOpenSchedule={() => setView('schedule')}
          onOpenReports={() => setView('reports')}
          onOpenMessages={() => setView('messages')}
          onOpenSettings={() => setView('settings')}
        />
      ) : view === 'schedule' ? (
        <Schedule onBack={() => setView('ican')} />
      ) : view === 'reports' ? (
        <div>Reports Page - Coming Soon</div>
      ) : view === 'messages' ? (
        <div>Messages Page - Coming Soon</div>
      ) : view === 'settings' ? (
        <div>Settings Page - Coming Soon</div>
      ) : (
        <Schedule />
      )}
    </div>
  );
};

export default App;
