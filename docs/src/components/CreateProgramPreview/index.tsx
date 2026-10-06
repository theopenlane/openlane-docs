import type {ReactNode} from 'react';
import clsx from 'clsx';
import {Check, CircleCheck, CopyPlus, FilePlus2, Frame, SearchCheck, ShieldCheck, Wrench} from 'lucide-react';
import {Badge, IconTile, MockupFrame, mockupStyles as m} from '@site/src/components/ConsoleMockup';
import styles from './styles.module.css';

// Theme-aware illustration of the Create New Program page
function IllustrationShell({icon, children}: {icon: ReactNode; children: ReactNode}) {
  return (
    <div className={styles.illustration}>
      <div className={styles.illustrationCard}>
        <span className={styles.illustrationHead}>
          {icon}
          <span className={styles.illustrationDot} />
        </span>
        {children}
      </div>
      <div className={styles.illustrationFade} />
    </div>
  );
}

function Soc2Illustration() {
  return (
    <IllustrationShell icon={<ShieldCheck size={14} />}>
      <span className={clsx(styles.highlight, styles.w66)} />
      <span className={clsx(styles.bar, styles.barStrong, styles.w80)} />
      <span className={clsx(styles.bar, styles.w60)} />
    </IllustrationShell>
  );
}

function RiskIllustration() {
  return (
    <IllustrationShell icon={<SearchCheck size={14} />}>
      {[true, false, false].map((checked, index) => (
        <span key={index} className={styles.checkRow}>
          <span className={clsx(styles.checkCircle, checked && styles.checkCircleActive)}>{checked && <Check size={10} />}</span>
          <span className={clsx(styles.bar, styles.w60)} />
        </span>
      ))}
    </IllustrationShell>
  );
}

function FrameworkIllustration() {
  return (
    <IllustrationShell icon={<Frame size={14} />}>
      <span className={styles.columns}>
        {[false, true, false, false].map((active, index) => (
          <span key={index} className={clsx(styles.column, active && styles.columnActive)} />
        ))}
      </span>
    </IllustrationShell>
  );
}

const QUICKSTART = [
  {
    title: 'SOC 2',
    recommended: true,
    illustration: <Soc2Illustration />,
    description: "We'll set up a SOC 2 program for you in under 2 minutes.",
    details: ['Select core trust principles', 'Choose templates or your own policies', 'Invite your team now or later'],
  },
  {
    title: 'Risk Assessment',
    illustration: <RiskIllustration />,
    description: 'Easily create a risk register with built-in scoring & reporting.',
    details: ['Default risk scoring (likelihood x impact)', 'Standard risk categories', 'Sample controls pre-loaded'],
  },
  {
    title: 'Framework Based',
    illustration: <FrameworkIllustration />,
    description: "Choose the compliance standard and we'll get you started.",
    details: ['Select from any existing compliance standard', 'Choose templates or bring your own policies', 'Invite your team now or later'],
  },
];

const CUSTOM = [
  {icon: <CopyPlus size={20} />, title: 'From Existing Program', description: 'Reuse controls, auditor and owner from a program'},
  {icon: <FilePlus2 size={20} />, title: 'Generic Program', description: 'Start with a blank program structure'},
  {icon: <Wrench size={20} />, title: 'Advanced Setup', description: 'Manually configure everything from the ground up.'},
];

export default function CreateProgramPreview(): ReactNode {
  return (
    <MockupFrame
      label="Create New Program page: Quickstart templates for SOC 2, Risk Assessment, and Framework Based programs, and Custom options for From Existing Program, Generic Program, and Advanced Setup"
      title="Create New Program">
      <span className={styles.heading}>Quickstart</span>
      <div className={styles.quickstart}>
        {QUICKSTART.map((option) => (
          <div key={option.title} className={clsx(m.card, option.recommended && m.cardActive)}>
            {option.illustration}
            <span className={styles.cardTitle}>
              <span className={m.strong}>{option.title}</span>
              {option.recommended ? <Badge tone="success">Recommended</Badge> : <Badge>Template</Badge>}
            </span>
            <span className={m.hint}>{option.description}</span>
            <ul className={styles.details}>
              {option.details.map((detail) => (
                <li key={detail}>
                  <CircleCheck size={14} className={m.accent} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <span className={styles.heading}>Custom</span>
      <div className={styles.custom}>
        {CUSTOM.map((option) => (
          <div key={option.title} className={clsx(m.card, styles.customCard)}>
            <IconTile size="lg">{option.icon}</IconTile>
            <span>
              <span className={m.strong}>{option.title}</span>
              <small>{option.description}</small>
            </span>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}
