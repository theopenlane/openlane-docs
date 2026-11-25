import type {ReactNode} from 'react';
import clsx from 'clsx';
import {Badge as Seal, Pencil} from 'lucide-react';
import {Badge, MockupFooter, MockupFrame, type MockupStep, Stepper, WithIcon, mockupStyles as m} from '@site/src/components/ConsoleMockup';
import styles from './styles.module.css';

// Theme-aware illustration of the Review step when creating a custom framework
const STEPS: MockupStep[] = [
  {key: 'details', label: 'Details'},
  {key: 'icon', label: 'Icon'},
  {key: 'controls', label: 'Controls'},
  {key: 'review', label: 'Review'},
];

const DETAILS = [
  ['Short name', 'ISB'],
  ['Framework key', 'internal-security-baseline'],
  ['Category', 'cybersecurity'],
  ['Governing body', 'Internal Security Team'],
  ['Version', '2026.11'],
  ['Link', '-'],
  ['Tags', '-'],
];

export default function CreateFrameworkPreview(): ReactNode {
  return (
    <MockupFrame
      label="Create framework page on the Review step: details for a custom framework named Internal Security Baseline, with its controls set to import from CSV"
      title="Create framework">
      <span className={m.hint}>Set up a framework your organization defines. You can change any of this later.</span>
      <Stepper steps={STEPS} current="review" />
      <div className={m.card}>
        <div className={styles.cardHead}>
          <span className={styles.identity}>
            <span className={styles.seal}>
              <Seal size={44} strokeWidth={1} />
              <span className={styles.sealLabel}>ISB</span>
            </span>
            <span className={m.strong}>Internal Security Baseline</span>
            <Badge tone="info">Custom</Badge>
          </span>
          <span className={m.buttonOutline}>
            <WithIcon icon={<Pencil size={14} />}>Edit</WithIcon>
          </span>
        </div>
        <div className={styles.details}>
          {DETAILS.map(([label, value]) => (
            <span key={label}>
              <small>{label}</small>
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className={clsx(m.card, styles.cardHead)}>
        <span>
          <span className={m.strong}>Import from CSV</span>
          <small>After the framework is created you go straight to the import page to upload your file and map its columns.</small>
        </span>
        <span className={m.buttonOutline}>Change</span>
      </div>
      <MockupFooter start={<span className={m.hint}>Step 4 of 4 · Review</span>}>
        <span className={m.buttonOutline}>Back</span>
        <span className={m.buttonPrimary}>Create and import controls</span>
      </MockupFooter>
    </MockupFrame>
  );
}
