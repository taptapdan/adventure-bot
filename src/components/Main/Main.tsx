import { ReactNode } from 'react';
import { H1 } from '@/components';

type Props = {
  children: ReactNode;
};

export const PageTitle = ({ children }: Props) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <H1>{children}</H1>
  </div>
);

export const PageContent = ({ children }: Props) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <div className="py-4">{children}</div>
  </div>
);

export const Main = ({ children }: Props) => (
  <main className="flex-1">
    <div className="py-6">{children}</div>
  </main>
);
