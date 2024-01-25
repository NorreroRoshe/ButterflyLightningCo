import React, { useEffect } from 'react';
import cls from './Favourites.module.scss';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { selectFavorites, selectFavoritesIds } from '../../Store/favorites/favorites.selectors';
import { useFavorite } from '../../hooks/useFavorite';
import { useGetDetProductMutation } from '../../Store/product/product.api';
import { getFavorite } from '../../Store/favorites/favorites.slice';
import { useCart } from '../../hooks/useCart';
import Link from 'next/link';
import FavEmpty from './empty-fav';

export const Favourites: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const ids = useAppSelector(selectFavoritesIds);
  const [getDetProduct, {}] = useGetDetProductMutation();
  const { addToFavorite, deleteFromFavorite } = useFavorite();
  const { addToCart } = useCart();

  const handleAddToCart = (id: string) => {
    addToCart(id);
  };

  useEffect(() => {
    ids &&
      ids.map(
        (id) =>
          !favorites.map((item) => item?.id).includes(id) &&
          getDetProduct({ ProductId: id }).then((pld) => {
            //TODO fix
            //@ts-ignore
            dispatch(getFavorite(pld.data));
          }),
      );
  }, [ids]);

  if (ids.length === 0) {
    return <FavEmpty />;
  }

  // (favorites, 'ss')

  return (
    <section className={cls.favourites}>
      <div className={`${cls.favourites_container} ${cls.container}`}>
        <div className={cls.favourites_header}>
          <h1 className={cls.header_title}>Избранное</h1>
        </div>
        <div className={cls.favourites_comparison}>
          <div className={cls.favourites_product}>
            <div className={cls.product_list}>
              <div className={cls.product_item}>
                <div
                  className={cls.item_f}
                  style={{
                    transform: 'translate3d(0px, 0px, 0px)',
                    transition: 'transform 0s cubic-bezier(0.1, 0, 0.25, 1) 0s',
                  }}>
                  {favorites.map((favorite) => (
                    <div key={favorite?.id} className={cls.item_unit}>
                      <div className={cls.item_unit_wrapp}>
                        <span
                          onClick={() => deleteFromFavorite(favorite?.id)}
                          className={cls.unit_wrapp_close}></span>
                        {/* {favorite?.files.map((file) => ( */}
                          <Link href={`/Product/${favorite?.id}`}>
                            <img src={favorite?.files[0].url} alt={favorite?.files[0].name} className={cls.photo_wrapp_img} />
                          </Link>
                        {/* ))} */}
                        <div className={cls.item_unit_title}>
                          {favorite?.name} {favorite?.article}
                        </div>
                        <div className={cls.item_unit_prices}>
                          <div className={cls.item_unit_prices_box}>
                            <span className={cls.prices_price}>
                              {favorite?.price - (favorite?.price * favorite?.discount) / 100} руб.
                            </span>
                            <span className={cls.prices_discount}>
                              {favorite?.price}
                              руб.
                            </span>
                          </div>

                          <div className={cls.prices_procent}>
                            <div className={cls.procent_number}>-{favorite?.discount}%</div>
                          </div>
                        </div>
                        <div
                          onClick={() => handleAddToCart(favorite?.id)}
                          className={cls.item_unit_button}>
                          Купить
                        </div>
                        <div className={cls.item_unit_data}>
                          <div className={cls.unit_data_item}>
                            <span>Диаметр:</span>
                            {favorite?.diameter} см
                          </div>
                          <div className={cls.unit_data_item}>
                            <span>Высота:</span>
                            {favorite?.height} см
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
