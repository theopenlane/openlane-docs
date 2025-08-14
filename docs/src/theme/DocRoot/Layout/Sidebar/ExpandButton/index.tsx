import { type ReactNode } from 'react';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocRoot/Layout/Sidebar/ExpandButton';

import styles from './styles.module.css';
import { PanelRightOpenIcon } from 'lucide-react';

export default function DocRootLayoutSidebarExpandButton({
    toggleSidebar,
}: Props): ReactNode {
    return (
        <div
            className={styles.expandButton}
            title={translate({
                id: 'theme.docs.sidebar.expandButtonTitle',
                message: 'Expand sidebar',
                description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
            })}
            aria-label={translate({
                id: 'theme.docs.sidebar.expandButtonAriaLabel',
                message: 'Expand sidebar',
                description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
            })}
            tabIndex={0}
            role="button"
            onKeyDown={toggleSidebar}
            onClick={toggleSidebar}>
            <PanelRightOpenIcon className={styles.expandButtonIcon} />
        </div>
    );
}