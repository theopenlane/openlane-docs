import React from 'react';
import styles from './styles.module.css';

type Props = {
  fullName?: string;
  type?: string;
  source?: string;
  established?: string;
  managedBy?: string;
  appliesTo?: string;
  penalties?: string;
  certification?: string;
};

// values may contain simple markdown links; render them without pulling in a
// full markdown pipeline
function renderValue(value: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(value)) !== null) {
    if (m.index > last) parts.push(value.slice(last, m.index));
    parts.push(
      <a key={m.index} href={m[2]} target="_blank" rel="noopener noreferrer">
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < value.length) parts.push(value.slice(last));
  return parts.length > 0 ? parts : value;
}

const FIELDS: {key: keyof Props; label: string}[] = [
  {key: 'fullName', label: 'Full Name'},
  {key: 'type', label: 'Type'},
  {key: 'source', label: 'Authoritative Source'},
  {key: 'established', label: 'Established'},
  {key: 'managedBy', label: 'Managed By'},
  {key: 'appliesTo', label: 'Applies To'},
  {key: 'penalties', label: 'Penalties'},
  {key: 'certification', label: 'Certification'},
];

export default function StandardMeta(props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        {FIELDS.filter(({key}) => props[key]).map(({key, label}) => (
          <div key={key} className={styles.item}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{renderValue(props[key] as string)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
