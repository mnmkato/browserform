const countrySelecct = document.getElementById("Country")
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
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
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
    "Korea, North",
    "Korea, South",
    "Kosovo",
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
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
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
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
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
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];

countries.forEach((country) => {
    const option = document.createElement("option")
    option.value = country
    option.text = country
    countrySelecct.appendChild(option)
})

const emailInput = document.getElementById("email")
emailInput.addEventListener("blur",validate().validateEmail)

const zipInput = document.getElementById("Zip-code")
zipInput.addEventListener("blur",validate().validateZip)

const passwordInput = document.getElementById("password")
passwordInput.addEventListener("input",validate().validatePassword)

const confirmPaswordInput = document.getElementById("confirmPassword")
confirmPaswordInput.addEventListener("input",validate().validateConfirmPassword)

const form = document.getElementById("userForm")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validate().validateEmail()
    validate().validateZip()
    validate().validatePassword()
    validate().validateConfirmPassword()
    if (validate().validateForm()) {
        //submit
    }
})


function validate(){
    const makeHint = function(parent,hintId,hintText) {
        const hint = document.getElementById(hintId)
        if (hint==null) {
            const hint = document.createElement("p")
             hint.classList.add("hint")
             hint.id=hintId 
             hint.textContent=hintText
             parent.appendChild(hint)
             return hint
             
        }
        hint.textContent=hintText
        return hint
    }
    const validateEmail = function(){
        const emailValue = emailInput.value
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailValue === "") {
            const emailHint = makeHint(emailInput.parentNode,"emailHint","Email is required")
            emailHint.classList.add("hintInvalid") 
        } else if (!(emailRegex.test(emailValue))) {
            const hint = makeHint(emailRegex.parentNode,"emailHint","Enter valid Email format")
            hint.classList.add("hintInvalid") 
        } else {
            emailInput.parentNode.removeChild(document.getElementById("emailHint"))
        }
    }
    const validateZip = function(){
        const zipValue = zipInput.value
        const zipRegex = /(\d{5}([\-]\d{4})?)/
        if (zipValue === "") {
            const hint = makeHint(zipInput.parentNode,"zipHint","Zip Code is required")
            hint.classList.add("hintInvalid") 
        } else if (!(zipRegex.test(zipValue))) {
            const hint = makeHint(zipInput.parentNode,"zipHint","Enter valid Zip code format")
            hint.classList.add("hintInvalid") 
        } else {
            zipInput.parentNode.removeChild(document.getElementById("zipHint"))
        }
    }
    const validatePassword = function(){
        const password = passwordInput.value
        const hints = [
            { id: "passWordHint1", text: "At least 8 characters", regex: /^.{8,}$/ },
            { id: "passWordHint2", text: "At least 1 Upper case character", regex: /[A-Z]/ },
            { id: "passWordHint3", text: "At least 1 special character", regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/ },
            { id: "passWordHint4", text: "At least 1 number", regex: /[0-9]/ }
        ];
        hints.forEach((hintItem)=>{
            const hint = makeHint(passwordInput.parentNode,hintItem.id,hintItem.text)
            if (hintItem.regex.test(password)) {
                hint.classList.add("hintValid")

            } else {
                hint.classList.remove("hintValid")
            }
        })

    }
    const validateConfirmPassword = function(){
        if (!(confirmPaswordInput.value==passwordInput.value)) {
            const hint = makeHint(confirmPaswordInput.parentNode,"confirmPaswordHint","Passwords do not match")
            hint.classList.add("hintInvalid")
        } else{
            confirmPaswordInput.parentNode.removeChild(document.getElementById("confirmPaswordHint"))
        }
    }
    const validateForm = function(){
        
    }
    return{validateForm,validateEmail,validateZip,validatePassword,validateConfirmPassword}
}