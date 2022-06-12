import React from 'react';

export default function Seidebar() {
  return (
    <>
      <div className='rightcolumn'>
        <div className='card'>
          <h2>About Me</h2>
          <div className='fakeimg' style={{ height: '100px' }}>
            Image
          </div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div className='card'>
          <h3>Popular Post</h3>
          <div className='fakeimg'>
            <p>Image</p>
          </div>
          <div className='fakeimg'>
            <p>Image</p>
          </div>
          <div className='fakeimg'>
            <p>Image</p>
          </div>
        </div>
        <div className='card'>
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
    </>
  );
}
