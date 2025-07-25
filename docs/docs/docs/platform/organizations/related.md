---
title: Related Objects
description: Objects and sections related to Organizations
sidebar_position: 99
---

# Related Objects

Organizations are the foundational tenant structure in Openlane's multi-tenant architecture, serving as the primary container for all compliance activities, resources, and data. They connect to virtually every other platform object as the root organizational entity.

## Primary Relationships

### Users

Users are members of organizations and inherit organization-level access and permissions.

- **User Management** - User accounts and organization membership
- **User Permissions** - Organization-scoped user access controls
- **User Invitations** - Organization invitation and onboarding processes

### Groups

Groups provide organizational structure and access control within organizations.

- **[Groups Overview](../groups/overview.mdx)** - Team and department organization
- **[Group Management](../groups/create.mdx)** - Creating and managing organizational teams

### Organization Settings

Settings define organization-specific configuration and preferences.

- **Configuration Management** - Organization settings and preferences
- **Feature Management** - Enabled features and capabilities per organization

## Owned Resources

### Entities

Business entities and organizational units within the organization.

- **[Entities Overview](../entities/overview.mdx)** - Business units and subsidiaries
- **[Entity Creation](../entities/create.mdx)** - Setting up organizational entities

### Programs

Compliance programs managed and executed by the organization.

- **[Programs Overview](../programs/overview.mdx)** - Organizational compliance programs
- **[Program Creation](../programs/create.mdx)** - Creating organization-specific programs

### Controls

Security controls implemented and maintained by the organization.

- **[Controls Overview](../controls/overview.mdx)** - Organization-wide control implementation
- **[Control Creation](../controls/create.mdx)** - Implementing organizational controls

## Resource Management

### Assets

IT assets and infrastructure owned and managed by the organization.

- **[Assets Overview](../assets/overview.mdx)** - Organizational asset inventory
- **[Asset Creation](../assets/create.mdx)** - Managing organizational assets

### Files

Documents, policies, and other files owned by the organization.

- **File Management** - Organizational document storage and management
- **Document Templates** - Organization-specific templates and standards

### Evidence

Evidence collected and maintained to support organizational compliance.

- **[Evidence Overview](../programs/evidence/overview.mdx)** - Organization-wide evidence collection
- **[Evidence Management](../programs/evidence/create.mdx)** - Managing compliance evidence

## Compliance Management

### Risks

Risks identified, assessed, and managed at the organizational level.

- **[Risks Overview](../risks/overview.mdx)** - Enterprise risk management
- **[Risk Management Guide](../risks/risk-management-guide.mdx)** - Organization-level risk strategies

### Policies

Organizational policies and procedures governing compliance activities.

- **[Policies Overview](../policies/overview.mdx)** - Organization policy framework
- **[Policy Creation](../policies/create.mdx)** - Developing organizational policies

### Standards

Compliance standards and frameworks applicable to the organization.

- **[Standards Overview](../standards/overview.mdx)** - Organizational compliance frameworks
- **[SOC 2](../standards/soc2/overview.mdx)** - SOC 2 for service organizations
- **[ISO 27001](../standards/iso27001/overview.mdx)** - ISO implementation for enterprises

## Operational Relationships

### Tasks

Tasks assigned and managed within the organizational context.

- **[Tasks Overview](../tasks/overview.mdx)** - Organization-wide task management
- **[Task Creation](../tasks/create.mdx)** - Creating organizational tasks

### Action Plans

Action plans for addressing organizational compliance gaps and improvements.

- **[Action Plans Overview](../programs/actionplans/overview.mdx)** - Organization-wide improvement plans
- **[Action Plan Creation](../programs/actionplans/create.mdx)** - Planning organizational improvements

### Questionnaires

Questionnaires used for organizational assessments and evaluations.

- **[Questionnaires Overview](../questionnaires/overview.mdx)** - Organization assessment tools
- **[Questionnaire Creation](../questionnaires/create.mdx)** - Creating organizational assessments

## System Integration

### Integrations

Third-party system integrations configured for the organization.

- **[Integrations Overview](../integrations/overview.mdx)** - Organizational system integrations
- **[Integration Setup](../integrations/create.mdx)** - Configuring organization-specific integrations

### Trust Center

Public-facing trust center for service organizations.

- **[Trust Center Overview](../trust-center/overview.mdx)** - Organizational transparency and compliance
- **[Trust Center Setup](../trust-center/create.mdx)** - Creating organizational trust centers

### Reporting

Organization-level compliance reporting and analytics.

- **[Reporting Overview](../reporting/overview.mdx)** - Organizational compliance dashboards
- **[Report Creation](../reporting/create.mdx)** - Creating organization-wide reports

## Audit and Compliance

### Audit Support

Organization-wide audit coordination and management.

- **[Audit Overview](../audit/overview.mdx)** - Organizational audit management
- **[Gap Analysis](../audit/gapanalysis/overview.mdx)** - Organization-wide compliance gaps

### Narratives

Organizational narratives and documentation for compliance storytelling.

- **[Narratives Overview](../programs/narratives/overview.mdx)** - Organizational compliance narratives
- **[Narrative Creation](../programs/narratives/create.mdx)** - Creating organizational stories

## Developer Resources

### API Documentation

Technical resources for organization management and integration.

- **[GraphQL API](../../api/graph-api/queries.md)** - Organization management operations
- **[REST API](../../api/rest-api/)** - Organization API endpoints

### Development Tools

Resources for developers building organization-aware applications.

- **[API Tokens](../../developers/api-tokens/overview.mdx)** - Organization-scoped API authentication
- **[Developer Overview](../../developers/overview.mdx)** - Multi-tenant development considerations

## Multi-Tenant Architecture

### Data Isolation

Organizations provide complete data isolation in multi-tenant environments.

- **Tenant Separation** - Physical and logical data separation
- **Resource Allocation** - Organization-specific resource provisioning
- **Security Boundaries** - Organization-level security controls

### Subscription Management

Organizations are tied to specific subscription plans and billing.

- **Billing Management** - Organization-specific billing and invoicing
- **Feature Access** - Subscription-based feature availability
- **Usage Monitoring** - Organization-level resource usage tracking

## Organization Types

### Enterprise Organizations

Large organizations with complex compliance requirements and multiple entities.

- **Multi-Entity Management** - Managing subsidiaries and business units
- **Regulatory Complexity** - Multiple jurisdictional requirements
- **Scale Considerations** - Enterprise-scale resource management

### Small-Medium Organizations

Growing organizations with focused compliance needs.

- **Simplified Structure** - Single-entity focus with targeted compliance
- **Resource Efficiency** - Optimized resource allocation for smaller teams
- **Growth Planning** - Scalable compliance program development

### Service Organizations

Organizations providing services to other organizations.

- **Customer Compliance** - Supporting customer compliance requirements
- **Trust Center Management** - Public compliance transparency
- **Service Attestations** - SOC reports and compliance certifications

## Best Practices

### Organization Setup

1. **Clear Structure** - Define clear organizational boundaries and relationships
2. **Proper Configuration** - Complete initial setup and configuration
3. **Security Hardening** - Implement organization-level security measures
4. **Compliance Planning** - Establish compliance frameworks from the start

### Multi-Tenant Management

1. **Data Isolation** - Maintain strict separation between organizations
2. **Resource Planning** - Allocate resources based on organizational needs
3. **Performance Monitoring** - Track performance across all organizations
4. **Scalability Design** - Plan for organizational growth and expansion

### Compliance Excellence

1. **Framework Selection** - Choose appropriate compliance frameworks
2. **Continuous Monitoring** - Implement ongoing compliance monitoring
3. **Documentation Management** - Maintain comprehensive compliance records
4. **Regular Assessment** - Conduct periodic compliance evaluations

## Navigation Tips

- **[Platform Overview](../overview.mdx)** - Understanding organizations in the broader platform context
- **[Quickstart Guide](../quickstart/overview.mdx)** - Getting started with organization management
- **[Glossary](../glossary.mdx)** - Organization-related terminology and definitions
