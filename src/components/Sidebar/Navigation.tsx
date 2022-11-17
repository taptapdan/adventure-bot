import React from 'react';
import Link from 'next/link';
import {
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: 'Dashboard', href: '/', matchExact: true, icon: HomeIcon },
  { name: 'Teams', href: '/teams', matchExact: false, icon: UsersIcon },
  {
    name: 'Surveys',
    href: '/surveys',
    matchExact: false,
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Calendar',
    href: '/calendar',
    matchExact: false,
    icon: CalendarDaysIcon,
  },
  {
    name: 'Documents',
    href: '/documents',
    matchExact: false,
    icon: InboxIcon,
    count: 5,
  },
  {
    name: 'Reports',
    href: '/reports',
    matchExact: false,
    icon: ChartBarSquareIcon,
    count: 3,
  },
];

type NavigationItem = {
  name: string;
  href: string;
  /**
   * `true`: If the route needs to match exactly to be considered active.
   */
  matchExact: boolean;
  icon: React.ComponentType<any>;
  count?: number;
};

const NavigationLink = ({
  item,
  exact,
}: {
  item: NavigationItem;
  exact?: boolean;
}) => {
  const router = useRouter();
  const isActive = exact
    ? router.asPath === item.href
    : router.asPath.startsWith(item.href);

  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        isActive
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        'group flex items-center px-2 py-2 text-sm font-semibold rounded-md',
      )}
    >
      <item.icon
        className={classNames(
          isActive
            ? 'text-gray-500'
            : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 flex-shrink-0 h-6 w-6',
        )}
        aria-hidden="true"
      />

      <span className="flex-1">{item.name}</span>

      {item.count && (
        <span
          className={classNames(
            isActive ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200',
            'ml-3 inline-block py-0.5 px-3 text-xs font-semibold rounded-full',
          )}
        >
          {item.count}
        </span>
      )}
    </Link>
  );
};

export const Navigation = () => (
  <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
    {navigation.map((item) => (
      <NavigationLink key={item.href} item={item} exact={item.matchExact} />
    ))}
  </nav>
);
