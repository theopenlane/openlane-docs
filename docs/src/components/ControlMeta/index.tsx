import React from 'react';
import styles from './styles.module.css';

type Props = {
  refCode?: string;
  name?: string;
  description?: string;
  category?: string;
  subcategory?: string;
  associatedWith?: string;
};

// values may contain simple markdown links; render them in place without
// pulling in a full markdown pipeline
function renderValue(value: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(value)) !== null) {
    if (m.index > last) parts.push(value.slice(last, m.index));
    parts.push(
      <a key={m.index} href={m[2]}>
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < value.length) parts.push(value.slice(last));
  return parts.length > 0 ? parts : value;
}

const FIELDS: {key: keyof Props; label: string}[] = [
  {key: 'category', label: 'Category'},
  {key: 'subcategory', label: 'Subcategory'},
  {key: 'associatedWith', label: 'Associated With'},
];

export default function ControlMeta(props: Props) {
  const meta = FIELDS.filter(({key}) => props[key]);
  return (
    <div className={styles.card}>
      {props.refCode && <div className={styles.refCode}>{props.refCode}</div>}
      {props.name && <div className={styles.name}>{props.name}</div>}
      {props.description && (
        <div className={styles.description}>{renderValue(props.description)}</div>
      )}
      {meta.length > 0 && (
        <div className={styles.grid}>
          {meta.map(({key, label}) => (
            <div key={key} className={styles.item}>
              <div className={styles.label}>{label}</div>
              <div className={styles.value}>{renderValue(props[key] as string)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
