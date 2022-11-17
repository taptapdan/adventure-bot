import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const H1 = ({ children }: Props) => (
  <h1 className="text-2xl font-semibold text-gray-900 border-b-2">
    {children}
  </h1>
);

export const H2 = ({ children }: Props) => (
  <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);
