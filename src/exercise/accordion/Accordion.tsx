import { createRef, useRef, useState } from 'react'
import './Accordion.css'
import Pointer from './Pointer';

function Accordion(props: {
    title: string,
    content: string
}) {

    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const [rotation, setRotation] = useState('0deg')

    const content = createRef<HTMLDivElement>();

    function toggleAccordion() {
        setActive(active === '' ? 'active' : '')
        setHeight(active === 'active' ? '0px' : `${content.current?.scrollHeight}px`)
        setRotation(active === 'active' ? '0deg': '90deg')
        return
    }


    return (
        <div className="accordionContainer">
            <button className={`accordion ${active}`} type="button" onClick={toggleAccordion}>
                <p className="accordionTitle">{props.title}</p>
                <Pointer rotation={rotation} />
            </button>
            <div className="accordionContent" ref={content} style={{ maxHeight: `${height}` }} >
                <div className='accordionText' dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>

        </div>
    )
}

export default Accordion