import type { FC, PropsWithChildren } from 'react';
import '@/styles/global.css';

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
