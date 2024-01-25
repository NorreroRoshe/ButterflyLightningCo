import React, { useEffect, FC } from 'react';
import { isAuthSelector } from "../Store/auth/auth.selector";
import { useAppDispatch } from "@/Store/store";
import Header from './Header/Header';
import { Footer } from './Footer/index';
import ScrollToTop from 'react-scroll-to-top';
import { useGetUserCartMutation } from '../Store/cart/cart.api';
import { useGetUserFavoritesMutation } from '../Store/favorites/favorites.api';
import { useAppSelector } from '@/Store/store';
import { useRefreshTokenMutation } from '@/Store/auth/auth.api';
import {
  clearCart
} from "../Store/cart/cart.slice";
import {
  clearItems
} from "../Store/favorites/favorites.slice";
// export const SearchContext = React.createContext('');              //Так работает контекст

interface ILayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<ILayoutProps> = ({ children }) => {


  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(isAuthSelector);


  const [getUserCart] = useGetUserCartMutation();
  const [getUserFavorites] = useGetUserFavoritesMutation();
  
  const [refresh] = useRefreshTokenMutation();
  const state = useAppSelector((state) => state);

  useEffect(() => {
    
    dispatch(clearItems());
    
    //del cart
    dispatch(clearCart());
    // localStorage.removeItem("cart");

if (isAuth) {
  getUserCart();
  getUserFavorites();
}
  }, [isAuth]);

  useEffect(() => {
    refresh();
  }, []);

  // useEffect(() => {            //когда неавторизованные то приходят сильно много ошибок в нетворке
  //   const interval = setInterval(() => {
  //     if(+new Date() > +localStorage.getItem("access_token_expires") || 0){
  //     refresh()
  //   }}, 1000
  //   ) 
  //   return () => clearInterval(interval)
  // }, [])

  
  useEffect(() => {}, [state]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <ScrollToTop
        style={{
          backgroundColor: '#424246',
          borderRadius: '50%',
          height: '65px',
          width: '65px',
          zIndex: 50,
        }}
        className="scrollCustom"
        smooth
        top={250}
        svgPath={''}
      />
    </div>
  );
};

export default MainLayout;
