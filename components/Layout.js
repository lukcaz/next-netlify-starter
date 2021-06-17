import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import SectionContainer from './SectionContainer'
import Link from "next/link";
import headerNavLinks from '/data/headerNavLinks'

const Layout = ({ children }) => {
return (
    <SectionContainer>
    <div className="flex flex-col justify-between h-screen">
      <header className="flex items-center justify-between py-10">
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <Navbar />
        </div>
      </header>
      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  </SectionContainer>
)
}
export default Layout;
{/* return (
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <Navbar />
                <div className="flex flex-grow"> { children } </div>
            <Footer />
        </div>
     */}