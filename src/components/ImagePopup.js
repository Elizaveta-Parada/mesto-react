function ImagePopup({card, onClose, isOpen}) {
    return (
        <div className={`popup popup_full-image ${isOpen && 'popup_opened'}`}>
            <div className="popup__container-image">
                <button type="button" className="popup__close" aria-label="Закрытие окна" onClick={onClose}></button>
                    <img className="popup__image" src={card.link} alt={card.name} />
                    <h2 className="popup__title-image">{card.name}</h2>
            </div>
        </div>
    )
}
export default ImagePopup