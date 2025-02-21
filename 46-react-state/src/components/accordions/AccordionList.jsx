import Accordion from "./Accordion";

const faqs = [
    {
        id: 1,
        title: "Accordion 1",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
        id: 2,
        title: "Accordion 2",
        content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
  ];

const AccordionList = () => {

    if( faqs.length === 0 ){
        return <h2>Non ci sono faq</h2>
    }

    return (
        <>
            <h2>Qui va la lista di accordions</h2>


            <div className="accordion-list">
                {
                    faqs.map( (element) => {
                        return(
                            < Accordion key={element.id} faq={ element }/>
                        )
                    } )
                }
            </div>


            
        </>
    )
}

export default AccordionList;