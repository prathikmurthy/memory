import type { PageLoad } from "./$types";

import { page } from '$app/stores';
import { redirect } from "@sveltejs/kit";

export const load: PageLoad = async ({parent}) => {
    const { supabase , session } = await parent();
    if (!session) {
        throw redirect(302, '/login')
    }

    console.log(session)

}