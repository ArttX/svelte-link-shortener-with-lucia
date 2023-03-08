import lucia from "lucia-auth";
import { github } from "@lucia-auth/oauth/providers";
import prismaAdapter from "@lucia-auth/adapter-prisma";
import prisma from "$lib/server/prisma/client";
import { dev } from "$app/environment";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";

export const auth = lucia({
    adapter: prismaAdapter(prisma),
    env: dev ? "DEV" : "PROD",
    transformUserData: userData => {
        return {
            userId: userData.id,
            githubId: userData.githubId,
            username: userData.username,
            image: userData.image
        }
    }
});

export type Auth = typeof auth;

// Providers
export const githubAuth = github(auth, {
    clientId: GITHUB_ID,
    clientSecret: GITHUB_SECRET
});