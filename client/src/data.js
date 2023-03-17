

// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import AboutImg from './assets/img/About.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png'; 
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.jpg';
import Product2Img from './assets/img/products/product-2.jpg';
import Product3Img from './assets/img/products/product-3.jpg';
import Product4Img from './assets/img/products/product-4.jpg';
import Product5Img from './assets/img/products/product-5.jpg';
import Product6Img from './assets/img/products/product-6.jpg';
import Product7Img from './assets/img/products/product-7.jpg';
import Product8Img from './assets/img/products/product-8.jpg';
import Product9Img from './assets/img/products/product-9.jpg';
import Product10Img from './assets/img/products/product-10.jpg';
import Product11Img from './assets/img/products/product-11.jpg';
import Product12Img from './assets/img/products/product-12.jpg';
import Product13Img from './assets/img/products/product-13.jpg';
import Product14Img from './assets/img/products/product-14.jpg';
import Product15Img from './assets/img/products/product-15.jpg';
import Product16Img from './assets/img/products/product-16.jpg';
import Product17Img from './assets/img/products/product-17.jpg';
import Product18Img from './assets/img/products/product-18.jpg';
import Product19Img from './assets/img/products/product-19.jpg';
import Product20Img from './assets/img/products/product-20.jpg';
import Product21Img from './assets/img/products/product-21.jpg';
import Product22Img from './assets/img/products/product-22.jpg';
import Product23Img from './assets/img/products/product-23.jpg';

import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name:'All Products',
   href:'prod'
  },
  {
    name:<i class="fa-solid fa-cart-shopping"></i>,
    href:'cart'
  },

  {
    name: 'Register',
    href: 'Register',
  },
  {
    name: 'Login',
    href: 'Login',
  }
  

];

export const hero = {
  title: 'PERLA HOME',
  subtitle:
    'Find Better Furniture For Better Living',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '5',
    text: 'Year Experience',
  },
  {
    value: '3',
    text: 'Opened in the country',
  },
  {
    value: '10k+',
    text: 'Furniture sold',
  },
  {
    value: '260+',
    text: 'Variant Furniture',
  },
];
export const features = {
  image: <Features1Img />,
  title: 'We Create your home more aesthetic',
  subtitle:
    'YOUR HOME SHOULD TELL A STORY OF WHO YOU ARE & BE A COLLECTION OF WHAT YOU LOVE',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'HOME IS MEMORIES :',
      subtitle:
        'HOME IS WHERE LOVE RESIDES,MEMORIES ARE CREATED,FREINDS AND FAMILY BELONG AND LAUGHTER NEVER ENDS',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'HOME SWEET HOME :',
      subtitle:
        'A HOME IS BUILT WITH LOVE AND DREAMS',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'The Best Furniture Manufacturer of your choice',
    subtitle:
      'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
  },
};

export const about = {
  image: <AboutImg/>,
  title: 'We Create your home more aesthetic',
  subtitle:
    'YOUR HOME SHOULD TELL A STORY OF WHO YOU ARE & BE A COLLECTION OF WHAT YOU LOVE',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'HOME IS MEMORIES :',
      subtitle:
        'HOME IS WHERE LOVE RESIDES,MEMORIES ARE CREATED,FREINDS AND FAMILY BELONG AND LAUGHTER NEVER ENDS',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'HOME SWEET HOME :',
      subtitle:
        'A HOME IS BUILT WITH LOVE AND DREAMS',
    },
  ],
 
};



export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check All',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Living Room',
          price: 5500,
          oldPrice: 5800,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Bathroom',
          price: 4500,
          oldPrice: 4750,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Dining Room',
          price: 2750,
          oldPrice: 2950,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Bedroom',
          price: 6250,
          oldPrice: 6500,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Childs Room',
          price: 3300,
          oldPrice: 3500,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Modern Kitchen',
          price: 6750,
          oldPrice: 6900,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Couch',
          price: 1950,
          oldPrice: 2250,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Empty Dressing Room',
          price: 4250,
          oldPrice: 4500,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Classy Living Room',
          price: 5650,
          oldPrice: 5800,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: ' Gray Dining Room ',
          price: 2750,
          oldPrice: 2900,
        },
        {
          image: <Product11Img />,
          icon: <IoMdAddCircle />,
          name: 'Couch',
          price: 750,
          oldPrice: 950,
        },
        {
          image: <Product12Img />,
          icon: <IoMdAddCircle />,
          name: 'Design Office',
          price: 900,
          oldPrice: 1150,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product13Img />,
          icon: <IoMdAddCircle />,
          name: 'Mirror',
          price: 350,
          oldPrice: 498,
        },
        {
          image: <Product14Img />,
          icon: <IoMdAddCircle />,
          name: 'Living Room Table',
          price: 750,
          oldPrice: 880,
        },
        {
          image: <Product15Img />,
          icon: <IoMdAddCircle />,
          name: 'Classy Living Room Table',
          price: 2750,
          oldPrice: 2950,
        },
        {
          image: <Product16Img />,
          icon: <IoMdAddCircle />,
          name: 'Table Decor',
          price: 250,
          oldPrice: 300,
        },
        {
          image: <Product17Img />,
          icon: <IoMdAddCircle />,
          name: 'Hairdresser',
          price: 750,
          oldPrice: 850,
        },
        {
          image: <Product18Img />,
          icon: <IoMdAddCircle />,
          name: 'Nightstand',
          price: 550,
          oldPrice: 600,
        },
        {
          image: <Product19Img />,
          icon: <IoMdAddCircle />,
          name: 'Table Lamp',
          price: 180,
          oldPrice: 220,
        },
        {
          image: <Product20Img />,
          icon: <IoMdAddCircle />,
          name: 'Lighting',
          price: 150,
          oldPrice: 250,
        },
        {
          image: <Product21Img />,
          icon: <IoMdAddCircle />,
          name: 'Lounge Chair',
          price: 500,
          oldPrice: 630,
        },
        {
          image: <Product22Img />,
          icon: <IoMdAddCircle />,
          name: ' Classy Chair  ',
          price: 300,
          oldPrice: 350,
        },
        {
          image: <Product23Img />,
          icon: <IoMdAddCircle />,
          name: 'Pouf',
          price: 350,
          oldPrice: 420,
        },
        
      ],
    },
    
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
