# Openlane Documentation

This repo holds the markdown files and associated configurations for the [Openlane product documentation](https://docs.theopenlane.io).

## Developing

Setup [Taskfile](https://taskfile.dev/installation/) by following the instructions and using one of the various convenient package managers or installation scripts. After installation,
you can then simply run `task install` to load the associated dependencies. NOTE: the taskfile automation does not install anything related to `npm`, `yarn`, `npx` - we assume these are
in place already.

After installing the needed dependencies, you can run `task dev` to bring up a local docusaurus instance which you'll be able to view in your browser at `http://localhost:8000/`.

### Guidance

When creating new documentation there is very likely a section which already exists that the docs should fit into, try and find it first. If you believe you need to create a new section,
be certain to follow the documented [style guide](docs/platform/contributing/styleguide.mdx) as well as ensuring:

* Markdown files are created with the extension `.mdx`
* Your directory contains a `_category_.json` file with the respective configurations (an empty one of these files can be found [here](templates/_category_.json))
* Include an `overview.mdx` that provides context of what the documentation will cover / the context it's related to
* Ensure your added section fits logically into the left hand nav ordering and/or adjust the ordering appropriately
* Use the provided Taskfile and automation to locally render / view your changes prior to creating a PR

## Contributing

See the stock [contributing guide](.github/CONTRIBUTING.md) and the documentation specific [contributing guide](docs/platform/contributing/styleguide.mdx) for more information.
