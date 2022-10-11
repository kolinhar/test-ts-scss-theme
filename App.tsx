import * as React from 'react';
import { memo, useCallback, useState } from 'react';
import './style.module.scss';
import Button from './components/Button/Button';
import Section from './components/Section/Section';

type Theme = 'light' | 'dark' | '';

function App() {
  const [theme, setTheme] = useState<Theme>('');
  const changeTheme = useCallback((val: Theme) => {
    setTheme(val);
  }, []);

  return (
    <Section className={theme}>
      <article>
        <h1>Theme List:</h1>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  changeTheme('');
                }}
              >
                None
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changeTheme('light');
                }}
              >
                Light
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  changeTheme('dark');
                }}
              >
                Dark
              </button>
            </li>
          </ul>
        </nav>
      </article>
      <Button>Mon Bouton autonome</Button>
    </Section>
  );
}

export default memo(App);
