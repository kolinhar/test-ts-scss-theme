import * as React from 'react';
import { HTMLProps, memo, PropsWithChildren } from 'react';
import styles from './Section.module.scss';

const Section = (props: PropsWithChildren & HTMLProps<HTMLElement>) => {
  const { children, className, ...others } = props;

  const cssClass = React.useMemo(() => {
    return [className, styles.section].join(' ');
  }, [className]);

  return (
    <section className={cssClass} {...others}>
      {props.children}
    </section>
  );
};

export default memo(Section);
