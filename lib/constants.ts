export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'ShopHubb';
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || 'Spend less, enjoy more.';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'ShopHubb is a platform that helps you find the best deals on the products you love.';
export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9);

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35
);

export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGT ||
  `Copyright © 2025 ${APP_NAME}. All rights reserved`;

export const AVAILABLE_PAYMENT_METHODS = [
  {
    name: 'PayPal',
    commission: 0,
    isDefault: true,
  },
  {
    name: 'Stripe',
    commission: 0,
    isDefault: false,
  },
  {
    name: 'Cash On Delivery',
    commission: 0,
    isDefault: false,
  },
];

export const DEFAULT_PAYMENT_METHODS =
  process.env.DEFAULT_PAYMENT_METHODS || 'PayPal';

export const AVAILABLE_DELIVERY_DATES = [
  {
    name: 'Tomorrow',
    daysToDeliver: 1,
    shippingPrice: 12.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 3 days',
    daysToDeliver: 3,
    shippingPrice: 6.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 5 days',
    daysToDeliver: 5,
    shippingPrice: 4.9,
    freeShippingMinPrice: 40,
  },
];
