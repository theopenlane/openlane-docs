import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/rest-api/openlane-openapi-3-0-0-specifications",
    },
    {
      type: "category",
      label: "tfa",
      items: [
        {
          type: "doc",
          id: "api/rest-api/tfa-validation",
          label: "TFAValidation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "account",
      items: [
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
          id: "api/rest-api/account-roles",
          label: "AccountRoles",
          className: "api-method post",
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
      ],
    },
    {
      type: "category",
      label: "forgotpassword",
      items: [
        {
          type: "doc",
          id: "api/rest-api/forgot-password",
          label: "ForgotPassword",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "invitations",
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
      label: "authentication",
      items: [
        {
          type: "doc",
          id: "api/rest-api/login-handler",
          label: "LoginHandler",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "passwordReset",
      items: [
        {
          type: "doc",
          id: "api/rest-api/password-reset",
          label: "PasswordReset",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "refresh",
      items: [
        {
          type: "doc",
          id: "api/rest-api/refresh-handler",
          label: "RefreshHandler",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "accountRegistration",
      items: [
        {
          type: "doc",
          id: "api/rest-api/register-handler",
          label: "RegisterHandler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/resend-email",
          label: "ResendEmail",
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
      label: "subscribe",
      items: [
        {
          type: "doc",
          id: "api/rest-api/verify-subscriber-email",
          label: "VerifySubscriberEmail",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "switchorganizations",
      items: [
        {
          type: "doc",
          id: "api/rest-api/organization-switch",
          label: "OrganizationSwitch",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
