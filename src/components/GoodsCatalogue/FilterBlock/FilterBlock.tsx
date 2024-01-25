import React, { useEffect, useState } from "react";
import cls from "../GoodsCatalogue.module.scss";
import Colorcheckbox from "../../Checkbox/ColorCheckbox";
import TypeLight from "../../Checkbox/TypeLight";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../Store/store";
import {
  setTypes,
  setColors,
  setDiameter,
  setLampCount,
  setChandelierTypes,
  setIsSale,
  clearFilters,
} from "../../../Store/product/product.slice";
import RangeComponent, { IMinMax } from "../../sliders/RangeComponent";
import { useGetProductsMutation } from "../../../Store/product/product.api";
import { chandelierTypes, lightCategory } from "../../../const/constants";
import Switch from '@/components/ui/switch';

export interface IRange {
  minValue: number;
  maxValue: number;
}

const DiametrRange: IRange = {
  minValue: 0,
  maxValue: 2000,
};

const LampCountRange: IRange = {
  minValue: 0,
  maxValue: 20,
};

export type FilterProps = {
  isActive: boolean;
  handleClick: () => void;
  handleGetProducts: () => void;
};

export const FilterBlock: React.FC<FilterProps> = React.memo(
  ({ handleClick, isActive, handleGetProducts }) => {
    const dispatch = useAppDispatch();
    const { filters, sort } = useAppSelector((state) => state.product);
    const [getProducts, {}] = useGetProductsMutation();
    const [trigger, setTrigger] = useState(false);
    const router = useRouter();
    const { query } = useRouter();
    
    const saleRout = useRouter();

    const shouldDisplayFilterBlock = !saleRout.pathname.includes("/Outlet");  
    const NotshouldDisplayFilterBlock = saleRout.pathname.includes("/Outlet");  
    
    const handleSetLampsCount = (props: IMinMax) => {
      dispatch(setLampCount(props));
    };

    const handleSetDiameter = (props: IMinMax) => {
      dispatch(setDiameter(props));
    };


    const handleSetTypeProduct = (ind: number) => {
      dispatch(setTypes(ind));
    };

    const handleSetTypeColors = (ind: number) => {
      dispatch(setColors(ind));
    };

    const handleSetChandelierTypes = (ind: number) => {
      dispatch(setChandelierTypes(ind));
    };

    // const handleSetClear = () => {
    //   dispatch(clearFilters());
    //   setTrigger((prev) => !prev);
    //   getProducts({});
    // };

    const handleSetClear = () => {
      dispatch(clearFilters());
      setTrigger((prev) => !prev);
      getProducts({});

      const { pathname } = router;
      router.push(
        {
          pathname
        },
        undefined,
        { scroll: false }
      );
    };

    const handleSetSale = () => {
      // TODO подумать почему
      dispatch(setIsSale(!filters.IsSale));
    };

    useEffect(() => {
      if (saleRout.pathname === '/Outlet') {
        getProducts({});
        const isSaletimeout = setTimeout(() => {
          dispatch(setIsSale(true));
          getProducts({ IsSale: true, SortType: 0 });
        }, 100);
    
        return () => {
          clearTimeout(isSaletimeout);
        };
      }
    }, [saleRout.pathname]);

    useEffect(() => {                      //раскоментить
      dispatch(clearFilters());
    }, [query.Category]);

    const [isSaleChecked, setIsSaleChecked] = useState(filters.IsSale || false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsSaleChecked(filters.IsSale || false);
      }, 1);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [filters.IsSale]);
    return (
      <div className={cls.catalogue__filter}>
        <h3 className={cls.filter__title}>Фильтр</h3>
        <div className={cls.catalogue__border}>
          <div
            className={`${cls.filter__fil} ${
              isActive ? cls.filter__fil_mobile : ""
            }`}
          >
            <button
              onClick={handleClick}
              className={`${cls.close_filter} ${
                isActive ? cls.close_filter_block : ""
              }`}
            >
              <span
                className={`${cls.close_filter__l} ${cls.close_filter__perv}`}
              ></span>
              <span
                className={`${cls.close_filter__l} ${cls.close_filter__vtor}`}
              ></span>
            </button>
            {shouldDisplayFilterBlock &&
            <div className={cls.product__fil}>
              <div className={`${cls.product__fil_style} ${cls.product__fil_style_sale}`}>
                <h4 className={cls.product__fil_style_head}>Скидка</h4>
                <input
                  type="checkbox"
                  checked={isSaleChecked}
                  onChange={handleSetSale}
                />
                {/* <div className="flex items-center flex-shrink-0">
                  <label className="switch relative inline-block w-10 cursor-pointer">
                    <Switch checked={filters.IsSale || false} onChange={handleSetSale} />
                  </label>
                </div> */}
              </div>
            </div>
            }

            <div className={cls.product__fil}>
              <div className={cls.product__fil_style}>
                <h4 className={cls.product__fil_style_head}>
                  Категория светильника
                </h4>
                <TypeLight
                  headeDropdownClass={"header__dropdown_wrap_typelught"}
                  array={filters.Types || []}
                  onChangeCategory={handleSetTypeProduct}
                  lightCategory={lightCategory}
                  />
              </div>
            </div>
                  {shouldDisplayFilterBlock &&
            <div className={cls.filter__fil_price}>
              <h4 className={cls.filter__fil_price_head}>
                Количество лампочек (шт)
              </h4>
              <div className={cls.polsunok}>
                <RangeComponent
                  changeValues={handleSetLampsCount}
                  trigger={trigger}
                  minValue={filters.MinLampCount || LampCountRange.minValue}
                  maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                  RangeValue={LampCountRange}
                  />
              </div>
            </div>
                }

            <div className={cls.filter__fil_color}>
              <h4 className={cls.filter__fil_color_head}>Цвет</h4>
              <Colorcheckbox
                onChangeCategory={handleSetTypeColors}
                array={filters.Colors || []}
              />
            </div>
            {shouldDisplayFilterBlock &&

            <div className={cls.product__fil}>
              <div className={cls.product__fil_style}>
                <h4 className={cls.product__fil_style_head}>Дополнение</h4>
                <TypeLight
                  headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                  array={filters.ChandelierTypes || []}
                  onChangeCategory={handleSetChandelierTypes}
                  lightCategory={chandelierTypes}
                />
              </div>
            </div>
              }

            <div className={cls.filter__fil_price}>
              <h4 className={cls.filter__fil_price_head}>Диаметр (мм)</h4>
              <div className={cls.polsunok}>
                <RangeComponent
                  changeValues={handleSetDiameter}
                  trigger={trigger}
                  minValue={filters.MinDiameter || DiametrRange.minValue}
                  maxValue={filters.MaxDiameter || DiametrRange.maxValue}
                  RangeValue={DiametrRange}
                />
              </div>
            </div>
            {NotshouldDisplayFilterBlock &&
            <div className={cls.product__fil}>
              <div className={cls.product__fil_style}>
                <h4 className={cls.product__fil_style_head}>Скидка</h4>
                <input
                  type="checkbox"
                  checked={filters.IsSale || false}
                  onChange={handleSetSale}
                />
              </div>
            </div>
            }
            <div className={cls.product__fil}>
              <div className={cls.product__fil_primenit}>
                <button
                  onClick={handleGetProducts}
                  className={cls.product__fil_primenit_search}
                >
                  <span
                    className={`${cls.product__fil_primenit_btn} ${cls.primenit_btn}`}
                  >
                    Применить фильтр
                  </span>
                </button>
                <button
                  onClick={handleSetClear}
                  className={cls.product__fil_primenit_clear}
                >
                  Сбросить фильтр
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);




















// Original



// import React, { useEffect, useState } from "react";
// import cls from "../GoodsCatalogue.module.scss";
// import Colorcheckbox from "../../Checkbox/ColorCheckbox";
// import TypeLight from "../../Checkbox/TypeLight";
// import { useRouter } from "next/router";
// import { useAppDispatch, useAppSelector } from "../../../Store/store";
// import {
//   setTypes,
//   setColors,
//   setDiameter,
//   setLampCount,
//   setChandelierTypes,
//   setIsSale,
//   clearFilters,
//   // setChandelierTypes,
// } from "../../../Store/product/product.slice";
// import RangeComponent, { IMinMax } from "../../sliders/RangeComponent";
// import { useGetProductsMutation } from "../../../Store/product/product.api";
// import { chandelierTypes, lightCategory } from "../../../const/constants";

// export interface IRange {
//   minValue: number;
//   maxValue: number;
// }

// const DiametrRange: IRange = {
//   minValue: 0,
//   maxValue: 2000,
// };

// const LampCountRange: IRange = {
//   minValue: 0,
//   maxValue: 20,
// };

// export type FilterProps = {
//   isActive: boolean;
//   handleClick: () => void;
// };

// export const FilterBlock: React.FC<FilterProps> = React.memo(
//   ({ handleClick, isActive }) => {
//     const dispatch = useAppDispatch();
//     const { filters, sort } = useAppSelector((state) => state.product);
//     const [getProducts, {}] = useGetProductsMutation();
    
//     const [trigger, setTrigger] = useState(false);
    
//     const { query } = useRouter();
    
//     const saleRout = useRouter();

//     const shouldDisplayFilterBlock = !saleRout.pathname.includes("/Outlet");  
//     const NotshouldDisplayFilterBlock = saleRout.pathname.includes("/Outlet");  
    
//     const handleSetLampsCount = (props: IMinMax) => {
//       dispatch(setLampCount(props));
//     };

//     const handleSetDiameter = (props: IMinMax) => {
//       dispatch(setDiameter(props));
//     };

//     const handleSetTypeProduct = (ind: number) => {
//       dispatch(setTypes(ind));
//     };

//     const handleSetTypeColors = (ind: number) => {
//       dispatch(setColors(ind));
//     };

//     const handleSetChandelierTypes = (ind: number) => {
//       dispatch(setChandelierTypes(ind));
//     };

//     const handleSetClear = () => {
//       dispatch(clearFilters());
//       setTrigger((prev) => !prev);
//       getProducts({});
//     };

//     const handleSetSale = () => {
//       // TODO подумать почему
//       dispatch(setIsSale(!filters.IsSale));
//     };

//     const handleGetProducts = () => {
//       getProducts({ ...filters, SortType: sort });
//     };

//     useEffect(() => {
//       if (saleRout.pathname === '/Outlet') {
//         getProducts({});
//         const isSaletimeout = setTimeout(() => {
//           dispatch(setIsSale(true));
//         getProducts({ IsSale: true, SortType: 4 });
//         }, 100);
    
//         return () => {
//           clearTimeout(isSaletimeout);
//         };
//       }
//     }, [saleRout.pathname]);

//     useEffect(() => {                      //раскоментить
//       dispatch(clearFilters());
//     }, [query.Category]);

//     return (
//       <div className={cls.catalogue__filter}>
//         <h3
//                   className={cls.filter__title}>Фильтр</h3>
//         <div className={cls.catalogue__border}>
//           <div
//             className={`${cls.filter__fil} ${
//               isActive ? cls.filter__fil_mobile : ""
//             }`}
//           >
//             <button
//               onClick={handleClick}
//               className={`${cls.close_filter} ${
//                 isActive ? cls.close_filter_block : ""
//               }`}
//             >
//               <span
//                 className={`${cls.close_filter__l} ${cls.close_filter__perv}`}
//               ></span>
//               <span
//                 className={`${cls.close_filter__l} ${cls.close_filter__vtor}`}
//               ></span>
//             </button>
//             {shouldDisplayFilterBlock &&
//             <div className={cls.product__fil}>
//               <div className={cls.product__fil_style}>
//                 <h4 className={cls.product__fil_style_head}>Скидка</h4>
//                 <input
//                   type="checkbox"
//                   checked={filters.IsSale || false}
//                   onChange={handleSetSale}
//                 />
//               </div>
//             </div>
//             }

//             <div className={cls.product__fil}>
//               <div className={cls.product__fil_style}>
//                 <h4 className={cls.product__fil_style_head}>
//                   Категория светильника
//                 </h4>
//                 <TypeLight
//                   headeDropdownClass={"header__dropdown_wrap_typelught"}
//                   array={filters.Types || []}
//                   onChangeCategory={handleSetTypeProduct}
//                   lightCategory={lightCategory}
//                   />
//               </div>
//             </div>
//                   {shouldDisplayFilterBlock &&
//             <div className={cls.filter__fil_price}>
//               <h4 className={cls.filter__fil_price_head}>
//                 Количество лампочек (шт)
//               </h4>
//               <div className={cls.polsunok}>
//                 <RangeComponent
//                   changeValues={handleSetLampsCount}
//                   trigger={trigger}
//                   minValue={filters.MinLampCount || LampCountRange.minValue}
//                   maxValue={filters.MaxLampCount || LampCountRange.maxValue}
//                   RangeValue={LampCountRange}
//                   />
//               </div>
//             </div>
//                 }

//             <div className={cls.filter__fil_color}>
//               <h4 className={cls.filter__fil_color_head}>Цвет</h4>
//               <Colorcheckbox
//                 onChangeCategory={handleSetTypeColors}
//                 array={filters.Colors || []}
//               />
//             </div>
//             {shouldDisplayFilterBlock &&

//             <div className={cls.product__fil}>
//               <div className={cls.product__fil_style}>
//                 <h4 className={cls.product__fil_style_head}>Дополнение</h4>
//                 <TypeLight
//                   headeDropdownClass={"header__dropdown_wrap_lightCategory"}
//                   array={filters.ChandelierTypes || []}
//                   onChangeCategory={handleSetChandelierTypes}
//                   lightCategory={chandelierTypes}
//                 />
//               </div>
//             </div>
//               }

//             <div className={cls.filter__fil_price}>
//               <h4 className={cls.filter__fil_price_head}>Диаметр (мм)</h4>
//               <div className={cls.polsunok}>
//                 <RangeComponent
//                   changeValues={handleSetDiameter}
//                   trigger={trigger}
//                   minValue={filters.MinDiameter || DiametrRange.minValue}
//                   maxValue={filters.MaxDiameter || DiametrRange.maxValue}
//                   RangeValue={DiametrRange}
//                 />
//               </div>
//             </div>
//             {NotshouldDisplayFilterBlock &&
//             <div className={cls.product__fil}>
//               <div className={cls.product__fil_style}>
//                 <h4 className={cls.product__fil_style_head}>Скидка</h4>
//                 <input
//                   type="checkbox"
//                   checked={filters.IsSale || false}
//                   onChange={handleSetSale}
//                 />
//               </div>
//             </div>
//             }
//             <div className={cls.product__fil}>
//               <div className={cls.product__fil_primenit}>
//                 <button
//                   onClick={handleGetProducts}
//                   className={cls.product__fil_primenit_search}
//                 >
//                   <span
//                     className={`${cls.product__fil_primenit_btn} ${cls.primenit_btn}`}
//                   >
//                     Применить фильтр
//                   </span>
//                 </button>
//                 <button
//                   onClick={handleSetClear}
//                   className={cls.product__fil_primenit_clear}
//                 >
//                   Сбросить фильтр
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );
