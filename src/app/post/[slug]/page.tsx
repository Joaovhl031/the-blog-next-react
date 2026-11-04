import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";

type PostSlugPagePros = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPagePros) {
  const { slug } = await params;

  let post;

  try{
    post = await postRepository.findBySlug(slug);
  } catch {
    post = undefined;
  }
  if (!post) return notFound();
  
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
