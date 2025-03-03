import React from 'react';

export const START_YEAR = 2016;
export const COMPANY_NAME = 'ConceptX';
export const YA_METRIKA = 88943418;

export const Contacts = {
    MANUFACTURE: {
        phone1: '+79998351030',
        phone2: '+79258720166', 
        address: 'г. Щелково ул. Советская 1\\2 корп 17',
        coords: {
            lat: 55.912977,
            lon: 38.002995,
        },
        link: 'https://yandex.ru/maps/-/CHBiBO1-',
        time: (
            <>
                Пн-Пт 10:00 - 20:00<br/>
                Сб-Вс 11:00 - 18:00
            </>
        ),
    },
    ANDREY: {
        phone1: '+79998351030',
        phone2: '+79258720166', 
        vk: 'https://vk.com/andreyorlov_9'
    },
    VK: {
      src: 'https://vk.com/conceptx_vk',
      tg: 'https://t.me/aorlov9',
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