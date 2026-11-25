import type {ReactNode} from 'react';
import clsx from 'clsx';
import {Check} from 'lucide-react';
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

export type MockupStep<K extends string = string> = {key: K; label: string};

export function Stepper<K extends string>({steps, current}: {steps: MockupStep<K>[]; current: K}) {
  const currentIndex = steps.findIndex((step) => step.key === current);
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <span key={step.key} className={styles.stepperItem}>
          {index > 0 && <span className={styles.stepperLine} />}
          <span
            className={clsx(
              styles.stepperDot,
              index < currentIndex && styles.stepperDone,
              index === currentIndex && styles.stepperActive,
            )}>
            {index < currentIndex ? <Check size={12} /> : index + 1}
          </span>
          <span className={clsx(index === currentIndex && styles.strong)}>{step.label}</span>
        </span>
      ))}
    </div>
  );
}

export function MockupFooter({start, children}: {start?: ReactNode; children: ReactNode}) {
  return (
    <div className={styles.footer}>
      <span>{start}</span>
      <span className={styles.footerRight}>{children}</span>
    </div>
  );
}
