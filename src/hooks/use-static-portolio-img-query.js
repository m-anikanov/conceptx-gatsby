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
              src: childImageSharp {
                large: fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
                small: gatsbyImageData(
                  width: 225
                  height: 160
                  transformOptions: {
                    cropFocus: CENTER
                  }
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO]
                )
                fields {
                  exif {
                    meta {
                      dateTaken
                    }
                  }
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

function getSmallImage(edge) {
  return getNode(edge)?.src?.small;
}

function getImgName(edge) {
  return getNode(edge).name;
}

function getImgExifTakenTime(edge) {
  const taken = getNode(edge)?.src?.fields?.exif?.meta?.dateTaken;

  return taken ? new Date(taken).getTime() : null;
}

function getImgOriginalSrc(edge) {
  return getNode(edge)?.src?.large?.src;
}

function getImgBackgroundColor(edge) {
  return getNode(edge)?.src?.small?.backgroundColor;
}

export {
  getNode,
  getImgName,
  getImgExifTakenTime,
  getImgOriginalSrc,
  getImgBackgroundColor,
  getSmallImage,
};