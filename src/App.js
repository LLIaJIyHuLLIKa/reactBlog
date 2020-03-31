import React, { useState } from 'react';
import Blog from './features/Blog/Blog';
import ModalSearch from './features/Blog/ModalSearch/ModalSearch';
import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="App">
      <Blog openModal={openModal} />
      {isOpen === true &&
        <ModalSearch openModal={openModal} />
      }
    </div>
  );
}

export default App;
