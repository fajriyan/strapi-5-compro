"use client";
import { StrapiImage } from "@/components/StrapiImage";
import type { LinkProps, LogoProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  data: {
    logo: LogoProps;
    navigation: LinkProps[];
    cta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/experience";

  if (!data) return null;

  const { logo, navigation, cta } = data;
  return (
    <header
      className={`header ${
        headerLight ? "header--light" : ""
      } bg-white sticky top-0`}
    >
      <div className="container mx-auto flex h-[90px] w-full justify-between items-center px-5 lg:px-0">
        <Link href="/">
          <StrapiImage
            src={logo.logoImage.url}
            alt={
              logo.logoImage.alternativeText || "No alternative text provided"
            }
            className={`w-[60px] header__logo header__logo--${
              headerLight ? "white" : "black"
            }`}
            width={120}
            height={120}
          />
        </Link>
        <div className="flex gap-5">
          {navigation.map((item) => (
            <span key={item.id}>
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
              >
                <h5>{item.text}</h5>
              </Link>
            </span>
          ))}
        </div>
        {cta ? (
          <Link
            href={cta.href}
            className="py-1 px-4 bg-red-800 rounded-md text-white"
            target={cta.isExternal ? "_blank" : "_self"}
          >
            <button className="btn btn--black btn--small">{cta.text}</button>
          </Link>
        ) : null}
      </div>
    </header>
  );
}
