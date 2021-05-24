import '../src/scripts/wdyr'

import SiteLayout from '../src/layouts/SiteLayout/SiteLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
