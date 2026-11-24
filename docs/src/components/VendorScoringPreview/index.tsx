import type {CSSProperties, ReactNode} from 'react';
import clsx from 'clsx';
import {ChevronDown, ChevronRight, ChevronsUpDown, Info, List, Pencil, Plus, Save, Search, X} from 'lucide-react';
import {MockupFrame, WithIcon, mockupStyles as m} from '@site/src/components/ConsoleMockup';
import styles from './styles.module.css';

// Theme-aware illustrations of vendor risk scoring, built on Infima variables
type View = 'questions' | 'bands' | 'results';

type Tone = 'green' | 'blue' | 'amber' | 'orange' | 'red';

const TONE_CLASS: Record<Tone, string> = {
  green: styles.toneGreen,
  blue: styles.toneBlue,
  amber: styles.toneAmber,
  orange: styles.toneOrange,
  red: styles.toneRed,
};

function Chip({tone, children}: {tone: Tone; children: ReactNode}) {
  return <span className={clsx(styles.chip, TONE_CLASS[tone])}>{children}</span>;
}

function SheetTabs({active}: {active: 'questions' | 'bands'}) {
  return (
    <>
      <span className={m.hint}>Configure how vendors are assessed and assigned risk ratings</span>
      <div className={styles.tabs}>
        <span className={clsx(active === 'questions' && styles.tabActive)}>
          Questions <span className={styles.count}>37</span>
        </span>
        <span className={clsx(active === 'bands' && styles.tabActive)}>Scoring &amp; rating bands</span>
      </div>
    </>
  );
}

function SheetFooter() {
  return (
    <div className={styles.footer}>
      <span className={m.buttonOutline}>
        <WithIcon icon={<X size={14} />}>Cancel</WithIcon>
      </span>
      <span className={clsx(m.buttonPrimary, m.muted)}>
        <WithIcon icon={<Save size={14} />}>Save changes</WithIcon>
      </span>
    </div>
  );
}

type Question = {name: string; impact: 'High' | 'Medium'};

const QUESTION_GROUPS: {category: string; total: number; questions?: Question[]}[] = [
  {category: 'Security Practices', total: 16},
  {
    category: 'Data Access',
    total: 4,
    questions: [
      {name: 'Are industry-accepted methods applied for secure data disposal from storage media so information is not recoverable by any forensic means?', impact: 'High'},
      {name: 'Is a data inventory created and maintained for sensitive and personal information?', impact: 'High'},
      {name: 'Do data retention, archiving, and deletion practices follow business requirements, applicable laws, and regulations?', impact: 'Medium'},
      {name: 'Are processes defined and implemented to specify and document physical data locations, including locales where data is processed or backed up?', impact: 'High'},
    ],
  },
  {category: 'Data Privacy', total: 4},
  {category: 'Business Continuity', total: 4},
];

const IMPACT_TONE: Record<Question['impact'], Tone> = {High: 'orange', Medium: 'amber'};

function QuestionsView() {
  return (
    <>
      <SheetTabs active="questions" />
      <div className={styles.toolbar}>
        <span className={styles.searchBox}>
          <WithIcon icon={<Search size={14} />}>Search questions</WithIcon>
        </span>
        <span className={styles.filters}>
          <span className={styles.filterActive}>All</span>
          <span>Enabled</span>
          <span>Disabled</span>
          <span>Changed</span>
        </span>
        <span className={m.buttonPrimary}>
          <WithIcon icon={<Plus size={14} />}>Add question</WithIcon>
        </span>
        <span className={m.buttonOutline}>
          <WithIcon icon={<List size={14} />}>
            <ChevronsUpDown size={14} />
          </WithIcon>
        </span>
      </div>
      {QUESTION_GROUPS.map(({category, total, questions}) => (
        <div key={category} className={styles.group}>
          <div className={styles.groupHead}>
            <WithIcon icon={questions ? <ChevronDown size={14} /> : <ChevronRight size={14} />}>
              <span className={m.strong}>{category}</span>
              <span className={m.hint}>
                {total} of {total} enabled
              </span>
            </WithIcon>
          </div>
          {questions?.map(({name, impact}) => (
            <div key={name} className={styles.question}>
              <span className={styles.toggle} />
              <span className={styles.questionText}>
                <span>{name}</span>
                <Chip tone={IMPACT_TONE[impact]}>{impact} impact</Chip>
              </span>
              <span className={m.hint}>Yes / No</span>
              <Pencil size={14} />
            </div>
          ))}
        </div>
      ))}
      <SheetFooter />
    </>
  );
}

const MODES = [
  {label: 'Ignore unanswered questions', description: 'Only answered questions add to the score. Good when vendors fill things out over time.', active: true},
  {label: 'Count unanswered as highest risk', description: 'Each unanswered question adds the maximum score. Use when every vendor must answer everything.'},
  {label: 'Set ratings by hand', description: "Answers are kept, but scores aren't totaled. You set each vendor's rating yourself."},
];

const BANDS: {rating: string; from: number; upTo: number; tone: Tone}[] = [
  {rating: 'Very Low', from: 0, upTo: 3, tone: 'green'},
  {rating: 'Low', from: 3, upTo: 5, tone: 'blue'},
  {rating: 'Medium', from: 5, upTo: 11, tone: 'amber'},
  {rating: 'High', from: 11, upTo: 15, tone: 'orange'},
  {rating: 'Critical', from: 15, upTo: 20, tone: 'red'},
];

function BandsView() {
  return (
    <>
      <SheetTabs active="bands" />
      <span>
        <span className={m.strong}>How unanswered questions count</span>
        <small>Each answered question scores impact × likelihood. A vendor&apos;s score is the total.</small>
      </span>
      <div className={styles.modes}>
        {MODES.map(({label, description, active}) => (
          <div key={label} className={clsx(m.card, styles.mode, active && m.cardActive)}>
            <span className={clsx(styles.radio, active && styles.radioActive)} />
            <span>
              <span className={m.strong}>{label}</span> {active && <span className={m.pill}>Default</span>}
              <small>{description}</small>
            </span>
          </div>
        ))}
      </div>
      <span>
        <span className={m.strong}>Rating bands</span>
        <small>A vendor gets the first rating whose upper score it doesn&apos;t exceed.</small>
      </span>
      <div>
        <div className={styles.bar}>
          {BANDS.map(({rating, from, upTo, tone}) => (
            <span key={rating} className={clsx(styles.segment, TONE_CLASS[tone])} style={{flexGrow: upTo - from}} />
          ))}
        </div>
        <div className={styles.scaleEnds}>
          <small>0</small>
          <small>20+</small>
        </div>
      </div>
      <div className={m.card}>
        <div className={clsx(m.row, styles.bandRow, styles.headRow)}>
          <span>Rating</span>
          <span>Score up to</span>
          <span>Default</span>
        </div>
        {BANDS.map(({rating, upTo, tone}) => (
          <div key={rating} className={clsx(m.row, styles.bandRow)}>
            <WithIcon icon={<span className={clsx(styles.dot, TONE_CLASS[tone])} />}>{rating}</WithIcon>
            <span className={styles.input}>{upTo}</span>
            <span className={m.hint}>{upTo}</span>
          </div>
        ))}
      </div>
      <SheetFooter />
    </>
  );
}

const SCALE = [
  ['None', '≤0'],
  ['Very Low', '≤3'],
  ['Low', '≤5'],
  ['Medium', '≤11'],
  ['High', '≤15'],
  ['Critical', '>15'],
];

const SOURCES = [
  {label: 'Supply Chain Risk', score: 3, answers: 2},
  {label: 'Business Continuity', score: 0, answers: 1},
  {label: 'Incident Response', score: 0, answers: 1},
  {label: 'Regulatory Compliance', score: 0, answers: 1},
  {label: 'Security Practices', score: 0, answers: 4},
];

const ANSWERS: {question: string; questionKey: string; answer: string; impact: string; impactTone: Tone; likelihood: string; score: number; notes: string}[] = [
  {
    question: 'Is an inventory of all supply chain relationships developed and maintained?',
    questionKey: 'STA-07.1',
    answer: 'No',
    impact: 'Medium',
    impactTone: 'amber',
    likelihood: 'Low',
    score: 3,
    notes: 'Vendor tracks direct suppliers only.',
  },
  {
    question: 'Do service agreements between the vendor and their customers incorporate security requirements, incident management, right to audit, and data privacy provisions?',
    questionKey: 'STA-09.1',
    answer: 'Yes',
    impact: 'High',
    impactTone: 'orange',
    likelihood: 'Very Low',
    score: 0,
    notes: 'Master services agreement, section 7.',
  },
];

function ResultsView() {
  return (
    <>
      <div className={styles.resultsHead}>
        <span className={m.hint}>Updated November 16, 2026</span>
        <span className={styles.splitButton}>
          <WithIcon icon={<Pencil size={14} />}>Edit answers</WithIcon>
          <ChevronDown size={14} />
        </span>
      </div>
      <div className={styles.summary}>
        <div className={styles.pane}>
          <span className={m.tableHead}>Answer score</span>
          <span className={styles.scoreLine}>
            <span className={styles.bigNumber}>3</span>
            <Chip tone="blue">Very Low</Chip>
          </span>
          <div className={styles.scale}>
            {SCALE.map(([rating, bound]) => (
              <span key={rating} className={clsx(styles.scaleStep, rating === 'Very Low' && styles.scaleActive)}>
                <span className={styles.scaleBar} />
                <span>{rating}</span>
                <span>{bound}</span>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.pane}>
          <span className={m.tableHead}>Coverage</span>
          <span className={styles.scoreLine}>
            <span className={styles.bigNumber}>9</span>
            <span className={m.hint}>questions answered</span>
          </span>
          <span className={m.hint}>1 answer adds to the score</span>
          <span className={m.hint}>8 controls confirmed in place</span>
        </div>
        <div className={styles.pane}>
          <span className={m.tableHead}>Where the score comes from</span>
          {SOURCES.map(({label, score}) => (
            <span key={label} className={styles.source}>
              <span className={m.truncate}>{label}</span>
              <span className={styles.meter} style={{'--fill': score > 0 ? '100%' : '0%'} as CSSProperties} />
              <span className={m.hint}>{score > 0 ? `${score} · 100%` : score}</span>
            </span>
          ))}
        </div>
      </div>
      <span className={m.hint}>Categories are sorted by highest score first. Expand one to see its answers and notes.</span>
      <div className={m.card}>
        <div className={m.scroll}>
          <div className={clsx(m.table, styles.wideTable)}>
            <div className={clsx(m.row, styles.categoryRow, styles.headRow)}>
              <span>Category</span>
              <span>Score</span>
            </div>
            {SOURCES.map(({label, score, answers}, index) => (
              <div key={label}>
                <div className={clsx(m.row, styles.categoryRow)}>
                  <WithIcon icon={index === 0 ? <ChevronDown size={14} /> : <ChevronRight size={14} />}>
                    {label}
                    <span className={m.hint}>
                      {answers} {answers === 1 ? 'answer' : 'answers'}
                    </span>
                  </WithIcon>
                  <span>{score}</span>
                </div>
                {index === 0 && (
                  <div className={styles.answers}>
                    <div className={clsx(m.row, styles.answerRow, styles.headRow)}>
                      <span className={m.withIcon}>
                        Question <Info size={12} />
                      </span>
                      <span>Answer</span>
                      <span>Impact</span>
                      <span>Likelihood</span>
                      <span>Score</span>
                      <span>Notes / evidence</span>
                    </div>
                    {ANSWERS.map((row) => (
                      <div key={row.questionKey} className={clsx(m.row, styles.answerRow)}>
                        <span className={styles.questionText}>
                          <span>{row.question}</span>
                          <span className={m.pill}>{row.questionKey}</span>
                        </span>
                        <span>{row.answer}</span>
                        <span>
                          <Chip tone={row.impactTone}>{row.impact}</Chip>
                        </span>
                        <span>
                          <Chip tone="blue">{row.likelihood}</Chip>
                        </span>
                        <span>{row.score}</span>
                        <span className={m.hint}>{row.notes}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <small>Score = impact × likelihood. A Yes on a yes/no question means the control is in place, so it scores 0, and so does an unanswered question.</small>
    </>
  );
}

const VIEWS: Record<View, {title: string; label: string; body: () => ReactNode}> = {
  questions: {
    title: 'Configure risk scoring',
    label: 'Questions tab of the Configure risk scoring panel: scoring questions grouped by category, each with an on or off switch, default impact, and answer type',
    body: QuestionsView,
  },
  bands: {
    title: 'Configure risk scoring',
    label: 'Scoring and rating bands tab of the Configure risk scoring panel: three options for unanswered questions, and the highest score for each rating from Very Low to Critical',
    body: BandsView,
  },
  results: {
    title: 'Risk Scoring',
    label: "Risk Scoring section of a vendor's Risk Review tab: an answer score of 3 rated Very Low, nine questions answered, and the score broken down by category with answers and notes",
    body: ResultsView,
  },
};

export default function VendorScoringPreview({view}: {view: View}): ReactNode {
  const {title, label, body: Body} = VIEWS[view];
  return (
    <MockupFrame label={label} title={title}>
      <div className={styles.body}>
        <Body />
      </div>
    </MockupFrame>
  );
}
