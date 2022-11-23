import { faArrowAltCircleRight, faArrowAltCircleLeft, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnSliderProps {
    direction: string,
    moveSlide: () => void
}

export default function BtnSlider({ direction, moveSlide }: BtnSliderProps) {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >

            {direction === "next"
                ? <FontAwesomeIcon icon={faArrowAltCircleRight} />
                : <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            }
        </button>
    );
}