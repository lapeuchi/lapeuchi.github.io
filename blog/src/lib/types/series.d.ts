export type Post = {
  slug: string;
  title: string;
  tags: string[];
  date: string;
  content: string;
};

export type SeriesMap = {
  [id: string]: {
    title: string;
    posts: Post[];
  };
};
