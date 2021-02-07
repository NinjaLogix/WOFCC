import { Home } from '../pages/Home';
import { AboutUs, Credits, Ministries, Services } from '../pages';

export const _routes = [
  { target: '/', title: 'Home', component: Home },
  { target: '/about', title: 'About', component: AboutUs },
  { target: '/ministries', title: 'Ministries', component: Ministries },
  { target: '/services', title: 'Services', component: Services },
  { target: '/credits', title: 'Credits', component: Credits },
  // { target: '/events', title: 'Events', component: Events },
  // { target: '/gallery/:id', title: 'Gallery', component: Gallery },
];
