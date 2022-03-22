import React, {useMemo} from 'react';
import { graphql, useStaticQuery } from "gatsby";

export const useStaticPortfolioImgQuery = () => {
  const { allFile: { edges } } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
            sourceInstanceName: {eq: "photos"}
          }
        ) {
          edges {
            node {
              name
              childImageSharp {
                gatsbyImageData(
                  width: 225
                  height: 160
                  transformOptions: {
                    cropFocus: CENTER
                  }
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
                fields {
                  exif {
                    meta {
                      dateTaken
                    }
                  }
                }
                original {
                  src
                }
              }
            }
          }
        }
      }
    `
  );

  return useMemo(() => {
    return edges.sort((a, b) => getImgExifTakenTime(b) - getImgExifTakenTime(a));
  }, []);
};

function getNode(edge) {
  return edge.node;
}

function getImgName(edge) {
  return getNode(edge).name;
}

function getImgExifTakenTime(edge) {
  const taken = getNode(edge)?.childImageSharp?.fields?.exif?.meta?.dateTaken;

  return taken ? new Date(taken).getTime() : null;
}

function getImgOriginalSrc(edge) {
  return getNode(edge)?.childImageSharp?.original?.src;
}

function getImgBackgroundColor(edge) {
  return getNode(edge)?.childImageSharp?.gatsbyImageData?.backgroundColor;
}

export {
  getNode,
  getImgName,
  getImgExifTakenTime,
  getImgOriginalSrc,
  getImgBackgroundColor,
};