import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    console.log("Layout Server Load")

    console.log((await event.locals.supabase.auth.getSession()).data.session?.expires_in)

    return {
        session: (await event.locals.supabase.auth.getSession()).data.session
    }
};