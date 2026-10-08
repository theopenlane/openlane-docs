import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Inline chip marking a feature's release status, e.g. <StatusChip status="coming-soon" />
type Status = 'coming-soon';

const STATUSES: Record<Status, {label: string; description: string}> = {
  'coming-soon': {
    label: 'Coming soon',
    description: 'This feature is coming soon and is not available in the console yet',
  },
};

export default function StatusChip({status}: {status: Status}): ReactNode {
  const {label, description} = STATUSES[status];
  return (
    <span className={styles.chip} title={description}>
      {label}
    </span>
  );
}
