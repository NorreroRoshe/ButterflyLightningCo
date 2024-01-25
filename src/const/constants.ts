import { StaticImageData } from "next/image";
import bra from "../assets/img/bravormain.png";

// 0 = NONE
//
// 1 = CHANDELIER
//
// 2 = SCONCE
//
// 3 = FLOOR_LAMP
//
// 4 = TABLE_LAMP
//
// 5 = PENDANT_LIGHT
//
// 6 = STREET_LIGHTING
//
// 7 = ACCESSORY

export interface ITypeLight {
      name?: string;
      ind?: string;
      eng?: string;
      img?: string | StaticImageData;
}

export const lightCategory: ITypeLight[] = [
      {
            name: "Люстры",
            ind: '1',
            eng: "Types=1",
            img: "https://butterflylc.store/image/cache/catalog/Products/105-600b+400s%20br%20off-350x281.jpg",
      },
      {
            name: "Бра",
            ind: '2',
            eng: "Types=2",
            img: 'https://butterflylc.store/image/cache/catalog/Products/1021-2%20si%20off-1200x900.jpg',
      },
      {
            name: "Торшеры",
            ind: '3',
            eng: "Types=3",
            img: "https://butterflylc.store/image/cache/catalog/Products/102-3f%20gold%20off-350x281.jpg",
      },
      {
            name: "Настольные лампы",
            ind: '4',
            eng: "Types=4",
            img: "https://butterflylc.store/image/cache/catalog/Products/9867-1t%20ni%20off-350x281.jpg",
      },
      {
            name: "Подвесные",
            ind: '5',
            eng: "Types=5",
            img: "https://butterflylc.store/image/cache/catalog/Products/8106-1L%20br%20off-350x281.jpg",
      },
];

export const chandelierTypes: ITypeLight[] = [
      {
            name: "Большие люстры",
            ind: '1',
            eng: "LARGE",
      },
      {
            name: "С хрусталями",
            ind: '2',
            eng: "CRYSTAL",
      },
      {
            name: "С абажурами",
            ind: '3',
            eng: "LAMPSHADE",
      },
      {
            name: "Подвесные",
            ind: '4',
            eng: "SUSPENDED",
      },
      {
            name: "Потолочные",
            ind: '5',
            eng: "CEILING",
      },
      {
            name: "Овальные",
            ind: '6',
            eng: "ELLIPTICAL",
      },
];
