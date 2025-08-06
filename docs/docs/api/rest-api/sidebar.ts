import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/rest-api/openlane-openapi-3-0-0-specifications",
    },
    {
      type: "category",
      label: "acme",
      items: [
        {
          type: "doc",
          id: "api/rest-api/acme-solver",
          label: "ACME challenge solver for Let's Encrypt certificate validation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "certificates",
      items: [
        {
          type: "doc",
          id: "api/rest-api/acme-solver",
          label: "ACME challenge solver for Let's Encrypt certificate validation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "well-known",
      items: [
        {
          type: "doc",
          id: "api/rest-api/apple-merchant",
          label: "Apple Developer Merchant ID domain association file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/jwks",
          label: "JSON Web Key Set for JWT token validation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/security-txt",
          label: "Security contact information and vulnerability disclosure policy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/web-authn-well-known",
          label: "WebAuthn well-known configuration file",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "payments",
      items: [
        {
          type: "doc",
          id: "api/rest-api/apple-merchant",
          label: "Apple Developer Merchant ID domain association file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/stripe-webhook",
          label: "Handle incoming webhook events from Stripe for subscription and payment processing",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "authentication",
      items: [
        {
          type: "doc",
          id: "api/rest-api/jwks",
          label: "JSON Web Key Set for JWT token validation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-authentication",
          label: "Begin WebAuthn authentication process and return credential request options",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-authentication-verification",
          label: "Complete WebAuthn authentication process by verifying the authentication response",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/login-handler",
          label: "Login is oriented towards human users who use their email and password for authentication. Login verifies the password submitted for the user is correct by looking up the user by email and using the argon2 derived key verification process to confirm the password matches. Upon authentication an access token and a refresh token with the authorized claims of the user are returned. The user can use the access token to authenticate to our systems. The access token has an expiration and the refresh token can be used with the refresh endpoint to get a new access token without the user having to log in again. The refresh token overlaps with the access token to provide a seamless authentication experience and the user can refresh their access token so long as the refresh token is valid",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/o-auth-register",
          label: "Register a user via OAuth provider authentication",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-registration",
          label: "Begin WebAuthn registration process and return credential creation options",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-registration-verification",
          label: "Complete WebAuthn registration process by verifying the credential creation response",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/trust-center-anonymous-jwt",
          label: "Create anonymous JWT token for trust center access",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "security",
      items: [
        {
          type: "doc",
          id: "api/rest-api/security-txt",
          label: "Security contact information and vulnerability disclosure policy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/csrf",
          label: "Get CSRF token for form submissions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "webauthn",
      items: [
        {
          type: "doc",
          id: "api/rest-api/web-authn-well-known",
          label: "WebAuthn well-known configuration file",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-authentication",
          label: "Begin WebAuthn authentication process and return credential request options",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-authentication-verification",
          label: "Complete WebAuthn authentication process by verifying the authentication response",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-registration",
          label: "Begin WebAuthn registration process and return credential creation options",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/webauthn-registration-verification",
          label: "Complete WebAuthn registration process by verifying the credential creation response",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "webfinger",
      items: [
        {
          type: "doc",
          id: "api/rest-api/webfinger",
          label: "WebFinger endpoint for federated identity",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "tfa",
      items: [
        {
          type: "doc",
          id: "api/rest-api/tfa-validation",
          label: "Validate a user's TOTP code",
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
          label: "Check Subject Access to Object",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/account-features",
          label: "List features a subject has in relation to the authenticated organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-features-by-id",
          label: "List the features a subject has in relation to the organization ID provided",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles",
          label: "Retrieve a list of roles of the subject in the organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles-organization",
          label: "Retrieve a list of roles of the subject in the organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/account-roles-organization-by-id",
          label: "Retrieve a list of roles of the subject in the organization ID provided",
          className: "api-method get",
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
          label: "Get OpenAPI 3.0 specification for this API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "files",
      items: [
        {
          type: "doc",
          id: "api/rest-api/example-csv",
          label: "Generate and return an example CSV file for data import templates",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "examples",
      items: [
        {
          type: "doc",
          id: "api/rest-api/example-csv",
          label: "Generate and return an example CSV file for data import templates",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "static",
      items: [
        {
          type: "doc",
          id: "api/rest-api/favicon",
          label: "Get favicon.ico for the website",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/robots",
          label: "Get robots.txt file for web crawlers",
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
          label: "ForgotPassword is a service for users to request a password reset email. The email address must be provided in the POST request and the user must exist in the database. This endpoint always returns 200 regardless of whether the user exists or not to avoid leaking information about users in the database",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "oauth",
      items: [
        {
          type: "doc",
          id: "api/rest-api/git-hub-callback",
          label: "Handle GitHub OAuth callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/git-hub-login",
          label: "Initiate GitHub OAuth login flow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/google-callback",
          label: "Handle Google OAuth callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/google-login",
          label: "Initiate Google OAuth login flow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/o-auth-register",
          label: "Register a user via OAuth provider authentication",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/user-info",
          label: "Get user information for OAuth authenticated user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "github",
      items: [
        {
          type: "doc",
          id: "api/rest-api/git-hub-callback",
          label: "Handle GitHub OAuth callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/git-hub-login",
          label: "Initiate GitHub OAuth login flow",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "google",
      items: [
        {
          type: "doc",
          id: "api/rest-api/google-callback",
          label: "Handle Google OAuth callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/google-login",
          label: "Initiate Google OAuth login flow",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "impersonation",
      items: [
        {
          type: "doc",
          id: "api/rest-api/end-impersonation",
          label: "End an active impersonation session and return to normal user context. Logs the end of impersonation for audit purposes.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/start-impersonation",
          label: "Start an impersonation session to act as another user for support, administrative, or testing purposes. Requires appropriate permissions and logs all impersonation activity for audit purposes.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "integrations",
      items: [
        {
          type: "doc",
          id: "api/rest-api/integration-o-auth-callback",
          label: "Handle OAuth callback for integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/start-integration-o-auth",
          label: "Start OAuth flow for integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest-api/refresh-integration-token",
          label: "Refresh integration token",
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
          id: "api/rest-api/organization-invite-accept",
          label: "Accept an organization invitation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/switch",
          label: "Switch the user's organization context",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "health",
      items: [
        {
          type: "doc",
          id: "api/rest-api/livez",
          label: "Health check endpoint to verify the service is alive",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/ready",
          label: "Readiness check endpoint to verify the service is ready to accept traffic",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "user",
      items: [
        {
          type: "doc",
          id: "api/rest-api/user-info",
          label: "Get user information for OAuth authenticated user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "password-reset",
      items: [
        {
          type: "doc",
          id: "api/rest-api/reset-password",
          label: "ResetPassword allows the user (after requesting a password reset) to set a new password - the password reset token needs to be set in the request and not expired. If the request is successful, a confirmation of the reset is sent to the user and a 200 StatusOK is returned",
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
          label: "The Refresh endpoint re-authenticates users and API keys using a refresh token rather than requiring a username and password or API key credentials a second time and returns a new access and refresh token pair with the current credentials of the user. This endpoint is intended to facilitate long-running connections to the systems that last longer than the duration of an access token; e.g. long sessions on the UI or (especially) long running publishers and subscribers (machine users) that need to stay authenticated semi-permanently.",
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
          id: "api/rest-api/register",
          label: "Register creates a new user in the database with the specified password, allowing the user to login to Openlane. This endpoint requires a 'strong' password and a valid register request, otherwise a 400 reply is returned. The password is stored in the database as an argon2 derived key so it is impossible for a hacker to get access to raw passwords. A personal organization is created for the user registering based on the organization data in the register request and the user is assigned the Owner role",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "resend",
      items: [
        {
          type: "doc",
          id: "api/rest-api/resend-email",
          label: "Resends an email verification email to the user (only valid if the email is not already verified)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "runners",
      items: [
        {
          type: "doc",
          id: "api/rest-api/agent-node-registration",
          label: "Register a job runner node",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "sso",
      items: [
        {
          type: "doc",
          id: "api/rest-api/sso-callback",
          label: "Complete SSO login flow callback",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/sso-login",
          label: "Initiate SSO login flow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/sso-token-authorize",
          label: "Authorize SSO token request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest-api/sso-token-callback",
          label: "Handle SSO token callback",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "webhooks",
      items: [
        {
          type: "doc",
          id: "api/rest-api/stripe-webhook",
          label: "Handle incoming webhook events from Stripe for subscription and payment processing",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "subscription",
      items: [
        {
          type: "doc",
          id: "api/rest-api/verify-subscription",
          label: "Verify a subscription",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "trustcenter",
      items: [
        {
          type: "doc",
          id: "api/rest-api/trust-center-anonymous-jwt",
          label: "Create anonymous JWT token for trust center access",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "email",
      items: [
        {
          type: "doc",
          id: "api/rest-api/verify-email",
          label: "Used to verify a user's email address - once clicked they will be redirected to the UI with a success or failure message",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
