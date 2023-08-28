import React from 'react';
import Profile from './components/Profile';
import LinksList from './components/LinksList';
import Card from './components/ui/Card';

function App() {
  return (
    <main
      className='
    flex
    flex-col 
    justify-center
    items-center
    p-8
    sm:p-4
    h-screen
    text-slate-300
    z-[1]
    bg-circle-bg
    bg-cover
    bg-center	
    '>
      {/* <Particle /> */}
      <Card>
        <Profile />
        <LinksList />
      </Card>
    </main>
  );
}

export default App;
