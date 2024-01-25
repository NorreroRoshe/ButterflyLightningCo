import React from 'react';
import cls from './Factory.module.scss';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import {useRouter} from 'next/router'


const Factory = () => {
  const page = useRouter();
  return (
    <div className={cls.section_collaboration}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div>
            <div className={cls.content_title}>Производство</div>
            <img
              width="100%"
              height="500px"
              alt="Салон ButterflyLC на Новой Риге"
              src="https://img.freepik.com/free-photo/beautiful-light-lamp-bulb-decoration-interior-of-room_74190-7929.jpg?w=1380&t=st=1688399191~exp=1688399791~hmac=30a6aec1c13b3f36fab03f4f6d4150643cb103e4dc53e915b991593c76afb882"
              title="Салон ButterflyLC на Новой Риге Аутлет Виллидж"
            />
            <br />
            <br />
            <br />
            <div>
              <span className={cls.about_desc}>
                Компания Butterfly LC - это профессиональный производитель люстр и светильников по
                индивидуальному дизайну, который внесение изменений в базовые модели, чтобы
                создавать уникальные, удивительные и функциональные светильники для своих клиентов.
              </span>
              <br />
              <br />
              <br />
              <span className={cls.about_desc}>
                Наша компания имеет большой опыт в производстве современных, классических и
                эксклюзивных люстр, которые украсят любой интерьер. Мы не только производим
                светильники, но и предоставляем услуги по разработке индивидуальных дизайнов, с
                учетом потребностей и пожеланий каждого клиента.
              </span>
              <br />
              <br />
              <br />
              Команда профессионалов Butterfly LC использует только высококачественные материалы и
              современное оборудование для создания своих люстр и светильников. Вся продукция
              тщательно проверяется перед отправкой клиентам, чтобы гарантировать высокое качество и
              надежность продукции.
              <span className={cls.about_desc}>
                Наша компания готова воплотить любую идею в жизнь и создать тот светильник, который
                будет идеально соответствовать вашему интерьеру. Оставьте заявку на нашем сайте или
                свяжитесь с нами по телефону, и мы с удовольствием поможем вам с выбором и
                изготовлением светильников.
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

export default Factory;
