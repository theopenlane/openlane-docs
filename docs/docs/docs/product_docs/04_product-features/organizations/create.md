---
sidebar_position: 1
tags: 
    - organization
    - openlane
    - compliance
    - cli
    - api 
---

# Create a new Organization

---

Organizations are the top level hierarchical structure and control permissions to objects. Organizations can  be created within the Openlane Console as well as through our API and CLI. 

# Through the Console

1. Navigate to the [Organization page](https://console.theopenlane.io/organization)
2. Provide a `Name` and `Display Name`. The name of the organization is required to be unique, if the name you want is already taken use a similar name and set the display name to the preferred name. The display name is what will be used to reference the organization throughout the Openlane Console.

# Using the CLI

:::tip
See the [quickstart](/docs/docs/product_docs/quickstart/cli) guide on setting up and logging into the Openlane CLI
:::

1. Create an organization using the `organization` cli command. The `name` field is required and must be unique, everything else is optional and can be changed at a later time, if desired.

```shell
openlane organization create --name "My New Organization --display-name "my-organization"
```

