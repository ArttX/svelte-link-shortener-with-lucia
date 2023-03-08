# Svelte Link Shortener

## Reason

I am experimenting with other front-end frameworks and wanted to try do something with SvelteKit.\
I have idea to create multiple versions of this page in different frameworks.
If new versions of this project will be created, it will be linked [below](#other-versions).
This repository is same as SvelteKit one, but this uses different auth system

## Stack

-   [Typescript](https://www.typescriptlang.org/)
-   [SvelteKit](https://kit.svelte.dev/)
-   [Prisma](https://www.prisma.io/) with [SQLite3](https://www.sqlite.org/index.html)
-   [Lucia](https://lucia-auth.com/)

## What this is?

This is web page for shortening links.

Logged in user can add full link and enter shorter version of this link, it need to be unique.

Logged in user can:

-   view created short links
-   view times, this links was used
-   delete short links

Non logged user can:

-   use knows short links to be redirected to different page

Logging in is now implemented with Github OAuth2

## Other versions

[SvelteKit with Auth.js](https://github.com/ArttX/svelte-link-shortner)
[Remix with Remix-Auth](https://github.com/ArttX/remix-link-shortener)
