import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

function Pointer(props: {
    rotation: string
}) {
    return (
        <div>

            <FontAwesomeIcon icon={faArrowDown} style={{rotate: `${props.rotation}`, transition: '0.2s ease'}} />
        </div>
    )
}



export default Pointer