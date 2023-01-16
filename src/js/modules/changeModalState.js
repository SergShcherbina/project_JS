import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {                                    //state-это аргумент приходящий из main.js
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = ( event, elem, prop)  => {

        elem.forEach((item, i) => {                                       //записываем в state данные с калькулятора балконов
            item.addEventListener(event , e => {
                switch(item.nodeName) {
                    case 'SPAN' : 
                        state[prop] = i;
                        break;
                    case 'INPUT' : 
                        if(item.getAttribute('type')==='checkbox') {                            
                            i === 0 ? state[prop] = 'Зимнее' : state[prop] = 'Летнее';                        
                            elem.forEach((box,  j) => {                   //отмечаем только один чекбокс
                                box.checked = (j === i ) ? true : false;
                            });                        
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' : 
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    };    

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');


    windowForm.forEach((item, i) => {                                    //записываем в state данные с калькулятора балконов
        item.addEventListener('click', e => {
            state.form = i;                                              //записываем номер элемента по котрому кликнули
        });
    });
        

};

export default changeModalState;