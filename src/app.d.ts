// See https://kit.svelte.dev/docs/types#app
import { SupabaseClient, Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<any>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null
		}
		// interface Platform {}
	}
}

export {};
