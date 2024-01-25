import cls from './Сollaboration.module.scss';
import sotrud from '@/assets/img/img/sotrud.jpg';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import {useRouter} from 'next/router'

const Collaboration: React.FC = () => {
  const page = useRouter();
  return (
    <div className={cls.section_collaboration}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div>
            <div className={cls.content_title}>Сотрудничество с ButterflyLC это...</div>
            <div className={cls.content_desc}>
              ButterflyLC приглашает к сотрудничеству ритейлеров, дилеров, интернет-дилеров, а также
              региональных партнеров.&nbsp;ButterflyLC является крупным поставщиком светильников,
              аксессуаров для интерьера. <br />
            </div>
            <img
              width="100%"
              src="/upload/medialibrary/65c/65c01430fbd9c34ca5ca404be3a50814.jpg"
              height="1"
            />
            <br />
            <br />
            <div>
              <span
                style={{
                  fontSize: '26px',
                  textAlign: 'center',
                  display: 'block',
                }}>
                Для дизайнеров, ритейлеров, интернет-дилеров и региональных партнеров:
                <br />
              </span>
              <br />
              <br />
              <br />
              <table width="100%">
                <tbody>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      1.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        ЦЕНА-КАЧЕСТВО
                      </b>
                      :<br />
                      долгосрочное партнерство и объем заказов у фабрик-производителей позволяют нам
                      предложить вам лучшие условия сотрудничества
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      2.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        СТАБИЛЬНОСТЬ
                      </b>
                      :<br />
                      ButterflyLC уже более 15 лет на рынке
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      3.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        РАБОТА НАПРЯМУЮ С ПРОИЗВОДИТЕЛЕМ
                      </b>
                      :<br />
                      Сотрудничество с нами, подразумевает внесение корректировок в ту или иную
                      модель светильника как из наличия, так и под заказ
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      4.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        Активность
                      </b>
                      :<br />
                      Мы постоянно участвуем в выставках и обновляем свой ассортимент в
                      соответствиеи с текущими трендами и модой в сфере дизайна
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      5.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        Салоны в Москве
                      </b>
                      :<br />
                      Наш ассортимент представлен в самых крупных торговых комплексах Москвы и
                      Московской области
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: '1px solid #805856',
                    }}>
                    <td width="5%" style={{ fontSize: '40px' }}>
                      6.
                    </td>
                    <td
                      width="95%"
                      style={{
                        paddingBottom: '10px',
                        paddingTop: '10px',
                      }}>
                      <b
                        style={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          fontFamily: 'sans-serif',
                        }}>
                        СКЛАДСКАЯ ПРОГРАММА
                      </b>
                      :<br />
                      большой ассортимент товаров в&nbsp;наличии на складе
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <img
              // width="100%"
              alt="Салон ButterflyLC на Новой Риге"
              src={sotrud.src}
            // title="Салон ButterflyLC на Новой Риге Аутлет Виллидж"
            />
            <br />
            <i>Салон ButterflyLC на Новой Риге</i>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className={cls.collab_subscribe}>
        <ReturnForm pageMess={page.pathname}/>
      </div>
    </div>
  );
};

export default Collaboration;
