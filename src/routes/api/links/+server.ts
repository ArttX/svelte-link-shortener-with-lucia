import prisma from "$lib/server/prisma/client";
import { error, type RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ locals, request }) => {
    const session = await locals.validate();
    if (!session) throw error(404);

    const { linkId } = await request.json();

    try {
        await prisma.links.delete({
            where: {
                id: linkId
            }
        });
        return new Response(JSON.stringify({ success: true }), {
            status: 200
        });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, message: err }), {
            status: 404
        });
    }
}