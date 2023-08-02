import React from 'react';
import Profile from './components/Profile';
import LinksList from './components/LinksList';

function App() {
  return (
    <main 
    className='
    flex
    flex-col 
    justify-center
    items-center
    p-4
    '>
      <Profile/>
      <LinksList />
    </main>
  );
}

export default App;
