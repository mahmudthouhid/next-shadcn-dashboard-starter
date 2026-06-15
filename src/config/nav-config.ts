import { NavGroup } from '@/types';

/**
 * Custom Client & SMB Portal Navigation Configuration
 */
export const navGroups: NavGroup[] = [
  {
    label: 'Client Management',
    items: [
      {
        title: 'Portal Overview',
        url: '/dashboard/overview',
        icon: 'dashboard',
        isActive: false,
        shortcut: ['d', 'd'],
        items: []
      },
      {
        title: 'Client Workspaces',
        url: '/dashboard/workspaces',
        icon: 'workspace',
        isActive: false,
        items: []
      },
      {
        title: 'SMB Client Accounts',
        url: '/dashboard/product',
        icon: 'product',
        shortcut: ['p', 'p'],
        isActive: false,
        items: []
      },
      {
        title: 'Freelancers & Solos',
        url: '/dashboard/users',
        icon: 'teams',
        shortcut: ['u', 'u'],
        isActive: false,
        items: []
      },
      {
        title: 'Project Taskboards',
        url: '/dashboard/kanban',
        icon: 'kanban',
        shortcut: ['k', 'k'],
        isActive: false,
        items: []
      },
      {
        title: 'Client Secure Chat',
        url: '/dashboard/chat',
        icon: 'chat',
        shortcut: ['c', 'c'],
        isActive: false,
        items: []
      },
      {
        title: 'SMB Internal Teams',
        url: '/dashboard/workspaces/team',
        icon: 'teams',
        isActive: false,
        items: [],
        access: { requireOrg: true }
      }
    ]
  },
  {
    label: 'Portal Controls',
    items: [
      {
        title: 'My Profile',
        url: '/dashboard/profile',
        icon: 'profile',
        shortcut: ['m', 'm'],
        items: []
      },
      {
        title: 'Notifications',
        url: '/dashboard/notifications',
        icon: 'notification',
        shortcut: ['n', 'n'],
        items: []
      },
      {
        title: 'Invoices & Billing',
        url: '/dashboard/billing',
        icon: 'billing',
        shortcut: ['b', 'b'],
        access: { requireOrg: true },
        items: []
      }
    ]
  },
  {
    label: 'Developer System Tools',
    items: [
      {
        title: 'Form UI Components',
        url: '#',
        icon: 'forms',
        isActive: false,
        items: [
          {
            title: 'Basic Form',
            url: '/dashboard/forms/basic',
            icon: 'forms',
            shortcut: ['f', 'f']
          },
          {
            title: 'Multi-Step Form',
            url: '/dashboard/forms/multi-step',
            icon: 'forms'
          },
          {
            title: 'Sheet & Dialog',
            url: '/dashboard/forms/sheet-form',
            icon: 'forms'
          },
          {
            title: 'Advanced Patterns',
            url: '/dashboard/forms/advanced',
            icon: 'forms'
          }
        ]
      },
      {
        title: 'Data Fetching (React Query)',
        url: '/dashboard/react-query',
        icon: 'code',
        isActive: false,
        items: []
      }
    ]
  }
];
