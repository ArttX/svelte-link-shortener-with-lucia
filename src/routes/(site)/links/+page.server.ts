import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma/client";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.validateUser();
    if (!session?.user) throw error(404);

    // TODO: Rewrite session types
    const user = session.user as { id: string };

    const links = await prisma.links.findMany({ where: { userId: user.id } });
    return {
        links
    }
}