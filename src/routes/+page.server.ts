import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./login/$types";

export const load: PageServerLoad = async (event) => {
    if (!await event.locals.getSession()) {
        throw redirect(302, '/login')
    }

    return {
        user: (await event.locals.supabase.auth.getUser()).data.user?.email
    }
};