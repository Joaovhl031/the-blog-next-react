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
    h1: 'text-2xl font-extrabold sm:text-4xl',
    h2: 'text-xl font-extrabold sm:text-2xl'
  }

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
