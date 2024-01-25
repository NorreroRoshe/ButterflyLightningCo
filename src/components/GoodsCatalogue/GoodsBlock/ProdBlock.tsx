import React, { useState } from 'react';
import Link from 'next/link';
import cls from '../GoodsCatalogue.module.scss';
import { cartProductCountByIdSelector } from '../../../Store/cart/cart.selectors';
import { Product } from '../../../Store/product/product.types';
import { useAppSelector } from '../../../Store/store';
import { useCart } from '../../../hooks/useCart';
import { useFavorite } from '../../../hooks/useFavorite';
import { selectFavoritesItemById } from '../../../Store/favorites/favorites.selectors';
import { AddToCart } from '@/components/product/add-to-cart';
import useWindowSize from '@/utils/use-window-size';
import Counter from '@/components/ui/counter';
import { useModalAction } from '@/components/common/modal/modal.context';

type ProdBlockProps = {
  product: Product;
};

export const ProdBlock: React.FC<ProdBlockProps> = ({ product }) => {
  const imageUrl = product.urls ? product.urls[0] : '';
  const isFavorite = useAppSelector((state) => selectFavoritesItemById(state, product.id));
  const { addToFavorite, deleteFromFavorite } = useFavorite();
  const { openModal } = useModalAction();

  const cartCount = useAppSelector((state) => cartProductCountByIdSelector(product.id, state));

  const handleChangeFav = () => {
    isFavorite ? deleteFromFavorite(product.id) : addToFavorite(product.id);
  };

  const handlePopupView = () => {
    openModal('PRODUCT_VIEW', { productId: product.id });
  }
  

  return (
    <li className={cls.allproduct_goods_item}>
      <Link key={product.id} href={`/Product/${product.id}`} className={cls.allproduct_goods_link}>
        <span className={cls.allproduct_goods_box}>
          <img src={imageUrl} alt="" className={cls.allproduct_goods_img} />
        </span>
        {!!product.discount && (
          <span className={cls.allproduct_product_label_ring}>
            <span className={cls.allproduct_product_label_ring_desc}>
              {/* скидка */}
              <span>-{product.discount}%</span>
            </span>
            <span className={cls.allproduct_product_label_ring_icons}>
              {/* <svg className={cls.allproduct_product_label_ring_img} viewBox="0 0 60 60">
            <path
              d="M52.2714 49.4191C52.2714 66.9775 27.6642 54.1247 11.5274 54.1247C-4.6095 54.1247 1.3089 38.3515 4.0198 25.0078C6.9263 6.5789 26.481 0.4993 45.4543 0.4992C71.6937 0.4992 52.2714 31.8607 52.2714 49.4191Z"
              // fill="#cfe2f3"
              fill="#bfe3f8"></path>
          </svg> */}
            </span>
          </span>
        )}
        <button
          onClick={handleChangeFav}
          className={`${cls.cartlike__btn2} ${isFavorite ? cls.cartlike__btn2_active : ''}`}
        />
        <span className={cls.allproduct_goods_nal}>
          <span className={cls.goods_nal_desc}>В наличии: {product.availability} шт</span>
        </span>
        <p className={cls.allproduct_goods_artikul}>{product.name} <span className={cls.allproduct_goods_artikul_db}>{product.article}</span></p>
        <p className={`${cls.allproduct_goods_artikul} ${cls.allproduct_goods_artikul_dn}`}>Арт. {product.article}</p>
        {/* <h4 className={cls.allproduct_goods_header}>{product.name}</h4> */}
      </Link>
      <div className={cls.allproduct_goods_activity}>
        <p className={cls.goods_activity_price}>{product.price} ₽</p>

        <div className={cls.goods_activity_cartlike}>
          {/* <button
            disabled={isLoading}
            onClick={handleAddToCart}
            className={`${cls.cartlike__btn1} ${cartCount ? cls.cartlike__btn1_active : ''}`}
          />
          <i>{cartCount > 0 ? cartCount : ''}</i> */}
            <AddToCart cartCount={cartCount} product={product} />
          <button
            onClick={handleChangeFav}
            className={`${cls.cartlike__btn2} ${isFavorite ? cls.cartlike__btn2_active : ''}`}
          />
          
      <button
       key={product.id}
        // href={`/Product/${product.id}`}
        // href={`/`}
            onClick={handlePopupView}
            className={`${cls.cartlike__btn3} ${isFavorite ? cls.cartlike__btn3_active : ''}`}
        ></button>
        </div>
      </div>
    </li>
  );
};
