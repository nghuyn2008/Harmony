import './globals.css'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
// import { Paytone_One, Quicksand} from 'next/font/google'
// const quicksand= ({ subsets: ['latin'] })
// const bvp = Paytone_One({subsets:['latin'],weight:['400'] })
export const metadata = {
  title: 'Harmony',
  description: '',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
