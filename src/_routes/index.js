import { Home } from "../pages/Home";
import { AboutUs, ContactUs, Credits, Directions, Events, Ministries, Services } from "../pages";
import { Gallery } from "../component/gallery/Gallery";

export const _routes = [
  //updated
  { target: '/', component: Home },
  { target: '/about', component: AboutUs },
  { target: '/contact', component: ContactUs },

  //existing
  { target: '/events', component: Events },
  { target: '/credits', component: Credits },
  { target: '/gallery/:id', component: Gallery },
];