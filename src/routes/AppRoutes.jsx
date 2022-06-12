import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { links } from '../consts/siteConsts';
import AboutContainer from '../containers/AboutContainer';
import BlogContainer from '../containers/BlogContainer';
import DashboardContainer from '../containers/DashboardContainer';
import HomeContainer from '../containers/HomeContainer';
import PageLayout from '../shared/PageLayout';



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
        <Route path='/' element={<HomeContainer />} />
          <Route path={links.about} element={<AboutContainer />} />
          <Route path={links.home} element={<HomeContainer />} />
          <Route exact path={links.dashboard} element={<DashboardContainer />} />
          <Route exact path={links.blog} element={<BlogContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
