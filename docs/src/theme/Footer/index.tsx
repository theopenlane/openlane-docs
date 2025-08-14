import { FooterLinkItem, useThemeConfig } from '@docusaurus/theme-common';
import LinkItem from '@theme/Footer/LinkItem';
import ColorModeToggle from '@theme/Navbar/ColorModeToggle';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

function FooterLinksColumn({ column }: { column: any }) {
    return (
        <>
            <div className={styles.title}>{column.title}</div>
            <ul className={clsx(styles.footerItem, 'clean-list')}>
                {column.items.map((item: FooterLinkItem, i: number) => (
                    <li key={i} className="footer__item">
                        <LinkItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
}

function Footer() {
    const { footer } = useThemeConfig();
    if (!footer) {
        return null;
    }
    const { links, style } = footer;
    return (
        <footer className={clsx(styles.footer, style)}>
            <div className={styles.container}>
                <div className={clsx('row', styles.top)}>
                    {links.map((column, i) => (
                        <div key={i} className={`col col--2`}>
                            <FooterLinksColumn {...{ column }} />
                        </div>
                    ))
                    }
                </div>
                <div className={clsx('row', styles.bottom)}>
                    <a href="https://www.theopenlane.io" target={'_blank'} rel={'dofollow noreferrer'}>
                        <img src="/img/logo.svg" alt="Logo" className={styles.logo} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
