import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/rest-api/openlane-openapi-3-1-1-specifications",
    },
    {
      type: "category",
      label: "Account Management",
      items: [
        {
          type: "doc",
          id: "api/rest-api/user-info",
          label: "UserInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-access",
          label: "AccountAccess",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/account-features",
          label: "AccountFeatures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-features-by-id",
          label: "AccountFeaturesByID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/delete-organization-roles",
          label: "DeleteOrganizationRoles",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest-api/organization-roles",
          label: "OrganizationRoles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/assign-organization-roles",
          label: "AssignOrganizationRoles",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles",
          label: "AccountRoles",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles-me",
          label: "AccountRolesMe",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles-organization",
          label: "AccountRolesOrganization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles-organization-by-id",
          label: "AccountRolesOrganizationByID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/forgot-password",
          label: "ForgotPassword",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/reset-password",
          label: "ResetPassword",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/roles",
          label: "Roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/scopes",
          label: "Scopes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Account Registration",
      items: [
        {
          type: "doc",
          id: "api/rest-api/register",
          label: "Register",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/resend-email",
          label: "ResendVerificationEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/verify-email",
          label: "VerifyEmail",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "api/rest-api/login-handler",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/logout-handler",
          label: "Logout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/sso-initiate",
          label: "SSOInitiate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/refresh-handler",
          label: "Refresh",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/switch",
          label: "Switch",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        {
          type: "doc",
          id: "api/rest-api/list-integration-providers",
          label: "ListIntegrationProviders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/configure-integration-provider",
          label: "ConfigureIntegrationProvider",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/disconnect-integration",
          label: "DisconnectIntegration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/run-integration-operation",
          label: "RunIntegrationOperation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Invites",
      items: [
        {
          type: "doc",
          id: "api/rest-api/organization-invite-accept",
          label: "OrganizationInviteAccept",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      items: [
        {
          type: "doc",
          id: "api/rest-api/product-catalog",
          label: "ProductCatalog",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Questionnaires",
      items: [
        {
          type: "doc",
          id: "api/rest-api/get-questionnaire",
          label: "GetQuestionnaire",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/submit-questionnaire",
          label: "SubmitQuestionnaire",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/resend-questionnaire-email",
          label: "ResendQuestionnaireEmail",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SCIM Discovery",
      items: [
        {
          type: "doc",
          id: "api/rest-api/get-resource-types",
          label: "Get resource types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/get-resource-type-by-name",
          label: "Get resource type by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/get-schemas",
          label: "Get schemas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/get-schema-by-uri",
          label: "Get schema by URI",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/get-service-provider-config",
          label: "Get service provider configuration",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "SCIM Groups",
      items: [
        {
          type: "doc",
          id: "api/rest-api/list-groups",
          label: "List groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/create-group",
          label: "Create a new group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/delete-group",
          label: "Delete group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest-api/get-group-by-id",
          label: "Get group by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/patch-group",
          label: "Update group",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/rest-api/replace-group",
          label: "Replace group",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "SCIM Users",
      items: [
        {
          type: "doc",
          id: "api/rest-api/list-users",
          label: "List users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/create-user",
          label: "Create a new user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest-api/get-user-by-id",
          label: "Get user by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/patch-user",
          label: "Update user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/rest-api/replace-user",
          label: "Replace user",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Subscribers",
      items: [
        {
          type: "doc",
          id: "api/rest-api/verify-subscription",
          label: "VerifySubscription",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/unsubscribe",
          label: "Unsubscribe",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "documentation",
      items: [
        {
          type: "doc",
          id: "api/rest-api/api-docs",
          label: "APIDocs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
