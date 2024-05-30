import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => (
  <main className="flex-1">
    <div className="py-6">{children}</div>
  </main>
);
