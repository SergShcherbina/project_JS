const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach((item) => {                                             //валидация инпута phone (только цифры)
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');                        //удаляем все не цифры
        });
    });
};

export default checkNumInputs;