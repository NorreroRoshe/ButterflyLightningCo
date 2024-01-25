import cls from './SectionHero.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // путь к slick.css
import 'slick-carousel/slick/slick-theme.css'; // путь к slick-theme.css
import { BrandDesc } from './BrandDesc/BrandDesc';

export const SectionHero: React.FC = () => {

  const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_next}`} onClick={onClick} />;
  };

  const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_prev}`} onClick={onClick} />;
  };
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    // centerMode: true,
    // centerPadding: '205px',
  };

  return (
    <section className={cls.section_hero}>
      <h1 className={cls.visually_hidden}>ButterflyLC</h1>
      <div className={`${cls.hero__container}`}>
        <Slider className={cls.main_slider} {...sliderSettings}>
          <div className={`${cls.hero_slider} ${cls.slider1}`}>
            <div className={cls.container}>
              <h2 className={cls.slider_header}>Прикоснитесь к прекрасномуw</h2>
            </div>
          </div>
          <div className={`${cls.hero_slider} ${cls.slider2}`}>
            <div className={cls.container}>
              <h2 className={cls.slider_header}>Новинки нашего магазина</h2>
            </div>
          </div>
          <div className={`${cls.hero_slider} ${cls.slider3}`}>
            <div className={cls.container}>
              <h2 className={cls.slider_header}>Что-то на фоппа-педретском</h2>
            </div>
          </div>
        </Slider>
        <BrandDesc />
      </div>
    </section>
  );
};

export default SectionHero;
