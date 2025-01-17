import React from 'react';
import { useLocation } from 'react-router-dom';

import { ProductItem } from '@/utils/packages/products';
import { FiltersDesk } from '@/components/Filters/FiltersDesk';
import { Filters } from '@/components/Filters/Filters';
import { SortingDesk } from '@/components/Sort/SortingDesk';
import { Catalog } from '@/components/Catalog/Catalog';

import styles from './page-layout.module.scss';

interface IPageLayoutProps {
  page: ProductItem[];
  totalElements: number;
  currentPage: number;
  totalPages: number;
  minPrice?: number | null;
  maxPrice?: number | null;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({
  page,
  totalElements,
  totalPages,
  currentPage,
}) => {
  const location = useLocation();

  const pathname = location.pathname.slice(1).toLowerCase();
  let category = '';
  pathname.includes('-')
    ? (category = pathname.split('-').join(' '))
    : (category = pathname);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.pageLayout_mobile}>
        <div className={`container ${styles.pageLayout__container}`}>
          <div className={styles.pageLayout__wrapper}>
            <h2 className={styles.pageLayout__title}>{category}</h2>
          </div>

          <Filters />

          <Catalog
            data={page}
            totalElements={totalElements}
            totalPages={totalPages}
            page={currentPage}
          />
        </div>
      </div>

      <div className={styles.pageLayout_tablet}>
        <div className={`container ${styles.pageLayout__container}`}>
          <div className={styles.pageLayout__wrapper}>
            <h2 className={styles.pageLayout__title}>{category}</h2>
            <Filters />
          </div>

          <Catalog
            data={page}
            totalElements={totalElements}
            totalPages={totalPages}
            page={currentPage}
          />
        </div>
      </div>

      <div className={styles.pageLayout_desk}>
        <div className={styles.pageLayout__header}>
          <div className={`container ${styles.pageLayout__container}`}>
            <div className={styles.pageLayout__wrapper}>
              <h2 className={styles.pageLayout__title}>{category}</h2>
              <SortingDesk />
            </div>

            <div className={styles.pageLayout__content}>
              <FiltersDesk />

              {totalElements > 0 ? (
                <Catalog
                  data={page}
                  totalElements={totalElements}
                  totalPages={totalPages}
                  page={currentPage}
                />
              ) : (
                <div>Products not found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
