import { FC, useState } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ICANDashboard from './pages/ICANDashboard';
import ICANCourses from './pages/ICANCourses';
import Schedule from './pages/Schedule';
import History from './pages/History';
import AccountManagement from './pages/AccountManagement';
import ClassSession from './pages/ClassSession';
import './App.css';

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState<'main' | 'ican' | 'ican-courses' | 'schedule' | 'reports' | 'messages' | 'settings' | 'history' | 'class-session'>('main');

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
          onOpenHistory={() => setView('history')}
          onJoinClass={() => setView('class-session')}
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
        <AccountManagement 
          onBack={() => setView('main')}
          onOpenDashboard={() => setView('ican')}
          onOpenCourses={() => setView('ican-courses')}
          onOpenSchedule={() => setView('schedule')}
          onOpenReports={() => setView('reports')}
          onOpenMessages={() => setView('messages')}
          onOpenHistory={() => setView('history')}
        />
      ) : view === 'history' ? (
        <History 
          onBack={() => setView('main')}
          onOpenDashboard={() => setView('ican')}
          onOpenCourses={() => setView('ican-courses')}
          onOpenSchedule={() => setView('schedule')}
          onOpenReports={() => setView('reports')}
          onOpenMessages={() => setView('messages')}
          onOpenSettings={() => setView('settings')}
        />
      ) : view === 'class-session' ? (
        <ClassSession 
          onExit={() => setView('ican')}
        />
      ) : (
        <Schedule />
      )}
    </div>
  );
};

export default App;
