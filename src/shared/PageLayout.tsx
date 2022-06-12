import { Link, Outlet } from 'react-router-dom';
import FooterComponent from '../template-parts/FooterComponent';
import HeaderComponent from '../template-parts/HeaderComponent';

export default function PageLayout() {
 

  return (
 

    <div id='wrapper'>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
