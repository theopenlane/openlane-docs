import type {ReactNode} from 'react';
import clsx from 'clsx';
import {ArrowRight, Check, CircleCheck, EyeOff, FileUp, ListChecks, Pencil, Scissors, Search, Sparkles} from 'lucide-react';
import {Badge, IconTile, MockupFrame, Select, Tag, WithIcon, mockupStyles as m} from '@site/src/components/ConsoleMockup';
import styles from './styles.module.css';

// Theme-aware illustration of the console import steps, built on Infima variables
type Step = 'upload' | 'map' | 'review';

const STEPS: {key: Step; label: string}[] = [
  {key: 'upload', label: 'Upload'},
  {key: 'map', label: 'Map fields'},
  {key: 'review', label: 'Review'},
];

const ARIA_LABELS: Record<Step, string> = {
  upload: 'Upload step: a drop zone for a CSV file and a summary of what gets imported',
  map: 'Map fields step: each column in the file matched to a control field, with unrecognized status values remapped',
  review: 'Review step: summary counts and a preview of the controls that will be created',
};

function Stepper({current}: {current: Step}) {
  const currentIndex = STEPS.findIndex((step) => step.key === current);
  return (
    <div className={styles.stepper}>
      {STEPS.map((step, index) => (
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
          <span className={clsx(index === currentIndex && m.strong)}>{step.label}</span>
        </span>
      ))}
    </div>
  );
}

function Footer({hint, action, showBack = true}: {hint: string; action: string; showBack?: boolean}) {
  return (
    <div className={styles.footer}>
      {showBack ? <span className={m.buttonOutline}>← Back</span> : <span />}
      <span className={styles.footerRight}>
        <span className={m.hint}>{hint}</span>
        <span className={m.buttonPrimary}>{action}</span>
      </span>
    </div>
  );
}

function UploadStep() {
  return (
    <>
      <div className={styles.uploadGrid}>
        <div className={m.card}>
          <div className={styles.dropzone}>
            <IconTile size="lg"><FileUp size={20} /></IconTile>
            <span className={m.strong}>
              Drag and drop files or <u>click to upload</u>
            </span>
            <span className={m.hint}>Accepted: CSV (Max file size: 10MB)</span>
          </div>
        </div>
        <div className={m.card}>
          <p className={m.strong}>What gets imported</p>
          <ul className={styles.featureList}>
            <li>
              <Sparkles size={16} className={m.accent} />
              <span>
                1 required field
                <small>Ref Code must come from a column in your file</small>
              </span>
            </li>
            <li>
              <ArrowRight size={16} className={m.accent} />
              <span>
                Automatic matching
                <small>Exact names, known aliases and similar wording</small>
              </span>
            </li>
            <li>
              <Scissors size={16} className={m.accent} />
              <span>
                Extra columns are fine
                <small>Anything unsupported can be ignored</small>
              </span>
            </li>
          </ul>
          <span className={m.link}>View the Control field reference</span>
        </div>
      </div>
      <Footer showBack={false} hint="Choose a file to continue" action="Continue →" />
    </>
  );
}

type MappingRow = {
  column: string;
  filled: string;
  examples: string[];
  field: string;
  mapped?: boolean;
  badge: ReactNode;
  empty?: boolean;
  valueMap?: [string, string, string][];
};

const MAPPING_ROWS: MappingRow[] = [
  {column: 'Control ID', filled: '42 of 42 filled', examples: ['CO-07', 'CO-08'], field: 'Ref Code (required)', mapped: true, badge: <Badge tone="success">Alias</Badge>},
  {
    column: 'Control Description',
    filled: '42 of 42 filled',
    examples: ['Company has established core values…', 'Access reviews are performed…'],
    field: 'Description',
    mapped: true,
    badge: <Badge tone="info">Suggested</Badge>,
  },
  {
    column: 'Status',
    filled: '42 of 42 filled',
    examples: ['Done', 'In progress'],
    field: 'Status',
    mapped: true,
    badge: <Badge tone="success">Values mapped (2)</Badge>,
    valueMap: [
      ['Done', '30 rows', 'Approved'],
      ['In progress', '12 rows', 'Preparing'],
    ],
  },
  {column: 'Owner Notes', filled: '8 of 42 filled', examples: ['Follow up with IT', 'Pending HR sign-off'], field: 'Ignore this column', badge: <Badge>No match</Badge>},
  {column: 'Reviewer', filled: '0 of 42 filled', examples: [], field: 'Nothing to import', empty: true, badge: <Badge>Empty</Badge>},
];

function MapStep() {
  return (
    <>
      <div className={styles.banner}>
        <WithIcon icon={<CircleCheck size={16} />}>All required fields are mapped. 3 of 5 columns will be imported.</WithIcon>
      </div>
      <div className={m.card}>
        <div className={m.toolbar}>
          <Tag active>All · 5</Tag>
          <Tag>Mapped · 3</Tag>
          <Tag>Unmapped · 2</Tag>
          <Tag>Issues · 0</Tag>
          <span className={m.search}>
            <WithIcon icon={<Search size={14} />}>Search columns</WithIcon>
          </span>
        </div>
        <div className={m.scroll}>
          <div className={m.table}>
            <div className={clsx(m.row, styles.mapRow, m.tableHead)}>
              <span>Column in your file</span>
              <span>Example values</span>
              <span>Import as</span>
              <span>Match</span>
            </div>
            {MAPPING_ROWS.map((row) => (
              <div key={row.column} className={clsx(m.row, styles.mapRow, row.empty && m.muted)}>
                <span>
                  <span className={m.mono}>{row.column}</span>
                  <small>{row.filled}</small>
                </span>
                <span className={styles.examples}>
                  {row.examples.length > 0 ? row.examples.map((example) => <span key={example} className={m.truncate}>{example}</span>) : <em>No values</em>}
                </span>
                <Select value={row.mapped ? <span className={m.pill}>{row.field}</span> : row.field} muted={row.empty} />
                <span>{row.badge}</span>
                {row.valueMap && (
                  <div className={styles.valuePanel}>
                    <small>These values are not valid for Status. Choose what each one should import as.</small>
                    {row.valueMap.map(([value, rows, target]) => (
                      <div key={value} className={styles.valueRow}>
                        <span className={m.mono}>{value}</span>
                        <small>{rows}</small>
                        <Select value={target} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer hint="3 columns mapped · 2 ignored" action="Continue →" />
    </>
  );
}

const PREVIEW_ROWS = [
  ['CO-07', 'Company has established core values that are communicated to employees…', 'Approved'],
  ['CO-08', 'Access reviews are performed quarterly for all production systems…', 'Approved'],
  ['CO-09', 'Security awareness training is completed by all personnel annually…', 'Preparing'],
];

function ReviewStep() {
  return (
    <>
      <div className={styles.summaryGrid}>
        {[
          ['Controls to create', '42', 'from controls.csv'],
          ['Fields mapped', '3', 'of 5 columns'],
          ['Columns ignored', '2', 'left out of the import'],
          ['Set automatically', 'Imported', 'Source on every record'],
        ].map(([title, value, hint]) => (
          <div key={title} className={m.card}>
            <small>{title}</small>
            <span className={styles.summaryValue}>{value}</span>
            <small className={m.mono}>{hint}</small>
          </div>
        ))}
      </div>
      <div className={m.card}>
        <div className={styles.previewHead}>
          <span>Preview — first 3 of 42 rows</span>
          <span className={m.buttonSecondary}>
            <WithIcon icon={<Pencil size={14} />}>Edit mapping</WithIcon>
          </span>
        </div>
        <div className={m.scroll}>
          <div className={m.table}>
            <div className={clsx(m.row, styles.previewRow, m.tableHead)}>
              <span>Ref Code</span>
              <span>Description</span>
              <span>Status</span>
              <span>Source</span>
            </div>
            {PREVIEW_ROWS.map(([refCode, description, status]) => (
              <div key={refCode} className={clsx(m.row, styles.previewRow)}>
                <span>{refCode}</span>
                <span className={m.truncate}>{description}</span>
                <span>{status}</span>
                <span>IMPORTED</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.caption}>
          <small>
            <WithIcon icon={<ListChecks size={12} />}>Values remapped: Status (2 values)</WithIcon>
          </small>
          <small>
            <WithIcon icon={<EyeOff size={12} />}>Not imported: Owner Notes and Reviewer</WithIcon>
          </small>
        </div>
      </div>
      <Footer hint="Nothing in your original file is changed" action="Import 42 controls" />
    </>
  );
}

const STEP_BODIES: Record<Step, () => ReactNode> = {
  upload: UploadStep,
  map: MapStep,
  review: ReviewStep,
};

export default function ImportPreview({step}: {step: Step}): ReactNode {
  const Body = STEP_BODIES[step];
  return (
    <MockupFrame label={ARIA_LABELS[step]} title="Import controls">
      <Stepper current={step} />
      <Body />
    </MockupFrame>
  );
}
