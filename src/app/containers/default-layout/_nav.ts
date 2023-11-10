import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Головна',
    url: './',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Мої магазини',
    url: '/shops',
    iconComponent: { name: 'cil-cart' }
  },
  {
    name: 'Мій гаманець',
    url: '/wallet',
    iconComponent: { name: 'cil-wallet' },
    badge: {
      color: 'success',
      text: '999₴'
    }
  },
];
