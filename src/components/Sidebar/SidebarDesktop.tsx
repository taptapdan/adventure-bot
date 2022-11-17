import { Navigation } from './Navigation';
import { Profile } from './Profile';

export const SidebarDesktop = () => (
  <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>

        <Navigation />
      </div>

      <Profile />
    </div>
  </div>
);
