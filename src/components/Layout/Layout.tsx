import { PropsWithChildren } from 'react';
import GNB from '../GNB';
import * as S from './Layout.style';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Wrapper>
      <GNB />
      {children}
    </S.Wrapper>
  );
}
