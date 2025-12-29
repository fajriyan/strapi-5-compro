import { BlockRenderer } from "@/components/BlockRenderer";
import { HeroSection } from "@/components/blocks/HomeSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <div className="container mx-auto px-5 lg:px-0 mb-[100px]">
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
