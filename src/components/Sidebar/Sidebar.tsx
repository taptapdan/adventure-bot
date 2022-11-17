import { SidebarMobile } from './SidebarMobile';
import { SidebarDesktop } from './SidebarDesktop';

export function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}) {
  return (
    <>
      <SidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <SidebarDesktop />
    </>
  );
}
