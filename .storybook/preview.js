import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles removeBg />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
