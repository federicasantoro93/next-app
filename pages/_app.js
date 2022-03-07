import '../styles/globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-brands-svg-icons'
//import { faAngleLeft, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'


//library.add(fab, faSearch, faEnvelope, faAngleLeft)


function MyApp({ Component, pageProps }) {  
  return <Component {...pageProps} />
}

export default MyApp
