
export default function SectionContainer({ children }) {
    return <div style={{ 
      backgroundImage: `url("/gradient-2.png")`,
      width:"1240",
      }}><div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">{children}</div></div>
  }