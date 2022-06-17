import Content from '../shared/Content';
import Sidebar from '../shared/Sidebar';

export default function BlogContainer() {
  return (
    <>
      <div className='row'>
        <Content
          PageHeading='Blog'
          PageParms={{
            showContent: true
          }}
        />
        <Sidebar
          SidebarControl={{
            AboutWidget: true,
            PostsWidget: true,
            FollowWidget: true
          }}
        />
      </div>
    </>
  );
}
