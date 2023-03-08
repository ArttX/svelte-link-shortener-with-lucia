import { auth, githubAuth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ cookies, url, locals }) => {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const storedState = cookies.get('oauth_state');
    if (storedState !== state || !code || !state) throw new Response(null, { status: 401 });
    try {
        const { existingUser, providerUser, createUser } = await githubAuth.validateCallback(code);
        const user =
            existingUser ??
            (await createUser({
                githubId: String(providerUser.id),
                username: providerUser.login,
                image: providerUser.avatar_url
            }));
        const session = await auth.createSession(user.userId);
        locals.setSession(session);
    } catch (e) {
        console.error("CB ERROR:", e);
        return new Response(null, {
            status: 500
        });
    }
    throw redirect(302, '/');
};