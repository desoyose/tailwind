import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'


export const Main = () => {
  return (
    <section>
        <picture>
            <source media='(max-width:639px' srcSet={imgMobile}/>
            <source media='(min-width:640px' srcSet={imgDesktop} />
            <img src={imgMobile} alt="" />
        </picture>
        <p className='absolute top-[144px] w-[327px] left-0 right-0 mx-auto font-Fraunces text-4xl uppercase text-center font-bold text-white tracking-[6.25px]
        sm:w-[600px]'>We are creatives</p>
        <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' src={ arrow } alt="" />
    </section>
  )
}

