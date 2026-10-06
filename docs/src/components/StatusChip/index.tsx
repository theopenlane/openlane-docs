import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Inline chip marking a feature's release status, e.g. <StatusChip status="private-beta" />
type Status = 'private-beta';

const STATUSES: Record<Status, {label: string; description: string}> = {
  'private-beta': {
    label: 'Private beta',
    description: 'This feature is in private beta and is not available in the console yet',
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
