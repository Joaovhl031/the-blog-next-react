type PostSlugPagePros = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPagePros) {
  const { slug } = await params;
  return (
    <h1 className="text-2xl font-extrabold py-16">Rota dinamica: {slug}</h1>
  );
}
