---
sidebar_position: 1
tags:
    - authentication
    - security
---

# Passwords

How passwords are handled in the Openlane system
---

In software development we constantly use password-based user authentication and we need to store user passwords securely in a way that users can sign-up, authenticate and change their password, but in the same time attackers cannot decrypt the stored passwords back to clear text values, even if they manage to get access to the database holding the user accounts.

To accomplish this we leverage [argon2](https://en.wikipedia.org/wiki/Argon2)  derived keys. Regardless of the cryptography methods employed, we still recommend using one of our authentication providers (e.g. Google, Github) for a more seamless login experience!