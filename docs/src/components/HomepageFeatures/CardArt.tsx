import React from 'react';
import Icon from './Icon';

/* The illustrated panels at the top of each area card. Pure decoration:
   edit text and links in index.tsx, edit artwork here. Each art block is
   keyed by the area key used in the AREAS list. */

const panelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '240px',
  background: 'var(--dl-panel)',
  borderBottom: '1px solid var(--dl-line-3)',
  padding: '22px',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
};

const gridOverlay: React.CSSProperties = {
  position: 'absolute',
  inset: '0',
  backgroundImage:
    'linear-gradient(var(--dl-grid) 1px, transparent 1px), linear-gradient(90deg, var(--dl-grid) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
};

function Panel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span id={id} style={panelStyle}>
      <span style={gridOverlay}></span>
      {children}
    </span>
  );
}

function GrcPillar({ accent, title, question, tags }: { accent: string; title: string; question: string; tags: React.ReactNode }) {
  return (
    <span style={{flex: '1', minWidth: '0', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderTop: `2px solid ${accent}`, borderRadius: '8px', padding: '12px 12px 13px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <span style={{fontSize: '12.5px', fontWeight: '500', lineHeight: '1.25', color: 'var(--dl-fg)', height: '32px'}}>{title}</span>
      <span style={{fontSize: '10.5px', lineHeight: '1.5', color: 'var(--dl-fg2)', textWrap: 'pretty', height: '64px'}}>{question}</span>
      <span style={{marginTop: '2px', paddingTop: '9px', borderTop: '1px solid var(--dl-line-3)', fontFamily: '\'JetBrains Mono\', monospace', fontSize: '8px', letterSpacing: '0.04em', lineHeight: '1.6', color: 'var(--dl-accent)'}}>{tags}</span>
    </span>
  );
}

function GrcArt() {
  return (
    <Panel id="art-grc">
      <span style={{position: 'relative', flex: '1', display: 'flex', gap: '8px'}}>
        <GrcPillar accent="#3578BE" title="Governance" question="Who decides, and how is it enforced?" tags={<>POLICIES · APPROVALS<br />PERMISSIONS</>} />
        <GrcPillar accent="#FFB536" title="Risk Management" question="What could hurt us, and what are we doing about it?" tags={<>RISK REGISTER<br />EXPOSURE</>} />
        <GrcPillar accent="var(--dl-accent-2)" title="Compliance" question="Are we meeting our obligations, and can we prove it?" tags={<>CONTROLS · EVIDENCE<br />PROGRAMS</>} />
      </span>
    </Panel>
  );
}

function FrameworkRow({ name, pct, color, count, dim, delay }: { name: string; pct: string; color: string; count: string; dim?: boolean; delay?: string }) {
  return (
    <span style={{flex: '1', display: 'flex', alignItems: 'center', gap: '11px', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '8px', padding: '9px 12px'}}>
      <span style={{fontSize: '12.5px', color: 'var(--dl-fg)', width: '64px'}}>{name}</span>
      <span style={{flex: '1', height: '6px', borderRadius: '99px', background: 'var(--dl-line-3)', overflow: 'hidden'}}>
        <span className="dlAnimFill" style={{display: 'block', width: pct, height: '100%', background: color, transformOrigin: 'left', animationDelay: delay ?? '0s'}}></span>
      </span>
      <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '10px', color: dim ? 'var(--dl-fg2)' : 'var(--dl-accent)', width: '42px', textAlign: 'right'}}>{count}</span>
    </span>
  );
}

function ComplianceArt() {
  return (
    <Panel id="art-compliance">
      <span style={{position: 'relative', flex: '1', display: 'flex', flexDirection: 'column', gap: '9px'}}>
        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px'}}>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--dl-fg2)'}}>FRAMEWORK PROGRESS</span>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '10px', color: 'var(--dl-accent)'}}>141 CONTROLS</span>
        </span>
        <FrameworkRow name="SOC 2" pct="92%" color="#29ABE2" count="61/66" />
        <FrameworkRow name="ISO 27001" pct="64%" color="#1E3A8A" count="59/93" delay=".35s" />
        <FrameworkRow name="HIPAA" pct="38%" color="#1E3A8A" count="21/54" dim delay=".7s" />
      </span>
    </Panel>
  );
}

function RegistryStat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <span style={{background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '7px'}}>
      <Icon n={icon} style={{color: 'var(--dl-accent)', width: '15px', height: '15px'}} />
      <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9px', letterSpacing: '0.04em', color: 'var(--dl-fg2)'}}>{label}</span>
      <span style={{fontSize: '15px', fontWeight: '500', color: 'var(--dl-fg)'}}>{value}</span>
    </span>
  );
}

function RegistryArt() {
  return (
    <Panel id="art-registry">
      <span style={{position: 'relative', flex: '1.15', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px'}}>
        <RegistryStat icon="box" label="ASSETS" value="312" />
        <RegistryStat icon="handshake" label="VENDORS" value="61" />
        <RegistryStat icon="users" label="PERSONNEL" value="148" />
      </span>
      <span style={{position: 'relative', flex: '1', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '9px'}}>
        <span className="dlAnimDrop" style={{flex: '1', display: 'flex', alignItems: 'center', gap: '9px', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '7px', padding: '7px 10px'}}>
          <span style={{width: '6px', height: '6px', borderRadius: '99px', background: '#21C55D'}}></span>
          <span style={{flex: '1', fontSize: '11.5px', color: 'var(--dl-fg)'}}>prod-us-east · RDS cluster</span>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9px', color: '#15803D', background: 'rgba(33,197,93,.16)', borderRadius: '99px', padding: '2px 7px'}}>IN SCOPE</span>
        </span>
        <span className="dlAnimDrop" style={{flex: '1', display: 'flex', alignItems: 'center', gap: '9px', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '7px', padding: '7px 10px', animationDelay: '.4s'}}>
          <span style={{width: '6px', height: '6px', borderRadius: '99px', background: 'var(--dl-line-strong)'}}></span>
          <span style={{flex: '1', fontSize: '11.5px', color: 'var(--dl-fg2)'}}>design-sandbox · Figma</span>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9px', color: 'var(--dl-fg2)', background: 'var(--dl-line-3)', borderRadius: '99px', padding: '2px 7px'}}>OUT OF SCOPE</span>
        </span>
      </span>
    </Panel>
  );
}

function ExposureBar({ label, count, segments }: { label: string; count: string; segments: Array<{ width?: string; color: string }> }) {
  return (
    <span style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9.5px', letterSpacing: '0.04em', color: 'var(--dl-fg2)'}}>{label}</span>
        <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9.5px', color: 'var(--dl-fg)'}}>{count}</span>
      </span>
      <span style={{display: 'flex', gap: '3px', height: '7px'}}>
        {segments.map((s, i) => (
          <span key={i} style={s.width ? {width: s.width, borderRadius: '99px', background: s.color} : {flex: '1', borderRadius: '99px', background: s.color}}></span>
        ))}
      </span>
    </span>
  );
}

function ExposureArt() {
  return (
    <Panel id="art-exposure">
      <span style={{position: 'relative', flex: '1', display: 'flex', flexDirection: 'column', gap: '12px', boxSizing: 'border-box', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '10px', padding: '14px'}}>
        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--dl-line-3)', paddingBottom: '9px'}}>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--dl-fg2)'}}>OPEN EXPOSURE</span>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '10px', color: '#EF4444'}}>4 CRITICAL</span>
        </span>
        <ExposureBar label="VULNERABILITIES" count="6" segments={[{width: '14%', color: '#EF4444'}, {width: '22%', color: '#FFB536'}, {color: 'var(--dl-shadow)'}]} />
        <ExposureBar label="FINDINGS" count="161" segments={[{width: '8%', color: '#EF4444'}, {width: '30%', color: '#FFB536'}, {color: '#3578BE'}]} />
        <ExposureBar label="RISKS" count="11" segments={[{width: '26%', color: '#EF4444'}, {width: '34%', color: '#FFB536'}, {color: 'var(--dl-shadow)'}]} />
      </span>
    </Panel>
  );
}

function TrustUpdate({ text, dotColor, opacity, dim }: { text: string; dotColor: string; opacity?: string; dim?: boolean }) {
  return (
    <span style={{display: 'flex', alignItems: 'center', gap: '6px', minWidth: '0', opacity}}>
      <span style={{width: '5px', height: '5px', borderRadius: '99px', background: dotColor, flex: 'none'}}></span>
      <span style={{fontSize: '10px', color: dim ? 'var(--dl-fg2)' : 'var(--dl-fg)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{text}</span>
    </span>
  );
}

function TrustArt() {
  return (
    <Panel id="art-trust">
      <span style={{position: 'relative', flex: '1', display: 'flex', flexDirection: 'column', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '10px', overflow: 'hidden'}}>
        <span style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', borderBottom: '1px solid var(--dl-line-3)'}}>
          <span style={{width: '6px', height: '6px', borderRadius: '99px', background: 'var(--dl-line)'}}></span>
          <span style={{width: '6px', height: '6px', borderRadius: '99px', background: 'var(--dl-line)'}}></span>
          <span style={{flex: '1'}}></span>
          <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '9px', color: 'var(--dl-fg2)'}}>trust.acme.com</span>
        </span>
        <span style={{flex: '1', display: 'flex', gap: '7px', padding: '12px'}}>
          <span style={{flex: '1', border: '1px solid var(--dl-line-2)', borderRadius: '7px', padding: '10px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'}}>
            <span style={{width: '22px', height: '22px', borderRadius: '99px', border: '2px solid #29ABE2', boxSizing: 'border-box'}}></span>
            <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '8.5px', color: 'var(--dl-fg)'}}>SOC 2</span>
          </span>
          <span style={{flex: '1', border: '1px solid var(--dl-line-2)', borderRadius: '7px', padding: '10px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'}}>
            <span style={{width: '22px', height: '22px', borderRadius: '99px', border: '2px solid #1E3A8A', boxSizing: 'border-box'}}></span>
            <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '8.5px', color: 'var(--dl-fg)'}}>ISO</span>
          </span>
          <span style={{flex: '2', border: '1px solid var(--dl-line-2)', borderRadius: '7px', padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '6px', minWidth: '0'}}>
            <span style={{fontFamily: '\'JetBrains Mono\', monospace', fontSize: '8px', letterSpacing: '0.06em', color: 'var(--dl-fg2)'}}>LATEST UPDATES</span>
            <TrustUpdate text="SOC 2 Type II renewed" dotColor="var(--dl-accent-2)" />
            <TrustUpdate text="R2 added as subprocessor" dotColor="var(--dl-line-strong)" opacity=".75" dim />
            <TrustUpdate text="Pen test completed" dotColor="var(--dl-line-strong)" opacity=".55" dim />
          </span>
        </span>
        <span className="dlAnimDrop" style={{display: 'flex', alignItems: 'center', gap: '8px', margin: '0 12px 12px', border: '1px solid var(--dl-accent-line)', background: 'var(--dl-accent-bg-2)', borderRadius: '7px', padding: '8px 10px', animationDelay: '.5s'}}>
          <Icon n="file-check" style={{color: 'var(--dl-accent)', width: '13px', height: '13px'}} />
          <span style={{fontSize: '11px', color: 'var(--dl-fg)'}}>SOC 2 report — NDA required</span>
        </span>
      </span>
    </Panel>
  );
}

function AutomationStep({ icon, label, text, delay }: { icon: string; label: string; text: string; delay: string }) {
  return (
    <span className="dlAnimStep" style={{flex: '1', display: 'flex', alignItems: 'center', gap: '9px', background: 'var(--dl-card)', border: '1px solid var(--dl-line-2)', borderRadius: '8px', padding: '9px 11px', animationDelay: delay}}>
      <span style={{width: '22px', height: '22px', borderRadius: '6px', background: 'var(--dl-accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>
        <Icon n={icon} style={{color: 'var(--dl-accent)', width: '13px', height: '13px'}} />
      </span>
      <span style={{flex: '1', minWidth: '0'}}>
        <span style={{display: 'block', fontFamily: '\'JetBrains Mono\', monospace', fontSize: '8.5px', letterSpacing: '0.05em', color: 'var(--dl-fg2)'}}>{label}</span>
        <span style={{display: 'block', fontSize: '12px', color: 'var(--dl-fg)'}}>{text}</span>
      </span>
    </span>
  );
}

function StepConnector() {
  return (
    <span style={{flex: 'none', display: 'flex', justifyContent: 'center'}}>
      <span style={{width: '1px', height: '12px', background: 'var(--dl-accent-line-2)'}}></span>
    </span>
  );
}

function AutomationArt() {
  return (
    <Panel id="art-automation">
      <span style={{position: 'relative', flex: '1', display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <AutomationStep icon="calendar-clock" label="TRIGGER" text="Every quarter" delay="0s" />
        <StepConnector />
        <AutomationStep icon="send" label="ACTION" text="Send access review campaign" delay="0.5s" />
        <StepConnector />
        <AutomationStep icon="clipboard-check" label="RESULT" text="14 tasks · evidence attached" delay="1s" />
      </span>
    </Panel>
  );
}

const ART: Record<string, React.ComponentType> = {
  'grc-fundamentals': GrcArt,
  'compliance-management': ComplianceArt,
  'registry': RegistryArt,
  'exposure': ExposureArt,
  'trust-center': TrustArt,
  'automation': AutomationArt,
};

export default function CardArt({ area }: { area: string }) {
  const Art = ART[area];
  return Art ? <Art /> : null;
}
