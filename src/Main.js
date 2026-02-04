import React from 'react';
import background from './assets/images/background.png'
import MainContent from './components/mainContent';

const Main = () => {
  const mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div className="Main" style={mainStyle}>
      <MainContent />
    </div>
  );
};

export default Main;