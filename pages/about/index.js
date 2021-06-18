import Link from 'next/link'


export default function About() {
    return (
        <div exit={{opacity: 0}} className="w-full mx-2 rounded-3xl md:flex md:justify-center">
                      <div className="flex items-center justify-center md:w-1/2  ">
                            <img className="h-11/12 w-full rounded-2xl shadow-lg mb-6" src="/azenathy.jpg" alt="" />
                     </div>
           
            <div className=" flex items-center text-center justify-center md:w-1/2 ">
                <div className="flex flex-col items-center justify-between h-full ">
                    <div className="flex flex-col justify-center items-center h-full ">
                    <h1 className="text-3xl font-bold font-poppins text-gray-700 mb-6" >About The Singer</h1> 
                    <p className="px-6 text-gray-500 font-poppins w-96md:w-11/12" >With more than 25 years of acting in the gospel scene, Azenate Gonzaga, known by the artistic name of 'Azenathy' has already consolidated her musical work inside and outside her native country, Brazil.
                        She began professionally as a soloist in a great choir in São Paulo called Filadélfia, from which other famous names in the national gospel came from, she traveled around her country in several presentations.
                        A few years later she released her first full lentgh "Canta Alegremente". This work circulated throughout Brazil for years and years leaving a trail of blessings and hope until it reached California, USA - 20 years after its release, to receive an award on the independent circuit of the North American gospel. This was the consolidation of a promise, marking the end of an era and the beginning of another.
                        Now Azenathy expands its work internationally with partnerships in several continents including Africa and Europe.
                        Connect with us through social media and follow this beautiful journey of faith and devotion. </p> 
                        </div>
                        <Link href="/about/label"><a className=" font-poppins text-xl font-bold text-red-500  py-2">Next</a></Link>
                        <p className="font-poppins text-sm text-gray-400">Learn about Nsinger</p>
                    
                </div>
                
            </div>
 
           
        </div>
        
    )
}