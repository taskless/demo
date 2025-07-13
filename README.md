# Taskless Demo

Takless makes it easy to add telemetry and logging to your outbound API calls, simplifying the process of reproducing errors and capturing data that goes beyond traditional APM tools.

# Running the Demo

This demo can be checked out via `git clone`, and running `pnpm install` will install the dependencies for this demo. You can then install

This demo makes use of the `@taskless/loader` package, and will work with any packs you install into the repository. We recommend the following:

1. `pnpx @taskless/pack install https://github.com/taskless/pack-pii/releases/download/v0.0.5/pack.tgz` this pack reports on PII data in your outbound API calls, and is useful for identifying sensitive data that may be sent to third-party APIs without your knowledge
2. `pnpx @taskless/pack install https://github.com/taskless/pack-core/releases/download/v0.0.7/pack.tgz` this pack adds core telemetry functions such response codes, durations, and basic error capturing

Alternatively, you can install any other Taskless pack that you want to use in your application either from [Taskless Cloud](https://www.taskless.io) or from a tgz file.

You can then start this app with Taskless by running `pnpm start`.

# Extending the Demo

Taskless works with more than just the fetch calls in the `index.js` file. Taskless also intercepts calls with popular HTTP libraries including [Axios](https://github.com/axios/axios), [got](https://github.com/sindresorhus/got), and [node-fetch](https://github.com/node-fetch/node-fetch). It also works with SDK libraries like [Stripe](https://github.com/stripe/stripe-node), [Twilio](https://github.com/twilio/twilio-voice.js), and [AI SDK](https://github.com/vercel/ai).

Instrumentation is automatic, so all you need to focus on is getting to the bottom of your issues. Less time reproducing, more time fixing.
