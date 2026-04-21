'use client';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text cont">
        <h1 className="text">avaa kirje</h1>
        <button className="uusikirje" onClick={() => setIsOpen(false)}>uusi kirje</button>
        <div className={`envelope ${isOpen ? '' : 'pulse'}`}>
          <div className="flap" onClick={() => setIsOpen(true)}></div>
        </div>
        {isOpen && (
          <div className="letter">
            <h1 className="header">moi sini/lumi ❤️</h1>
            <p className="letter_text">
              joo moikka sini! aika kuluu ihan sairaan nopee...
              <br /><br />
              ps. oot täydellinen
            </p>
          </div>
        )}
      </div>
    </div>
  );
}