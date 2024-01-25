import React from 'react';
import cls from './Contacts.module.scss';

export const Contacts: React.FC = () => {
  return (
    <section className={cls.section_constact}>
      <div className={`${cls.contacts_container} ${cls.container}`}>
        <h2 className={cls.constact_header}>Контакты</h2>
        <div className={cls.contact_online}>
          <div className={cls.online_timeline}>
            <h3 className={cls.timeline_header}>Режим работы интернет-магазина:</h3>
            <p className={cls.timeline_time}>ПН-ВС КРУГЛОСУТОЧНО</p>
          </div>
          <div className={cls.online_connection}>
            <h3 className={cls.connection_header}>Телефоны и почта:</h3>
            <div className={cls.connection_tel}>
              <a href="tel:+79037303001" className={cls.connection_tel_number}>
                +7(903)-730-3001
              </a>
            </div>
            <div className={cls.connection_mail}>
              <div className={cls.connection_mail_client}>
                <a href="" className={cls.mail_client_telink}>
                info@butterflylc.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
