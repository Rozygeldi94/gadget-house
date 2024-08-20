import React from 'react';
import { StatusSearch } from '../types/StatusSearch';

export interface SliderButtonProps {
  handlePrevClick: (event: React.MouseEvent) => void;
  handleNextClick: (event: React.MouseEvent) => void;
  isFirstSlick: any;
  isLastSlick: any;
}

export interface SearchFieldProps {
  status: StatusSearch;
  onHover: (
    status: StatusSearch | ((prev: StatusSearch) => StatusSearch),
  ) => void;
}

export interface ButtonProps {
  icon: string;
  clickImg: string;
  hoverImg: string;
}

export interface StatusButtonProps {
  width: string;
  height: string;
  color: string;
  style?: React.CSSProperties;
}

export interface ISmartphone {
  id: number;
  title: string;
  img: string;
  likeIcon: string;
  likeIconClick: string;
  colorPalette?: string;
  basketIcon: string;
  basketIconClick: string;
  basketIconHover: string;
  price: string;
}

export interface IAccessory extends ISmartphone {
  hasAnotherColor?: boolean | string[];
  isLiked?: boolean;
  rate?: number;
  code?: string;
}
