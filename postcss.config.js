import postcssPresetEnv from 'postcss-preset-env'

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
  ],
}
export default config
