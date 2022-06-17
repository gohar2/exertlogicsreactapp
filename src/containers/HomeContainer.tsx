import React from 'react';
import Content from '../shared/Content';
import Sidebar from '../shared/Sidebar';

export default function HomeContainer() {
  return (
    <>
      <div className='row'>
        <Content
          PageHeading='Home'
          PageParms={{
            showContent: true
          }}
        />
        <Sidebar
          SidebarControl={{
            AboutWidget: false,
            PostsWidget: true,
            FollowWidget: true
          }}
        />
      </div>
    </>
  );
}
