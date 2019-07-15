import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: undefined | string;
  description: undefined | string;
  pathname: undefined | string;
  article: false;
}

const defaultProps = {
  title: undefined,
  description: undefined,
  pathname: undefined,
  article: false,
};

function SEO({ title, description, pathname, article }: SEOProps) {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          url
          image
          twitterUsername
          siteLanguage
          shortName
        }
      }
    }
  `);

  title = title || result.site.siteMetadata.title;

  description = description || result.site.siteMetadata.description;

  const image = `${result.site.siteMetadata.url}${result.site.siteMetadata.image}`;

  const url = `${result.site.siteMetadata.url}${pathname || `/`}`;

  const twitterUsername = result.site.siteMetadata.twitterUsername;

  const titleTemplate = result.site.siteMetadata.titleTemplate;

  const siteLanguage = result.site.siteMetadata.siteLanguage;
  const shortName = result.site.siteMetadata.shortName;

  // todo: add jsonld snippets

  return (
    <>
      <Helmet title={title} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="apple-mobile-web-app-title" content={shortName} />
        <meta name="application-name" content={shortName} />

        {/* OpenGraph  */}
        <meta property="og:url" content={url} />

        {article ? <meta property="og:type" content="article" /> : null}

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
}

SEO.defaultProps = defaultProps;

export default SEO;
