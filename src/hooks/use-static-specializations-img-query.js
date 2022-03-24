import {useMemo} from 'react';
import { graphql, useStaticQuery } from "gatsby";

export const useStaticSpecializationsImgQuery = () => {
  const { result: { edges } } = useStaticQuery(
    graphql`
      query {
        result: allFile(
          filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
            sourceInstanceName: {eq: "src"}, 
            relativeDirectory: {eq: "components/page-specializations/assets"}
          }
        ) {
          edges {
            node {
              name
              src: childImageSharp {
                small: gatsbyImageData(
                  width: 520
                  height: 360
                  transformOptions: {cropFocus: CENTER}
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO]
                )
              }
            }
          }
        }
      }
    `
  );

  return useMemo(() => {
    return edges.reduce((acc, edge) => {
      acc[edge?.node?.name] = edge?.node?.src?.small;
      return acc;
    }, {});
  }, []);
};
