import { NewsItem, Event, Publication, AlumniSpotlight, Donation, FAQ, NavigationItem } from '../types';

// 真實會員數據（基於提供的CSV）
export const realMemberData = [
  { email: '1415ds5y04@gmail.com', password: '65488448', name: '周進', englishName: 'Chau Chun', graduationYear: 2024, isPaid: false },
  { email: 'peteryuchichun@gmail.com', password: '61516117', name: '俞資俊', englishName: 'Yu Chi Chun', graduationYear: 2024, isPaid: false },
  { email: '1155141896@link.cuhk.edu.hk', password: '59893759', name: '梁子聰', englishName: 'Leung Tsz Chung', graduationYear: 2024, isPaid: true },
  { email: 'tszhowong37@gmail.com', password: '90736654', name: '黃梓皓', englishName: 'Wong Tsz Ho', graduationYear: 2024, isPaid: true },
  { email: 'winnielichingyan@gmail.com', password: '69203823', name: '李晴欣', englishName: 'Li Ching Yan', graduationYear: 2023, isPaid: false },
  { email: 'kakityuen1@gmail.com', password: '90608748', name: '袁嘉傑', englishName: 'Yuen ka kit', graduationYear: 2023, isPaid: false },
  { email: 'Jennykei1103@gmail.com', password: '54013972', name: '紀佳怡', englishName: 'Kei Kai Yi', graduationYear: 2023, isPaid: false },
  { email: 'cristy0527@gmail.com', password: '67006825', name: '鄧婉婷', englishName: 'Tang Yuen Ting Cristy', graduationYear: 2023, isPaid: false },
  { email: 'thomaslu0330@gmail.com', password: '63395272', name: '盧汝霆', englishName: 'Lu Yu Ting', graduationYear: 2022, isPaid: false },
  { email: 'torreschanhw@gmail.com', password: '69228326', name: '陳浩維', englishName: 'Chan Ho Wai', graduationYear: 2022, isPaid: false },
  { email: 'elainelimf@gmail.com', password: '69381574', name: '李美鳳', englishName: 'Li Mei Fung', graduationYear: 2022, isPaid: false },
  { email: 'chankayeecherry@gmail.com', password: '98470039', name: '陳嘉儀', englishName: 'Chan Ka Yee', graduationYear: 2022, isPaid: false },
  { email: 'bairen2122@gmail.com', password: '51112137', name: '鄭百喬', englishName: 'Cheng Pak Kiu', graduationYear: 2021, isPaid: true },
  { email: 'chunsam328@gmail.com', password: '66902331', name: '黃雋琛', englishName: 'Wong Chun Sam', graduationYear: 2021, isPaid: true },
  { email: 'sly3joey@gmail.com', password: '63605425', name: '宋麗滢', englishName: 'Sung Lai Ying', graduationYear: 2021, isPaid: false },
  { email: 'kenngwaiman@gmail.com', password: '97210669', name: '吳偉文', englishName: 'Ng Wai Man', graduationYear: 2021, isPaid: true },
  { email: 'p166nwh2@gmail.com', password: '60115353', name: '吳穎軒', englishName: 'Ng Wing Hin', graduationYear: 2021, isPaid: true },
  { email: 'lesterlam0126@gmail.com', password: '93615660', name: '林立程', englishName: 'Lam Lap Ching', graduationYear: 2021, isPaid: true },
  { email: 'cmm98430@gmail.com', password: '63530679', name: '施雯雯', englishName: 'Sze Man Man', graduationYear: 2021, isPaid: false },
  { email: 'sabrinalmw@gmail.com', password: '68470157', name: '羅美慧', englishName: 'Lo Mei Wai', graduationYear: 2020, isPaid: false },
  { email: 'Leolee0519@gmail.com', password: '68049886', name: '李滙海', englishName: 'LEE WUI HOI', graduationYear: 2020, isPaid: false },
  { email: 'ljwong2229@gmail.com', password: '60262488', name: '黃樂恆', englishName: 'Wong Lok Heng', graduationYear: 2020, isPaid: false },
  { email: 'temtemel@gmail.com', password: '90263195', name: '李詠祺', englishName: 'Lee Wing Ki Thomas', graduationYear: 2018, isPaid: false },
  { email: 'leungmeikwan@ymail.com', password: '67687868', name: '梁美筠', englishName: 'Leung Mei Kwan', graduationYear: 2018, isPaid: false },
  { email: 'lauralam1111@gmail.com', password: '56221416', name: '林碧娜', englishName: 'Lam Pik Na', graduationYear: 2017, isPaid: false },
  { email: 'chanho66888@gmail.com', password: '59896387', name: '陳昊', englishName: 'Chan Ho', graduationYear: 2023, isPaid: true },
  { email: 'Vincentckc005@hotmail.com', password: '67300650', name: '張鍵聛', englishName: 'Cheung Kin Chung', graduationYear: 2016, isPaid: false },
];

// 最新資訊
export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '香港中文大學數學及數學教育課程校友會會員大會及下任幹事會選舉',
    content: '各位校友，香港中文大學數學及數學教育課程校友會將於2025年8月22日晚上6時至8時舉辦會員大會及下任幹事會選舉。會議地點將稍後公布，請各位會員撥冗出席。會議將討論2025-2027年度工作計劃，並進行新一屆幹事會選舉。',
    summary: '2025年8月22日舉辦會員大會及幹事會選舉',
    author: '香港中文大學數學及數學教育課程校友會秘書處',
    publishDate: new Date('2025-01-15'),
    category: 'announcement',
    isPublic: true,
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    tags: ['會員大會', '選舉', '重要通知'],
  },
  {
    id: '2',
    title: '【會員專屬】2025-2027年度工作計劃',
    content: '本會已制定未來三年的工作計劃，詳細內容請參閱附件PDF文件。計劃包含會員服務、專業發展、教育推廣等多個範疇。',
    summary: '未來三年工作計劃已發布',
    author: '香港中文大學數學及數學教育課程校友會',
    publishDate: new Date('2025-01-10'),
    category: 'announcement',
    isPublic: false,
    tags: ['工作計劃', '會員專屬'],
  },
];

// 活動資訊
export const mockEvents: Event[] = [
  {
    id: '1',
    title: '香港中文大學數學及數學教育課程校友會會員大會',
    description: '討論會務發展及選舉新一屆幹事會，所有會員均可參與投票。',
    startDate: new Date('2025-08-22T18:00:00'),
    endDate: new Date('2025-08-22T20:00:00'),
    location: '地點稍後公布',
    capacity: 100,
    registeredCount: 0,
    isPublic: true,
    category: 'gathering',
    registrationDeadline: new Date('2025-08-20'),
    contactPerson: '秘書處',
    contactEmail: 'alumni.bmed@gmail.com',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: '【會員專屬】數學教育研討會',
    description: '探討最新的數學教育理論與實踐，限會員參加。',
    startDate: new Date('2025-06-15T14:00:00'),
    endDate: new Date('2025-06-15T17:00:00'),
    location: '香港中文大學',
    capacity: 50,
    registeredCount: 12,
    isPublic: false,
    category: 'workshop',
    registrationDeadline: new Date('2025-06-10'),
    contactPerson: '學術委員會',
    contactEmail: 'alumni.bmed@gmail.com',
  },
];

// 出版品（僅保留公開的會章和幹事會名單）
export const mockPublications: Publication[] = [
  {
    id: '1',
    title: '香港中文大學數學及數學教育課程校友會會章',
    description: '本會組織章程及相關規定',
    publishYear: 2024,
    category: 'yearbook',
    isPublic: true,
    downloadUrl: '#',
    coverImageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
  },
  {
    id: '2',
    title: '現任幹事會名單',
    description: '2023-2025年度幹事會成員名單',
    publishYear: 2023,
    category: 'newsletter',
    isPublic: true,
    downloadUrl: '#',
    coverImageUrl: 'https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400&h=600&fit=crop',
  },
  {
    id: '3',
    title: '【會員專屬】財務報告',
    description: '詳細財務數據與支出明細',
    publishYear: 2024,
    category: 'journal',
    isPublic: false,
    downloadUrl: '#',
  },
];

// 校友風采（暫時清空，避免虛假內容）
export const mockAlumniSpotlight: AlumniSpotlight[] = [];

// 捐款記錄（暫時清空）
export const mockDonations: Donation[] = [];

// 常見問題
export const mockFAQ: FAQ[] = [
  {
    id: '1',
    question: '如何申請加入香港中文大學數學及數學教育課程校友會？',
    answer: '請填寫線上申請表格，並提供相關畢業證明文件。',
    category: 'membership',
    isPublic: true,
    order: 1,
  },
  {
    id: '2',
    question: '會費是多少？',
    answer: '具體會費資訊請聯絡秘書處查詢。',
    category: 'membership',
    isPublic: true,
    order: 2,
  },
];

// 導覽選單項目
export const mockNavigation: NavigationItem[] = [
  {
    id: 'home',
    title: '首頁',
    path: '/',
    isPublic: true,
    icon: 'home',
  },
  {
    id: 'news',
    title: '最新資訊',
    path: '/news',
    isPublic: true,
    icon: 'newspaper',
  },
  {
    id: 'events',
    title: '活動',
    path: '/events',
    isPublic: true,
    icon: 'calendar',
  },
  {
    id: 'about',
    title: '簡介',
    path: '/about',
    isPublic: true,
    icon: 'info',
  },
  {
    id: 'publications',
    title: '出版刊物',
    path: '/publications',
    isPublic: true,
    icon: 'book',
  },
  {
    id: 'join',
    title: '加入校友會',
    path: '/join',
    isPublic: true,
    icon: 'user-plus',
  },
  {
    id: 'data',
    title: '公開資料',
    path: '/data',
    isPublic: true,
    icon: 'file-text',
  },
  {
    id: 'links',
    title: '常用連結',
    path: '/links',
    isPublic: true,
    icon: 'external-link',
  },
  {
    id: 'contact',
    title: '聯絡我們',
    path: '/contact',
    isPublic: true,
    icon: 'mail',
  },
  {
    id: 'faq',
    title: 'FAQ',
    path: '/faq',
    isPublic: true,
    icon: 'help-circle',
  },
];

// 會員專區導覽
export const mockMemberNavigation: NavigationItem[] = [
  {
    id: 'member-dashboard',
    title: '會員中心',
    path: '/member',
    isPublic: false,
    icon: 'user',
  },
  {
    id: 'member-news',
    title: '會員快訊',
    path: '/member/news',
    isPublic: false,
    icon: 'bell',
  },
  {
    id: 'member-events',
    title: '專屬活動',
    path: '/member/events',
    isPublic: false,
    icon: 'calendar-check',
  },
  {
    id: 'member-forum',
    title: '討論論壇',
    path: '/member/forum',
    isPublic: false,
    icon: 'message-circle',
  },
  {
    id: 'member-documents',
    title: '文件下載',
    path: '/member/documents',
    isPublic: false,
    icon: 'download',
  },
]; 