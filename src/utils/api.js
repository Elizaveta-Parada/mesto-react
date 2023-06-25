class Api {
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    // Метод обработки ответа с сервера
    _processingResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`код ошибки: ${res.status}`);
        }
    }

    // Метод получения данных пользователя с сервера 
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => { return this._processingResponse(res) })
        
    }

    // Метод отправки данных пользователя на сервер
    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name: data.profileName, about: data.profileJob })
        })
        .then(res => { return this._processingResponse(res) })
    }

    // Метод загрузки карточек с сервера
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => { return this._processingResponse(res) })
    }

    // Метод отправки данных аватара на сервер 
    setAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({avatar: data.avatar})
        })
        .then(res => { return this._processingResponse(res) })
    }

    // Метод добавления новой карточки
    addNewCard({name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
        .then(res => { 
            return this._processingResponse(res) })
    }

    //Метод постановки и удаления лайков
    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => { return this._processingResponse(res) })
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => { return this._processingResponse(res) })
    }

    //Метод удаления фото
    deleteImage(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => { return this._processingResponse(res) }) 
    }


}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: '6e677985-1c05-4284-9161-72fb9652f137',
      'Content-Type': 'application/json'
    }
})

export default api