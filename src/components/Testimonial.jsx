
export const Testimonial = ({img,testimonial,name,position}) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
        <img className="rounded-full w-20" src={img} alt="photo" />
        <p className="my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]">{testimonial}</p>
        <h3 className="font-Fraunces font-bold text-lg">{name}</h3>
        <p className="text-Grayish-blue font-Barlow text-sm">{position}</p>
    </div>
  )
}
