# figma-tokens-example-multi

This example illustrates how you can transform your tokens stored on Figma Tokens (with GitHub sync enabled) to be automatically transformed with token-transformer and Style Dictionary in a dark/light theme environment.

Change your tokens in `tokens.json` (either directly or with the Figma Tokens plugin in Figma). The GitHub action will automatically generate tokens to the `tokens/` directory that can then be read by Style Dictionary, which will output tokens to the format you defined in `build.js` - css variables will be generated in the `output` directory.
