import { useEffect, useState } from 'react';

const HomePage = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <>
      <div className="container">
        <nav>
          <div className="mybrand">My Personal Site</div>
          <div>
            {darkTheme !== undefined && (
              <form action="#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </form>
            )}
          </div>
        </nav>
        <section>
          <div className="heroSection">
            <h1>👋 Hey I’m Ishan</h1>
            <h3>
              I am a designer, frontend developer writer and content creator.
            </h3>
            <p>
              You can find me in
              <span>
                <a href="https://twitter.com/ishan02016" target="_blank">
                  Twitter
                </a>
              </span>
              where I talk about design and development topics. I am glad you
              are hear. I would love to speak and talk to new happy faces and
              share my work process and tech talks with you.
            </p>
            <button className="primary-btn">Connect with me</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
