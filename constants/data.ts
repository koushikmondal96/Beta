import { NavItem } from '@/types';

export type HospitalStaff = {
  id: number;
  name: string;
  department: string;
  role: string;
  verified: boolean;
  status: string;
};

export const users: HospitalStaff[] = [
  {
    id: 1,
    name: 'Dr. Alice Morgan',
    department: 'Cardiology',
    role: 'Chief Cardiologist',
    verified: true,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Nurse John Smith',
    department: 'Emergency',
    role: 'Senior Nurse',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    department: 'Neurology',
    role: 'Neurosurgeon',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'Dr. Michael Brown',
    department: 'Orthopedics',
    role: 'Orthopedic Surgeon',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Nurse Lisa Johnson',
    department: 'Pediatrics',
    role: 'Pediatric Nurse',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'Dr. David Wilson',
    department: 'Oncology',
    role: 'Oncologist',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Nurse Sarah Lee',
    department: 'General Medicine',
    role: 'Registered Nurse',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Dr. Robert Taylor',
    department: 'Surgery',
    role: 'Surgeon',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Dr. Olivia Green',
    department: 'Internal Medicine',
    role: 'Internist',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Nurse James White',
    department: 'ICU',
    role: 'ICU Nurse',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Hospital',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Logout',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
