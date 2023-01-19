const images = () => {
    const workSection = document.querySelector('.works');                       //родительский контейнер для делигирования
    const imgPopup = document.createElement('div');                             //создали контейнер для popup
    const bigImage = document.createElement('img');                             //создаем картинку для вставки в нее изображения

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.style.cssText = "justify-content: center; align-items: center; display: none;"
    bigImage.style.height = '80%';

    imgPopup.append(bigImage);

    workSection.addEventListener('click', e => {                               //вешаем обработчик на род контейнер
        e.preventDefault();

        if(e.target && e.target.classList.contains('preview')) {               //если таргет совпадает с классом картинки
            imgPopup.style.display ="flex";
            imgPopup.style.overflow = 'hidden';

            const path =e.target.parentNode.getAttribute('href');              //получаем путь к родителю таргет 
            bigImage.setAttribute('src', path);                                //записываем тот путь в картинку popup
        }
        if(e.target && e.target.matches('.popup')) {                           //если таргет совпадает с классом popup
            imgPopup.style.display = 'none';
        }
    });
};

export default images;