// https://nextjs.org/docs/basic-features/layouts

import { layout } from '@/components';

export default function Page() {
  return <div className="text-3xl">With Layout</div>;
}

Page.layout = layout;
