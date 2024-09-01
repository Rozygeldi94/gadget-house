import styles from './header.module.scss';
import { BurgerMenuIcon, CatalogIcon, Vector } from '@/assets/constants';
import Search from './Search/Search';
import ButtonNav from '../Button/Button';
import buttonData from '@/constants/ButtonConstants';
import { useMediaQuery } from 'react-responsive';
import { AppRoute } from '@/enums/Route';
import { Button } from 'antd';
import { useMenuContext } from '@/context/menuContext.ts';


export default function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 1070px)' });

  const { onMenuClose, onMenuOpen, isMenuOpen } = useMenuContext();
  return (
    <header>
      <div className={styles.headerTop}>
        <a href={AppRoute?.ROOT} className={styles.headerTopLogo}>
          GadgetHouse
        </a>
      </div>
      <div className={styles.headerBottom}>
        {isMobile ? (
          <>
            <Button
              className={styles.burgerButton}
              onClick={isMenuOpen ? onMenuClose : onMenuOpen}
              type="text"
            >
              {isMenuOpen ? <img src={Vector} alt="open menu" /> : <img src={BurgerMenuIcon} alt="open menu" />}
            </Button>
          </>
        ) : (
          <div className={styles.headerBottomCatalog}>
            <img src={CatalogIcon} alt="Catalog" />
            <h1>Catalog</h1>
          </div>
        )}
        <Search />
        <div className={styles.headerBottomButtons}>
          {isMobile
            ? buttonData
              .slice(3, 4)
              .map((item) => (
                <div style={{position: 'relative'}}>
                  <ButtonNav
                    key={item.id}
                    icon={item.img}
                    hoverImg={item.hoverImg}
                    clickImg={item.clickImg}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'red',
                    borderRadius: '11px',
                    color: 'white',
                    padding: '2px',
                  }}>13</span>
                </div>

              ))
            : buttonData.map((item) => (
              <ButtonNav
                key={item.id}
                icon={item.img}
                hoverImg={item.hoverImg}
                clickImg={item.clickImg}
              />
            ))}
        </div>
      </div>
    </header>
  );
}
