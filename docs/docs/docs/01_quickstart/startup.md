---
sidebar_position: 2
sidebar_label: Server Startup
tags: 
    - local
    - development
---

# Server Startup

### Starting the Server

1. Copy the config, this is in .gitignore so you do not have to worry about
   accidentally committing secrets

   ```bash
   cp ./config/config-dev.example.yaml ./config/.config.yaml
   ```

1. Update the configuration with whatever respective settings you desire; the
   defaults inside should allow you to run the server without a problem

1. Use the task commands to start the server

   Run the core server in development mode with dependencies in docker

   ```bash
   task run-dev
   ```

   Run fully in docker

   ```bash
   task docker:all:up
   ```

1. In a separate terminal, with the server running, you can create a verified
   test user by running:

   ```bash
   task cli:user:all
   ```

1. Once this command has finished ^, you can login and perform actions as user
   `mitb@theopenlane.io` with password `mattisthebest1234`

