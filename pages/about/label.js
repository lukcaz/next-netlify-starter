


export default function About() {
    return (
        <div exit={{opacity: 0}} className="w-full mx-2 rounded-3xl md:flex md:justify-center h-full">

            <div className="flex flex-col justify-center md:w-1/2 "
/*                                 initial={{x:-200, opacity: 0}}
                                animate={{ x:0, opacity:1 }}
                                transition={{delay: 0.2 }} */
            >
                <div className="round w-auto h-22  bg-red-300">
                    <img src="/logo.png" alt="" />
                </div>
            </div>
            <div className="flex items-center text-center justify-center md:w-1/2 "
/*                 initial={{x:200, opacity: 0}}
                animate={{ x:0, opacity:1 }} */
               
                    
            >
                <div className="flex flex-col items-center ">
                    <h1 className="text-3xl font-bold font-poppins text-gray-700 mb-6" >Nsingers: The Label</h1> 
                    <p className="text-gray-500 font-poppins w-80 md:w-4/6" >NSingers G Production is the place where, talent, authenticity and anointing meet.

                        Our propose is take the talent and transform it into a melody of worship that glorify the Creator and shares the incorruptible love of Christ to this world.

                        Get involved, be part of the generation that will rock the world with His Love.

                        NSingers, where singers became worshippers! </p> 
                </div>
            </div>
            
        </div>
    )
}