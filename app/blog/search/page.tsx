import { getBlogList } from '@/app/_libs/microcms';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import BlogList from '@/app/_components/BlogList';
import SearchField from '@/app/_components/SearchField';
import Hero from '@/app/_components/Hero';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <Hero title="My-production" sub="制作物" />
      <SearchField />
      <BlogList blog={blog} />
    </>
  );
}
