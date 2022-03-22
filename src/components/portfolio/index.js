import React, {useMemo} from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { 
  useStaticPortfolioImgQuery,
  getImgName, 
  getImgOriginalSrc, 
  getImgBackgroundColor,
  getNode,
} from '/src/hooks/use-static-portolio-img-query';
import { getContrastColor } from '/src/utils';

import * as styles from './styles.module.scss';


export const Portfolio = () => {
  const images = useStaticPortfolioImgQuery();

  const imgMaxLimit = images.length - images.length % 4;

  const toolbarRender = useMemo(() => ({index}) => {
    return (
      <section>{getImgName(images[index])}</section>
    );
  }, [images]);

  return (
    <section className={styles.portfolio}>
      <section className={styles.title}>
        Выпоненные работы&nbsp;<span className={styles.titleLogo}>2RDStudio</span>
      </section>
      <section className={styles.list}>
        <PhotoProvider
          toolbarRender={toolbarRender}
        >
          {images.slice(0, imgMaxLimit).map((edge, index) => {
            const img = getImage(getNode(edge));

            return (
              <PhotoView key={index} src={getImgOriginalSrc(edge)} name={getImgName(edge)}>
                <section className={styles.image}> 
                  <GatsbyImage
                    className={styles.imagePic}
                    image={img}
                    placeholder="dominantColor"
                    loading="lazy"
                    layout="fixed"
                  />
                  <section className={styles.imageTitle} style={{
                    color: getContrastColor(getImgBackgroundColor(edge)),
                    backgroundImage: `
                      linear-gradient(
                        transparent 0%, 
                        ${getImgBackgroundColor(edge)} 10px, 
                        ${getImgBackgroundColor(edge)} 100%
                      )
                    `
                  }}>
                    {getImgName(edge)}
                  </section>
                </section>
              </PhotoView>
            )
          })}
        </PhotoProvider>
      </section>
    </section>
  );
}
