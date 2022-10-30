import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  author: string;
  title: string;
  date: string;
  content: string;
  image: string;
  favorite: string[];
}

const posts: Post[] = [
  {
    id: 1,
    author: 'jjanmo',
    title: '오늘의 고양이',
    date: '2022-10-30',
    content:
      '오늘은 선정릉을 뛰다가 귀여운 고양이를 만났다. 고양이가 나를 반기는듯 도망쳤다.',
    image: '/public/images/cat_1.jpg',
    favorite: [],
  },
  {
    id: 2,
    author: 'jjanmo',
    title: '내일의 고양이',
    date: '2022-11-01',
    content:
      '내일은 회사 출근길에 고양이를 만날 예정이다. 어떻게 아냐구? 그냥 저스트 필링!',
    image: '/public/images/cat_2.jpg',
    favorite: [],
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req, res);
  return res.status(200).json(posts);
}
