import Image from 'next/image';
import * as S from './Post.style';

interface Props {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}
export default function Post({ title, author, date, content, image }: Props) {
  console.log(image);

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
      <S.Date>{date}</S.Date>

      <S.ImageWrapper>
        <Image
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          alt="post-image"
          fill
          object-fit="contain"
        />
      </S.ImageWrapper>

      <S.Content>{content}</S.Content>
    </S.Container>
  );
}
