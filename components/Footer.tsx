import { createClient } from "@/prismicio";

import { FooterClient } from "./FooterClient";

export const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("footer");
  const { title, description, company_name, links, copyright, contact } =
    settings.data;

  return (
    <FooterClient
      title={title}
      description={description}
      companyName={company_name}
      links={links}
      contact={contact}
      copyright={copyright}
    />
  );
};
