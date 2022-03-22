import React from 'react';

export const START_YEAR = 2016;
export const COMPANY_NAME = '2RDStudio';

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
        address: 'г. Щелково, улица Комарова, 2',
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
    },
    ROMAN: {
        phone: '+79773283006',
    }
}

export const Specializations = {
    LASER: {
      name: <>Лазерная&nbsp;резка и&nbsp;гравировка</>,
      color: '#E7ADF0',
      anchor: 'laser',
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
    SLS: {
      name: <>Макро&nbsp;3D&nbsp;печать</>,
      caption: <>SLS</>,
      color: '#F6C57F',
      anchor: 'sls',
    },
    MODELING: {
      name: <>Моделирование</>,
      caption: <>Эскиз, 3D модель</>,
      color: '#CFE8FF',
      anchor: 'modeling',
    },
};

export const SpecializationsList = [
    Specializations.LASER,
    Specializations.FRAZER,
    Specializations.UV,
    Specializations.FDM,
    Specializations.SLS,
    Specializations.MODELING,
];

export const Routes = {
  ABOUT_US: {
    text: 'О нас',
    route: '/',
  },
  SPEC: {
    text: 'Что делаем',
    route: '/specializations',
  },
  PRICE: {
    text: 'Контакты',
    route: '/contacts',
  },
};