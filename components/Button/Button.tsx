import * as React from 'react';
import { memo, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

/*
 * Cannot import like that because class names are obfuscated
import './Light.module.scss';
import './Dark.module.scss';
*/
const Button = (props: PropsWithChildren) => {
  return <button className={styles.bouton}>{props.children}</button>;
};

export default memo(Button);
