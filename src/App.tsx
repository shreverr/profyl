import React from 'react';
import Profile from './components/Profile';
import LinksList from './components/LinksList';
import Card from './components/Card';
import Particle from './components/Particle';

function App() {
  return (
    <main id="particles-js"
      className='
    flex
    flex-col 
    justify-center
    items-center
    p-4
    h-screen
    bg-slate-900
    text-slate-300
    z-[1]
    '>
      <Particle />
      <Card>
        <Profile />
        <LinksList />
      </Card>
    </main>
  );
}

export default App;
