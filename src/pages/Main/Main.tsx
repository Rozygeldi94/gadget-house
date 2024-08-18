import {
  Banner,
  Header,
  SliderNav,
  Carousels,
  ProductCard,
  LaptopCard,
  BrandCard,
  Footer,
  Benefits,
} from '@/components/components';

const brandConatinerResponsiveSettings = [
  {
    breakpoint: 3200,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1420,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 450,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <SliderNav text="Smartphone" link="/smartphones" />
      <Carousels children={<ProductCard />} />

      <Carousels
        children={<BrandCard />}
        className="brandsCarousel"
        responsive={brandConatinerResponsiveSettings}
      />

      <SliderNav text="Laptop" link="/laptops" />
      <Carousels children={<LaptopCard />} />

      <SliderNav text="Previously reviewed offers" link="/viewed" />
      <Carousels children={<ProductCard />} />
      <Benefits />
      <Footer />
    </div>
  );
}
