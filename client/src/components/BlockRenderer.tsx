import type { Block } from "@/types";

import { HeroSection } from "./blocks/HomeSection";
import { InfoBlock } from "./blocks/InfoBlock";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "bloks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "bloks.info-block":
      return <InfoBlock {...block} key={index} />;
      
   //  case "blocks.featured-article":
   //    return <FeaturedArticle {...block} key={index} />;
   //  case "blocks.subscribe":
   //    return <Subscribe {...block} key={index} />;
   //  case "blocks.heading":
   //    return <Heading {...block} key={index} />;
   //  case "blocks.paragraph-with-image":
   //    return <ParagraphWithImage {...block} key={index} />;
   //  case "blocks.paragraph":
   //    return <Paragraph {...block} key={index} />;
   //  case "blocks.full-image":
   //    return <FullImage {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}