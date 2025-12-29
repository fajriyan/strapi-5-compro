import { ArticleProps } from "@/types";
import { getContent } from "@/data/loaders";

import { Search } from "@/components/Search";
import { PaginationComponent } from "./PaginationComponent";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ArticleProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    articles: (data as ArticleProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  component,
  headlineAlignment = "left",
  showSearch,
  query,
  page,
  showPagination,
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;

  return (
    <section className="content-items container mt-10">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 justify-between">
        <h3
          className={`content-items__headline text-xl font-semibold ${`content-items--${headlineAlignment}`}`}
        >
          {headline || "Featured Articles"}
        </h3>
        {showSearch && <Search />}
      </div>
      <div className="content-items__container--card mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
      <div className="mt-10">
        {showPagination && <PaginationComponent pageCount={pageCount} />}
      </div>
    </section>
  );
}
