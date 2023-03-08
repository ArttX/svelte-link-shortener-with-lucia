import prisma from "$lib/server/prisma/client";
import { fail, redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
    const link = await prisma.links.findUnique({ where: { shortLink: params.link } });
    if (!link) throw fail(400, { message: "Link not exists" });
    await prisma.links.update({
        where: { id: link.id },
        data: {
            visits: {
                increment: 1
            }
        }
    });
    throw redirect(301, link.fullLink);
}) satisfies PageServerLoad;