import React from 'react';
import emptyFavImg from '@/assets/img/bookmark-empty.svg';
import cls from '@/pages/Cart/Cart.module.scss';
import Image from 'next/image';

const FavEmpty: React.FC = () => {
  return (
    <>
      <div className={`${cls.container} ${cls.container__cart}`} style={{ marginTop: '190px' }}>
        <div className={`${cls.cart} ${cls.cart__empty}`}>
          <h2>
            В избранных пусто
          </h2>
          <p>
            Вероятней всего, вы ещё не добавили стильный светильник в избранные : )
            <br />
          </p>
          <Image src={emptyFavImg} alt="Empty fav" style={{marginTop: '5px'}}/>
        </div>
      </div>
    </>
  );
};

export default FavEmpty;
