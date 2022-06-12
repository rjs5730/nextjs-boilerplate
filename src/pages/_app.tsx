import {NextComponentType} from 'next'
import {AppContext, AppInitialProps, AppProps} from 'next/app'
import {GlobalStyles} from 'twin.macro'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async ({Component, ctx}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {pageProps}
}

export default MyApp
