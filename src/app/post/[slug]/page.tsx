import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPagePros = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params, }: PostSlugPagePros): Promise<Metadata> {
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
  console.log("PostSlugPage", post, "Slug:", slug);
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
