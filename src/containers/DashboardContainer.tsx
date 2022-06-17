import Content from '../shared/Content';
import Sidebar from '../shared/Sidebar';

export default function DashboardContainer() {
  return (
    <>
      <div className='row'>
        <Content
          PageHeading='Dashboard'
          PageParms={{
            showContent: true
          }}
        />
        <Sidebar
          SidebarControl={{
            AboutWidget: false,
            PostsWidget: false,
            FollowWidget: true
          }}
        />
      </div>
    </>
  );
}
