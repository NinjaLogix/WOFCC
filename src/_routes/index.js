import { Home } from "../pages/Home";
import { AboutUs, ContactUs, Credits, Directions, Events, Ministries, Services } from "../pages";
import { Gallery } from "../component/gallery/Gallery";

export const _routes = [
  //updated
  { target: '/', title: 'Home', component: Home },
  { target: '/about', title: 'About', component: AboutUs },
  { target: '/contact', title: 'Contact', component: ContactUs },

  //existing
  { target: '/events', title: 'Events', component: Events },
  { target: '/credits', title: 'Credits', component: Credits },
  { target: '/gallery/:id', title: 'Gallery', component: Gallery },
];