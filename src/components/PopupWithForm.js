function PopupWithForm({name, title, nameButton, children, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button type="button" className="popup__close" aria-label="Закрытие окна" onClick={onClose}></button>
                <form className="popup__form popup__form_type_edit" name="prifile-info" noValidate>
                    {children}
                    <button type="submit" className="popup__submit-btn popup__submit-btn_visable">{nameButton}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm