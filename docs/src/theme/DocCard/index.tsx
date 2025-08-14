import { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
    useDocById,
    findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';

import type { Props } from '@theme/DocCard';
import Heading from '@theme/Heading';
import type {
    PropSidebarItem,
    PropSidebarItemCategory,
    PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';
import { BoxesIcon, BrickWallShieldIcon, Building2Icon, ChartNetworkIcon, CodeIcon, DatabaseIcon, DatabaseZapIcon, FileIcon, FileJson2Icon, FilePlus2Icon, FilesIcon, FingerprintIcon, FolderGit2, GithubIcon, LibraryIcon, LinkIcon, NetworkIcon, Settings2Icon, ShieldCheckIcon, SlackIcon, TableOfContentsIcon, UsersIcon, WorkflowIcon } from 'lucide-react';


function useCategoryItemsPluralList() {
    const { selectMessage } = usePluralForm();
    return (items: PropSidebarItem[]) => {
        const header = selectMessage(
            items.length,
            translate(
                {
                    message: '1 item|{count} items',
                    id: 'theme.docs.DocCard.categoryDescription.plurals',
                    description:
                        'The default description for a category card in the generated index about how many items this category includes',
                },
                { count: items.length },
            ),
        );
        const list = items.map((msg, idx) => {
            // Only use description if it exists on the item
            let message = "";
            switch (msg.type) {
                case 'category':
                case 'link':
                    message = msg.label;
                    break;
            }

            return selectMessage(
                items.length,
                translate(
                    {
                        message: '{message}',
                        id: `theme.docs.DocCard.categoryDescription.plurals.${idx}`,
                        description:
                            'A description line for each item in a category card in the generated index',
                    },
                    { message },
                ),
            );
        }).join(', ');
        return `${header}\n${list}`;
    };
}

function CardContainer({
    className,
    href,
    children,
}: {
    className?: string;
    href: string;
    children: ReactNode;
}): ReactNode {
    return (
        <Link
            href={href}
            className={clsx('card padding--lg', styles.cardContainer, className)}>
            {children}
        </Link>
    );
}

function CardLayout({
    className,
    href,
    icon,
    title,
    description,
}: {
    className?: string;
    href: string;
    icon: ReactNode;
    title: string;
    description?: string;
}): ReactNode {
    return (
        <CardContainer href={href} className={className}>
            <Heading
                as="h2"
                className={clsx('text--truncate', styles.cardTitle)}
                title={title}>
                {icon} {title}
            </Heading>
            {description && (
                <p
                    className={clsx('text--truncate', styles.cardDescription)}
                    title={description}>
                    {description}
                </p>
            )}
        </CardContainer>
    );
}

function CardCategory({ item }: { item: PropSidebarItemCategory }): ReactNode {
    const href = findFirstSidebarItemLink(item);
    const categoryItemsPluralList = useCategoryItemsPluralList();

    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }

    // Skip categories marked to hide
    if (isHidden(item)) {
        return null;
    }

    // default icon
    let icon = <LibraryIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />


    return (
        <CardLayout
            className={item.className}
            href={href}
            icon={icon}
            title={item.label}
            description={item.description ?? categoryItemsPluralList(item.items)}
        />
    );
}

function CardLink({ item }: { item: PropSidebarItemLink }): ReactNode {
    let icon = getIcon(item);
    const doc = useDocById(item.docId ?? undefined);


    // Skip categories marked to hide
    if (isHidden(item)) {
        return null;
    }

    if (item.customProps?.icon == "SlackIcon") {
        icon = <SlackIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    return (
        <CardLayout
            className={item.className}
            href={item.href}
            icon={icon}
            title={item.label}
            description={item.description ?? doc?.description}
        />
    );
}

export default function DocCard({ item }: Props): ReactNode {
    if ((item.customProps as any)?.hidden || item.className?.includes('hidden')) {
        return null;
    }

    switch (item.type) {
        case 'link':
            return <CardLink item={item} />;
        case 'category':
            return <CardCategory item={item} />;
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}

function isHidden(item: PropSidebarItem): boolean {
    return (item.customProps as any)?.hidden || item.className?.includes('hidden');
}

function getIcon(item: PropSidebarItemLink): ReactNode {
    let icon = <LinkIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />

    if (isInternalUrl(item.href)) {
        icon = <FileIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Control") || item.label.includes("control")) {
        icon = <Settings2Icon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Evidence")) {
        icon = <FingerprintIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Permission")) {
        icon = <ShieldCheckIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Group")) {
        icon = <UsersIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Overview")) {
        icon = <TableOfContentsIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }

    if (item.label.includes("Create")) {
        icon = <FilePlus2Icon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }


    if (item.label.includes("GraphQL")) {
        icon = <FileJson2Icon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
    }


    if (item.customProps?.icon) {
        switch (item.customProps.icon) {
            case "SlackIcon":
                return <SlackIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "GitHubIcon":
                return <GithubIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "CodeIcon":
                return <CodeIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "GitIcon":
                return <FolderGit2 size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "RelationshipsIcon":
            case "WorkflowIcon":
                return <WorkflowIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "ComplianceIcon":
                return <BrickWallShieldIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "DatabaseIcon":
                return <DatabaseIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "NetworkIcon":
                return <NetworkIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "BoxesIcon":
                return <BoxesIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "DatabaseZapIcon":
                return <DatabaseZapIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "FilesIcon":
                return <FilesIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "ChartNetworkIcon":
                return <ChartNetworkIcon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
            case "CompanyIcon":
                return <Building2Icon size={28} style={{ color: 'var(--ifm-color-primary-dark)' }} />;
        }
    }

    return icon;
}