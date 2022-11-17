import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => (
  <div className="border border-zinc-300 rounded bg-white divide-y divide-zinc-200">
    {children}
  </div>
);

export const CardSection = ({ children }: Props) => (
  <div className="p-2 ">{children}</div>
);
