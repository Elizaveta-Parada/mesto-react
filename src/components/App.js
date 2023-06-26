import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }
    
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard(null)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

  return (
        <div>
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                
            />
            <Footer />
            <PopupWithForm
                name='popup_profile'
                title='Редактировать профиль'
                nameButton='Сохранить'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <div className="popup__field">
                    <input className="popup__input popup__input_type_name" type="text" placeholder="Имя" name="profileName" id="profile_name"  
                        defaultValue required minLength={2} maxLength={40} />
                    <span className="popup__error" id="profile_name-error"></span>
                </div>
                <div className="popup__field">
                <input className="popup__input popup__input_type_job" type="text" placeholder="О себе" name="profileJob" id="profile_job"  
                    defaultValue minLength={2} maxLength={200} required />
                <span className="popup__error" id="profile_job-error"></span>
                </div>
            </PopupWithForm>
            <PopupWithForm
                name='popup_card'
                title='Новое место'
                nameButton='Создать'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <div className="popup__field">
                    <input className="popup__input popup__input_type_title " type="text" placeholder="Название" name="title" id="title"  
                    defaultValue minLength={2} maxLength={30} required />
                    <span className="popup__error" id="title-error"></span>
                </div>
                <div className="popup__field">
                    <input className="popup__input popup__input_type_image" type="url" placeholder="Ссылка" name="link" id="url"  
                        defaultValue required />
                    <span className="popup__error" id="url-error"></span>
                </div>
            </PopupWithForm>
            <PopupWithForm
                name='popup_delete'
                title='Вы уверены?'
                nameButton='Да'
            />
            <PopupWithForm
                name='popup_avatar'
                title='Обновить аватар'
                nameButton='Сохранить'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <div className="popup__field">
                    <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка" name="avatar" id="avatar"  
                    defaultValue required />
                    <span className="popup__error" id="avatar-error"></span>
                </div>
            </PopupWithForm>
            <ImagePopup 
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div>
  );
}

export default App;
