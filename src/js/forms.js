// const forms = () => {

//     const form = document.querySelectorAll('form');
//     const inputs = document.querySelectorAll('input');
//     const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

//     phoneInputs.forEach(item => {
//         item.addEventListener('input', () => {
//             item.value = item.value.replace(/\D/, '');
//         });
//     });
    
//     const message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо! Скоро мы с вами свяжемся',
//         failure: 'Что-то пошло не так...'
//     };

//     const postData = async (url, data) => {
//         document.querySelector('.status').textContent = message.loading;
//         let res = await fetch(url, {
//             method: "POST",
//             body: data
//         });

//         return await res.text();
//     };

//     const clearInputs = () => {
//         inputs.forEach(item => {
//             item.value = '';
//         });
//     };

//     form.forEach(item => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             item.appendChild(statusMessage);

//             const formData = new FormData(item);

//             postData('assets/server.php', formData)
//                 .then(res => {
//                     console.log(res);
//                     statusMessage.textContent = message.success;
//                 })
//                 .catch(() => statusMessage.textContent = message.failure)
//                 .finally(() => {
//                     clearInputs();
//                     setTimeout(() => {
//                         statusMessage.remove();
//                     }, 5000);
//                 });
//         });
//     });
// };
// export default forms;


function addressFormValidate() {
    if(document.querySelector('form#address_data_form') !== null){
        const addressForm = document.querySelector('form#address_data_form');
        const town = document.querySelector('#userTown');
        const street = document.querySelector('#userStreetName');
        const houseNumber = document.querySelector('#userHouseNumber');
        const apartment = document.querySelector('#userApartmentNumber');
        const building = document.querySelector('#userHouseBuildingNumber');

        addressForm.addEventListener('submit', e => {
            e.preventDefault();
            validateInputs();
        });
        
        const validateInputs = () => {
            const townValue = town.value.trim();
            const streetValue = street.value.trim();
            const houseNumberValue = houseNumber.value.trim();
            const apartmentValue = apartment.value.trim();
            const buildingValue = building.value.trim();

            isEmptyRequiredInput(town, townValue);
            isEmptyRequiredInput(street, streetValue);
            isEmptyRequiredInput(houseNumber, houseNumberValue);
            isEmptyRequiredInput(apartment, apartmentValue);

            !isValidTown(townValue) ? setError(town, 'Только буквы латинского и кириллического алфавитов') : setSuccess(town);

            !isValidHouseNumber(houseNumberValue) ? setError(houseNumber, 'Номер дома не должен превышать 999') : setSuccess(houseNumber);

            (!isValidHouseBuildingNumber(buildingValue) && buildingValue !== '') ? setError(building, 'Номер корпуса не должен превышать 99') : setSuccess(building);

            !isValidApartmentNumber(apartmentValue) ? setError(apartment, 'Номер квартиры не должен превышать 2999') : setSuccess(apartment);
        };
    }
}

function autorizationFormValidate() {
    if(document.querySelector('form#autorization_form') !== null){
        const autorizationForm = document.querySelector('form#autorization_form');
        const email = document.querySelector('form#autorization_form #email_aut');
        const password = document.querySelector('form#autorization_form #password_aut');
        console.log(autorizationForm, email, password);
        autorizationForm.addEventListener('submit', e => {
            e.preventDefault();
            validateInputs();
        });

        const validateInputs = () => {
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();

            isEmptyRequiredInput(email, emailValue);
            !isValidEmail(emailValue) ? setError(email, 'Введите действительный email') : setSuccess(email);

            isEmptyRequiredInput(password, passwordValue);
            //(passwordValue.length < 6) ? setError(password, 'Введите не менее 6 символов') : setSuccess(password);
        }; 
    }
    
}

function registrationFormValidate() {
    if(document.querySelector('form#registration_form') !== null){
        const personalDataForm = document.querySelector('form#registration_form');
        const username = document.querySelector('form#registration_form #username_regist');
        const email = document.querySelector('form#registration_form #email_regist');
        const password = document.querySelector('form#registration_form #password_regist');
        const passwordRepeat = document.querySelector('form#registration_form #password_regist_repeat');
        const phone = document.querySelector('form#registration_form #tel_regist');
        console.log(personalDataForm, username, email, password, passwordRepeat, phone);

        personalDataForm.addEventListener('submit', e => {
            e.preventDefault();
            validateMainInfoInputs(username, email, password, passwordRepeat, phone);
        });
    }
}

function personalFormValidate() {
    if(document.querySelector('form#personal_data_form') !== null){
        const personalDataForm = document.querySelector('form#personal_data_form');
        const username = document.querySelector('form#personal_data_form #username');
        const email = document.querySelector('form#personal_data_form #email');
        const password = document.querySelector('form#personal_data_form #password');
        const passwordRepeat = document.querySelector('form#personal_data_form #inputPasswordAgain');
        const phone = document.querySelector('form#personal_data_form #tel');

        personalDataForm.addEventListener('submit', e => {
            e.preventDefault();
            validateMainInfoInputs(username, email, password, passwordRepeat, phone);
        });
    }
}

/* Validate input for main info on personal page and registration modal */
function validateMainInfoInputs(username, email, password, passwordRepeat, phone) {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordRepeatValue = passwordRepeat.value.trim();
    const phoneValue = phone.value.trim();
    //const instagramValue = instagram.value.trim();

    isEmptyRequiredInput(username, usernameValue);

    isEmptyRequiredInput(email, emailValue);
    !isValidEmail(emailValue) ? setError(email, 'Введите действительный email') : setSuccess(email);

    if(passwordValue !== ''){
        isEmptyRequiredInput(passwordRepeat, passwordRepeatValue);
        if(passwordValue !== passwordRepeatValue){
            setError(passwordRepeat, 'Пароли не совпадают');
        } else if (passwordValue === passwordRepeatValue){
            setSuccess(passwordRepeat);
        }
    }
    isEmptyRequiredInput(phone, phoneValue);
    !isValidPhone(phoneValue) ? setError(phone, 'Используйте формат: +375 33 123 45 67') : setSuccess(phone);

    // if(instagramValue !== ''){
    //     !isValidInstagram(instagramValue) ? setError(instagram, 'Используйте формат: @username') : setSuccess(instagram);
    // }
}

function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    //element.classList.remove('success');
};

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    //const errorDisplay = element.querySelector(`${element} + .error`)

    errorDisplay.innerText = '';
    //inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

/* Functions for internal validations */
const isValidHouseNumber = houseNumber => {
    const re = /^\d{1,3}[а-яА-ЯёЁa-zA-Z]?$/;
    return re.test(String(houseNumber).toLowerCase());
};
const isValidTown = town => {
    const re = /^[а-яА-ЯёЁa-zA-ZŭŬłŁśšŚŠźŹžŽćĆČčńŃіІўЎ-]+$/;
    return re.test(String(town).toLowerCase());
};
const isValidApartmentNumber = number => {
    const re = /^[1-2]?\d{1,3}[а-яА-ЯёЁa-zA-Z]?$/;
    return re.test(String(number).toLowerCase());
};
const isValidHouseBuildingNumber = number => {
    const re = /^\d{1,2}[а-яА-ЯёЁa-zA-Z]?|[а-яА-ЯёЁa-zA-Z]$/;
    return re.test(String(number).toLowerCase());
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const isValidPhone = phone => {
    const re = /^\+375\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
    return re.test(String(phone).toLowerCase());
};

// const isValidInstagram = nick => {
//     const re = /^@\w+$/;
//     return re.test(String(nick).toLowerCase());
// }

function isEmptyRequiredInput(element, elementValue){
    if(elementValue === '') {
        setError(element, 'Это обязательное поле');
    }
}

/* Call all forms */
const forms = () => {
    autorizationFormValidate();
    registrationFormValidate();
    addressFormValidate();
    personalFormValidate();
};

export default forms;