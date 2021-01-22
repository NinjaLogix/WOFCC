import { Home } from "../pages/Home";
import { AboutUs, Credits, Events } from "../pages";
import { Gallery } from "../component/gallery/Gallery";

export const _routes = [
  //updated
  { target: '/', title: 'Home', component: Home },
  { target: '/about', title: 'About', component: AboutUs },

  //existing
  { target: '/events', title: 'Events', component: Events },
  { target: '/credits', title: 'Credits', component: Credits },
  { target: '/gallery/:id', title: 'Gallery', component: Gallery },
];