import styles from './styles.module.css';

type Props = {
  shortName?: string;
  version?: string;
  governingBody?: string;
  domains?: string;
  controls?: string;
  reference?: string;
};

const FIELDS: {key: keyof Props; label: string}[] = [
  {key: 'shortName', label: 'Short Name'},
  {key: 'version', label: 'Version'},
  {key: 'governingBody', label: 'Governing Body'},
  {key: 'domains', label: 'Domains'},
  {key: 'controls', label: 'Controls'},
];

export default function FrameworkMeta(props: Props) {
  const meta = FIELDS.filter(({key}) => props[key]);

  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        {meta.map(({key, label}) => (
          <div key={key} className={styles.item}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>{props[key]}</div>
          </div>
        ))}
        {props.reference && (
          <div className={styles.item}>
            <div className={styles.label}>Reference</div>
            <div className={styles.value}>
              <a href={props.reference} target="_blank" rel="noopener noreferrer">
                {props.reference}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
