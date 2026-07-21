import React, {type ReactNode} from 'react';

type CalloutType = 'note' | 'tip' | 'info' | 'warning' | 'danger';

const VARIANT: Record<CalloutType, string> = {
  note: 'secondary',
  tip: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};

type Props = {
  type?: CalloutType;
  title?: string;
  open?: boolean;
  children: ReactNode;
};

/**
 * Collapsible admonition. Renders a <details> styled like the (compact)
 * theme admonitions, collapsed by default:
 *
 *   import Callout from '@site/src/components/Callout';
 *
 *   <Callout type="warning" title="Exception">
 *     Emergency administrator accounts may be exempt from SSO...
 *   </Callout>
 *
 * Pass `open` to render expanded on load.
 */
export default function Callout({type = 'note', title, open = false, children}: Props) {
  return (
    <details className={`alert alert--${VARIANT[type]} callout-collapsible`} open={open || undefined}>
      <summary>{title ?? type.charAt(0).toUpperCase() + type.slice(1)}</summary>
      <div className="callout-collapsible__content">{children}</div>
    </details>
  );
}
