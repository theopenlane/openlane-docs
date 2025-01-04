---
title: Environment Variables
sidebar_position: 1
tags:
    - local
    - development
    - production
    - deployment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Required Environment Variables
---

<Tabs>
    <TabItem value="Core Server">
        #### Database Settings
        Variables used for the connections and settings with the core database
        ```
        CORE_DB_PRIMARYDBSOURCE
        CORE_DB_RUNMIGRATIONS
        CORE_DB_DRIVERNAME
        CORE_DB_MIGRATIONPROVIDER
        CORE_DB_ENABLEHISTORY
        CORE_DB_DATABASENAME
        CORE_DBX_ENABLED
        ```

        #### Authn Variables
        Variables used for the authentication settings and providers with the core api
        ```
        CORE_AUTH_TOKEN_REFRESHAUDIENCE
        CORE_AUTH_TOKEN_ISSUER    
        CORE_AUTH_TOKEN_KID
        CORE_AUTH_TOKEN_JWKSENDPOINT
        CORE_AUTH_TOKEN_GENERATEKEYS
        CORE_AUTH_TOKEN_AUDIENCE
        CORE_AUTH_PROVIDERS_GOOGLE_REDIRECTURL
        CORE_AUTH_PROVIDERS_GITHUB_REDIRECTURL
        CORE_AUTH_PROVIDERS_GOOGLE_CLIENTID
        CORE_AUTH_PROVIDERS_GOOGLE_CLIENTSECRET
        CORE_AUTH_PROVIDERS_GITHUB_CLIENTID
        CORE_AUTH_PROVIDERS_GITHUB_CLIENTSECRET
        CORE_AUTH_PROVIDERS_GITHUB_CLIENTENDPOINT
        CORE_AUTH_PROVIDERS_GOOGLE_CLIENTENDPOINT
        ```

        #### Authz Variables
        Variables used on the core server for interactions with the OpenFGA server
        ```
        CORE_AUTHZ_HOSTURL
        CORE_AUTHZ_CREATENEWMODEL
        CORE_AUTHZ_CREDENTIALS_APITOKEN
        CORE_AUTHZ_MODELFILE
        ```

        #### Sessions Variables
        Variabels used for the sessions implementation
        ```
        CORE_SESSIONS_SIGNINGKEY
        CORE_SESSIONS_ENCRYPTIONKEY
        CORE_SESSIONS_DOMAIN
        ```

        #### Server Variables
        General server variables for the echo server
        ```
        CORE_SERVER_CORS_ALLOWORIGINS
        CORE_SERVER_DEBUG
        ```

        #### Object Store Variables
        Variables used for the s3 file store
        ```
        CORE_OBJECTSTORAGE_ACCESSKEY
        CORE_OBJECTSTORAGE_REGION
        CORE_OBJECTSTORAGE_SECRETKEY
        CORE_OBJECTSTORAGE_DEFAULTBUCKET
        ```

        #### Job Queue Variables 
        Varaibles used to interact with the jobs queue (riverboat) from the core server
        ```
        CORE_JOBQUEUE_CONNECTIONURI
        ```

        #### Email Variables
        Variables used for emails sent by the system, used within email template configurations
        ```
        CORE_EMAIL_COMPANYNAME
        CORE_EMAIL_COMPANYADDRESS
        CORE_EMAIL_CORPORATION
        CORE_EMAIL_FROMEMAIL
        CORE_EMAIL_SUPPORTEMAIL
        CORE_EMAIL_URLS_ROOT
        CORE_EMAIL_URLS_PRODUCT
        CORE_EMAIL_URLS_DOCS
        CORE_EMAIL_URLS_VERIFY
        CORE_EMAIL_URLS_INVITE
        CORE_EMAIL_URLS_RESET
        CORE_EMAIL_URLS_VERIFYSUBSCRIBER
        ```
    </TabItem>
    <TabItem value="OpenFGA Server">

        #### FGA Variables
        Variables used for the OpenFGA server
        ```
        OPENFGA_DATASTORE_ENGINE
        OPENFGA_DATASTORE_URI
        OPENFGA_AUTHN_METHOD
        OPENFGA_AUTHN_PRESHARED_KEYS
        ```
    </TabItem>
    <TabItem value="Riverboat Server">

        #### Riverboat Variables
        Variables used within the Riverboat server for job queueing
        ```
        RIVERBOAT_RIVER_DATABASEHOST
        RIVERBOAT_RIVER_WORKERS_EMAILWORKER_CONFIG_DEVMODE
        RIVERBOAT_RIVER_WORKERS_EMAILWORKER_CONFIG_TOKEN
        RIVERBOAT_RIVER_WORKERS_EMAILWORKER_CONFIG_FROMEMAIL
        ```
    </TabItem>
</Tabs>

