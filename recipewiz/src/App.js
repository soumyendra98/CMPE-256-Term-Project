import React from 'react';
import Search from './Components/Search';
import testData from './data/testData';

function App() {
  return (
    <div className='tc bg-green ma0 pa4 min-vh-100'>
      <Search details={testData} />
    </div>
  );
}

export default App;
