import Link from "next/link";
import type { HeroSectionProps } from "@/types";
import { StrapiImage } from "../StrapiImage";

export function HeroSection({
  theme,
  heading,
  cta,
  image,
  Logo,
  author,
  publishedAt,
  darken = false,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="hero">
      {/* {Logo && (
        <StrapiImage
          src={Logo.logoImage.url}
          alt={Logo.logoImage.alternativeText || "No alternative text provided"}
          className={`hero__logo hero__logo--${theme}`}
          width={120}
          height={120}
        />
      )} */}
      <div className="mt-5">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          className="hero__background-image h-[300px] object-cover rounded-lg"
          width={1920}
          height={1080}
        />
        {darken && <div className="hero__background__overlay"></div>}
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        <h1 className="text-3xl font-semibold mt-3 mb-1">{heading}</h1>
        {author && <p className="hero__author">{author}</p>}
        {publishedAt && <p className="hero__published-at">{publishedAt}</p>}
      </div>
      {cta && (
        <button className={`btn btn--medium btn--${theme}`}>
          <Link href={cta.href} target={cta.isExternal ? "_blank" : "_self"}>
            {cta.text}
          </Link>
        </button>
      )}
    </section>
  );
}
