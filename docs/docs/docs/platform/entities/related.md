---
title: Related Objects
description: Objects and sections related to Entities
sidebar_position: 99
---

# Related Objects

Entities represent business units, subsidiaries, or organizational components and are fundamental to organizing compliance management across different parts of your organization.

## Primary Relationships

### Organizations

Entities belong to and are managed by organizations, providing the top-level structure.

- **[Organizations Overview](../organizations/overview.mdx)** - Parent organization management and multi-tenant structure

### Assets

Assets are associated with specific entities, defining ownership and responsibility boundaries.

- **[Assets Overview](../assets/overview.mdx)** - IT assets and infrastructure inventory
- **[Asset Creation](../assets/create.mdx)** - Managing entity-specific assets

### Groups

Groups represent teams within entities and define access control and responsibilities.

- **[Groups Overview](../groups/overview.mdx)** - Team and department management within entities
- **[Group Permissions](../groups/permissions.mdx)** - Entity-based access control

## Compliance Relationships

### Controls

Controls are implemented at the entity level, with entity-specific ownership and accountability.

- **[Controls Overview](../controls/overview.mdx)** - Control implementation across entities
- **[Control Creation](../controls/create.mdx)** - Setting up entity-specific controls

### Risks

Risks are assessed and managed at the entity level, with entity-specific impact and mitigation.

- **[Risks Overview](../risks/overview.mdx)** - Entity-based risk management
- **[Risk Management Guide](../risks/risk-management-guide.mdx)** - Risk assessment by entity

### Programs

Compliance programs can be scoped to specific entities or span multiple entities.

- **[Programs Overview](../programs/overview.mdx)** - Entity-scoped compliance programs
- **[Program Creation](../programs/create.mdx)** - Multi-entity program management

## Operational Relationships

### Tasks

Tasks are assigned to entities and their associated teams for compliance activities.

- **[Tasks Overview](../tasks/overview.mdx)** - Entity-based task assignment
- **[Task Creation](../tasks/create.mdx)** - Creating entity-specific tasks

### Policies

Policies can be applied at the entity level with entity-specific variations.

- **[Policies Overview](../policies/overview.mdx)** - Entity-level policy management
- **[Policy Creation](../policies/create.mdx)** - Creating entity-specific policies

### Evidence

Evidence collection is organized by entity to support entity-specific compliance requirements.

- **[Evidence Overview](../programs/evidence/overview.mdx)** - Entity-based evidence collection
- **[Evidence Creation](../programs/evidence/create.mdx)** - Collecting entity-specific evidence

## Governance Relationships

### Standards

Standards may apply differently to different entities based on jurisdiction or business type.

- **[Standards Overview](../standards/overview.mdx)** - Framework applicability by entity
- **[SOC 2](../standards/soc2/overview.mdx)** - Entity-specific SOC 2 requirements
- **[ISO 27001](../standards/iso27001/overview.mdx)** - Multi-entity ISO implementations

### Integrations

Integrations connect entity-specific systems and tools for automated compliance management.

- **[Integrations Overview](../integrations/overview.mdx)** - Entity-based system integrations
- **[Integration Setup](../integrations/create.mdx)** - Configuring entity-specific integrations

## Reporting and Analytics

### Reporting

Generate entity-specific reports and roll-up reporting across multiple entities.

- **[Reporting Overview](../reporting/overview.mdx)** - Entity-based compliance reporting
- **[Report Creation](../reporting/create.mdx)** - Multi-entity report aggregation

### Audit Support

Audit activities can be scoped to specific entities or conducted across multiple entities.

- **[Audit Overview](../audit/overview.mdx)** - Entity-scoped audit management
- **[Gap Analysis](../audit/gapanalysis/overview.mdx)** - Entity-specific compliance gaps

## Developer Resources

### API Documentation

Technical resources for working with entities programmatically.

- **[GraphQL API](../../api/graph-api/queries.md)** - GraphQL operations for entity management
- **[REST API](../../api/rest-api/)** - REST endpoints for entity operations

### Development Tools

Resources for developers building entity-aware applications.

- **[API Tokens](../../developers/api-tokens/overview.mdx)** - Entity-scoped API authentication
- **[Developer Overview](../../developers/overview.mdx)** - Multi-entity development considerations

## Common Use Cases

### Multi-Entity Organizations

- **Subsidiary Management**: Managing compliance across legal subsidiaries
- **Geographic Distribution**: Region-specific compliance requirements
- **Business Unit Separation**: Department-specific compliance scopes

### Single-Entity Organizations

- **Department Organization**: Organizing by functional departments
- **Project-Based Structure**: Entity per major project or initiative
- **Location-Based Structure**: Entity per physical location

## Navigation Tips

- **[Platform Overview](../overview.mdx)** - Understanding the overall platform structure
- **[Quickstart Guide](../quickstart/overview.mdx)** - Getting started with entity management
- **[Glossary](../glossary.mdx)** - Definitions of entity-related terms
