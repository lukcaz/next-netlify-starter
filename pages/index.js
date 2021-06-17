import Head from 'next/head'
import Header from '@components/Header'
import Album from '@components/Album'
import Image from 'next/image'



export default function Home() {
  return (
    <div className="bg-cinza flex justify-center lg:items-center " >
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-400 h-96 w-60  bg-cover rounded-2xl flex items-center shadow-2xl justify-center"
      style={{ 
        backgroundImage: `url("/coverMobile.png")`,
        width:"790",
        }} >

      </div>


    </div>
  )
}
