import type { NitroModule } from "nitro/types";

// This is fine
export const NitroSentryModule = {
  name: 'nitro-sentry',
  setup: (nitro) => {
    console.log('Nah');

    // Adding plugin will not work
    nitro.options.plugins = nitro.options.plugins || [];
    console.log(import.meta.resolve('./plugin.js'))
    nitro.options.plugins.push(
      import.meta.resolve('./plugin.js')
    );
  }
} satisfies NitroModule;

