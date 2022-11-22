import { useState, MouseEvent } from "react"
import { faArrowAltCircleRight, faArrowAltCircleLeft, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ImageSlider(props: {
    data: string[];
}) {

    const [activeImage, setActiveImage] = useState(0);


    function handlePreviousImageClick() {
        if (activeImage === 0) {
            setActiveImage(props.data.length - 1);
            return;
        };
        setActiveImage(activeImage - 1)
    }

    function handleNextImageClick() {
        if (activeImage < props.data.length - 1) {
            setActiveImage(activeImage + 1);
            return;
        };
        setActiveImage(0);
    };

    function handleSpecificImageClick(event: any) {
        setActiveImage(event.target.value)
        console.log(activeImage)
    };

    return (
        <div className="sliderContainer">
            <button type="button" className="nextImageBtn" onClick={handlePreviousImageClick}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <button type="button" className="nextImageBtn" onClick={handleNextImageClick}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <img src={props.data[activeImage]} style={{ height: '200px', width: '300px' }}></img>
            {props.data.map((image, index) => {
                return (
                    <button value={index} type="button" key={index} className="specificBtn" onClick={handleSpecificImageClick}>
                        <FontAwesomeIcon icon={faCircle} />
                    </button>
                )
            })}
        </div>
    );
};

export default ImageSlider;