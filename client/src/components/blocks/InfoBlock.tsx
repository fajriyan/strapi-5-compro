import { StrapiImage } from "../StrapiImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { InfoBlockProps } from "@/types";

export function InfoBlock({
  theme,
  reversed,
  image,
  headline,
  content,
  cta,
}: Readonly<InfoBlockProps>) {
  return (
    <section
      className={`p-4 md:p-5 mt-10 border rounded-lg flex flex-col md:flex-row gap-8 items-center ${
        reversed ? " flex-row" : "flex-row-reverse"
      }`}
    >
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={500}
        width={600}
        className="md:w-[50%] h-full object-cover rounded-md"
      />
      <div className="md:w-[50%]">
        <h2
          className={`info__headline info__headline--${theme} text-2xl font-semibold mt-3 mb-1`}
        >
          {headline}
        </h2>
        <ReactMarkdown>{content}</ReactMarkdown>
        {cta && (
          <Link href={cta.href} className="bg-red-800 hover:bg-red-900 capitalize px-3 py-1 text-white rounded-md block w-max mt-5" target={cta.isExternal ? "_blank" : "_self"}>
            <button className={`btn btn--medium btn--${theme}`}>
              {cta.text}
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
