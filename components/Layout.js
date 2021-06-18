import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import SectionContainer from './SectionContainer'
import Link from "next/link";
import headerNavLinks from '/data/headerNavLinks'
import Logo from "./navbar/Logo";

const Layout = ({ children }) => {
return (
    <SectionContainer>
    <div className="flex flex-col justify-between h-screen">
      <header className="flex w-full  items-center justify-between py-10">
          <Logo />
        <div className="flex items-center text-xl font-poppins  leading-5">
          <div className="hidden sm:block w-72 md:flex justify-between  text-gray-800">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1  font-medium text-gray-500 sm:p-4 "
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <Navbar />
        </div>
      </header>
      <main className="flex flex-grow justify-center">{children}</main>
      <Footer />
    </div>
  </SectionContainer>
)
}
export default Layout;
