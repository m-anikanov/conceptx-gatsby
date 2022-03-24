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
    'img-90427': imageUvPrinting,
    'img-94463': imageLaserGrooving,
  } = useStaticSpecializationsImgQuery();

  return (
    <>
      <SpecializationsPresent className={styles.present}/>
      <section className={styles.specializations}>
        <SpecializationSection
          title={Specializations.LASER_CUT.name}
          caption={Specializations.LASER_CUT.caption}
          anchor={Specializations.LASER_CUT.anchor}
          image={imageLaserCutting}
        >
          <>
            <p>Метод обработки материала при помощи лазера большой мощности.</p>
            <p><b>Максимальное рабочее поле станка:</b> 1300x900мм.</p>
            <h3>Обрабатываемые материалы</h3>
            <p>
              Фанера березовая, кожа, акрил (оргстекло), различные пластики, картон, пенопласт, ткань.<br/>
              Звоните, если не увидели нужный материал!
            </p>
            <p>
              Толщина раскроя материала зависит от его плотности и свойств. Например: наш лазерный станок прорезает до 18 мм фанеры.
              Для более толстых материалов используем фрезерный станок с ЧПУ.
            </p>
            <h3>Преимущества</h3>
            <p>
              Скорость резки, меньшая стоимость работ (по сравнению с фрезерной обработкой), возможность обеспечения внутренних острых углов.
            </p>
            <h3>Недостатки</h3>
            <p>
              Черный угольный контур который остаётся после воздействия лазерного луча. При желании исправляется наждачной бумагой.
            </p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.LASER_GROOVE.name}
          caption={Specializations.LASER_GROOVE.caption}
          anchor={Specializations.LASER_GROOVE.anchor}
          image={imageLaserGrooving}
        >
          <>
            <p>Мы имеем специальное оборудование которое позволяет выполнить гравировку на любых материалах с высокого качества </p>
            <h3>Обрабатываемые материалы</h3>
            <p>
              Нержавеющая сталь, цветные металлы, стекло, гранит, искусственный камень, древесина, кожа, пластмассы, бумажные материалы и.т.д.
            </p>
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
            <h3>Максимальное рабочее поле</h3>
            <ul>
              <li><b>станок №1:</b> 640x840мм</li>
              <li><b>станок №2:</b> 2500x3000мм</li>
            </ul>
            <h3>Обрабатываемые материалы</h3>
            <p>Древесина, пластики, композиты, углеродистая сталь, мягкие цветные металлы (алюминий, латунь, медь, итд).</p>
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
            <p><b>Максимальное рабочее поле станка:</b> 300х500мм.</p>
            <h3>Качество</h3>
            <p>
              Можно распечатать почти любое изображение на плоских поверхностях, а так же на ткани при этом качество наносимого рисунка напрямую зависит от качества исходного изображения.
            </p>
            <h3>Преимущества</h3>
            <p>Не требуется ожидать полного высыхания красок, можно сразу использовать по назначению. Не смывается при стирке.</p>
            <h3>Недостатки</h3>
            <p>Требуется качественное изображение.</p>
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
            <p><b>Максимальное рабочее поле станка:</b> 340х240x600мм.</p>
            <p>
              Печатаем следующими пластиками: ABS, PET, Nylon, PLA, SBS и.т.д. наличие того или иного пластика лучше уточнить.
            </p>
            <h3>Качество</h3>
            <p>
              Каждый пластик обладает своим свойствами и назначением один может быть ударопрочным и твердым другой же  может быть  пластичным и упругим, а третий износостойким.  Правильно подобранный материал обеспечит максимальный требуемый результат. Высокая спекаемость между слоями позволяет зачастую заметить сломанную заводскую деталь на напечатанную. Наличие цветов уточняйте.
            </p>
            <h3>Преимущества</h3>
            <p>
              Самый дешёвый вариант получить эксклюзивную трехмерную деталь. Высокая степень прочности, возможность заменить заводские детали.
            </p>
            <h3>Недостатки</h3>
            <p>
              Большие временные затраты. В некоторых случаях требуется последующая обработка. Так же при проектировании нужно учитывать усадку внутренних отверстий малого диаметра. Детали являются не монолитными, что некритично, если правильно распределить нагрузку на слои напечатанной детали.
            </p>
          </>
        </SpecializationSection>
        <SpecializationSection
          title={Specializations.DLP.name}
          caption={Specializations.DLP.caption}
          anchor={Specializations.DLP.anchor}
          image={image3dSls}
        >
          <>
            <p>
              Послолойна 3D печать, почти тоже самое что и технология FDM только сложнее. Печать происходит при помощи засвечивания ультрафиолетом полимерной смолы.
            </p>
            <p><b>Максимальное рабочее поле станка:</b> 120х180x120мм.</p>
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
              Для изготовления той или иной детали требуется искиз, чертеж изделия, 3D модель.
            </p>
            <p>
              Если вдруг у вас нет возможности снять размеры, или создать 3д модель, мы готовы вам помочь!
            </p>
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
