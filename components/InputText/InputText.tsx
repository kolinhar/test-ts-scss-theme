import * as React from 'react';

import styles from './InputText.module.scss';

interface Props {
  textLabel: string;
  placeholder?: string;
}

const InputText = ({ textLabel, placeholder }: Props) => {
  return (
    <label className={styles.label}>
      {textLabel}
      <input type="text" className={styles.input} placeholder={placeholder} />
    </label>
  );
};

export default React.memo(InputText);
