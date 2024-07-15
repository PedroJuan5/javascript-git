const Cards = () => {
    const cardData = [
        {
            title: "titulo 1",
            subTitle: "Subtitulo 1",
            text: "Este é um texto do primeiro card",
            img: "https://placehold.co/300x200/png"
        },
        {
            title: "titulo 2",
            subTitle: "Subtitulo 2",
            text: "Este é um texto do segundo card",
            img: "https://placehold.co/300x200/png"
        },
        {
            title: "titulo 3",
            subTitle: "Subtitulo 3",
            text: "Este é um texto do terceiro card",
            img: "https://placehold.co/300x200/png"
        }
    ];


    return (
        <div className="row">
            {cardData.map((card, index) => (
                <>
                    <section key={index} className="col-md-4">
                        <article className="card">
                            <div className="card-body">
                                <img src={card.img} alt={card.title} />
                                <h5 className="card-title">{card.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {card.subTitle}
                                     </h6>
                                <p className="card-text">
                                    {card.text}
                                </p>
                            </div>
                        </article>
                    </section>
                </>

            ))}





        </div>
    )
}

export default Cards;