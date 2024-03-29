import { useRouter } from 'next/router';
import cn from 'classnames';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useUI } from '@/contexts/ui.context';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { useGetProductsMutation } from "@/Store/product/product.api";
import { useAppDispatch, useAppSelector } from "@/Store/store";
import TypeLight from "@/components/Checkbox/TypeLight";
import { chandelierTypes, lightCategory } from "@/const/constants";

import {
  setTypes,
  setColors,
  setDiameter,
  setLampCount,
  setChandelierTypes,
  setIsSale,
  clearFilters,
} from "@/Store/product/product.slice";

function checkIsActive(arr: any, item: string) {
  if (arr.includes(item)) {
    return true;
  }
  return false;
}

function CategoryFilterMenuItem({
  className = 'hover:bg-skin-two border-t border-skin-base first:border-t-0 px-3.5 2xl:px-4 py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3',
  item,
  depth = 0,
}: any) {
  console.log(item, 'itemscas')
  
  const dispatch = useAppDispatch();
  const { filters, sort } = useAppSelector((state) => state.product);
  const [getProducts, {}] = useGetProductsMutation();

  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, query } = router;
  const selectedCategories = useMemo(
    () => (query?.category ? (query.category as string).split(',') : []),
    [query?.category]
  );
  const isActive =
    checkIsActive(selectedCategories, item.slug) ||
    item?.children?.some((_item: any) =>
      checkIsActive(selectedCategories, _item.slug)
    );
  // const [isOpen, setOpen] = useState<boolean>(isActive);
  const [isOpen, setOpen] = useState<boolean>(true);
  const [subItemAction, setSubItemAction] = useState<boolean>(false);
  useEffect(() => {
    setOpen(isActive);
  }, [isActive]);
  const { slug, name, children: items } = item;
  const { displaySidebar, closeSidebar } = useUI();

  function toggleCollapse() {
    setOpen((prevValue) => !prevValue);
  }
  const handleChange = () => {
    setSubItemAction(!subItemAction);
  };

  const handleSetTypeProduct = (ind: number) => {

    const { category, ...restQuery } = query;
      let currentFormState = selectedCategories.includes(slug)
        ? selectedCategories.filter((i) => i !== slug)
        : [...selectedCategories, slug];
      router.push(
        {
          pathname,
          query: {
            ...restQuery,
            ...(!!currentFormState.length
              ? { category: currentFormState.join(',') }
              : {}),
          },
        },
        undefined,
        { scroll: false }
      );

    dispatch(setTypes(ind));
  };

  // function onClick() {
  //   if (Array.isArray(items) && !!items.length) {
  //     toggleCollapse();
  //   } else {
  //     const { category, ...restQuery } = query;
  //     let currentFormState = selectedCategories.includes(slug)
  //       ? selectedCategories.filter((i) => i !== slug)
  //       : [...selectedCategories, slug];
  //     router.push(
  //       {
  //         pathname,
  //         query: {
  //           ...restQuery,
  //           ...(!!currentFormState.length
  //             ? { category: currentFormState.join(',') }
  //             : {}),
  //         },
  //       },
  //       undefined,
  //       { scroll: false }
  //     );
  //     console.log(slug,'aaslud')
  //     displaySidebar && closeSidebar();
  //   }
  // }

  let expandIcon;
  if (Array.isArray(items) && items.length) {
    expandIcon = !isOpen ? (
      <IoIosArrowDown className="text-base text-skin-base text-opacity-40" />
    ) : (
      <IoIosArrowUp className="text-base text-skin-base text-opacity-40" />
    );
  }



  console.log(filters.Types, 'filterBlock>TYYY')



  return (
    <>

<TypeLight
                  headeDropdownClass={"header__dropdown_wrap_typelught"}
                  array={filters.Types || []}
                  onChangeCategory={handleSetTypeProduct}
                  lightCategory={chandelierTypes}
                  />
      {/* <li
        onClick={onClick}
        className={cn(
          'flex justify-between items-center transition text-sm md:text-15px',
          { 'bg-skin-two': isOpen },
          className
        )}
      >
        <button
          className={cn(
            'flex items-center w-full text-start cursor-pointer group',
            { 'py-3 xl:py-3.5 2xl:py-2.5 3xl:py-3': depth > 0 }
          )}
        // onClick={handleChange}
        >
          {icon && (
            <div className="inline-flex flex-shrink-0 2xl:w-12 2xl:h-12 3xl:w-auto 3xl:h-auto me-2.5 md:me-4 2xl:me-3 3xl:me-4">
              <Image
                src={icon ?? '/assets/placeholder/category-small.svg'}
                alt={name || t('text-category-thumbnail')}
                width={40}
                height={40}
              />
            </div>
          )}
          <span className="text-skin-base capitalize py-0.5">{name}</span>
          {depth > 0 && (
            <span
              className={`w-[22px] h-[22px] text-13px flex items-center justify-center border-2 border-skin-four rounded-full ms-auto transition duration-500 ease-in-out group-hover:border-skin-yellow text-skin-inverted ${selectedCategories.includes(slug) &&
                'border-skin-yellow bg-skin-yellow'
                }`}
            >
              {selectedCategories.includes(slug) && <FaCheck />}
            </span>
          )}
          {expandIcon && <span className="ms-auto">{expandIcon}</span>}
        </button>
      </li> */}
      {/* {Array.isArray(items) && isOpen? (
        <li>
          <ul key="content" className="text-xs px-4">
            {items?.map((currentItem: any) => {
              const childDepth = depth + 1;
              return (
                <CategoryFilterMenuItem
                  key={`${currentItem.name}${currentItem.slug}`}
                  item={currentItem}
                  depth={childDepth}
                  className="px-0 border-t border-skin-base first:border-t-0 mx-[3px] bg-transparent"
                />
              );
            })}
          </ul>
        </li>
      ) : null} */}
    </>
  );
}

function CategoryFilterMenu({ items, className }: any) {
  return (
    <ul className={cn(className)}>
      {items?.map((item: any) => (
        <CategoryFilterMenuItem
          key={`${item.slug}-key-${item.id}`}
          item={item}
        />
      ))}
    </ul>
  );
}

export default CategoryFilterMenu;
