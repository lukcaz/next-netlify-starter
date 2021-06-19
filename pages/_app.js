import React from 'react'
import '@styles/globals.css'
import Layout from '@components/Layout';
import { motion } from 'framer-motion';



/* class MyApp extends App { */
  export default function App({ Component, pageProps, router }) {


  return (

   
      <Layout>
         <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
           pageInitial: {
             opacity: 0
           },
           pageAnimate: {
             opacity: 1
           },
         }}>
            <Component {...pageProps} />
         </motion.div>
      </Layout>
    
    )
  }
