---
sidebar_position: 3
sidebar_label: Developer Tokens
tags:
    - developers
    - authentication
    - security
    - token
    - api-token
    - personal-access-token
---

# Developer Tokens

Using API and Personal Access Tokens
---

Users can create api tokens, which act on behalf of the organization, or personal access tokens which act on behalf of the user for authorized organization(s).

## API Tokens

### Creating a New API Token

1. Navigate in the Openlane Console to the [Organization Settings -> Developers](https://console.theopenlane.io/organization-settings/developers) Page
2. Provide the following details:
   1. **Name** - Used to uniquely identify the token
   2. **Description** - Human friendly description for what the token will be used for (optional)
   3. **Expiration** - It is highly encouraged to rotate API tokens on an ongoing basis, with a provided expiration. The option is also given to never expire the token
   4. **Scopes** - Read or Read/Write
3. Once the token is created, the token, prefixed with `tola_` will be displayed. This is the *only* time the token will be provided to the user, so be sure to save this to a safe location.
4. If a token is no longer needed, you can delete the token using the dropdown menu next to the listed tokens



## Personal Access Tokens

### Creating a New Personal Access Token

1. Navigate in the Openlane Console to the [User Settings -> Developers](https://console.theopenlane.io/user-settings/developers) Page
2. Provide the following details:
   1. **Name** - Used to uniquely identify the token
   2. **Description** - Human friendly description for what the token will be used for (optional)
   3. **Expiration** - It is highly encouraged to rotate API tokens on an ongoing basis, with a provided expiration. The option is also given to never expire the token
   4. **Authorized Organizations** - Before a PAT can be used, it must be authorized for at least one organization. The same token can be authorized against 1 to many Openlane organizations.
3. Once the token is created, the token, prefixed with `tolp_` will be displayed. This is the *only* time the token will be provided to the user, so be sure to save this to a safe location.
4. If a token is no longer needed, you can delete the token using the dropdown menu next to the listed tokens