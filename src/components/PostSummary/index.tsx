import { formatRelativeDateTime } from "@/utils/format/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  tittle: string;
  excerpt: string;
};

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  tittle,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-3.5 sm:justify-center">
      <time
        dateTime="2026-10-11"
        className="text-slate-600 block text-sm/tight"
        title={formatRelativeDateTime(createdAt)}
      >
        {formatRelativeDateTime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {tittle}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
