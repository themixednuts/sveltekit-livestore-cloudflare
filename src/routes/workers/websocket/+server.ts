import { handleWebSocket } from '@livestore/sync-cf/cf-worker/worker';
import { error } from '@sveltejs/kit';

export const GET = async ({ platform, request }) => {
	if (!platform?.context) error(500, 'Platform context not available');
	if (!platform?.env) error(500, 'Platform environment not available');

	return handleWebSocket(request as any, platform.env, platform.context, {
		headers: request.headers,
		durableObject: { name: 'WEBSOCKET_SERVER' }
	}) as any;
};
