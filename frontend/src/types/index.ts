// 使用者相關型別
export interface User {
  id: string;
  email: string;
  name: string;
  graduationYear: number;
  department: string;
  isActive: boolean;
  membershipExpiry?: Date;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// 內容相關型別
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  publishDate: Date;
  category: 'announcement' | 'achievement' | 'news';
  isPublic: boolean;
  imageUrl?: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  capacity: number;
  registeredCount: number;
  isPublic: boolean;
  category: 'lecture' | 'gathering' | 'workshop' | 'competition';
  registrationDeadline: Date;
  contactPerson: string;
  contactEmail: string;
  imageUrl?: string;
  attachments?: {
    name: string;
    url: string;
  }[];
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  publishYear: number;
  category: 'yearbook' | 'newsletter' | 'journal';
  isPublic: boolean;
  downloadUrl?: string;
  previewUrl?: string;
  coverImageUrl?: string;
}

export interface AlumniSpotlight {
  id: string;
  name: string;
  graduationYear: number;
  department: string;
  currentPosition: string;
  company: string;
  achievement: string;
  story: string;
  imageUrl?: string;
  isPublic: boolean;
}

export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  purpose: string;
  donationDate: Date;
  isAnonymous: boolean;
  isPublic: boolean;
  certificateUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'membership' | 'events' | 'technical' | 'general';
  isPublic: boolean;
  order: number;
}

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  isPublic: boolean;
  icon?: string;
  children?: NavigationItem[];
}

// API 回應型別
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// 表單相關型別
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  graduationYear: number;
  department: string;
  studentId: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EventRegistrationForm {
  eventId: string;
  attendeeName: string;
  attendeeEmail: string;
  attendeePhone: string;
  specialRequirements?: string;
} 