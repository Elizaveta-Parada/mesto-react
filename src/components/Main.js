import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import Card from './Card'


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([dataUserInfo, dataCard]) => {
                setUserName(dataUserInfo.name)
                setUserDescription(dataUserInfo.about)
                setUserAvatar(dataUserInfo.avatar)
                dataCard.forEach(element => element.userId = dataUserInfo._id);
                setCards(dataCard)
            })
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-area">
                    <img className="profile__avatar" src={userAvatar} alt="Фото" />
                    <button type="button" className="profile__avatar-edit" aria-label="Редактировать аватар профиля" 
                    onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-title">{userName}</h1>
                    <p className="profile__info-subtitle">{userDescription}</p>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" 
                    onClick={onEditProfile}></button>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить фото" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__lists">
                    {cards.map(data => {
                        return (
                        <li key={data._id}>
                            <Card card={data} onCardClick={onCardClick} />
                        </li>)
                    })}
                </ul>
            </section>
        </main>
    );
  }
  
  export default Main;