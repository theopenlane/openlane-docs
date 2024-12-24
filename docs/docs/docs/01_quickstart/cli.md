---
sidebar_position: 5
tags: 
    - cli
    - api
    - development
---

# Installing the Openlane CLI

## Installation

### MacOS

The openlane CLI is available for MacOS using `homebrew`

```shell
brew install theopenlane/tap/openlane
```


### From Source

Download the CLI directly from [github releases](https://github.com/theopenlane/core/releases)



## Authentication

:::info
Oauth login is not currently supported using the cli. You must use an [API or Personal Access Token](/docs/docs/security/authentication/developer-tokens) instead.
:::


### Using API or Personal Access Tokens:

```shell
export CORE_TOKEN=tola_REDACTED
```

```shell
export CORE_PAT=tolp_REDACTED
```

### Using username and password credentials

1. Using the `login` command
```shell
openlane login -u meow@example.com 
```
1. You will be prompted to enter your password
1. You will be prompted to store your access token, refresh token, and session token to your local keychain. 

:::tip
Set the openlane CLI to always allow in your Keychain so you do not need to continuously allow the storage and retrieval on every command.
:::
