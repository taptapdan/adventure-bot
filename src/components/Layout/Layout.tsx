import { ReactElement, ReactNode, useState } from 'react';
import { Sidebar, SidebarButtonOpen, Main } from '@/components';

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col md:pl-64">
        <SidebarButtonOpen setSidebarOpen={setSidebarOpen} />

        <Main>{children}</Main>
      </div>
    </div>
  );
}

export function layout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}
