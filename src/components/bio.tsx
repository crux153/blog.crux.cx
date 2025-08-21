import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface BioQueryData {
  site: {
    siteMetadata: {
      author: {
        name: string;
        summary?: string;
      };
      description: string;
    };
  };
}

export const Bio: React.FC = () => {
  const data = useStaticQuery<BioQueryData>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          description
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const description = data.site.siteMetadata?.description;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          by <strong>{author.name}</strong> {author?.summary || null}
          <br />
          {description}
        </p>
      )}
    </div>
  );
};
