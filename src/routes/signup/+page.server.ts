import { redirect } from '@sveltejs/kit';
import type {Actions, PageServerLoad} from '../login/$types'

export const load: PageServerLoad = async (event) => {
    
    if (await event.locals.getSession()) {
        throw redirect(302, '/')
    } else {
        console.log(await event.locals.getSession())
    }

};

export const actions: Actions = {
    default: async (event) => {
        // console.log(await event.request.formData())
        const formData = await event.request.formData()
        let email = formData.get('email')
        const password = formData.get('password')


        const { data, error } = await event.locals.supabase.auth.signUp({
            email: email?.valueOf() as string,
            password: password?.valueOf() as string,
        })

        if (error) {
            console.error(error)
        } else {
            console.log("Success!")
            console.log(data)
            await event.locals.supabase.auth.signInWithPassword({
                email: email?.valueOf() as string,
                password: password?.valueOf() as string,
            })
            throw redirect(302, '/')
        }


    }
};