import {useEffect, useRef, useState, type ReactNode} from 'react';
import {Check, Copy} from 'lucide-react';
import styles from './styles.module.css';

// Inline code with a copy button, e.g. <CopyText value="https://example.com" />
type Props = {
  value: string;
  children?: ReactNode;
  label?: string;
};

const COPIED_RESET_MS = 2000;

export default function CopyText({value, children, label}: Props): ReactNode {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  const buttonLabel = copied ? 'Copied' : (label ?? `Copy ${value}`);

  return (
    <span className={styles.wrapper}>
      <code className={styles.code}>{children ?? value}</code>
      <button type="button" className={styles.button} onClick={handleCopy} aria-label={buttonLabel} title={buttonLabel}>
        {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
      </button>
      <span className={styles.status} role="status" aria-live="polite">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </span>
  );
}
