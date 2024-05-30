import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type Props = {
  children?: ReactNode;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode;
};

export function Layout({ children }: Props) {
  return <div>{children}</div>;
}

export function layout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}
