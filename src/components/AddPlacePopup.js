
import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm"


function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const titleRef = useRef(null)
    const linkRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({ name: titleRef.current.value, link: linkRef.current.value });
    }

    useEffect(() => {
        titleRef.current.value = "";
        linkRef.current.value = "";
    });
    return (
        <PopupWithForm
            name='popup_card'
            title='Новое место'
            nameButton='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="popup__field">
                <input className="popup__input popup__input_type_title " type="text" placeholder="Название" name="title" id="title"
                    defaultValue minLength={2} maxLength={30} required ref={titleRef} />
                <span className="popup__error" id="title-error"></span>
            </div>
            <div className="popup__field">
                <input className="popup__input popup__input_type_image" type="url" placeholder="Ссылка" name="link" id="url"
                    defaultValue required ref={linkRef} />
                <span className="popup__error" id="url-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup