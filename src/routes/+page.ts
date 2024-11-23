import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	redirect(302, `/-/did:plc:ragtjsm2j2vknwkz3zp4oxrd/3kj2umze7zj2n`);
};
