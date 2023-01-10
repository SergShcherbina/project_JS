const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        triggerSelector.addEventListener( 'click' , e => {
            if(e.target) {
                e.preventDefault()
            }

            modalSelector.style.display = 'block';
            document.body.style.overflow = 'hidden'                     //убираем скрол на фоне модального окна
        });
            
        closeSelector.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';      
        });
    };
    

    const trigger = document.querySelector('.popup_engineer_btn');
    const modal = document.querySelector('.popup_engineer');
    const close = document.querySelector('.popup_engineer .popup_close');

    bindModal(trigger, modal, close);
};

export default modals;