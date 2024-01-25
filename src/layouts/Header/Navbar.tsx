import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../Store/store";
import cls from "./Header.module.scss";
import { clearFilters, setIsSale } from "../../Store/product/product.slice";

function Navbar() {

  const dispatch = useAppDispatch();

  const handleSetSale = () => {
    dispatch(clearFilters());
    dispatch(setIsSale(true));
  };



  return (
    <div className={cls.new_container}>
      <div className={cls.glav_menu__items}>
        <Link href="/Collaboration" className={cls.glav_menu__item}>
          Сотрудничество
        </Link>
        <span className={cls.glav_menu__item_text}>•</span>
        <Link
          // href="/Chapter"
          href={`/Chapter/?IsSale=true`}
          onClick={handleSetSale}
          className={`${cls.glav_menu__item} ${cls.glav_menu__item_outlet}`}
        >
          Распродажа
        </Link>
        <span className={cls.glav_menu__item_text}>•</span>
        <Link href="/Factory" className={cls.glav_menu__item}>
          Производство
        </Link>
        <span className={cls.glav_menu__item_text}>•</span>
        <Link href="/Contacts" className={cls.glav_menu__item}>
          Контакты
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
