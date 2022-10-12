import * as React from 'react';
import { memo, useCallback, useState } from 'react';
import './style/_style.module.scss';
import spaces from './style/_space.module.scss';
import colors from './style/_color.module.scss';
import Button from './components/Button/Button';
import LightTheme from './style/Themes/_light.module.scss';
import DarkTheme from './style/Themes/_dark.module.scss';
import Section from './components/Section/Section';
import InputText from './components/InputText/InputText';

type Theme = 'light' | 'dark' | '';

function App() {
  const [theme, setTheme] = useState<Theme>('');
  const changeTheme = useCallback((val: Theme) => {
    setTheme(val);
  }, []);

  return (
    <Section className={theme}>
      <article>
        <h1>Liste des Thèmes:</h1>
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
      <hr />
      <Button>Mon Bouton autonome</Button>
      <Button>Mon autre Bouton</Button>
      <hr />
      <InputText
        textLabel="Input de type texte avec son label lié"
        placeholder="un texte au pif"
      />
      <hr />
      <h1>Typescript SCSS imports:</h1>
      <code>
        spaces: {JSON.stringify(spaces, null, ' ')}
        <br />
        colors: {JSON.stringify(colors, null, ' ')}
        <br />
        darkTheme: {JSON.stringify(DarkTheme, null, ' ')}
        <br />
        lightTheme: {JSON.stringify(LightTheme, null, ' ')}
      </code>
    </Section>
  );
}

export default memo(App);
