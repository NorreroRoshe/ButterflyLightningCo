import React from 'react'
import cls from './Designer.module.scss'
import sotrud from '../../assets/img/cotrud-photo.jpg'
import Image from 'next/image'

export const Designer = () => {
  return (
    <section className={cls.section_collaboration}>
      <div className={`${cls.collaboration_container} ${cls.container}`}>
        <h2 className={cls.collaboration_header}>
          Сотрудничество с представителями сферы дизайна и интерьера
        </h2>
        <div className={cls.collaboration_photo}>
          <Image src={sotrud} alt="" className={cls.collaboration_img} />
        </div>
        <div className={cls.collaboration_desc}>
          <h2 className={cls.collaboration_header}>
            Благодарим за интерес, проявленный к нашей компании!
          </h2>
          <p className={cls.desc_txt}>Компания <b>ButterflyLC</b> приглашает к взаимовыгодному сотрудничеству архитекторов, дизайнеров, декораторов, представителей студий дизайна и интерьера, а также сектора HoReCa (отели, бары, рестораны и кафе).</p>
          <p className={cls.desc_txt}>Мы приготовили для Вас стильную дизайнерскую мебель, освещение и уникальные предметы интерьера по оптовым ценам для создания стильного и оригинального дизайна кафе, бара, ресторана, офиса, магазина или шоу-рума.</p>
          <p className={cls.desc_txt}>аша компания ценит долгосрочные и взаимовыгодные отношения, поэтому предоставляет партнерам <b>специальные предложения, скидки и условия работы</b>. Для предоставлении Вам подробной информации необходимо написать запрос нам <span>на эл.почту <a href="info@butterflylc.ru">info@butterflylc.ru</a> прикрепив ссылку на сайт/соц.сети/диплом.</span></p>
          <p className={cls.desc_txt}>В случае, если Ваш Клиент хочет <b>самостоятельно оформить заказ</b>, Вы можете закрепить своего Клиента за собой <b>предварительно уведомив</b> об этом менеджера или указав всю информацию на общую эл.почту</p>
        </div>
        <h4 className={cls.collaboration_collab_header}>
          По вопросам сотрудничества обращайтесь:
        </h4>
        <table>
          <tbody>
            <tr><td>E-Mail</td><td><a className={cls.cooperation_content} href="mailto:info@butterflylc.ru">info@butterflylc.ru</a></td></tr>
            <tr><td>Телефон</td><td><a className={cls.cooperation_content} href="tel:+79037303001">+7(903)730-30-01</a></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Designer;