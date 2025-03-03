import React from 'react';

export const START_YEAR = 2016;
export const COMPANY_NAME = 'ConceptX';
export const YA_METRIKA = 88943418;

export const Contacts = {
    MANUFACTURE: {
        phone: '+79917234643',
        address: 'г. Щелково, Заводская улица, 2к112',
        coords: {
            lat: 55.911290,
            lon: 38.033753,
        },
    },
    ANDREY: {
        phone1: '+79998351030',
        phone2: '+79258720166', 
        vk: 'https://vk.com/andreyorlov_9'
    },
    VK: {
      src: 'https://vk.com/conceptx_vk',
      id: 128102952,
    }
}

export const Specializations = {
    LASER_CUT: {
      name: <>Лазерная&nbsp;резка</>,
      caption: 'Раскрой',
      color: '#E7ADF0',
      anchor: 'laser-cut',
    },
    LASER_GROOVE: {
      name: <>Лазерная гравировка</>,
      color: '#CFE8FF',
      anchor: 'laser-grove',
    },
    FRAZER: {
      name: <>Фрезерная обработка</>,
      color: '#B3E2BF',
      anchor: 'frazer',
    },
    UV: {
      name: <>УФ печать</>,
      caption: <>На&nbsp;поверхностях</>,
      color: '#A5ADE9',
      anchor: 'uv',
    },
    FDM: {
      name: <>3D&nbsp;печать</>,
      caption: <>FDM</>,
      color: '#F4A3A3',
      anchor: 'fdm',
    },
    DLP: {
      name: <>Макро&nbsp;3D&nbsp;печать</>,
      caption: <>DLP</>,
      color: '#F6C57F',
      anchor: 'dlp',
    },
    MODELING: {
      name: <>Моделирование</>,
      caption: <>Эскиз, 3D модель</>,
      color: '#CFE8FF',
      anchor: 'modeling',
    },
};

export const SpecializationsList = [
    Specializations.LASER_CUT,
    Specializations.LASER_GROOVE,
    Specializations.FRAZER,
    Specializations.UV,
    Specializations.FDM,
    Specializations.DLP,
];

export const Routes = {
  ABOUT_US: {
    text: 'О нас',
    route: '/',
  },
  SPEC: {
    text: 'Что делаем',
    route: '/specializations/',
  },
  PRICE: {
    text: 'Контакты',
    route: '/contacts/',
  },
};