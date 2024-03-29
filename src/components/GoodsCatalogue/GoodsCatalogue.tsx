import React, { useEffect, useMemo } from "react";
import cls from "./GoodsCatalogue.module.scss";
import Sorts from "../Sorts";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { ProdBlock } from "./GoodsBlock/ProdBlock";
import Skeleton from "./GoodsBlock/Skeleton";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import {
  selectProduct,
  selectProductsCount,
} from "../../Store/product/product.selectors";
import { useGetProductsMutation } from "../../Store/product/product.api";
import {
  clearFilters,
  setSort,
  setTypes,
  setArrayTypes,
  setArrayChandelierTypes,
  setArrayColors,
  setLampCount,
  setDiameter,
  setIsSale,
  setFrom
} from "../../Store/product/product.slice";
import { lightCategory } from "../../const/constants";
import NotFoundBlock from "../NotFoundBlock";
import { Pagination } from "../Pagination";
import { COUNT_PER_PAGE } from "../Pagination/pagination-lib";
import { useLateEffect } from "../../hooks/useLateEffect";
import { useRouter } from "next/router";
import { Element } from 'react-scroll';
import { useSearchParams } from "next/navigation";

export const GoodsCatalogue: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(0);
  const [getProducts, { isLoading }] = useGetProductsMutation();
  const searchParams = useSearchParams();
  const {
    query: { Category: category },
  } = useRouter();
  const filterRout = useRouter();

  const router = useRouter();
  const { pathname, query } = router;
  const { sort_by, ...restQuery } = query;
  

  const { filters, sort } = useAppSelector((state) => state.product);
  const categoryInd = useMemo(
    () => lightCategory.find((type) => type.eng === category)?.ind,
    [category]
  );


  // useEffect(() => {                //Вариант Дани, тут короче не получается
  //   const params = new URLSearchParams(searchParams)
  //     dispatch(setArrayTypes(searchParams.get('Types')?.split(`,`).map((number) => +number)));
  // }x, [searchParams.get('Types')]);
  

//   useEffect(() => {
//   if (category && categoryInd && !sort_by && !categoryCh) {
//     const timeoutId = setTimeout(() => {
//       dispatch(clearFilters());
//       dispatch(setSort(0));
//       dispatch(setTypes(categoryInd - 1));
//       getProducts({ Types: [categoryInd], SortType: 0 });
//     }, 1);
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }
//   window.scrollTo(0, 0);
// }, [category, categoryInd, sort_by]);


const searchMinLamp = searchParams.get('MinLampCount');
const parsedMinLamp = !isNaN(parseInt(searchMinLamp || '')) ? parseInt(searchMinLamp || '') : 0;
const searchMaxLamp = searchParams.get('MaxLampCount');
const parsedMaxLamp = !isNaN(parseInt(searchMaxLamp || '')) ? parseInt(searchMaxLamp || '') : 20;
const searchMinMaxLamp = { 
  min: parsedMinLamp,
  max: parsedMaxLamp
};


//ТОТ САМЫЙ РАБОЧИЙ СПОСОБ
// const searchMinLamp = searchParams.get('MinLampCount');
// const parsedMinLamp = !isNaN(parseInt(searchMinLamp)) && searchMinLamp !== null ? parseInt(searchMinLamp) : 0;
// const searchMaxLamp = searchParams.get('MaxLampCount');
// const parsedMaxLamp = !isNaN(parseInt(searchMaxLamp)) && searchMaxLamp !== null ? parseInt(searchMaxLamp) : 20;
// const searchMinMaxLamp = { 
//   min: parseInt(parsedMinLamp),
//   max: parseInt(parsedMaxLamp)
// };




const searchMinDiam = searchParams.get('MinDiameter');
const parsedMinDiam = !isNaN(parseInt(searchMinDiam || '')) ? parseInt(searchMinDiam || '') : 0;
const searchMaxDiam = searchParams.get('MaxDiameter');
const parsedMaxDiam = !isNaN(parseInt(searchMaxDiam || '')) ? parseInt(searchMaxDiam || '') : 2000;
const searchMinMaxDiam = { 
  min: parsedMinDiam,
  max: parsedMaxDiam
};


//ТОТ САМЫЙ РАБОЧИЙ СПОСОБ
// const searchMinDiam = searchParams.get('MinDiameter');
// const parsedMinDiam = !isNaN(parseInt(searchMinDiam)) && searchMinDiam !== null ? parseInt(searchMinDiam) : 0;
// const searchMaxDiam = searchParams.get('MaxDiameter');
// const parsedMaxDiam = !isNaN(parseInt(searchMaxDiam)) && searchMaxDiam !== null ? parseInt(searchMaxDiam) : 2000;
// const searchMinMaxDiam = { 
//   min: parseInt(parsedMinDiam),
//   max: parseInt(parsedMaxDiam)
// };







const searchTypesAr = searchParams.get('Types');
// const typesArray = searchTypesAr?.split(",").map(Number);
const searchColorsAr = searchParams.get('Colors');
// const colorsArray = searchColorsAr?.split(",").map(Number);
const searchChandTypesAr = searchParams.get('ChandelierTypes');
// const chandelierTypesArray = searchChandTypesAr?.split(",").map(Number);
const typesArray: number[] = searchTypesAr ? searchTypesAr.split(",").map(Number) : [];
const colorsArray: number[] = searchColorsAr ? searchColorsAr.split(",").map(Number) : [];
const chandelierTypesArray: number[] = searchChandTypesAr ? searchChandTypesAr.split(",").map(Number) : [];
const searchIsSale = searchParams.get('IsSale');
const parsedSearchIsSale = searchIsSale === 'false' ? false : searchIsSale === 'true' ? true : false;
const searchFrom = searchParams.get('From');
console.log(searchIsSale, 'searchIsSale')




const requestParams = {
  ...(typesArray !== undefined && typesArray.length > 0 && { Types: typesArray }),
  ...(colorsArray !== undefined && colorsArray.length > 0 && { Colors: colorsArray }),
  ...(chandelierTypesArray !== undefined && chandelierTypesArray.length > 0 && { ChandelierTypes: chandelierTypesArray }),
  ...(searchMinDiam !== null && { MinDiameter: parsedMinDiam }),
  ...(searchMaxDiam !== null && { MaxDiameter: parsedMaxDiam }),
  ...(searchMinLamp !== null && { MinLampCount: parsedMinLamp }),
  ...(searchMaxLamp !== null && { MaxLampCount: parsedMaxLamp }),
  // ...(searchIsSale !== null && {IsSale: searchIsSale}),
  // ...(searchIsSale !== null && searchIsSale !== false && { IsSale: searchIsSale }),
  ...(parsedSearchIsSale !== null && parsedSearchIsSale !== false && { IsSale: parsedSearchIsSale }),
  // ...(searchFrom !== null && { From: searchFrom }),
  SortType: sort,
};






//ТОТ САМЫЙ РАБОЧИЙ СПОСОБ
// const searchTypesAr = searchParams.get('Types');
// const typesArray = searchTypesAr?.split(",").map(Number);
// const searchColorsAr = searchParams.get('Colors');
// const colorsArray = searchColorsAr?.split(",").map(Number);
// const searchChandTypesAr = searchParams.get('ChandelierTypes');
// const chandelierTypesArray = searchChandTypesAr?.split(",").map(Number);
// const searchIsSale = searchParams.get('IsSale');
// const parsedSearchIsSale = searchIsSale === 'false' ? null : searchIsSale;
// const searchFrom = searchParams.get('From');
// console.log(parsedSearchIsSale, 'parsedSearchIsSale')

// const requestParams = {
//   ...(typesArray !== undefined && { Types: typesArray }),
//   ...(colorsArray !== undefined && { Colors: colorsArray }),
//   ...(chandelierTypesArray !== undefined && { ChandelierTypes: chandelierTypesArray }),
//   ...(searchMinDiam !== null && { MinDiameter: parsedMinDiam }),
//   ...(searchMaxDiam !== null && { MaxDiameter: parsedMaxDiam }),
//   ...(searchMinLamp !== null && { MinLampCount: parsedMinLamp }),
//   ...(searchMaxLamp !== null && { MaxLampCount: parsedMaxLamp }),
//   // ...(searchIsSale !== null && {IsSale: searchIsSale}),
//   // ...(searchIsSale !== null && searchIsSale !== false && { IsSale: searchIsSale }),
//   ...(parsedSearchIsSale !== null && parsedSearchIsSale !== false && { IsSale: parsedSearchIsSale }),
//   // ...(searchFrom !== null && { From: searchFrom }),
//   SortType: sort,
// };







useEffect(() => {
  const timeoutId = setTimeout(() => {
    dispatch(setArrayTypes(typesArray));
    dispatch(setArrayColors(colorsArray));
    dispatch(setArrayChandelierTypes(chandelierTypesArray));
    dispatch(setLampCount(searchMinMaxLamp));
    dispatch(setDiameter(searchMinMaxDiam));
    dispatch(setIsSale(parsedSearchIsSale));
    // dispatch(setFrom(searchFrom));

    getProducts(requestParams);
  }, 1);
  return () => {
    clearTimeout(timeoutId);
  };
  }, [searchTypesAr, searchColorsAr, searchChandTypesAr, searchMinLamp, searchMaxLamp, searchMinDiam, searchMaxDiam, parsedSearchIsSale, sort]);








const handleGetProducts = () => {

  const defaultObj: {
    MaxLampCount: number;
    MinLampCount: number;
    MinDiameter: number;
    MaxDiameter: number;
    IsSale: null | boolean; // Add union type to include null and boolean
    [key: string]: number | null | boolean; // Index signature
  } = {
    MaxLampCount: 20,
    MinLampCount: 0,
    MinDiameter: 0,
    MaxDiameter: 2000,
    IsSale: null,
  };


  console.log(`sort_by=${sort_by}`,'querya')

   router.push(
    {
      pathname,
      query: Object.entries(filters)
      .filter((query) => defaultObj[query[0]] !== query[1])
      .map((query) => `${query[0]}=${encodeURIComponent(query[1])}`)
      .join(`&`)
      //  + `sort_by=${sort_by}`
    },
    undefined,
    { scroll: false }
  );
  const timeoutId = setTimeout(() => {
    
      dispatch(setArrayTypes(typesArray));
      dispatch(setArrayColors(colorsArray));
      dispatch(setArrayChandelierTypes(chandelierTypesArray));
      dispatch(setLampCount(searchMinMaxLamp));
      dispatch(setDiameter(searchMinMaxDiam));
      dispatch(setIsSale(parsedSearchIsSale));


  getProducts(requestParams);
  }, 1);
  return () => {
    clearTimeout(timeoutId);
  };
};

  const products = useAppSelector(selectProduct);
  const productsCount = useAppSelector(selectProductsCount);
  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  useLateEffect(() => {
    getProducts({
      From: page * COUNT_PER_PAGE,
      Count: COUNT_PER_PAGE,
      // SortType: sort,
      // ...filters,
      ...requestParams
    }
    ).then(() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    );
  }, [page]);

  if (!categoryInd && category?.length) return <NotFoundBlock />;

  const shouldDisplayFilterBlock = !filterRout.pathname.includes("/Outlet");

  return (
    <>
    <section className={cls.section_catalogue}>
        {category && (
          <div className={cls.section_catalogue_lighttitle}>
          <h2 className={cls.section_catalogue_title}>
            {lightCategory.find((type) => type.eng === category)?.name}
          </h2>
          {/* <img
          className={cls.section_catalogue_migtitle}
          src={
          lightCategory.find((type) => type.eng === category)?.img || ''
          }/> */}
          </div>
        )}
      <div className={`${cls.catalogue__container} ${cls.container}`}>
        {/* {JSON.stringify(filters.Types)} */}
        
         <FilterBlock handleGetProducts={handleGetProducts} isActive={isActive} handleClick={handleClick} />

         
        {/* {shouldDisplayFilterBlock && <FilterBlock isActive={isActive} handleClick={handleClick} />} */}
        <div className={cls.catalogue__product}>
          <div className={cls.catalogue__product_filsort}>
            <button onClick={handleClick} className={cls.mobile_filter_button}>
              <svg
                className={cls.mobile_filter_button__icon}
                width="19"
                height="19"
                viewBox="0 0 19 19"
              >
                <path
                  d="M9.32137 18.75H7.5V9.59533L0.9375 2.03485V0.604858H18.75V2.02668L12.5 9.58717V15.6739L9.32137 18.75ZM8.75 17.5403H8.80363L11.25 15.1729V9.16287L17.3246 1.81454H2.37891L8.75 9.15471V17.5403Z"
                  fill="black"
                ></path>
              </svg>
              <span className={cls.mobile_filter_button__text}>Фильтр</span>
            </button>
            <div className="flex w-full items-center justify-end">
            <Sorts title="Сортировано по:" />
      </div>

          </div>
          <h3 className={cls.allproduct_heading}>
            {/* Показано {40} товаров из {850}{' '} */}
          </h3>
          <ul className={cls.allproduct_goods_list}>
            {isLoading && skeleton}
            {products.map((product) => (
              <ProdBlock key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
      {(productsCount ?? 0) >= COUNT_PER_PAGE && (
        <Pagination
          count={productsCount}
          changePage={(num: number) => setPage(num - 1)}
          isLoading={isLoading}
        />
      )}
    </section>
    </>
  );
};














//ORIGINAL



// import React, { useEffect, useMemo } from "react";
// import cls from "./GoodsCatalogue.module.scss";
// import Sorts from "../Sorts";
// import { FilterBlock } from "./FilterBlock/FilterBlock";
// import { ProdBlock } from "./GoodsBlock/ProdBlock";
// import Skeleton from "./GoodsBlock/Skeleton";
// import { useAppDispatch, useAppSelector } from "../../Store/store";
// import {
//   selectProduct,
//   selectProductsCount,
// } from "../../Store/product/product.selectors";
// import { useGetProductsMutation } from "../../Store/product/product.api";
// import {
//   clearFilters,
//   setSort,
//   setTypes,
// } from "../../Store/product/product.slice";
// import { lightCategory } from "../../const/constants";
// import NotFoundBlock from "../NotFoundBlock";
// import { Pagination } from "../Pagination";
// import { COUNT_PER_PAGE } from "../Pagination/pagination-lib";
// import { useLateEffect } from "../../hooks/useLateEffect";
// import { useRouter } from "next/router";

// export const GoodsCatalogue: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [page, setPage] = React.useState(0);
//   const [getProducts, { isLoading }] = useGetProductsMutation();
//   const {
//     query: { Category: category },
//   } = useRouter();
//   const filterRout = useRouter();

//   const { filters, sort } = useAppSelector((state) => state.product);
//   const categoryInd = useMemo(
//     () => lightCategory.find((type) => type.eng === category)?.ind,
//     [category]
//   );

//   const handleGetProducts = () => {
//     getProducts({ ...filters, SortType: sort });
//   };

//   useEffect(() => {
//     if (category) {
//       if (categoryInd) {
//     const timeoutId = setTimeout(() => {
//         dispatch(clearFilters());
//         dispatch(setSort(4));
//         dispatch(setTypes(categoryInd - 1));
//         getProducts({ Types: [categoryInd], SortType: 4 }); // Отправляем запрос с одним единственным фильтром, потому что у нас изменилась категория и все фильтры чистятся
//     }, 1);

//         return() => {
//           clearTimeout(timeoutId);
//         };
//       }
//     }
//     handleGetProducts();
//     window.scrollTo(0, 0);
//   }, [category, categoryInd]);
  

//   useLateEffect(() => {
//     handleGetProducts();
//   }, [sort]);

//   const products = useAppSelector(selectProduct);
//   const productsCount = useAppSelector(selectProductsCount);
//   const skeleton = [...new Array(8)].map((_, index) => (
//     <Skeleton key={index} />
//   ));
//   const [isActive, setIsActive] = React.useState(false);
//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

//   useLateEffect(() => {
//     getProducts({
//       From: page * COUNT_PER_PAGE,
//       Count: COUNT_PER_PAGE,
//       SortType: sort,
//       ...filters,
//     }).then(() =>
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       })
//     );
//   }, [page]);

//   if (!categoryInd && category?.length) return <NotFoundBlock />;

//   const shouldDisplayFilterBlock = !filterRout.pathname.includes("/Outlet");
  
//   return (
//     <>
//     <section className={cls.section_catalogue}>
//         {category && (
//           <div className={cls.section_catalogue_lighttitle}>
//           <h2 className={cls.section_catalogue_title}>
//             {lightCategory.find((type) => type.eng === category)?.name}
//           </h2>
//           {/* <img
//           className={cls.section_catalogue_migtitle}
//           src={
//           lightCategory.find((type) => type.eng === category)?.img || ''
//           }/> */}
//           </div>
//         )}
//       <div className={`${cls.catalogue__container} ${cls.container}`}>
//         {/* {JSON.stringify(filters.Types)} */}
//          <FilterBlock isActive={isActive} handleClick={handleClick} />
//         {/* {shouldDisplayFilterBlock && <FilterBlock isActive={isActive} handleClick={handleClick} />} */}
//         <div className={cls.catalogue__product}>
//           <div className={cls.catalogue__product_filsort}>
//             <button onClick={handleClick} className={cls.mobile_filter_button}>
//               <svg
//                 className={cls.mobile_filter_button__icon}
//                 width="19"
//                 height="19"
//                 viewBox="0 0 19 19"
//               >
//                 <path
//                   d="M9.32137 18.75H7.5V9.59533L0.9375 2.03485V0.604858H18.75V2.02668L12.5 9.58717V15.6739L9.32137 18.75ZM8.75 17.5403H8.80363L11.25 15.1729V9.16287L17.3246 1.81454H2.37891L8.75 9.15471V17.5403Z"
//                   fill="black"
//                 ></path>
//               </svg>
//               <span className={cls.mobile_filter_button__text}>Фильтр</span>
//             </button>
//             <Sorts title="Сортировано по:" />
//           </div>
//           <h3 className={cls.allproduct_heading}>
//             {/* Показано {40} товаров из {850}{' '} */}
//           </h3>
//           <ul className={cls.allproduct_goods_list}>
//             {isLoading && skeleton}
//             {products.map((product) => (
//               <ProdBlock key={product.id} product={product} />
//             ))}
//           </ul>
//         </div>
//       </div>
//       {(productsCount ?? 0) >= COUNT_PER_PAGE && (
//         <Pagination
//           count={productsCount}
//           changePage={(num: number) => setPage(num - 1)}
//           isLoading={isLoading}
//         />
//       )}
//     </section>
//     </>
//   );
// };
