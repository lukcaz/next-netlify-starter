import Head from 'next/head'
import Header from '@components/Header'
import Album from '@components/Album'
import Image from 'next/image'



export default function Home() {
  return (
    <div className=" flex flex-col h-full items-center justify-around lg:justify-center lg:w-full  lg:flex-row lg:items-center " >
      <Head>
        <title>Azenathy Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:w-1/2 h-full flex items-center">
        <div className="lg:hidden h-96 lg:h-5/6 w-60 lg:w-11/12 mb-8  bg-cover rounded-2xl flex items-center shadow-2xl justify-center "
          style={{ 
            backgroundImage: `url("https://res.cloudinary.com/lukssk/image/upload/v1624081492/coverMobile_zg1fub.png")`,
            width:"790",
            }} >
        </div>
        <div className="hidden  h-96 lg:h-727 w-60 lg:w-460 mb-2 rounded-2xl bg-cover lg:flex items-center shadow-2xl justify-center "
          style={{ 
            backgroundImage: `url("https://res.cloudinary.com/lukssk/image/upload/v1624081510/DesktopCover2_at06xr.png")`,
            width:"410",
            height:"648"
            }} >
        </div>
      </div>

        <div className="flex flex-col items-center text-center lg:w-1/2 ">
          <h1 className="font-bold l text-2xl lg:text-5xl text-gray-700 mb-6 font-poppins"> A Life of Devotion to God</h1>
          <p className="px-2 w-80 lg:w-5/6 pb-6 lg:text-left text-gray-700 lg:text-2xl">An of most beautiful latin american voice of gospel music presents your work. 
            Discover the saga of a Brazilian singer with over 20 years of career. </p>
        </div>

    </div>
  )
}
