import { ImageProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { formatDate } from "@/utils/format-date";

export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  description,
  slug,
  image,
  price,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  return (
    <Link href={`/${basePath}/${slug}`} className="content-items__card w-full">
      <div className="content-items__card-img">
        <StrapiImage
          src={image.url}
          className="w-full rounded-md"
          alt={image.alternativeText || "No alternative text provided"}
          width={400}
          height={400}
        />
      </div>
      <div className="content-items__card-text">
        <h5 className="font-semibold text-lg mt-2">{title}</h5>
        <div className="text-sm ">
          {price && (
            <p>
              <span>Price: </span>
              {price}
            </p>
          )}
        </div>
        <div className="text-sm ">
          {(startDate ?? createdAt) && (
            <p>{formatDate(startDate ?? createdAt)}</p>
          )}
        </div>
        <p className="text-xs line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
