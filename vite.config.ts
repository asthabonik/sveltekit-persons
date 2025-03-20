import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
        plugins: [sveltekit()],
        server: {
                host: '0.0.0.0',
                scriptPort: true,
                allowedHosts: ['julastic.com', 'asthain.fun'], // Add your host>
        port: 5173,
      },
});
