---
sidebar_position: 1
tags: 
    - organization
    - openlane
    - compliance
---

# Create a new Organization

---

# Through the Console

1. Navigate to the [Organization page](https://console.theopenlane.io/organization)
2. Provide a `Name` and `Display Name`. The name of the organization is required to be unique, if the name you want is already taken use a similar name and set the display name to the preferred name. The display name is what will be used to reference the organization throughout the Openlane Console.

# Using the CLI

1. Install the `openlane` cli to get started

```shell shell
brew install theopenlane/tap/openlane
```

1. Authenticate using a token or username/password login:

```shell shell
export CORE_TOKEN=tola_REDACTED
```

```shell shell
export CORE_PAT=tolp_REDACTED
```

```shell shell
openlane login -u meow@example.com 
```

1. Create an organization using the `organization` cli command:

```shell
openlane organization create --name "My New Organzation --display-name "my-organization"
```