import Link from "next/link";

type postHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: postHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl font-extrabold',
    h2: 'text-xl font-bold'
  }

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="hover:text-slate-600 transition" href={url}>{children}</Link>
    </Tag>
  );
}
