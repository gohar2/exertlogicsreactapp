import  {useState} from 'react';


export default function Content({
  PageParms,
  PageHeading
}: GlobalPageInterface) {
  const showContent = PageParms.showContent;
  const [isHome, setIsHome] = useState(1);

  const checkHeadings = (isHome: number) => {
    setIsHome(isHome + 1)
  }
  return (
    <div>
      <h1 onClick={e => checkHeadings(isHome)}>{PageHeading} {isHome}</h1>

      <div className='leftcolumn'>
        {showContent ? (
          <div>
            <div className='card'>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className='fakeimg' style={{ height: '200px' }}>
                Image
              </div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
            <div className='card'>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className='fakeimg' style={{ height: '200px' }}>
                Image
              </div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        ) : (
          <h1>You do not have rights to access the content</h1>
        )}
      </div>
    </div>
  );
}

interface GlobalPageInterface {
  PageParms: PageParmProps;
  PageHeading: string;
}
interface PageParmProps {
  showContent: boolean;
}
