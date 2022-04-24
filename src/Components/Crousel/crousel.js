// Commonjs

// Or for ES2015 module
import Flickity from "react-flickity-component";
import "../../CSS/Flickity/flickity.css";

const flickityOptions = {
  initialIndex: 2,
};

function Carousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="https://raw.githubusercontent.com/saurabh-kud/Sangeet/master/image/slider-1.webp" />
      <img src="https://raw.githubusercontent.com/saurabh-kud/Sangeet/master/image/slider-2.webp" />
      <img src="https://raw.githubusercontent.com/saurabh-kud/Sangeet/master/image/slider-3.webp" />
    </Flickity>
  );
}
export default Carousel;
