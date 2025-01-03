export const Text = ({order, title, text, color }) => {
  return (
    <div className={`${order} text-center h-[420px] flex flex-col place-content-around px-6 py-6 
    tablet:h-auto lg:px-16 desktop:text-left desktop:pl-40 desktop:py-36 desktop:pr-28`}>
        <h2 className="font-Fraunces font-black  text-[2rem] tablet:text-xl lg:text-4xl desktop:leading-tight">{title}</h2>
        <p className="font-Barlow text-Dark-grayish-blue text-lg tablet:text-xs  leading-[1.875rem] tablet:leading-[1.5rem] 
        lg:text-lg">{text}</p>
        <div className="relative">
          <button className="uppercase font-Fraunces font-bold z-50 relative lg:text-lg">Read More</button>
          <div className={`w-[137px] h-[10px] rounded-full absolute ${color} right-0 left-0 mx-auto bottom-0 z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px]`}></div>
        </div>
        
    </div>
  )
}
