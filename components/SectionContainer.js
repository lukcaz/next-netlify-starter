
export default function SectionContainer({ children }) {
    return <div style={{ 
      backgroundImage: `url("https://res.cloudinary.com/lukssk/image/upload/v1624081730/gradient-2_qydffh.png")`,
      width:"1240",
      }}><div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">{children}</div></div>
  }