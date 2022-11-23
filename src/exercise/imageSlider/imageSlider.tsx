import { useState } from "react"
import "../imageSlider/imageSlider.css";
import BtnSlider from "./BtnSlider";

function ImageSlider(props: {
    dataSlider: string[];
}) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== props.dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === props.dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(props.dataSlider.length)
        }
    }

    const moveDot = (index: number) => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {props.dataSlider.map((obj, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: props.dataSlider.length }).map((item, index) => (
                    <button
                        type="button"
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></button>
                ))}
            </div>
        </div>
    )
};

export default ImageSlider;