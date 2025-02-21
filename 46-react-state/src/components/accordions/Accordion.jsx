import { useState } from 'react';

const Accordion = ( props ) => {

    const [ isOpen, setIsOpen ] = useState( false );

    const { faq } = props;
    const { title, content } = faq;

    const handleAccordion = () => setIsOpen( !isOpen ); //switcha  in true o false

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h2>{ title }</h2>
            </div>
            {/* <button className="accordion__btn" onClick={() => setIsOpen( !isOpen ) } > */}
            <button className="accordion__btn" onClick={ handleAccordion } >
                { isOpen ? '-' : '+' }
            </button>
            <div>
                {/* condizione: se isOpen è true allora mostro content se no niente */}
                { isOpen && <div> { content} </div> }



                {/* { content } */}
            </div>
        </div>
    )
}

export default Accordion;