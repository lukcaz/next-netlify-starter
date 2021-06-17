function Album() {
    return (
    <div className="flex">
        <div className="mx-10 lg:flex lg:m-0 lg:justify-center w-full ">
            <div className="lg:w-1/2 flex flex-col items-center justify-center ">
                <img className="rounded-2xl h-192 shadow-xl" src="/cover-1000.png" alt="" />
                <div className="mt-6 text-2xl lg:text-4xl font-poppins font-semibold ">O Caminho</div>
                <div className=" flex items-center justify-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition duration-500 ease-in-out hover:text-red-600 transform hover:-translate-y-1 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 filter drop-shadow-lg transition duration-500 ease-in-out hover:text-red-600 transform hover:-translate-y-1 hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition duration-500 ease-in-out hover:text-red-600 transform hover:-translate-y-1 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
            </div>
        </div>
    </div>
    )
}

export default Album;