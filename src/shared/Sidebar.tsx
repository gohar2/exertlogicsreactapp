import SidebarAbout from './SidebarAbout';
import SidebarFollow from './SidebarFollow';
import SidebarPosts from './SidebarPosts';

export default function Sidebar({ SidebarControl }: SidebarControlInterface) {
  return (
    <>
      <div className='rightcolumn'>
        {SidebarControl.AboutWidget && <SidebarAbout />}
        {SidebarControl.PostsWidget && <SidebarPosts />}
        {SidebarControl.FollowWidget && <SidebarFollow />}
      </div>
    </>
  );
}

interface SidebarControlInterface {
  SidebarControl: SidebarInterface;
}
interface SidebarInterface {
  AboutWidget: Boolean;
  PostsWidget: Boolean;
  FollowWidget: Boolean;
}
