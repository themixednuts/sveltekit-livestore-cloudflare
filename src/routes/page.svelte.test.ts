import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		const screen = render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});
});
