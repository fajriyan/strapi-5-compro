import type { Schema, Struct } from '@strapi/strapi';

export interface BloksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_bloks_featured_articles';
  info: {
    displayName: 'Featured Article';
  };
  attributes: {
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'element.link', false>;
  };
}

export interface BloksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_bloks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    Logo: Schema.Attribute.Component<'element.logo', false>;
    theme: Schema.Attribute.Enumeration<['morning', 'night']>;
  };
}

export interface BloksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_bloks_info_blocks';
  info: {
    displayName: 'info Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'element.link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['morning', 'night']>;
  };
}

export interface BloksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_bloks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ElementLink extends Struct.ComponentSchema {
  collectionName: 'components_element_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementLogo extends Struct.ComponentSchema {
  collectionName: 'components_element_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'element.link', false>;
    logo: Schema.Attribute.Component<'element.logo', false>;
    navigation: Schema.Attribute.Component<'element.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bloks.featured-article': BloksFeaturedArticle;
      'bloks.hero-section': BloksHeroSection;
      'bloks.info-block': BloksInfoBlock;
      'bloks.subscribe': BloksSubscribe;
      'element.link': ElementLink;
      'element.logo': ElementLogo;
      'layout.header': LayoutHeader;
    }
  }
}
