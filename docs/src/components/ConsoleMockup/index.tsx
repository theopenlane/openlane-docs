import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Shared building blocks for theme-aware console illustrations, built on Infima variables
export {styles as mockupStyles};

export type BadgeTone = 'success' | 'info' | 'warning' | 'danger' | 'neutral';

export function Badge({tone = 'neutral', children}: {tone?: BadgeTone; children: ReactNode}) {
  return <span className={clsx(styles.badge, styles[`badge_${tone}`])}>{children}</span>;
}

export function Select({value, muted = false}: {value: ReactNode; muted?: boolean}) {
  return (
    <span className={clsx(styles.select, muted && styles.muted)}>
      {value}
      <span className={styles.chevron}>⌄</span>
    </span>
  );
}

export function Tag({active = false, children}: {active?: boolean; children: ReactNode}) {
  return <span className={clsx(styles.tag, active && styles.tagActive)}>{children}</span>;
}

export function MockupFrame({label, title, children}: {label: string; title: string; children: ReactNode}) {
  return (
    <figure className={styles.frame} role="img" aria-label={label}>
      <div className={styles.window} aria-hidden="true">
        <span className={styles.title}>{title}</span>
        {children}
      </div>
    </figure>
  );
}

export function IconTile({children, size = 'md'}: {children: ReactNode; size?: 'md' | 'lg'}) {
  return <span className={clsx(styles.iconTile, size === 'lg' && styles.iconTileLarge)}>{children}</span>;
}

export function WithIcon({icon, children}: {icon: ReactNode; children: ReactNode}) {
  return (
    <span className={styles.withIcon}>
      {icon}
      {children}
    </span>
  );
}
