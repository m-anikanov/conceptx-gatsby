/* global VK */
import React from 'react';
import cn from 'classnames';


import * as styles from './styles.module.scss';

const Map = ({clickable, lat, lon, width, height, zoom, className}) => {
  var params = new URLSearchParams();

  params.set('ll', `${lon},${lat}`);
  params.set('size', `${width},${height}`);
  params.set('l', 'map');
  params.set('pt', `${lon},${lat},pm2rdl`);
  params.set('z', zoom);

  const link = `https://yandex.ru/maps/?${params}`;
  const map = <img className={styles.mapImage} src={`https://static-maps.yandex.ru/1.x/?${params}`}/>;

  return clickable ? (
    <a className={cn(styles.map, className)} href={link} target="_blank" rel="noreferrer">{map}</a>
  ) : (
    <section className={cn(styles.map, className)}>{map}</section>
  );
};

export {
    Map
};
