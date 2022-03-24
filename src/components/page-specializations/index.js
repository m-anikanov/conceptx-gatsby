import React from 'react';

import {VkWidget} from 'src/components/vk-widget';
import {SpecializationSection} from 'src/components/specialization-section';
import {SpecializationsPresent} from 'src/components/specializations-present';
import {Specializations} from 'src/constants';
import {useStaticSpecializationsImgQuery} from 'src/hooks/use-static-specializations-img-query';

import * as styles from './styles.module.scss';

const PageSpecializations = () => {
  const {
    'img-94469': image3dFdm,
    'img-10049': imageFrazing,
    'img-26165': imageModeling,
    'img-29828': image3dSls,
    'img-40289': imageLaserCutting,
    'img-61515': imageLaserGrooving,
    'img-90427': imageUvPrinting,
  } = useStaticSpecializationsImgQuery();

  return (
    <>
      <SpecializationsPresent className={styles.present}/>
      <section className={styles.specializations}>
        <SpecializationSection
          title={Specializations.LASER.name}
          caption={Specializations.LASER.caption}
          anchor={Specializations.LASER.anchor}
          image={[imageLaserCutting, imageLaserGrooving]}
        >
          <>
            <p>Метод обработки материала при помощи лазера большой мощности.</p>
            <h3>Обрабатываемые материалы</h3>
            <p>
              <b>Раскрой:</b> фанера березовая, кожа, акрил (оргстекло), различные пластики, картон, пенопласт, ткань.<br/>
              Звоните, если не увидели нужный материал!
            </p>
            <p>
              Толщина раскроя материала зависит от его плотности и свойств. Например: наш лазерный станок прорезает до 18 мм фанеры.
            </p>
            <p>
              <b>Гравировка:</b> нержавеющая сталь, стекло, гранит, искусственный камень, древесина, кожа, пластмассы, бумажные материалы.
            </p>
            <h3>Качество</h3>
            <p>
              Наш лазерный станок имеет возможность обеспечить точную резку по размерам.
            </p>
            <h3>Преимущества</h3>
            <p>
              Скорость резки, меньшая стоимость работ (по сравнению с фрезерной обработкой), возможность обеспечения внутренних острых углов.
            </p>
            <h3>Недостатки</h3>
            <p>
              Черный угольный контур который остается после воздействия лазерного луча. При желании исправлятся наждачной бумагой.
            </p>
            <p><b>Максимальное рабочее поле станка:</b> 1300x900.</p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.FRAZER.name}
          caption={Specializations.FRAZER.caption}
          anchor={Specializations.FRAZER.anchor}
          image={imageFrazing}
        >
          <>
            <p>Механический метод обработки при помощи фрезы.</p>
            <h3>Обрабатываемые материалы</h3>
            <p>Древесина, пластики, композиты, углеродистая сталь, мягкие цветные металлы (алюминий, латунь, медь, итд).</p>
            <h4>Максимальное рабочее поле</h4>
            <ul>
              <li><b>станок №1:</b> 640x840</li>
              <li><b>станок №2:</b> 2500x3000</li>
            </ul>
            <h3>Качество</h3>
            <p>
              Фрезерный станок может обеспечить высокоточную повторяемости изделий.
            </p>
            <h3>Преимущества</h3>
            <p>К преимуществам фрезерной обработки можно отнести чистые (безугольные) края по кромке реза, а также изготовление фасонных изделий в трехмерном пространстве. Возможность изготовить сложные монолитные детали выдержав при этом точные размеры.</p>
            <h3>Недостатки</h3>
            <p>Нет возможности сделать острые внутренние углы, остаётся радиус от фрезы. Большие временных затраты. Большая итоговая цена.</p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.UV.name}
          caption={Specializations.UV.caption}
          anchor={Specializations.UV.anchor}
          image={imageUvPrinting}
        >
          <>
            <p>
              Разновидность печати с использованием чернил отверждаемых под воздействием ультрафиолета.
            </p>
            <h3>Качество</h3>
            <p>
              Можно распечатать почти любое изображение на плоских и цилинрических поверхностях, а так же на ткани при этом качество изображения напрямую зависит от качества исходного изображения.
            </p>
            <h3>Преимущества</h3>
            <p>Не требуется ожидать полного высыхания красок, можно сразу использовать по назначению. Не смывается при стирке.</p>
            <h3>Недостатки</h3>
            <p>Требуется качественное изображение, рабочее поле 300х500</p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.FDM.name}
          caption={Specializations.FDM.caption}
          anchor={Specializations.FDM.anchor}
          image={image3dFdm}
        >
          <>
            <p>
              Самая популярная и дешёвая технология изготовления деталей на 3D принтере. Печать похожа на посторонние кирпичного дома, слой за слоем, последовательно, создаются  внутренние и внешние стенки печатаемой детали.
            </p>
            <p>
              Печатаем следующими пластиками: ABS, Pet, Nelon, pla , sbs и.т.д. наличие того или иного пластика лучше уточнить.
            </p>
            <h3>Качество</h3>
            <p>
              Каждый пластик обладает своим свойствами и назначением один может быть ударопрочным и твердым другой же  может быть  пластичным и упругим, а третий износостойким.  Правильно подобранный материал обеспечит максимальный требуемый результат. Высокая спекаемость между слоями позволяет зачастую заметить сломанную заводскую деталь на напечатанную.
            </p>
            <h3>Преимущества</h3>
            <p>
              Самый дешёвый вариант получить эксклюзивную трехмерную деталь. Высокая степень прочности, возможность заменить заводские детали.
            </p>
            <h3>Недостатки</h3>
            <p>
              Большие временные затраты. В некоторых случаях требуется последующая обработка. Так же при проектиров ании нужно учитывать усадка внутренних  отверстий малого диаметра. Детали являются  не монолитные, что некритично если правильно распределить нагрузку на слои напечатанной детали.
            </p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.SLS.name}
          caption={Specializations.SLS.caption}
          anchor={Specializations.SLS.anchor}
          image={image3dSls}
        >
          <>
            <p>
              Послолойна 3D печать , почти тоже самое что и технология FDM только сложнее. Печать происходит при помощи засвечивания ультрафиолетом полимерной смолы.
            </p>
            <h3>Качество</h3>
            <p>
              Наивысшая степень качества поверхности детали в 3D печати можно получить именно этой технологией. Прочность изделия посредственная и больше подходит для изготовления макро изделий или ювелирных "мастер моделей".
            </p>
            <h3>Преимущества</h3>
            <p>
              Очень высокая степень качества изделия. Размерность изделия сохраняется максимально. Технология позволяет получить монолитную деталь.
            </p>
            <h3>Недостатки</h3>
            <p>Дороговизна материалов, что на прямую влияет на конечную стоимость изделия. Долгое время печати. Посредственная прочность, у мелких деталей.</p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.MODELING.name}
          caption={Specializations.MODELING.caption}
          anchor={Specializations.MODELING.anchor}
          image={imageModeling}
        >
          <>
            <p>
              Для изготовления той или иной детали требуется искиз, чертеж изделия, 3д модель.
            </p>
            <p>
              Если вдруг у вас нет возможности снять размеры, или создать 3д модель, мы готовы вам помочь!
            </p>
            <p>Минимальная цена за любое прототипирование 800р.</p>
          </>
        </SpecializationSection>
        <VkWidget/>
      </section>
    </>
  )
};

export {
  PageSpecializations
};
