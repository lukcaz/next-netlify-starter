import Facebook from "../components/facebook";
import Instagram from "../components/instagram";
import Twitter from "../components/twitter";

export default function Contact() {
    return (
      <div className="flex flex-col bg-fixed items-center w-full justify-center ">
        <div className="mx-10 mb-12 text-lg text-center text-gray-700">You can find us on social medias and mail below </div>
        <div className="bg-white flex flex-col items-center justify-center shadow-xl h-80 w-72 lg:w-96 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-200">
         <div className="mt-4 font-poppins text-gray-700 w-full flex items-center justify-center">contato@azenathy.com</div>
         <div className="mx-6 mt-4 flex flex-col">
           <div className="flex items-center mb-6 justify-start w-full"><Instagram />
              <a  className="mx-2" href=""> @azenathy</a>
           </div>
           <div className="flex items-center mb-6 justify-start w-full"><Twitter />
              <a  className="mx-2" href=""> twitter.com/azenathy</a>
           </div>
           <div className="flex items-center mb-6 justify-start"><Facebook />
              <a  className="mx-2" href=""> facebook.com/azenathy</a>
           </div>
           
           </div>
         
        </div>
           
  </div> 
    )
  }