import React, { useState } from 'react';
import Search from './Components/Search';
import Data from './data/testData';

function App() {
  // const [testData, setTestData] = useState([]);
  return (
    <div className='tc bg-green ma0 pa4 min-vh-100'>
      <Search details={Data} />
    </div>
  );
}

export default App;
