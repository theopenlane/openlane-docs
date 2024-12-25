# Openlane Documentation

This repo holds the markdown files and associated configurations for the [Openlane product documentation](https://docs.theopenlane.io).

## Developing

Setup [Taskfile](https://taskfile.dev/installation/) by following the
instructions and using one of the various convenient package managers or
installation scripts. After installation, you can then simply run `task install`
to load the associated dependencies. NOTE: the taskfile automation does not install anything related to `npm`, `yarn`, `npx` - we assume these are in place already.

After installing the needed dependencies, you can run `task dev` to bring up a local docusaurus instance which you'll be able to view in your browser at ` http://localhost:8000/`.

## Contributing

See the [contributing guide](.github/CONTRIBUTING.md) for more information.

## Tips / notes

File extensions should be in `.mdx` for sanity

every directory needs to have a `_category_.json`

MDX allows you to import themes / classes directly in the markdown file, like so:

```mdx
---
sidebar_position: 2
tags:
    - local
    - development
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Terminology

<Tabs className="unique-tabs">
  <TabItem value="Apple">This is an apple 🍎</TabItem>
  <TabItem value="Orange">This is an orange 🍊</TabItem>
  <TabItem value="Banana">This is a banana 🍌</TabItem>
</Tabs>

```