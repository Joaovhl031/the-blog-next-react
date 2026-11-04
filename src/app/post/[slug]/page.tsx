import { findPostBySlugCached } from "@/lib/post/queries";

type PostSlugPagePros = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostSlugPagePros) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPagePros) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.slug}</p>
    </div>
  );
}
