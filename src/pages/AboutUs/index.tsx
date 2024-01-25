import React from 'react';
import cls from './AboutUs.module.scss';
import sotrud from '@/assets/img/img/onas.jpg';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import {useRouter} from 'next/router'


const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};


const AboutUs = () => {
  const page = useRouter();
  return (
    <div className={cls.section_collaboration}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div>
            <div className={cls.content_title}>О нас</div>
            <img
              width="100%"
              alt="Салон ButterflyLC на Новой Риге"
              src={sotrud.src}
              title="Салон ButterflyLC на Новой Риге Аутлет Виллидж"
            />
            <br />
            <br />
            <br />
            <div>
              <span
                className={cls.about_head}
                style={{
                  fontSize: '26px',
                  textAlign: 'center',
                  display: 'block',
                }}>
                BUTTERFLY LIGHTING COMPANY - ЭТО МЕСТО, ГДЕ ВЫ НАЙДЕТЕ САМЫЕ СОВРЕМЕННЫЕ И СТИЛЬНЫЕ
                ЛЮСТРЫ ДЛЯ ВАШЕГО ДОМА!
                <br />
              </span>
              <span className={cls.about_desc}>
                Наша компания Butterfly LC занимается производством и сборкой качественных
                светильников и люстр. Мы предоставляем широкий выбор моделей, которые соответствуют
                самым современным требованиям дизайна интерьера. Мы производим светильники и люстры
                различных стилей - от классических до современных, так что вы без труда найдете то,
                что идеально подходит к вашему домашнему интерьеру или офису. Мы гарантируем высокое
                качество наших продуктов и используем только самые передовые технологии и материалы
                для производства. Кроме того, наша компания предлагает индивидуальный подход к
                каждому клиенту. Мы готовы помочь вам выбрать наиболее подходящую модель, которая
                соответствует вашим потребностям и бюджету. Мы точно знаем, как важно внимание к
                мелочам. Поэтому, мы стремимся к исключительно высокому качеству нашей работы -
                начиная с производства до монтажа и установки. Наша цель - сделать ваш дом или офис
                красивее, уютнее и комфортнее. Мы уверены, что наша продукция удовлетворит даже
                самых взыскательных клиентов. Свяжитесь с нами уже сейчас, чтобы заказать
                светильники и люстры от Butterfly LC.
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <ReturnForm pageMess={page.pathname}/>
    </div>
  );
};

export default AboutUs;
