import Content from '../shared/Content';
import Sidebar from '../shared/Sidebar';

export default function AboutContainer() {
  return (
    <>
      <div className='row'>
        <Content
        PageHeading = 'About Us'
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
  )
}
