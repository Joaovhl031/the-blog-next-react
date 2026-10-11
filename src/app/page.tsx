import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: "#",
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: "/images/bryen_1.png",
            alt: "alt image",
            priority: true
          }}
        />
        <div className="flex flex-col gap-3.5 sm:justify-center">
          <time
            dateTime="2026-10-11"
            className="text-slate-600 block text-sm/tight"
          >
            2026-10-11 15:20
          </time>
          <PostHeading url="#" as="h1">
            aliquam numquam placeat
          </PostHeading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias hic
            quae, fugiat aperiam adipisci laudantium, aliquam numquam placeat,
            doloribus molestiae deleniti repellendus consequatur blanditiis
            nulla eos. Recusandae omnis quis exercitationem.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader className="border-slate-900" />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
