import { CNFlag } from '@/components/iconsCode/language/CNFlag';
import { DEFlag } from '@/components/iconsCode/language/DEFlag';
import { ILFlag } from '@/components/iconsCode/language/ILFlag';
import { SAFlag } from '@/components/iconsCode/language/SAFlag';
import { USFlag } from '@/components/iconsCode/language/USFlag';

export const siteSettings = {
  name: 'ButterflyLC',
  description: 'Офицальный представитель фабрики ButterflyLC в России',
  author: {
    name: 'ButterflyLC',
    websiteUrl: 'http://butterflylc.ru/Home',
    address: '',
  },
  logo: {
    // url: '/assets/img/Buttlogo.png',
    alt: 'BtterflyLC',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/Collaboration',
        label: 'Сотрудничество',
        // subMenu: [
        //   {
        //     id: 1,
        //     path: '/',
        //     label: 'menu-modern',
        //   },
        //   {
        //     id: 2,
        //     path: '/classic',
        //     label: 'menu-classic',
        //   },
        //   {
        //     id: 3,
        //     path: '/vintage',
        //     label: 'menu-vintage',
        //   },
        //   {
        //     id: 4,
        //     path: '/standard',
        //     label: 'menu-standard',
        //   },
        //   {
        //     id: 5,
        //     path: '/minimal',
        //     label: 'menu-minimal',
        //   },
        //   {
        //     id: 6,
        //     path: '/trendy',
        //     label: 'menu-trendy',
        //   },
        //   {
        //     id: 7,
        //     path: '/elegant',
        //     label: 'menu-elegant',
        //   },
        // ],
      },
      {
        id: 2,
        path: '/Chapter',
        label: 'Распродажа',
        // subMenu: [
        //   {
        //     id: 1,
        //     path: '/search',
        //     label: 'menu-fresh-vegetables',
        //   },
        //   {
        //     id: 2,
        //     path: '/search',
        //     label: 'menu-diet-nutrition',
        //   },
        //   {
        //     id: 3,
        //     path: '/search',
        //     label: 'menu-healthy-foods',
        //   },
        //   {
        //     id: 4,
        //     path: '/search',
        //     label: 'menu-grocery-items',
        //   },
        //   {
        //     id: 5,
        //     path: '/search',
        //     label: 'menu-beaf-steak',
        //   },
        // ],
      },
      {
        id: 3,
        path: '/Factory',
        label: 'Производство',
        // subMenu: [
        //   {
        //     id: 1,
        //     path: '/search',
        //     label: 'menu-vegetarian',
        //   },
        //   {
        //     id: 2,
        //     path: '/search',
        //     label: 'menu-kakogenic',
        //   },
        //   {
        //     id: 3,
        //     path: '/search',
        //     label: 'menu-mediterranean',
        //   },
        //   {
        //     id: 4,
        //     path: '/search',
        //     label: 'menu-organic',
        //   },
        // ],
      },
      {
        id: 4,
        path: '/Contacts',
        label: 'Контакты',
      },
      // {
      //   id: 5,
      //   path: '/shops/',
      //   label: 'menu-shops',
      // },
      // {
      //   id: 6,
      //   path: '/',
      //   label: 'menu-pages',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-users',
      //       subMenu: [
      //         {
      //           id: 1,
      //           path: '/my-account/account-settings',
      //           label: 'menu-my-account',
      //         },
      //         {
      //           id: 2,
      //           path: '/signin',
      //           label: 'menu-sign-in',
      //         },
      //         {
      //           id: 3,
      //           path: '/signup',
      //           label: 'menu-sign-up',
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       path: '/faq',
      //       label: 'menu-faq',
      //     },
      //     {
      //       id: 3,
      //       path: '/about-us',
      //       label: 'menu-about-us',
      //     },
      //     {
      //       id: 4,
      //       path: '/Privacy',
      //       label: 'menu-privacy-policy',
      //     },
      //     {
      //       id: 5,
      //       path: '/terms',
      //       label: 'menu-terms-condition',
      //     },
      //     {
      //       id: 6,
      //       path: '/contact-us',
      //       label: 'menu-contact-us',
      //     },
      //     {
      //       id: 7,
      //       path: '/checkout',
      //       label: 'menu-checkout',
      //     },
      //     {
      //       id: 8,
      //       path: '/404',
      //       label: 'menu-404',
      //     },
      //   ],
      // },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <DEFlag />,
      },
    ],
  },
};
