function Card({card, onCardClick}) {
    return (
        <article className="element">
            <img className="element__image" src={card.link} alt={card.name} onClick={() => onCardClick({link: card.link, name: card.name})}/>
            <button type="button" className="element__delete" aria-label="Удалить"></button>
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-area">
                    <button type="button" className="element__icon" aria-label="Лайк"></button>
                    <p className="element__like-counter"></p>
                </div>
            </div>
        </article>
    )
}

export default Card