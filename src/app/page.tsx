import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="border-slate-900" />}>
        <PostFeatured />
      </Suspense>
      
      <Suspense fallback={<SpinLoader className="border-slate-900" />}>
        <PostsList />
      </Suspense>
    </>
  );
}
