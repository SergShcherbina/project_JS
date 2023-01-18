import checkNumInputs from "./checkNumInputs";

const forms =  (state) => {
    const form = document.querySelectorAll('.form');
    const inputs = document.querySelectorAll('.form_input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...', 
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        return await res.text();
    };

    const cleareInput = () => {
        inputs.forEach( (item) => {
            item.value = '';
        })
    }

    form.forEach( (item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            const formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end') {                        //если это последняя форма (имеет атрибут end)
                for(let key in state) {
                    form.data.append(key, state[key]);                            //апендим в FormData данные из переменной (modalState => state)
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console,log(res);
                    statusMessage.textContent = message.success;
                })
                .catch( () => statusMessage.textContent = message.failure)
                .finally(() => {
                    cleareInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;