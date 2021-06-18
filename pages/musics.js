import Apple from "../components/apple";
import Deezer from "../components/deezer";
import Spotify from "../components/spotify"
import Youtube from "../components/youtube";

export default function Musics() {
    return (
      <div className="flex flex-col bg-cover items-center justify-center w-full  " style={{ 
        backgroundImage: `url("/gradient-1.png")`,
        width:"1240",
        height:"1332",
      }}>
  {/*         <div className="font-poppins text-gray-700 mb-4" >Listen on your favorite plataform</div> */}
        <div className="bg-white h-72 w-72 rounded-t-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-200">
        <img className="rounded-t-2xl h-192 " src="/cover-1000.png" alt="" />
        </div>
        <div className="bg-white  flex items-center justify-between h-16 w-72 border shadow-xl ">
           <div className=" mx-4 "><Apple /></div>
           <a href="https://music.apple.com/br/artist/azenathy/1209302665" target="_blank" className="mx-1 font-poppins text-gray-800 font-medium bg-gray-200 transition duration-400 ease-in-out hover:bg-yellow-500 py-4 px-6 rounded-xl">Play</a>
        </div>
        <div className="bg-white  flex items-center justify-between h-16 w-72 border ">
           <div className=" mx-4 "><Spotify /></div>
           <a href="https://open.spotify.com/artist/0f8GcTn8LKqP1p8KIns3mx?si=v4qwH0ofT7O3NTv-bFNZvw&nd=1" target="_blank" className="mx-1 font-poppins text-gray-800 font-medium transition duration-400 ease-in-out bg-gray-200 hover:bg-yellow-500 hover:shadow-xl py-4 px-6 rounded-xl">Play</a>
        </div>
        <div className="bg-white  flex items-center justify-between h-16 w-72 border">
           <div className=" mx-4 "><Deezer /></div>
           <a href="https://deezer.page.link/11rGJJBmM8GAhS2q9" target="_blank" className="mx-1 font-poppins text-gray-800 font-medium bg-gray-200  transition duration-400 ease-in-out hover:bg-yellow-500 py-4 px-6 rounded-xl">Play</a >
        </div>
        <div className="bg-white  flex items-center justify-between h-16 w-72 border shadow-xl rounded-b-2xl">
           <div className=" mx-4 "><Youtube /></div>
           <a href="https://music.youtube.com/channel/UCBmTr-M-6-tUpk6Jd3Bm7Ig?feature=share" target="_blank" className="mx-1 font-poppins text-text-gray-800 font-medium bg-gray-200  transition duration-400 ease-in-out hover:bg-yellow-500 hover:text-white py-4 px-6 rounded-xl ">Play</a>
        </div>
    </div> 
    )
  }