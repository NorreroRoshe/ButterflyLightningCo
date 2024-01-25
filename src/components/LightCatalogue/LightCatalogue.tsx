import React from 'react';
import Link from 'next/link';
import cls from './LightCatalogue.module.scss';
import { lightCategory } from '../../const/constants';

export const LightCatalogue: React.FC = () => {
  const targetChndLight = lightCategory.find((item) => item.eng === 'CHANDELIER');
  const targetSconceLight = lightCategory.find((item) => item.eng === 'SCONCE');
  const targetFloorLight = lightCategory.find((item) => item.eng === 'FLOOR_LAMP');
  const targetTableLight = lightCategory.find((item) => item.eng === 'TABLE_LAMP');

  return (
    <section className={`${cls.section_categories} ${cls.container}`}>
      <h2 className={cls.title_h2}>Каталог</h2>
      <div className={cls.categories_gallery_area}>
        <div className={`${cls.container} ${cls.banners_block_desktop}`}>
          <div className={cls.row}>
            <div className={cls.cate_banner_part}>
              <div className={cls.single_category_banner}>
                <figure className={cls.cate_banner_thumb}>
                  <Link href={`/Chapter/${targetChndLight ? targetChndLight.eng : ''}`}>
                    <img
                      src="https://butterflylc.store/image/cache/catalog/Products/120-4%20ni%20on-1200x900.jpg"
                      alt="Люстры"
                    />
                  </Link>
                  <figcaption className={cls.banner_content}>
                    <h2 className={cls.black} style={{ color: 'black' }}>
                      Люстры
                    </h2>
                  </figcaption>
                </figure>
              </div>
              <Link
                className={cls.single_category_banner2}
                href={`/Chapter/${targetSconceLight ? targetSconceLight.eng : ''}`}>
                <div
                  className={`${cls.single_category_banner} ${cls.single_category_banner_nasten}`}>
                  <figure className={cls.cate_banner_thumb}>
                    <figcaption className={cls.banner_content1}>
                      <h2 className={cls.black} style={{ color: 'black' }}>
                        Настенные бра
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              </Link>
            </div>
            <div className={cls.cate_banner_part1}>
              <Link href={`/Chapter/${targetFloorLight ? targetFloorLight.eng : ''}`}>
                <div
                  className={`${cls.single_category_banner} ${cls.single_category_banner_torsher}`}>
                  <figure className={cls.cate_banner_thumb}>
                    <figcaption className={cls.banner_content1}>
                      <h2 className={cls.black} style={{ color: 'black' }}>
                        Торшеры
                      </h2>
                    </figcaption>
                  </figure>
                </div>
              </Link>
              <div className={cls.single_category_banner1}>
                <figure className={cls.cate_banner_thumb}>
                  <Link href={`/Chapter/${targetTableLight ? targetTableLight.eng : ''}`}>
                    <img
                      src="https://butterflylc.store/image/cache/catalog/Products/1021-1t%20bronze%20on-1200x900.jpg"
                      alt="Настольные лампы"
                    />
                  </Link>
                  <figcaption className={cls.banner_content}>
                    <h2 className={cls.black} style={{ color: 'black' }}>
                      Настольные лампы
                    </h2>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className={`${cls.container} ${cls.banners_block_mobile}`}>
          <div className={cls.row_banners_block}>
            <div className={cls.cate_banner_part_mob}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <section className={`${cls.section_categories} ${cls.container}`}>
//   <h2 className={cls.title_h2}>Каталог</h2>
//   <ul className={cls.popular_categories_list}>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Lyustr} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Люстры</h3>
//           <Link to="/Chapter" className={cls.btn_popular_categories}>
//             Смотреть каталог
//           </Link>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Bra} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Бра</h3>
//           <Link to="/Chapter" className={cls.btn_popular_categories}>
//             Смотреть каталог
//             </Link>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Nastol} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Настольные лампы</h3>
//           <Link to="/Chapter" className={cls.btn_popular_categories}>
//             Смотреть каталог
//           </Link>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Torsh} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Торшеры</h3>
//           <Link to="/Chapter" className={cls.btn_popular_categories}>
//             Смотреть каталог
//           </Link>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Podves} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Подвесные светильники</h3>
//           <Link
//             to="/vnutrennee-osveschenie/bra-dlya-chteniya"
//             className={cls.btn_popular_categories}>
//             Смотреть каталог
//           </Link>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div className={cls.container_popular_categories_list}>
//         <img src={Acses} alt="" />
//         <div className={cls.popular_categories_text}>
//           <h3 className={cls.popular_categories_title}>Прочие акссесуары</h3>
//           <Link to="/Chapter" className={cls.btn_popular_categories}>
//             Смотреть каталог
//           </Link>
//         </div>
//       </div>
//     </li>
//   </ul>
//   <Link to="/Chapter" className={cls.btn_main_description}>
//     Смотреть все категории
//   </Link>
// </section>
