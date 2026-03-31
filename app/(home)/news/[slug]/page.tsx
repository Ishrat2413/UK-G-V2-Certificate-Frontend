import NewsDetails from "@/components/news/news-details";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  return (
    <div>
      <NewsDetails id={resolvedParams.slug} />
    </div>
  );
};

export default page;
