import { FC, useState } from 'react';
import {
  BookOpen,
  Calendar,
  Bell,
  Settings,
  Home,
  MessageCircle,
  BarChart3,
  Search,
  Star,
  Clock,
  Users,
  Play,
  Award,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  Folder,
  Video,
  XCircle,
  CalendarClock,
  Route
} from 'lucide-react';
import './ICANCourses.css';
import CourseDetailView from '../components/CourseDetailView';

interface ICANCoursesProps {
  onBack?: () => void;
  onOpenDashboard?: () => void;
  onOpenSchedule?: () => void;
  onOpenReports?: () => void;
  onOpenMessages?: () => void;
  onOpenSettings?: () => void;
}

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  instructor?: string;
  rating?: number;
  students?: number;
  duration?: string;
  price?: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLesson: string;
  color: string;
  imageUrl: string;
  category?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  isEnrolled?: boolean;
  startDate?: string;
  endDate?: string;
  targetAudience: string;
  benefits: string;
}

const ICANCourses: FC<ICANCoursesProps> = ({ onBack, onOpenDashboard, onOpenSchedule, onOpenReports, onOpenMessages, onOpenSettings }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [classTab, setClassTab] = useState<'all' | '1-1' | '1-n' | 'trial'>('all');
  const [statusTab, setStatusTab] = useState<'all' | 'scheduled' | 'unscheduled' | 'completed' | 'cancelled'>('all');
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');
  const [serviceType, setServiceType] = useState<'all' | 'online' | 'offline'>('all');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  // Note: course detail flow retained for available courses if needed

  const handleBackToCourses = () => {
    setShowCourseDetail(false);
    setSelectedCourse(null);
  };

  const handleStartLesson = (course: Course) => {
    console.log('Starting lesson for course:', course.title);
    // Here you would typically navigate to the lesson or open a video player
  };

  // Tree category structure requested
  const treeCategories = [
    {
      id: 'speakwell-getready',
      name: 'Speawell Get ready',
      children: [
        { id: 'kb-starters', name: "Kid's Box Starters" },
        { id: 'kb-movers', name: "Kid's Box Movers" },
        { id: 'kb-flyers', name: "Kid's Box Fylers" }
      ]
    },
    {
      id: 'speakwell-hero',
      name: 'Speakwell Hero',
      children: [
        { id: 'letsgo-1', name: "Let's go 1" },
        { id: 'letsgo-2', name: "Let's go 2" },
        { id: 'kb-beginners', name: "Kid's Box Beginners" }
      ]
    },
    {
      id: 'speakwell-teens',
      name: 'Speakwell For Teens',
      children: [
        { id: 'solution-elementary', name: 'Solution Elementary' },
        { id: 'solution-pre', name: 'Solution Pre-Intermediate' }
      ]
    }
  ];

  // Map leaf nodes to course.category used in sample data
  const leafIdToCourseCategory: Record<string, string> = {
    'kb-starters': 'speakwell',
    'kb-movers': 'speakwell',
    'kb-flyers': 'speakwell',
    'letsgo-1': 'speakwell',
    'letsgo-2': 'speakwell',
    'kb-beginners': 'speakwell',
    'solution-elementary': 'easy-speak-teens',
    'solution-pre': 'easy-speak-teens'
  };

  const getDescendantLeafIds = (nodeId: string): string[] => {
    const stack: any[] = [...treeCategories];
    const leaves: string[] = [];
    while (stack.length) {
      const n = stack.pop();
      if (!n) continue;
      if (n.id === nodeId) {
        // Collect leaves in this subtree
        const collect = (m: any) => {
          if (m.children?.length) m.children.forEach(collect);
          else leaves.push(m.id);
        };
        collect(n);
        return leaves;
      }
      if (n.children?.length) stack.push(...n.children);
    }
    return leaves;
  };

  const selectedCourseCategories: string[] = (() => {
    if (selectedCategory === 'all') return [];
    // If a leaf id is selected
    if (leafIdToCourseCategory[selectedCategory]) {
      return [leafIdToCourseCategory[selectedCategory]];
    }
    // Parent selected → include all mapped child categories
    const leafIds = getDescendantLeafIds(selectedCategory);
    const mapped = Array.from(new Set(leafIds.map(id => leafIdToCourseCategory[id]).filter(Boolean)));
    return mapped;
  })();

  const courses: Course[] = [
    {
      id: 1,
      title: 'SpeakWell - Bé tự tin giao tiếp tiếng Anh chỉ sau 3 tháng',
      subtitle: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết',
      description: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết đồng thời nuôi dưỡng đam mê học tập, giúp bé hào hứng, yêu thích tiếng Anh hơn. Chương trình dành cho học viên từ 7 - 12 tuổi ở mọi trình độ với mô hình học 1:1 hoặc 1:2 trực tiếp với giáo viên.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.9,
      students: 2500,
      duration: '3 tháng',
      price: 'Liên hệ tư vấn',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      nextLesson: 'Bài 16: Giao tiếp hàng ngày',
      color: '#0057A5',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_speak_well_c9926de568.png&w=1920&q=75',
      category: 'speakwell',
      level: 'Beginner',
      tags: ['Tiếng Anh trẻ em', 'Giao tiếp', '1:1 với giáo viên'],
      isEnrolled: true,
      startDate: '2025-01-15',
      endDate: '2025-04-15',
      targetAudience: 'Học viên từ 7 - 12 tuổi',
      benefits: 'Mô hình học 1:1 hoặc 1:2 trực tiếp với giáo viên'
    },
    {
      id: 2,
      title: 'English Adventure with Milo - Tiếp thu dễ dàng, vững vàng nền tảng',
      subtitle: 'Tạo dựng và bổ trợ nền tảng Ngữ pháp cho trẻ',
      description: 'Tạo dựng và bổ trợ nền tảng Ngữ pháp cho trẻ ngay từ đầu, đặt nền móng vững chắc để trẻ phát triển ở các trình độ cao hơn. Chương trình tự học tại nhà dành cho học viên từ 5 - 11 tuổi.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.8,
      students: 1800,
      duration: '6 tháng',
      price: 'Liên hệ tư vấn',
      progress: 60,
      totalLessons: 30,
      completedLessons: 18,
      nextLesson: 'Bài 19: Ngữ pháp cơ bản',
      color: '#8CC63F',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_kid_english_ab7ad07ae4.png&w=1920&q=75',
      category: 'easy-speak-teens',
      level: 'Beginner',
      tags: ['Ngữ pháp', 'Tự học tại nhà', 'Trẻ em'],
      isEnrolled: true,
      startDate: '2025-01-20',
      endDate: '2025-07-20',
      targetAudience: 'Học viên từ 5 - 11 tuổi',
      benefits: 'Tăng khả năng sử dụng ngôn ngữ thông qua việc luyện tập'
    },
    {
      id: 3,
      title: 'Easy Speak For Teens - Tiếng Anh thiếu niên',
      subtitle: 'Nâng cao kỹ năng giao tiếp cho thanh thiếu niên',
      description: 'Chương trình học tiếng Anh được thiết kế đặc biệt cho thanh thiếu niên, giúp các em tự tin giao tiếp và chuẩn bị tốt cho các kỳ thi quốc tế.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.7,
      students: 1200,
      duration: '4 tháng',
      price: 'Liên hệ tư vấn',
      progress: 45,
      totalLessons: 25,
      completedLessons: 11,
      nextLesson: 'Bài 12: Thuyết trình',
      color: '#DB2691',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_easy_pass_6f72975b0e.png&w=1920&q=75',
      category: 'easy-speak-teens',
      level: 'Intermediate',
      tags: ['Tiếng Anh thiếu niên', 'Giao tiếp', 'Kỳ thi quốc tế'],
      isEnrolled: true,
      startDate: '2025-01-10',
      endDate: '2025-05-10',
      targetAudience: 'Học viên từ 13 - 17 tuổi',
      benefits: 'Phát triển kỹ năng giao tiếp tự tin và hiệu quả'
    },
    {
      id: 4,
      title: 'Easy IELTS - Luyện thi IELTS cam kết đầu ra',
      subtitle: 'Phương pháp LIPE - Lý thuyết, Tương tác, Thực hành, Kiểm tra',
      description: 'Khóa học luyện thi IELTS với cam kết đầu ra, áp dụng phương pháp LIPE giúp học viên đạt kết quả cao trong kỳ thi IELTS.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.9,
      students: 2100,
      duration: '6 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 30,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu IELTS',
      color: '#F59E0B',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_easy_ielts_727e1a6281.png&w=1920&q=75',
      category: 'easy-ielts',
      level: 'Advanced',
      tags: ['IELTS', 'Cam kết đầu ra', 'Phương pháp LIPE'],
      isEnrolled: false,
      startDate: '2025-02-01',
      endDate: '2025-08-01',
      targetAudience: 'Học viên từ 13 - 17 tuổi',
      benefits: 'Chuẩn bị tốt nhất cho kỳ thi IELTS'
    },
    {
      id: 5,
      title: 'SpeakWell Advanced - Tiếng Anh người lớn',
      subtitle: 'Giao tiếp chuyên nghiệp cho người lớn',
      description: 'Khóa học tiếng Anh giao tiếp nâng cao dành cho người lớn, tập trung vào kỹ năng thuyết trình và giao tiếp trong môi trường công việc.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.8,
      students: 680,
      duration: '3 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 15,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu khóa học',
      color: '#0057A5',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_adult_easy_speak_903d04821e.png&w=1920&q=75',
      category: 'speakwell',
      level: 'Advanced',
      tags: ['Tiếng Anh người lớn', 'Giao tiếp', 'Công việc'],
      isEnrolled: false,
      startDate: '2025-03-01',
      endDate: '2025-06-01',
      targetAudience: 'Học viên từ 18 tuổi trở lên',
      benefits: 'Cải thiện kỹ năng giao tiếp tiếng Anh trong công việc'
    },
    {
      id: 6,
      title: 'Easy IELTS Foundation - Nền tảng IELTS',
      subtitle: 'Xây dựng nền tảng vững chắc cho IELTS',
      description: 'Khóa học nền tảng IELTS dành cho người mới bắt đầu, giúp học viên làm quen với format bài thi và xây dựng kiến thức cơ bản.',
      instructor: 'Giáo viên ICAN CONNECT',
      rating: 4.6,
      students: 950,
      duration: '4 tháng',
      price: 'Liên hệ tư vấn',
      progress: 0,
      totalLessons: 20,
      completedLessons: 0,
      nextLesson: 'Bài 1: Giới thiệu IELTS Foundation',
      color: '#06B6D4',
      imageUrl: 'https://www.icanconnect.vn/_next/image?url=https%3A%2F%2Fs3.icankid.io%3A443%2Fmedia%2Fweb%2Fican-connect%2Fimage_youth_public_speaking_15b6909efc.png&w=1920&q=75',
      category: 'easy-ielts',
      level: 'Beginner',
      tags: ['IELTS Foundation', 'Nền tảng', 'Người mới bắt đầu'],
      isEnrolled: false,
      startDate: '2025-02-15',
      endDate: '2025-06-15',
      targetAudience: 'Học viên từ 18 tuổi trở lên',
      benefits: 'Đạt điểm IELTS mong muốn trong thời gian ngắn'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || selectedCourseCategories.includes(course.category || '');
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.instructor?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
      (course.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) || false);
    return matchesCategory && matchesSearch;
  });

  const enrolledCourses = filteredCourses.filter(course => course.isEnrolled);
  const availableCourses = filteredCourses.filter(course => !course.isEnrolled);

  const toggleExpand = (id: string) => {
    const next = new Set(expandedNodes);
    if (next.has(id)) next.delete(id); else next.add(id);
    setExpandedNodes(next);
  };

  const renderTree = (nodes: any[]) => (
    <ul className="tree-list">
      {nodes.map(node => (
        <li key={node.id} className="tree-item">
          <div className={`tree-row ${selectedCategory === node.id ? 'active' : ''}`}>
            {node.children?.length ? (
              <button className={`tree-toggle ${expandedNodes.has(node.id) ? 'expanded' : ''}`} onClick={() => toggleExpand(node.id)} aria-label="Toggle">
                {expandedNodes.has(node.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            ) : (
              <span className="tree-spacer"></span>
            )}
            <button
              className="tree-label"
              onClick={() => setSelectedCategory(node.id)}
            >
              <span className="tree-icon">{node.children?.length ? <Folder size={14} /> : <BookOpen size={14} />}</span>
              <span className="tree-text">{node.name}</span>
              <span className="count-badge">{getNodeCount(node)}</span>
            </button>
          </div>
          {node.children?.length && expandedNodes.has(node.id) && (
            <div className="tree-children">
              {renderTree(node.children)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  function getNodeCount(node: any): number {
    if (!node.children?.length) {
      const mapped = leafIdToCourseCategory[node.id];
      return courses.filter(c => c.category === mapped).length;
    }
    return node.children.reduce((sum: number, child: any) => sum + getNodeCount(child), 0);
  }

  function statusLabel(s: 'scheduled' | 'unscheduled' | 'completed' | 'cancelled'): string {
    switch (s) {
      case 'scheduled': return 'Đã lên lịch';
      case 'unscheduled': return 'Chưa lên lịch';
      case 'completed': return 'Hoàn thành';
      case 'cancelled': return 'Đã hủy';
      default: return '';
    }
  }

  return (
    <div className="ican-courses">
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
          <a href="#" className="nav-item active">
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
        {showCourseDetail && selectedCourse ? (
          <CourseDetailView
            course={selectedCourse}
            onBack={handleBackToCourses}
            onStartLesson={handleStartLesson}
          />
        ) : (
          <>
            {/* Header */}
            <header className="courses-header">
          <div className="header-left">
            <h1>Lớp học của tôi</h1>
            <p>Quản lý và theo dõi tiến độ học tập</p>
          </div>
          <div className="header-right">
            {onBack && (
              <button className="back-main-btn" onClick={onBack}>
                Quay về Main Page
              </button>
            )}
            <div className="notification-icon">
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-avatar">
              <img src="https://img.lovepik.com/free-png/20211228/lovepik-portraits-of-primary-school-students-png-image_400945059_wh860.png" alt="User" />
            </div>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f0f7ff' }}>
              <BookOpen size={24} color="#0057A5" />
            </div>
            <div className="stat-content">
              <h3>{enrolledCourses.length}</h3>
              <p>Khóa học đang học</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f5fdf0' }}>
              <TrendingUp size={24} color="#8CC63F" />
            </div>
            <div className="stat-content">
              <h3>78%</h3>
              <p>Tiến độ trung bình</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#fdf0f7' }}>
              <Award size={24} color="#DB2691" />
            </div>
            <div className="stat-content">
              <h3>5</h3>
              <p>Chứng chỉ đạt được</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#f0f7ff' }}>
              <Clock size={24} color="#0057A5" />
            </div>
            <div className="stat-content">
              <h3>156h</h3>
              <p>Tổng giờ học</p>
            </div>
          </div>
        </div>

        {/* Courses Content */}
        <div className="courses-content">
          {/* Sidebar Categories */}
          <div className="courses-sidebar">
            <div className="search-section">
              <div className="search-box">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="categories-section">
              <h3>Danh mục khóa học</h3>
              <div className="tree-filter">
                <button
                  className={`category-reset ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  Tất cả khóa học
                </button>
                {renderTree(treeCategories)}
              </div>
            </div>

            <div className="view-controls">
              <h3>Chế độ xem</h3>
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <div className="grid-icon"></div>
                  Lưới
                </button>
                <button
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <div className="list-icon"></div>
                  Danh sách
                </button>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="courses-main">
            {/* My Sessions (replace enrolled courses grid) */}
            {enrolledCourses.length > 0 && (() => {
              const mySessions = enrolledCourses.flatMap((course, idx) => {
                const base = new Date();
                base.setHours(14 + (idx % 3) * 2, 0, 0, 0);
                const s1 = new Date(base);
                const s2 = new Date(base.getTime() + 2 * 60 * 60 * 1000);
                const types: Array<'1-1' | '1-n' | 'trial'> = ['1-1', '1-n', 'trial'];
                const statuses: Array<'scheduled' | 'unscheduled' | 'completed' | 'cancelled'> = ['scheduled', 'unscheduled', 'completed', 'cancelled'];
                const typeA = types[idx % types.length];
                const typeB = types[(idx + 1) % types.length];
                const statusA = statuses[idx % statuses.length];
                const statusB = statuses[(idx + 2) % statuses.length];
                const modeA: 'online' | 'offline' = idx % 2 === 0 ? 'online' : 'offline';
                const modeB: 'online' | 'offline' = idx % 2 === 0 ? 'offline' : 'online';
                const teacherName = course.instructor || 'Giáo viên ICAN';
                const teacherAvatar = `https://i.pravatar.cc/48?img=${(idx * 7) % 70 + 1}`;
                return [
                  { id: `${course.id}-a`, start: s1, title: course.nextLesson, courseTitle: course.title, teacher: teacherName, teacherAvatar, color: course.color, classType: typeA, status: statusA, mode: modeA },
                  { id: `${course.id}-b`, start: s2, title: `Ôn tập: ${course.nextLesson}`, courseTitle: course.title, teacher: teacherName, teacherAvatar, color: course.color, classType: typeB, status: statusB, mode: modeB }
                ];
              });
              const matchesClass = (t: string) => classTab === 'all' || t === classTab;
              const matchesStatus = (s: string) => statusTab === 'all' || s === statusTab;
              const matchesService = (m: string) => serviceType === 'all' || m === serviceType;
              const matchesSearch = (s: any) =>
                s.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.teacher || '').toLowerCase().includes(searchTerm.toLowerCase());
              const matchesDate = (s: any) => {
                const ts = s.start.getTime();
                const fromOk = !dateFrom || ts >= new Date(dateFrom).setHours(0,0,0,0);
                const toOk = !dateTo || ts <= new Date(dateTo).setHours(23,59,59,999);
                return fromOk && toOk;
              };
              const mySessionsFiltered = mySessions.filter(s => matchesClass(s.classType) && matchesStatus(s.status) && matchesService(s.mode) && matchesSearch(s) && matchesDate(s));
              const totalPages = Math.max(1, Math.ceil(mySessionsFiltered.length / pageSize));
              const currentPage = Math.min(page, totalPages);
              const startIdx = (currentPage - 1) * pageSize;
              const pageItems = mySessionsFiltered.slice(startIdx, startIdx + pageSize);
              return (
                <div className="courses-section">
                  <div className="section-header">
                    <h2>Lớp học đang học</h2>
                    <span className="course-count">{mySessionsFiltered.length} buổi</span>
                  </div>
                  <div className="session-filter-card card">
                    <div className="session-filters">
                      <div className="tabs">
                        <button className={`tab ${classTab === 'all' ? 'active' : ''}`} onClick={() => setClassTab('all')}>Tất cả</button>
                        <button className={`tab ${classTab === '1-1' ? 'active' : ''}`} onClick={() => setClassTab('1-1')}>Lớp 1-1</button>
                        <button className={`tab ${classTab === '1-n' ? 'active' : ''}`} onClick={() => setClassTab('1-n')}>Lớp 1-n</button>
                        <button className={`tab ${classTab === 'trial' ? 'active' : ''}`} onClick={() => setClassTab('trial')}>Lớp học thử</button>
                      </div>
                      <div className="tabs status">
                        <button className={`tab ${statusTab === 'all' ? 'active' : ''}`} onClick={() => setStatusTab('all')}>Tất cả trạng thái</button>
                        <button className={`tab ${statusTab === 'scheduled' ? 'active' : ''}`} onClick={() => setStatusTab('scheduled')}>Đã lên lịch</button>
                        <button className={`tab ${statusTab === 'unscheduled' ? 'active' : ''}`} onClick={() => setStatusTab('unscheduled')}>Chưa lên lịch</button>
                        <button className={`tab ${statusTab === 'completed' ? 'active' : ''}`} onClick={() => setStatusTab('completed')}>Hoàn thành</button>
                        <button className={`tab ${statusTab === 'cancelled' ? 'active' : ''}`} onClick={() => setStatusTab('cancelled')}>Đã hủy</button>
                      </div>
                    </div>
                    <div className="filter-form">
                      <div className="form-field">
                        <label>Từ khóa</label>
                        <div className="search-box">
                          <Search size={20} />
                          <input type="text" placeholder="Nhập từ khóa" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                      </div>
                      <div className="form-field">
                        <label>Loại dịch vụ</label>
                        <div className="select-field">
                          <select value={serviceType} onChange={(e) => setServiceType(e.target.value as any)}>
                            <option value="all">Chọn loại dịch vụ</option>
                            <option value="online">Trực tuyến</option>
                            <option value="offline">Ngoại tuyến</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-field">
                        <label>Ngày bắt đầu</label>
                        <div className="date-input">
                          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                        </div>
                      </div>
                      <div className="form-field">
                        <label>Ngày kết thúc</label>
                        <div className="date-input">
                          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                        </div>
                      </div>
                      <div className="form-actions">
                        <button className="btn-primary" onClick={(e) => e.preventDefault()}>Tìm kiếm</button>
                        <button className="btn-outline" onClick={() => { setSearchTerm(''); setServiceType('all'); setDateFrom(''); setDateTo(''); }}>Xóa</button>
                      </div>
                    </div>
                  </div>
                  <div className="session-list-card card">
                    <div className="session-list">
                    {pageItems.map(s => {
                      const dateLabel = s.start.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
                      const timeLabel = s.start.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false });
                      return (
                        <div key={s.id} className={`session-item status-${s.status}`}>
                          <div className="session-timebox">
                            <div className="time">🕒 {timeLabel}</div>
                            <div className="date">{dateLabel}</div>
                          </div>
                          <div className="session-content">
                            <div className="session-header-row">
                              <div className="session-title-block">
                                <div className="session-title">{s.courseTitle}</div>
                              </div>
                              <div className="teacher-block">
                                <img className="teacher-avatar" src={s.teacherAvatar} alt={s.teacher} />
                                <span className="teacher-name">{s.teacher}</span>
                              </div>
                            </div>
                            <div className="session-lesson">{s.title} <span className="pill">{s.classType}</span> <span className={`status-pill ${s.status}`}>{statusLabel(s.status)}</span></div>
                            <div className="session-meta"></div>
                          </div>
                          <div className="session-actions">
                            <div className="action-icons">
                              <button className="icon-btn primary" title="Vào học">
                                <Video size={16} />
                              </button>
                              <button className="icon-btn warn" title="Đổi lịch">
                                <CalendarClock size={16} />
                              </button>
                              <button className="icon-btn danger" title="Hủy buổi học">
                                <XCircle size={16} />
                              </button>
                              <button className="icon-btn info" title="Xem lộ trình">
                                <Route size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                    <div className="pagination">
                      <div className="pagination-left">
                        <span>Trang {currentPage}/{totalPages}</span>
                        <select value={pageSize} onChange={(e) => { setPage(1); setPageSize(parseInt(e.target.value, 10)); }}>
                          <option value={5}>5 / trang</option>
                          <option value={10}>10 / trang</option>
                          <option value={20}>20 / trang</option>
                        </select>
                      </div>
                      <div className="pagination-right">
                        <button className="page-btn" disabled={currentPage === 1} onClick={() => setPage(1)}>{'«'}</button>
                        <button className="page-btn" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>{'‹'}</button>
                        <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setPage(currentPage + 1)}>{'›'}</button>
                        <button className="page-btn" disabled={currentPage === totalPages} onClick={() => setPage(totalPages)}>{'»'}</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Available Courses */}
            {availableCourses.length > 0 && (
              <div className="courses-section">
                <div className="section-header">
                  <h2>Khóa học có sẵn</h2>
                  <span className="course-count">{availableCourses.length} khóa học</span>
                </div>
                <div className={`courses-grid ${viewMode}`}>
                  {availableCourses.map(course => (
                    <div key={course.id} className="course-card">
                      <div className="course-image">
                        <img src={course.imageUrl} alt={course.title} />
                        <div className="course-badge available">Có sẵn</div>
                        <div className="course-price">{course.price}</div>
                      </div>

                      <div className="course-content">
                        <div className="course-header">
                          <h3 className="course-title">{course.title}</h3>
                          <p className="course-subtitle">{course.subtitle}</p>
                        </div>

                        <div className="course-meta">
                          <div className="meta-item">
                            <Users size={14} />
                            <span>{course.instructor}</span>
                          </div>
                          <div className="meta-item">
                            <Star size={14} />
                            <span>{course.rating}</span>
                          </div>
                          <div className="meta-item">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        <div className="course-description">
                          <p>{course.description}</p>
                        </div>

                        <div className="course-tags">
                          {course.tags?.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="course-actions">
                        <button className="btn-enroll" style={{ backgroundColor: course.color }}>
                          Đăng ký ngay
                        </button>
                        <button className="btn-outline" style={{ borderColor: course.color, color: course.color }}>
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">
                  <Search size={48} />
                </div>
                <h3>Không tìm thấy khóa học</h3>
                <p>Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác</p>
                <button className="btn-primary">Khám phá khóa học</button>
              </div>
            )}
          </div>
        </div>
      </>
        )}
      </div>
    </div>
  );
};

export default ICANCourses;
