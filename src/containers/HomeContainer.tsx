import React from 'react';
import Content from '../shared/Content';
import Seidebar from '../shared/Sidebar';

export default function HomeContainer() {
  return (
    <>
      <div className='row'>
        <Content
        PageHeading = 'Home'
          PageParms={{
            showContent: true
          }}
        />
        <Seidebar />
      </div>
    </>
  );
}
