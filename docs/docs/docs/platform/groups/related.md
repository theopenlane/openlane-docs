---
title: Related Objects
description: Objects and sections related to Groups
sidebar_position: 99
---

# Related Objects

Groups provide the organizational foundation for access control and team collaboration across all compliance activities. They connect with virtually every other platform object to enable role-based permissions and responsibility management.

## Primary Relationships

### Organizations

Groups belong to organizations and provide structure within multi-tenant environments.

- **[Organizations Overview](../organizations/overview.mdx)** - Parent organization management and multi-tenant structure

### Users

Users are members of groups and inherit group-based permissions and responsibilities.

- **[User Management](../users/overview.mdx)** - User accounts and authentication
- **[User Permissions](../users/permissions.mdx)** - Individual user access controls

### Group Membership

Direct relationship managing user participation in groups with specific roles.

- **Group Membership Management** - Role assignments and membership lifecycle

## Access Control Relationships

### Entities

Groups control access to specific business entities and their associated compliance objects.

- **[Entities Overview](../entities/overview.mdx)** - Business units and organizational components
- **[Entity Permissions](../entities/permissions.mdx)** - Entity-based access control

### Controls

Groups are assigned responsibility for implementing, monitoring, and maintaining controls.

- **[Controls Overview](../controls/overview.mdx)** - Control implementation and ownership
- **[Control Permissions](../controls/permissions.mdx)** - Control-specific access rights

### Evidence

Groups collect, review, and maintain evidence for compliance demonstrations.

- **[Evidence Overview](../programs/evidence/overview.mdx)** - Evidence collection and management
- **[Evidence Collection](../programs/evidence/create.mdx)** - Team-based evidence gathering

## Compliance Management

### Programs

Groups are responsible for executing specific compliance programs and initiatives.

- **[Programs Overview](../programs/overview.mdx)** - Compliance program management
- **[Program Creation](../programs/create.mdx)** - Team-based program execution

### Risks

Groups are assigned ownership and responsibility for risk assessment and management.

- **[Risks Overview](../risks/overview.mdx)** - Risk ownership and accountability
- **[Risk Management Guide](../risks/risk-management-guide.mdx)** - Team-based risk management

### Tasks

Groups are assigned compliance tasks and coordinate task execution across team members.

- **[Tasks Overview](../tasks/overview.mdx)** - Team task assignment and coordination
- **[Task Creation](../tasks/create.mdx)** - Creating group-assigned tasks

## Governance Relationships

### Policies

Groups may have different access levels to policies based on their organizational role.

- **[Policies Overview](../policies/overview.mdx)** - Policy access and approval workflows
- **[Policy Creation](../policies/create.mdx)** - Team-based policy development

### Standards

Groups implement compliance requirements from various standards and frameworks.

- **[Standards Overview](../standards/overview.mdx)** - Framework-specific group responsibilities
- **[SOC 2](../standards/soc2/overview.mdx)** - SOC 2 team structure and roles
- **[ISO 27001](../standards/iso27001/overview.mdx)** - ISO implementation team organization

### Action Plans

Groups execute action plans to address compliance gaps and improvement initiatives.

- **[Action Plans Overview](../programs/actionplans/overview.mdx)** - Team-based remediation efforts
- **[Action Plan Creation](../programs/actionplans/create.mdx)** - Group assignment and coordination

## Operational Relationships

### Assets

Groups have access to and responsibility for specific IT assets and infrastructure.

- **[Assets Overview](../assets/overview.mdx)** - Asset ownership and management responsibilities
- **[Asset Creation](../assets/create.mdx)** - Team-based asset management

### Integrations

Groups configure and manage integrations with external systems and tools.

- **[Integrations Overview](../integrations/overview.mdx)** - Team-specific integration management
- **[Integration Setup](../integrations/create.mdx)** - Group-based integration configuration

### Files

Groups manage document access, version control, and collaboration on compliance documentation.

- **File Management** - Document permissions and collaborative editing
- **Document Templates** - Group-specific templates and standards

## Audit and Reporting

### Audit Support

Groups coordinate audit activities and provide evidence to auditors.

- **[Audit Overview](../audit/overview.mdx)** - Team coordination during audits
- **[Gap Analysis](../audit/gapanalysis/overview.mdx)** - Group-based gap remediation

### Reporting

Groups generate and review compliance reports specific to their areas of responsibility.

- **[Reporting Overview](../reporting/overview.mdx)** - Team-specific reporting and dashboards
- **[Report Creation](../reporting/create.mdx)** - Group-based report generation

### Questionnaires

Groups may be responsible for completing compliance questionnaires and assessments.

- **[Questionnaires Overview](../questionnaires/overview.mdx)** - Team-based questionnaire completion
- **[Questionnaire Creation](../questionnaires/create.mdx)** - Group assignment and coordination

## Developer Resources

### API Documentation

Technical resources for managing groups programmatically.

- **[GraphQL API](../../api/graph-api/queries.md)** - Group management operations
- **[REST API](../../api/rest-api/)** - Group API endpoints

### Development Tools

Resources for developers building group-aware applications.

- **[API Tokens](../../developers/api-tokens/overview.mdx)** - Group-scoped API authentication
- **[Developer Overview](../../developers/overview.mdx)** - Multi-group development considerations

## Common Group Types

### Functional Groups

Groups organized by job function or expertise area.

- **Security Team**: Responsible for security controls and risk management
- **Compliance Officers**: Overall compliance program oversight
- **IT Administration**: Technical implementation and system management
- **Audit Team**: Internal audit coordination and external audit support

### Organizational Groups

Groups based on organizational structure and hierarchy.

- **Executive Team**: Strategic oversight and governance decisions
- **Department Groups**: Functional department-specific compliance
- **Regional Teams**: Geographic or location-based organization
- **Business Units**: Division or subsidiary-specific groups

### Project Groups

Temporary groups for specific compliance initiatives.

- **SOC 2 Audit Team**: Dedicated team for SOC 2 preparation and audit
- **Risk Assessment Team**: Specialized risk evaluation projects
- **Implementation Team**: New system or process implementation
- **Remediation Team**: Gap remediation and improvement projects

### Approval Groups

Groups with authority to approve compliance decisions.

- **Risk Committee**: Risk assessment and treatment approval
- **Compliance Committee**: Policy and procedure approval
- **Change Control Board**: Change management approval authority
- **Executive Approval**: High-level governance and strategic decisions

## Permission Patterns

### Role-Based Access Control (RBAC)

Groups implement RBAC patterns for systematic permission management.

- **Admin Roles**: Full administrative access within scope
- **Contributor Roles**: Read-write access for active participation
- **Reviewer Roles**: Review and approval permissions
- **Read-Only Roles**: View-only access for reporting and oversight

### Segregation of Duties

Groups support compliance requirement for separation of responsibilities.

- **Control Implementation**: Separate from control testing
- **Risk Assessment**: Separate from risk treatment approval
- **Evidence Collection**: Separate from evidence review
- **Audit Preparation**: Separate from audit oversight

## Best Practices

### Group Design

1. **Clear Purpose**: Define specific responsibilities and scope
2. **Appropriate Size**: Balance collaboration with manageability
3. **Logical Hierarchy**: Create intuitive organizational structure
4. **Consistent Naming**: Use standardized naming conventions

### Permission Management

1. **Least Privilege**: Grant minimum necessary permissions
2. **Regular Reviews**: Periodic access rights audits
3. **Documentation**: Clear rationale for permission assignments
4. **Audit Trails**: Complete history of permission changes

### Operational Excellence

1. **Clear Communication**: Established channels and protocols
2. **Defined Processes**: Standardized workflows and procedures
3. **Performance Monitoring**: Track group effectiveness and efficiency
4. **Continuous Improvement**: Regular assessment and optimization

## Navigation Tips

- **[Platform Overview](../overview.mdx)** - Understanding groups in the broader platform context
- **[Quickstart Guide](../quickstart/overview.mdx)** - Getting started with group management
- **[Glossary](../glossary.mdx)** - Group-related terminology and definitions
