// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice =
  | AboutImageRightSlice
  | AboutImageSectionSlice
  | AboutCardsSlice
  | ChoiceBlockSlice
  | ContactCardSlice
  | HeroBlockSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * keywords field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.keywords
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  keywords: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *Footer → links*
 */
export interface FooterDocumentDataLinksItem {
  /**
   * text field in *Footer → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * link field in *Footer → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Item in *Footer → contact*
 */
export interface FooterDocumentDataContactItem {
  /**
   * text field in *Footer → contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * link field in *Footer → contact*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * company name field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField;

  /**
   * copyright field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;

  /**
   * links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<FooterDocumentDataLinksItem>>;

  /**
   * contact field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.contact[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contact: prismic.GroupField<Simplify<FooterDocumentDataContactItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | ContactCardSlice
  | ImageTextLeftSlice
  | ParallexImageRightSlice
  | ParallexImageLeftSlice
  | TextImageLeftSlice
  | HeroSectionSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type ServicesDocumentDataSlicesSlice =
  | ChoiceBlockSlice
  | ContactCardSlice
  | ParallexImageRightSlice
  | SectionTitleSlice
  | ImageTextLeftSlice
  | HeroBlockSlice;

/**
 * Content for Services documents
 */
interface ServicesDocumentData {
  /**
   * Slice Zone field in *Services*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: services.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ServicesDocumentDataSlicesSlice> /**
   * Meta Title field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: services.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: services.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Services*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * keywords field in *Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.keywords
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  keywords: prismic.KeyTextField;
}

/**
 * Services document from Prismic
 *
 * - **API ID**: `services`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServicesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ServicesDocumentData>,
    "services",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | FooterDocument
  | HomeDocument
  | ServicesDocument;

/**
 * Item in *AboutCards → Default → Primary → items*
 */
export interface AboutCardsSliceDefaultPrimaryItemsItem {
  /**
   * title field in *AboutCards → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_cards.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *AboutCards → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_cards.default.primary.items[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *AboutCards → Default → Primary*
 */
export interface AboutCardsSliceDefaultPrimary {
  /**
   * title field in *AboutCards → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_cards.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * items field in *AboutCards → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_cards.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<AboutCardsSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for AboutCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutCardsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutCards*
 */
type AboutCardsSliceVariation = AboutCardsSliceDefault;

/**
 * AboutCards Shared Slice
 *
 * - **API ID**: `about_cards`
 * - **Description**: AboutCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutCardsSlice = prismic.SharedSlice<
  "about_cards",
  AboutCardsSliceVariation
>;

/**
 * Primary content in *AboutImageRight → Default → Primary*
 */
export interface AboutImageRightSliceDefaultPrimary {
  /**
   * title field in *AboutImageRight → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_right.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *AboutImageRight → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_right.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *AboutImageRight → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_right.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutImageRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImageRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutImageRightSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutImageRight*
 */
type AboutImageRightSliceVariation = AboutImageRightSliceDefault;

/**
 * AboutImageRight Shared Slice
 *
 * - **API ID**: `about_image_right`
 * - **Description**: AboutImageRight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImageRightSlice = prismic.SharedSlice<
  "about_image_right",
  AboutImageRightSliceVariation
>;

/**
 * Primary content in *AboutImageSection → Default → Primary*
 */
export interface AboutImageSectionSliceDefaultPrimary {
  /**
   * title field in *AboutImageSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_section.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *AboutImageSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_section.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *AboutImageSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_image_section.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutImageSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImageSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutImageSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutImageSection*
 */
type AboutImageSectionSliceVariation = AboutImageSectionSliceDefault;

/**
 * AboutImageSection Shared Slice
 *
 * - **API ID**: `about_image_section`
 * - **Description**: AboutImageSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImageSectionSlice = prismic.SharedSlice<
  "about_image_section",
  AboutImageSectionSliceVariation
>;

/**
 * Item in *ChoiceBlock → Default → Primary → items*
 */
export interface ChoiceBlockSliceDefaultPrimaryItemsItem {
  /**
   * title field in *ChoiceBlock → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: choice_block.default.primary.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *ChoiceBlock → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: choice_block.default.primary.items[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Primary content in *ChoiceBlock → Default → Primary*
 */
export interface ChoiceBlockSliceDefaultPrimary {
  /**
   * title field in *ChoiceBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: choice_block.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * items field in *ChoiceBlock → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: choice_block.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<ChoiceBlockSliceDefaultPrimaryItemsItem>>;
}

/**
 * Default variation for ChoiceBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChoiceBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ChoiceBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ChoiceBlock*
 */
type ChoiceBlockSliceVariation = ChoiceBlockSliceDefault;

/**
 * ChoiceBlock Shared Slice
 *
 * - **API ID**: `choice_block`
 * - **Description**: ChoiceBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ChoiceBlockSlice = prismic.SharedSlice<
  "choice_block",
  ChoiceBlockSliceVariation
>;

/**
 * Primary content in *ContactCard → Default → Primary*
 */
export interface ContactCardSliceDefaultPrimary {
  /**
   * subtitle field in *ContactCard → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * title field in *ContactCard → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * link url field in *ContactCard → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.default.primary.link_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_url: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * link text field in *ContactCard → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.default.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;

  /**
   * image field in *ContactCard → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_card.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ContactCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactCardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactCard*
 */
type ContactCardSliceVariation = ContactCardSliceDefault;

/**
 * ContactCard Shared Slice
 *
 * - **API ID**: `contact_card`
 * - **Description**: ContactCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactCardSlice = prismic.SharedSlice<
  "contact_card",
  ContactCardSliceVariation
>;

/**
 * Primary content in *HeroBlock → Default → Primary*
 */
export interface HeroBlockSliceDefaultPrimary {
  /**
   * title field in *HeroBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_block.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *HeroBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_block.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *HeroBlock → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_block.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * image text field in *HeroBlock → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_block.default.primary.image_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_text: prismic.KeyTextField;
}

/**
 * Default variation for HeroBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroBlock*
 */
type HeroBlockSliceVariation = HeroBlockSliceDefault;

/**
 * HeroBlock Shared Slice
 *
 * - **API ID**: `hero_block`
 * - **Description**: HeroBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroBlockSlice = prismic.SharedSlice<
  "hero_block",
  HeroBlockSliceVariation
>;

/**
 * Primary content in *HeroSection → Default → Primary*
 */
export interface HeroSectionSliceDefaultPrimary {
  /**
   * image field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * text field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * link field in *HeroSection → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_section.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for HeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSection*
 */
type HeroSectionSliceVariation = HeroSectionSliceDefault;

/**
 * HeroSection Shared Slice
 *
 * - **API ID**: `hero_section`
 * - **Description**: HeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSectionSlice = prismic.SharedSlice<
  "hero_section",
  HeroSectionSliceVariation
>;

/**
 * Item in *ImageTextLeft → Default → Primary → items*
 */
export interface ImageTextLeftSliceDefaultPrimaryItemsItem {
  /**
   * text field in *ImageTextLeft → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text_left.default.primary.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Primary content in *ImageTextLeft → Default → Primary*
 */
export interface ImageTextLeftSliceDefaultPrimary {
  /**
   * title field in *ImageTextLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text_left.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *ImageTextLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text_left.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *ImageTextLeft → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text_left.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * items field in *ImageTextLeft → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: image_text_left.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<ImageTextLeftSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for ImageTextLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageTextLeftSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageTextLeft*
 */
type ImageTextLeftSliceVariation = ImageTextLeftSliceDefault;

/**
 * ImageTextLeft Shared Slice
 *
 * - **API ID**: `image_text_left`
 * - **Description**: ImageTextLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageTextLeftSlice = prismic.SharedSlice<
  "image_text_left",
  ImageTextLeftSliceVariation
>;

/**
 * Item in *ParallexImageLeft → Default → Primary → items*
 */
export interface ParallexImageLeftSliceDefaultPrimaryItemsItem {
  /**
   * text field in *ParallexImageLeft → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_left.default.primary.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Primary content in *ParallexImageLeft → Default → Primary*
 */
export interface ParallexImageLeftSliceDefaultPrimary {
  /**
   * title field in *ParallexImageLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_left.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *ParallexImageLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_left.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *ParallexImageLeft → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_left.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * items field in *ParallexImageLeft → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_left.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<ParallexImageLeftSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for ParallexImageLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallexImageLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParallexImageLeftSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ParallexImageLeft*
 */
type ParallexImageLeftSliceVariation = ParallexImageLeftSliceDefault;

/**
 * ParallexImageLeft Shared Slice
 *
 * - **API ID**: `parallex_image_left`
 * - **Description**: ParallexImageLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallexImageLeftSlice = prismic.SharedSlice<
  "parallex_image_left",
  ParallexImageLeftSliceVariation
>;

/**
 * Item in *ParallexImageRight → Default → Primary → items*
 */
export interface ParallexImageRightSliceDefaultPrimaryItemsItem {
  /**
   * text field in *ParallexImageRight → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_right.default.primary.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Primary content in *ParallexImageRight → Default → Primary*
 */
export interface ParallexImageRightSliceDefaultPrimary {
  /**
   * title field in *ParallexImageRight → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_right.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * content field in *ParallexImageRight → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_right.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;

  /**
   * image field in *ParallexImageRight → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_right.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * items field in *ParallexImageRight → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: parallex_image_right.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<ParallexImageRightSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for ParallexImageRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallexImageRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ParallexImageRightSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ParallexImageRight*
 */
type ParallexImageRightSliceVariation = ParallexImageRightSliceDefault;

/**
 * ParallexImageRight Shared Slice
 *
 * - **API ID**: `parallex_image_right`
 * - **Description**: ParallexImageRight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ParallexImageRightSlice = prismic.SharedSlice<
  "parallex_image_right",
  ParallexImageRightSliceVariation
>;

/**
 * Primary content in *SectionTitle → Default → Primary*
 */
export interface SectionTitleSliceDefaultPrimary {
  /**
   * title field in *SectionTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for SectionTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SectionTitle*
 */
type SectionTitleSliceVariation = SectionTitleSliceDefault;

/**
 * SectionTitle Shared Slice
 *
 * - **API ID**: `section_title`
 * - **Description**: SectionTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTitleSlice = prismic.SharedSlice<
  "section_title",
  SectionTitleSliceVariation
>;

/**
 * Item in *TextImageLeft → Default → Primary → items*
 */
export interface TextImageLeftSliceDefaultPrimaryItemsItem {
  /**
   * i_d field in *TextImageLeft → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.items[].i_d
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  i_d: prismic.KeyTextField;

  /**
   * text field in *TextImageLeft → Default → Primary → items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * image field in *TextImageLeft → Default → Primary → items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *TextImageLeft → Default → Primary*
 */
export interface TextImageLeftSliceDefaultPrimary {
  /**
   * title field in *TextImageLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *TextImageLeft → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * items field in *TextImageLeft → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: text_image_left.default.primary.items[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<
    Simplify<TextImageLeftSliceDefaultPrimaryItemsItem>
  >;
}

/**
 * Default variation for TextImageLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextImageLeftSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextImageLeft*
 */
type TextImageLeftSliceVariation = TextImageLeftSliceDefault;

/**
 * TextImageLeft Shared Slice
 *
 * - **API ID**: `text_image_left`
 * - **Description**: TextImageLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextImageLeftSlice = prismic.SharedSlice<
  "text_image_left",
  TextImageLeftSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataLinksItem,
      FooterDocumentDataContactItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ServicesDocument,
      ServicesDocumentData,
      ServicesDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutCardsSlice,
      AboutCardsSliceDefaultPrimaryItemsItem,
      AboutCardsSliceDefaultPrimary,
      AboutCardsSliceVariation,
      AboutCardsSliceDefault,
      AboutImageRightSlice,
      AboutImageRightSliceDefaultPrimary,
      AboutImageRightSliceVariation,
      AboutImageRightSliceDefault,
      AboutImageSectionSlice,
      AboutImageSectionSliceDefaultPrimary,
      AboutImageSectionSliceVariation,
      AboutImageSectionSliceDefault,
      ChoiceBlockSlice,
      ChoiceBlockSliceDefaultPrimaryItemsItem,
      ChoiceBlockSliceDefaultPrimary,
      ChoiceBlockSliceVariation,
      ChoiceBlockSliceDefault,
      ContactCardSlice,
      ContactCardSliceDefaultPrimary,
      ContactCardSliceVariation,
      ContactCardSliceDefault,
      HeroBlockSlice,
      HeroBlockSliceDefaultPrimary,
      HeroBlockSliceVariation,
      HeroBlockSliceDefault,
      HeroSectionSlice,
      HeroSectionSliceDefaultPrimary,
      HeroSectionSliceVariation,
      HeroSectionSliceDefault,
      ImageTextLeftSlice,
      ImageTextLeftSliceDefaultPrimaryItemsItem,
      ImageTextLeftSliceDefaultPrimary,
      ImageTextLeftSliceVariation,
      ImageTextLeftSliceDefault,
      ParallexImageLeftSlice,
      ParallexImageLeftSliceDefaultPrimaryItemsItem,
      ParallexImageLeftSliceDefaultPrimary,
      ParallexImageLeftSliceVariation,
      ParallexImageLeftSliceDefault,
      ParallexImageRightSlice,
      ParallexImageRightSliceDefaultPrimaryItemsItem,
      ParallexImageRightSliceDefaultPrimary,
      ParallexImageRightSliceVariation,
      ParallexImageRightSliceDefault,
      SectionTitleSlice,
      SectionTitleSliceDefaultPrimary,
      SectionTitleSliceVariation,
      SectionTitleSliceDefault,
      TextImageLeftSlice,
      TextImageLeftSliceDefaultPrimaryItemsItem,
      TextImageLeftSliceDefaultPrimary,
      TextImageLeftSliceVariation,
      TextImageLeftSliceDefault,
    };
  }
}
