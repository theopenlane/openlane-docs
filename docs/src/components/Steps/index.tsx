import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * Steps renders a wrapped markdown ordered list as a vertical stepper:
 * numbered circles, a connecting guide line, and room for rich content
 * (paragraphs, images, admonitions) inside each step.
 *
 * Usage in MDX (import explicitly — a global MDXComponents override would
 * shadow the one docusaurus-theme-openapi-docs provides and break API pages):
 *
 * import Steps from '@site/src/components/Steps';
 *
 * <Steps>
 * 1. Go to **Organization Settings**
 * 2. Navigate to the **Profile** section
 * </Steps>
 */
export default function Steps({children}: {children: ReactNode}): ReactNode {
  return <div className={styles.steps}>{children}</div>;
}
