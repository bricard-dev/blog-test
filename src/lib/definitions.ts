export interface ArticleImage {
  src: string;
  alt: string;
}

export interface Article {
  id: number;
  image: ArticleImage;
  category: string;
  title: string;
  date: string;
  description: string;
}
