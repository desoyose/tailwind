
export const ImageText = ({order,imgMobile,imgDesktop,title,text}) => {
  return (
    <div className={`${order} relative pt-[450px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px]`}>
        <picture className="absolute top-0 z-[-1]">
            <source media='(max-width: 639px)' srcSet={imgMobile}/>
            <source media='(min-width: 640px)' srcSet={imgDesktop}/>
            <img src={imgMobile} alt="imagen servicio" />
        </picture>
        <h2 className="text-center font-Fraunces text-3xl text-Dark-desaturated-cyan font-black mb-7">{title}</h2>
        <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-16 lg:mx-auto lg:w-[300px]">{text}</p>
    </div>
  )
}
