import { Link, Outlet } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

export default function PageLayout() {
 

  return (
    <div id='wrapper'>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
