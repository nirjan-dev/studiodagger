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

  // TODO: add an image field to siteMetadata for og:image meta tag and change current image field to favicon

  // TODO: fix the favicon image not showing

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}

      <meta name="twitter:card" content="summary_large_image" />

      {description && <meta property="og:description" content={description} />}

      {twitterUsername && (
        <meta name="twitter:creator" content="twitterUsername" />
      )}

      {title && <meta name="twitter:title" content={title} />}

      {description && <meta name="twitter:description" content={description} />}

      <link rel="icon" type="image/png" href={image} />
    </Helmet>
  );
}

SEO.defaultProps = defaultProps;

export default SEO;
