import React from 'react';

export const START_YEAR = 2016;
export const COMPANY_NAME = 'ConceptX';
export const YA_METRIKA = 88943418;

export const Contacts = {
    MANUFACTURE: {
        phone: '+79773283006',
        address: 'г. Щелково, Заводская улица, 2к112',
        coords: {
            lat: 55.911290,
            lon: 38.033753,
        },
    },
    PV_KOR: {
        phone: '+79268273712',
        address: 'г. Королев, проспект Королёва, 1/5',
        coords: {
            lat: 55.920875,
            lon: 37.833761,
        },
        time: 'Пн-Вс 10:00 - 21:00',
    },
    PV_SHCHELK: {
        phone: '+79773283006',
        address: (
          <>
            г. Щелково, улица Комарова, 2
            <br/>
            Магазин "Пятерочка", цокольный этаж, 
            <br/> 
            Vape Universe
          </>
        ),
        coords: {
            lat: 55.919750,
            lon: 37.991595,
        },
        time: (
            <>
                Пн-Пт 9:00 - 22:00<br/>
                Сб-Вс 12:00 - 22:00
            </>
        ),
    },
    DMITRY: {
        phone: '+79268273712',
        tg: 'https://t.me/CDiman',
        vk: 'https://vk.com/cd_diman',
    },
    ROMAN: {
        phone: '+79773283006',
        vk: 'https://vk.com/undervaper',
    },
    VK: {
      src: 'https://vk.com/2rdvk',
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