import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'title title .'
    'author   .      date'
    'image  image  image'
    'content content content';

  & + & {
    margin-top: 1rem;
  }
`;

export const Title = styled.div`
  grid-area: title;
`;
export const Author = styled.div`
  grid-area: author;
`;
export const Date = styled.div`
  grid-area: date;
`;
export const ImageWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  position: relative;
  grid-area: image;
  height: 30rem;
`;
export const Content = styled.p`
  grid-area: content;
`;
