import React from 'react';
import cls from './ColorCheckbox.module.scss';
// import "simplebar";
// import "simplebar/dist/simplebar.css";
import clrs from './colors.module.scss';

// 0 = NONE

// 1 = GOLD

// 2 = BRONZE

// 3 = MAT_SILVER

// 4 = NICKEL

// 5 = WHITE

// 6 = BLACK

// 7 = CLEAR

// 8 = BEJ

interface ColorOption {
  color: string;
  class: string;
}

const colors: ColorOption[] = [
  { color: 'Золотой', class: 'gold' },
  { color: 'Бронзовый', class: 'bronze' },
  { color: 'Сильвер', class: 'matsil' },
  { color: 'Никель', class: 'nickel' },
  { color: 'Белый', class: 'white' },
  { color: 'Черный', class: 'black' },
  { color: 'Прозрачный', class: 'clear' },
  { color: 'Бежевый', class: 'bej' },
];

type TypeColors = {
  array: number[];
  onChangeCategory: (id: number) => void;
};

const Colorcheckbox: React.FC<TypeColors> = ({ array, onChangeCategory }) => {
  return (
    <div className={cls.new}>
      <div className={`${cls.header__dropdown_wrap} ${cls.header__dropdown_wrap_colorcheck}`}>
        <form>
          {colors.map((obj, i) => (
            <div key={i} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === i + 1)}
                id={obj.class}
              />
              <label
                onClick={() => onChangeCategory(i)}
                // className={array.find((type) => type === i + 1) ? obj.class : ''}
                className={`${clrs[obj.class]} ${
                  array.find((type) => type === i + 1) ? obj.class : ''
                }`}
                htmlFor={obj.class}>
                <span>{obj.color}</span>
                {/* <span>(150)</span> */}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Colorcheckbox;
