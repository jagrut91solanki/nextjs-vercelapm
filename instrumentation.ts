// @ts-ignore
import { track } from '@middleware.io/agent-apm-nextjs';

export function register() {
    track({
        projectName: "NextJs-APM",
        serviceName: "Nextjs-service",
        target: "vercel",
    });
}
