# figma-tokens-example-tailwindcss

This example illustrates how you can transform your tokens stored on Figma Tokens (with GitHub sync enabled) to be automatically transformed with token-transformer and Style Dictionary to a TailwindCSS environment with multiple themes. The theme switcher itself just adds `light-theme` or `dark-theme` to the root class, so in theory you could have not only light or dark theme but many different themes.

Change your tokens in `tokens.json` (either directly or with the Figma Tokens plugin in Figma). The GitHub action will automatically generate tokens to the `tokens/` directory that can then be read by Style Dictionary, which will output tokens to the format you defined in `build.js` - css variables will be generated in the `output` directory which Tailwind will pick up and generate utility classes.

Note: Ideally generated css/dist files wouldn't be part of the repository but rather live in the build environment. I only included them here for showcase.
