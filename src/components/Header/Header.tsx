import React from 'react';
import styles from './header.module.scss';
import style from '../Button/button.module.scss';
import { CatalogIcon } from '../../assets/constants';
import Search from './Search/Search';
import ButtonNav from '../Button/Button';
import buttonData from '../../constants/ButtonConstants';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
  const isMaxWidth1070 = useMediaQuery({
    query: '(max-width: 1070px)',
  });
  return (
    <>
      <div className={styles.headerTop}>
        <h1 className={styles.headerTopLogo}>GadgetHouse</h1>
      </div>
      <div className={styles.headerBottom}>
        {!isMaxWidth1070 && (
          <div className={styles.headerBottomCatalog}>
            <img src={CatalogIcon} />
            <h1>Catalog</h1>
          </div>
        )}
        {isMaxWidth1070 && <BurgerMenu />}
        <Search />

        <div className={styles.headerBottomButtons}>
          {isMaxWidth1070 ? (
            <button className={style.headerButton}>
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 9.73543V6.70393C16.6934 3.8602 14.3438 1.59989 11.5 1.65343C8.65613 1.59989 6.30661 3.8602 6.25 6.70393V9.73393"
                  stroke="#1C1817"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.999975 20.5575C0.943125 23.6967 3.44073 26.2884 6.57997 26.3475H16.4199C19.5593 26.2884 22.0568 23.6967 21.9999 20.5575L21.3444 13.5255C21.1781 10.8744 19.323 8.63226 16.7499 7.97244C16.2138 7.81647 15.6584 7.73669 15.0999 7.73544H7.89997C7.34158 7.73669 6.78615 7.81647 6.24998 7.97244C3.67857 8.63247 1.82442 10.873 1.65698 13.5225L0.999975 20.5575Z"
                  stroke="#1C1817"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          ) : (
            buttonData.map((item) => {
              return (
                <ButtonNav
                  key={item.id}
                  icon={item.img}
                  hoverImg={item.hoverImg}
                  clickImg={item.clickImg}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
