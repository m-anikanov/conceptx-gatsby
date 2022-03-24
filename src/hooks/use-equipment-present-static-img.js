import {useMemo} from 'react';
import { graphql, useStaticQuery } from "gatsby";

export const useEquipmentPresentStaticImg = () => {
  const { img: { src } } = useStaticQuery(
    graphql`
      query {
        img: file(
          sourceInstanceName: {eq: "src"}
          relativePath: {eq: "components/equipment-present/assets/img.jpg"}
        ) {
          src: childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return useMemo(() => {
    return src;
  }, []);
};

function getImgSrc(img) {
  return img?.fluid?.src;
}

export {
  getImgSrc
};