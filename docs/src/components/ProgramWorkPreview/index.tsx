import type {ReactNode} from 'react';
import clsx from 'clsx';
import {ClipboardCheck, Columns3, FileText, Filter, Fingerprint, LayoutDashboard, LayoutGrid, LayoutList, Search, SlidersHorizontal, Table, Workflow, type LucideIcon} from 'lucide-react';
import {Badge, IconTile, MockupFrame, WithIcon, mockupStyles as m} from '@site/src/components/ConsoleMockup';
import styles from './styles.module.css';

// Theme-aware illustration of a program's Work tab
type View = 'table' | 'board';

type WorkStatus = 'Open' | 'In Progress' | 'In Review';

type WorkType = 'Task' | 'Control' | 'Evidence' | 'Internal Policy' | 'Procedure';

type WorkItem = {
  item: string;
  type: WorkType;
  status: WorkStatus;
  attention?: string;
  overdue?: boolean;
  owner: string;
  due?: string;
  related: string;
};

const TYPE_ICONS: Record<WorkType, {icon: LucideIcon; className: string}> = {
  Task: {icon: ClipboardCheck, className: styles.typeTask},
  Control: {icon: SlidersHorizontal, className: styles.typeControl},
  Evidence: {icon: Fingerprint, className: styles.typeEvidence},
  'Internal Policy': {icon: FileText, className: styles.typePolicy},
  Procedure: {icon: Workflow, className: styles.typeProcedure},
};

const STATUS_DOT: Record<WorkStatus, string> = {
  Open: styles.dotOpen,
  'In Progress': styles.dotInProgress,
  'In Review': styles.dotInReview,
};

const ITEMS: WorkItem[] = [
  {item: 'Review vendor SOC 2 reports', type: 'Task', status: 'Open', overdue: true, owner: 'Avery Jordan', due: 'May 22, 2026', related: 'CC9.2'},
  {item: 'CC6.1', type: 'Control', status: 'Open', attention: 'Not Implemented', owner: 'Riley Chen', related: 'SOC 2'},
  {item: 'Quarterly access review export', type: 'Evidence', status: 'Open', attention: 'Needs Renewal', owner: 'Riley Chen', related: 'CC6.2'},
  {item: 'Set up secondary environment', type: 'Task', status: 'In Progress', owner: 'Avery Jordan', due: 'Jun 30, 2026', related: 'CC7.2'},
  {item: 'CC8.1', type: 'Control', status: 'In Progress', attention: 'Changes Requested', owner: 'Jordan Lee', related: 'SOC 2'},
  {item: 'Access Control Policy', type: 'Internal Policy', status: 'In Progress', attention: 'Draft', owner: 'Jordan Lee', related: 'CC6.1'},
  {item: 'Penetration test report', type: 'Evidence', status: 'In Review', attention: 'Submitted', owner: 'Avery Jordan', related: 'CC4.1'},
];

const STATS: {label: string; count: number; type?: WorkType}[] = [
  {label: 'Total', count: 7},
  {label: 'Tasks', count: 2, type: 'Task'},
  {label: 'Controls', count: 2, type: 'Control'},
  {label: 'Evidence', count: 2, type: 'Evidence'},
  {label: 'Internal Policies', count: 1, type: 'Internal Policy'},
  {label: 'Procedures', count: 0, type: 'Procedure'},
];

const STATUSES: WorkStatus[] = ['Open', 'In Progress', 'In Review'];

function TypeIcon({type, size = 14}: {type: WorkType; size?: number}) {
  const {icon: Icon, className} = TYPE_ICONS[type];
  return <Icon size={size} className={className} />;
}

function StatusCell({status}: {status: WorkStatus}) {
  return <WithIcon icon={<span className={clsx(styles.dot, STATUS_DOT[status])} />}>{status}</WithIcon>;
}

function Initials({name}: {name: string}) {
  return (
    <WithIcon icon={<span className={styles.avatar}>{name.split(' ').map((part) => part[0]).join('')}</span>}>
      <span className={m.truncate}>{name}</span>
    </WithIcon>
  );
}

function Attention({item}: {item: WorkItem}) {
  if (!item.attention && !item.overdue) return <span className={m.hint}>—</span>;
  return (
    <span className={styles.attention}>
      {item.attention && <span>{item.attention}</span>}
      {item.overdue && <Badge tone="danger">Overdue</Badge>}
    </span>
  );
}

function WorkTable() {
  return (
    <div className={m.card}>
      <div className={m.scroll}>
        <div className={clsx(m.table, styles.wideTable)}>
          <div className={clsx(m.row, styles.workRow, m.tableHead)}>
            <span>Item</span>
            <span>Type</span>
            <span>Work status</span>
            <span>Attention</span>
            <span>Owner</span>
            <span>Due date</span>
            <span>Related to</span>
          </div>
          {ITEMS.map((item) => (
            <div key={item.item} className={clsx(m.row, styles.workRow)}>
              <span className={clsx(m.link, m.truncate)}>{item.item}</span>
              <WithIcon icon={<TypeIcon type={item.type} />}>
                <span className={m.truncate}>{item.type}</span>
              </WithIcon>
              <StatusCell status={item.status} />
              <Attention item={item} />
              <Initials name={item.owner} />
              <span>{item.due ?? <span className={m.hint}>—</span>}</span>
              <span>
                <span className={m.pill}>{item.related}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkBoard() {
  return (
    <div className={styles.board}>
      {STATUSES.map((status) => {
        const columnItems = ITEMS.filter((item) => item.status === status);
        return (
          <div key={status} className={styles.column}>
            <div className={styles.columnHead}>
              <StatusCell status={status} />
              <span className={styles.count}>{columnItems.length}</span>
            </div>
            {columnItems.map((item) => (
              <div key={item.item} className={m.card}>
                <span className={m.link}>{item.item}</span>
                <span className={styles.chips}>
                  <span className={m.tag}>
                    <WithIcon icon={<TypeIcon type={item.type} size={12} />}>{item.type}</WithIcon>
                  </span>
                  {item.overdue && <Badge tone="danger">Overdue</Badge>}
                </span>
                <Initials name={item.owner} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

const ARIA_LABELS: Record<View, string> = {
  table: "A program's Work tab in table view: summary counts by type, then outstanding tasks, controls, evidence, and policies with their work status, attention, owner, due date, and related control",
  board: "A program's Work tab in board view: outstanding items grouped into Open, In Progress, and In Review columns",
};

export default function ProgramWorkPreview({view = 'table'}: {view?: View}): ReactNode {
  return (
    <MockupFrame label={ARIA_LABELS[view]} title="SOC 2 - 2026">
      <div className={styles.tabs}>
        <WithIcon icon={<LayoutDashboard size={14} />}>Overview</WithIcon>
        <span className={styles.tabActive}>
          <WithIcon icon={<LayoutList size={14} />}>Work</WithIcon>
        </span>
      </div>
      <div className={styles.stats}>
        {STATS.map(({label, count, type}, index) => (
          <div key={label} className={clsx(m.card, styles.statCard, index === 0 && m.cardActive)}>
            <IconTile>{type ? <TypeIcon type={type} size={18} /> : <LayoutList size={18} className={m.hint} />}</IconTile>
            <span className={styles.statText}>
              <span className={styles.statValue}>{count}</span>
              <small className={m.truncate}>{label}</small>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.toolbar}>
        <span className={styles.searchBox}>
          <WithIcon icon={<Search size={14} />}>Search work</WithIcon>
        </span>
        <span className={styles.toggle}>
          <span className={view === 'table' ? styles.toggleActive : undefined}>
            <WithIcon icon={<Table size={14} />}>Table</WithIcon>
          </span>
          <span className={view === 'board' ? styles.toggleActive : undefined}>
            <WithIcon icon={<LayoutGrid size={14} />}>Board</WithIcon>
          </span>
        </span>
        <span className={styles.toolbarRight}>
          {view === 'table' && (
            <span className={m.buttonSecondary}>
              <WithIcon icon={<Columns3 size={14} />}>Columns</WithIcon>
            </span>
          )}
          <span className={m.buttonSecondary}>
            <WithIcon icon={<Filter size={14} />}>
              Filter <span className={styles.filterCount}>1</span>
            </WithIcon>
          </span>
        </span>
      </div>
      {view === 'table' ? <WorkTable /> : <WorkBoard />}
    </MockupFrame>
  );
}
