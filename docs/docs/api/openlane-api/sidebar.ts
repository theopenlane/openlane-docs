import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/openlane-api/openlane-openapi-3-1-0-specifications",
    },
    {
      type: "category",
      label: "account",
      items: [
        {
          type: "doc",
          id: "api/openlane-api/account-access",
          label: "AccountAccess",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/account-roles",
          label: "AccountRoles",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/account-roles-organization",
          label: "AccountRolesOrganization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openlane-api/account-roles-organization-by-id",
          label: "AccountRolesOrganizationByID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "authentication",
      items: [
        {
          type: "doc",
          id: "api/openlane-api/forgot-password",
          label: "ForgotPassword",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/login-handler",
          label: "LoginHandler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/password-reset",
          label: "PasswordReset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/refresh-handler",
          label: "RefreshHandler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/register-handler",
          label: "RegisterHandler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/organization-switch",
          label: "OrganizationSwitch",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "organization",
      items: [
        {
          type: "doc",
          id: "api/openlane-api/organization-invite-accept",
          label: "OrganizationInviteAccept",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "register",
      items: [
        {
          type: "doc",
          id: "api/openlane-api/resend-email",
          label: "ResendEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openlane-api/verify-email",
          label: "VerifyEmail",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "subscribe",
      items: [
        {
          type: "doc",
          id: "api/openlane-api/verify-subscriber-email",
          label: "VerifySubscriberEmail",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
