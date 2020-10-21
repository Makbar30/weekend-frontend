import React from 'react';

function App() {

  return (
    <div className="container">
      <header className="container__header">
        <img src="assets/images/bitmap_2.png"
          srcSet="assets/images/bitmap_2@2x.png 2x,
             assets/images/bitmap_2@3x.png 3x"
          className="header-logo"
          alt="logo" />

        <div className="header-title">
          <p>Good Morning</p>
          <h1>Fellas</h1>
        </div>
      </header>

      <div className="container__hero">
        <h1>WEEKEND FROM HOME</h1>
        <p>Stay active with a little workout.</p>
        <div className="hero-img">
          <img src="assets/images/bitmap.png"
            srcSet="assets/images/bitmap@2x.png 2x,
             assets/images/bitmap@3x.png 3x"
            alt="hero-img" />

          <button className="img-button">Let's Go</button>
        </div>

      </div>

      <div className="container__definition">
        <img src="assets/images/group-4.png"
          srcSet="assets/images/group-4@2x.png 2x,
             assets/images/group-4@3x.png 3x"
          className="def-img"
          alt="def-img" />

        <p className="def-text"><strong>Deffinition;</strong> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
        <p className="def-author">-weekend team</p>
        <img src="assets/images/oval.svg"
          className="def-oval" alt="def-oval" />
      </div>

      <footer className="container__footer">
        <p className="copyright"><b>wknd@</b>2020</p>
        <p className="version">alpha version 0.1</p>
      </footer>
    </div>
  );
}

export default App;
