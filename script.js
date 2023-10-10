const validities = {
    email: false,
    country: false,
    zip: false,
    password: false,
    passwordC: false,
};

window.onload = () => {
    addEmailValidator();
    addCountryValidator();
    addZipValidator();
    addPasswordValidator();
    addPasswordCValidator();
    addSubmitButtonValidator();
}

function addEmailValidator() {
    const email = document.querySelector('input[type="email"]');
    const tooManyAtsPattern = /.*@.*@.*/;
    const missingUsernamePattern = /^@/;
    const missingDomainPattern = /@$/;
    email.addEventListener('input', () => {
        const emailPattern = /\w@\w/;
        const value = email.value;
        emailError = document.querySelector('label[for="email"]>div');
        if (emailPattern.test(value) && !tooManyAtsPattern.test(value)) {
            email.classList = '';
            emailError.textContent = '';
            validities.email = true;
        } else {
            validities.email = false;
            email.classList = 'inputError';
            const errors = [];
            if (!value.includes('@')) {
                errors.push('No @');
            } else if (tooManyAtsPattern.test(value)){
                errors.push('Too many @s');
            } else {
                if (missingUsernamePattern.test(value)) {
                    errors.push('Missing username');
                } 
                if (missingDomainPattern.test(value)) {
                    errors.push("Missing domain");
                }
            }
            emailError.textContent = 'Invalid email: ';
            errors.forEach(error => {
                emailError.textContent += `${error}, `
            })
            emailError.textContent = emailError.textContent.slice(0,emailError.textContent.length - 2);
        }
        // console.log(validities);
    })
}

function addCountryValidator() {
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Côte d'Ivoire",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo (Congo-Brazzaville)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czechia (Czech Republic)",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Holy See",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (formerly Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine State",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe", 
    ]
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        document.querySelector('select#countries').appendChild(option);
    })
    
    const country = document.querySelector('select#countries')
    const countryError = document.querySelector('label[for="countries"]>div');
    document.querySelector('select#countries').addEventListener('change', () => {
        if (document.querySelector('option[value="placeholder"]').selected) {
            country.classList = 'inputError';
            countryError.textContent = 'Invalid country, please choose below';
            validities.country = false;
        } else {
            country.classList = '';
            countryError.textContent = '';
            validities.country = true;
        }
    });
}

function addZipValidator() {
    zip = document.querySelector('label[for="zip"]>input');
    zipError = document.querySelector('label[for="zip"]>div')
    
    zip.addEventListener('input', () => {
        //not numbers only.
        let validZip = true;
        const errors = [];
        const numbersOnly = /[^0-9]/;
        if (numbersOnly.test(zip.value)) {
            errors.push('Numbers only, ');
            validZip = false;
        }
        
        // fewer than 5 numbers.
        if (zip.value.length < 5) {
            errors.push('Too short, ');
            validZip = false;
        }
        
        // more than 5 but fewer than 9
        if (zip.value.length > 5 && zip.value.length < 9) {
            errors.push('Too short for long zip format, ');
            validZip = false;
        } 
        
        // . more than 9 numbers
        if (zip.value.length > 9) {
            errors.push('Too long, ');
            validZip = false;
        }

        if (!validZip) {
            validities.zip = false;
            zip.classList = 'inputError';
            zipError.textContent = 'Invalid zip: ';
            errors.forEach(error => {
                zipError.textContent += error;
            })
            zipError.textContent = zipError.textContent.slice(0,zipError.textContent.length - 2);
        } else {
            validities.zip = true;
            zip.classList = '';
            zipError.textContent = '';
        }
    })
}

function addPasswordValidator() {
    const password = document.querySelector('label[for="pwd"]>input');
    const passwordError = document.querySelector('label[for="pwd"]>div');
    const letters = /[a-zA-Z]/;
    const numbers = /\d/;
    
    password.addEventListener('input', () => {
        let validPassword = true;
        const errors = [];
        //has letters
        if (!letters.test(password.value)) {
            errors.push('Must have at least one letter, ');
            validPassword = false;
        }
        
        //has numbers
        if (!numbers.test(password.value)) {
            errors.push('Must have at least one number, ');
            validPassword = false;
        }
        
        //min length
        if (password.value.length < 8) {
            errors.push('Must be at least 8 characters long, ');
            validPassword = false;        
        }

        if (!validPassword) {
            validities.password = false;
            password.classList = 'inputError';
            passwordError.textContent = 'Invalid password: ';
            errors.forEach(error => {
                passwordError.textContent += error;
            });
            passwordError.textContent = passwordError.textContent.slice(0,passwordError.textContent.length - 2);
        } else {
            validities.password = true;
            password.classList = '';
            passwordError.textContent = '';
        }

        //trigger password confirmation validator when regular password field changes
        const event = new CustomEvent("input");
        document.querySelector('label[for="pwdc"]>input').dispatchEvent(event);
    });

    // console.log(numbers.test(''));
    // console.log(numbers.test(''));
    // console.log(numbers.test('s1o2i3djf'));

}

function addPasswordCValidator() {
    const password = document.querySelector('label[for="pwd"]>input')
    const passwordC = document.querySelector('label[for="pwdc"]>input');
    const passwordCError = document.querySelector('label[for="pwdc"]>div');

    passwordC.addEventListener('input', () => {
        if (passwordC.value !== password.value) {
            validities.passwordC = false;
            passwordC.classList = 'inputError';
            passwordCError.textContent = 'Passwords do not match';
        } else {
            validities.passwordC = true;
            passwordC.classList = '';
            passwordCError.textContent = '';
        }
    })
}

function addSubmitButtonValidator() {
    const submit = document.querySelector('form>button');
    // console.log(submit);
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let submittedValidities = [...(Object.values(validities))];
        if (submittedValidities.every(validity => validity === true)) {
            alert('All inputs are valid!');
        } else {
            alert('At least one input is invalid!')
        }
    })
}