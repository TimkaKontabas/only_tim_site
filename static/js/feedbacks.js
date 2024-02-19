const feedbacksPlace = document.getElementsByClassName('feedbacks')[0];

function getFeedbacks() {
    let data = [
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 3
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 2
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 1
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 3
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 4
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 2
    },
    {
        name: 'Фамилия И.О.',
        text: 'Текст отзыва',
        img: '../static/img/logo.png',
        date: '01.01.2022',
        rating: 5
    },
    ]
    return data
}

function setFeedbacks(feedbacks) {
    feedbacks.forEach(element => {
        let feedback = document.createElement('div');
        feedback.className = 'feedback';
        let photo = document.createElement('img');
        photo.className = 'photo';
        photo.src = element.img;
        let text = document.createElement('p');
        text.className = 'text';
        text.textContent = element.text;
        let name = document.createElement('p');
        name.className = 'name';
        name.textContent = element.name;
        let raiting = document.createElement('div');
        raiting.className = 'raiting';
        for (let i = 0; i < element.rating; i++) {
            let star = document.createElement('img');
            star.className = 'star';
            star.src = '../static/img/star.png';
            raiting.appendChild(star);
        }
        let date = document.createElement('p');
        date.className = 'date';
        date.textContent = element.date;
        feedback.appendChild(photo);
        feedback.appendChild(text);
        feedback.appendChild(name);
        feedback.appendChild(raiting);
        feedback.appendChild(date);

        feedbacksPlace.appendChild(feedback);

    });
}

setFeedbacks(getFeedbacks())