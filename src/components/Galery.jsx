import { Image } from "./Image"
import milkMobile from "../assets/mobile/image-gallery-milkbottles.jpg"
import milkDesktop from "../assets/desktop/image-gallery-milkbottles.jpg"
import coneMobile from "../assets/mobile/image-gallery-cone.jpg"
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg"
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg"
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg"
import suggarMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg"
import suggarDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg"

export const Galery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
    <Image
        imgMobile={milkMobile}
        imgDesktop={milkDesktop}
    />
    <Image
        imgMobile={orangeMobile}
        imgDesktop={orangeDesktop}
    />
    <Image
        imgMobile={coneMobile}
        imgDesktop={coneDesktop}
    />
    <Image
        imgMobile={suggarMobile}
        imgDesktop={suggarDesktop}
    />
    </div>
  )
}
