const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

        const closeAllModal = () => {
            windows.forEach( item => {
                item.style.display = 'none';
            });
        };

        trigger.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeAllModal();
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";                             //убираем скрол на фоне модального окна
            });
    
            close.addEventListener("click", () => {
                modal.style.display = "none";
                document.body.style.overflow = "";
                closeAllModal();
            });            
        });

        modal.addEventListener('click', e => {
            if(e.target ==  modal && closeClickOverlay) {                                        
                modal.style.display = "none";
                document.body.style.overflow = "";
                closeAllModal();
            }
        });
    };

    const showModalByTime = (selector, time) => {                                     //показ модального окна через 60сек
        setTimeout( () => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time)
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close' );
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); 
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime(".popup", 60000);

};

export default modals;
