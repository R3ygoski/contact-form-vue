import { ref } from "vue"
import { FormModelType, setErrorType } from './fromModelTypes'
import { nameRegexp, emailRegexp } from './regexp'

export const formModel = ref<FormModelType>({
    firstName: {
        value: '',
        error: {
            value: false,
            message: ''
        }
    },
    lastName: {
        value: '',
        error: {
            value: false,
            message: ''
        }
    },
    email: {
        value: '',
        error: {
            value: false,
            message: ''
        }
    },
    queryType: {
        value: '',
        error: {
            value: false,
            message: 'Please select a query type'
        }
    },
    messages: {
        value: '',
        error: {
            value: false,
            message: 'This field is required'
        }
    },
    consent: {
        value: {
            isChecked: false
        },
        error: {
            value: false,
            message: 'To submit this form, please consent to being contacted'
        }
    },
    valid: false
})

const modelFirstName = formModel.value.firstName
const modelLastName = formModel.value.lastName
const modelEmail = formModel.value.email
const modelQueryType = formModel.value.queryType
const modelMessage = formModel.value.messages
const modelConsent = formModel.value.consent

const setError:setErrorType = (model, message, error = true):void => {
    model.error.value = error
    model.error.message = message
}

const checkFirstName = ():boolean => {
    let valid:boolean = false
    if (modelFirstName.value===''){
        setError(modelFirstName, 'This field is required')

    } else if (modelFirstName.value.includes(' ') || !nameRegexp.test(modelFirstName.value)){
        console.log('1', modelFirstName.value.includes(' '), '2', !nameRegexp.test(modelFirstName.value))
        setError(modelFirstName, 'Please enter a valid first name')

    } else {
        setError(modelFirstName,'',false)
        valid = true
    }
    return valid
}

const checkLastName = ():boolean => {
    let valid:boolean = false
    if (modelLastName.value===''){
        setError(modelLastName, 'This field is required')

    } else if (modelLastName.value.includes(' ') || !nameRegexp.test(modelLastName.value)){
        setError(modelLastName, 'Please enter a valid last name')

    } else {
        setError(modelLastName,'',false)
        valid = true

    }
    return valid
}

const checkEmail = ():boolean => {
    let valid:boolean = false
    if (modelEmail.value===''){
        setError(modelEmail, 'This field is required')

    } else if (!emailRegexp.test(modelEmail.value)){
        setError(modelEmail, 'Please enter a valid email address')

    } else {
        setError(modelEmail,'',false)
        valid = true

    }
    return valid
}

const checkQueryType = ():boolean => {
    let valid:boolean = false
    if (modelQueryType.value === ''){
        setError(modelQueryType, 'Please select a query type')
    } else {
        setError(modelQueryType,'',false)
        valid = true

    }
    return valid
}

const checkMessage = ():boolean => {
    let valid:boolean = false
    if (modelMessage.value===''){
        setError(modelMessage, 'This field is required')

    } else {
        setError(modelMessage,'',false)
        valid = true

    }
    return valid
}

const checkConsent = ():boolean => {
    let valid:boolean = false
    if (!modelConsent.value.isChecked){
        setError(modelConsent, 'To submit this form, please consent to being contacted')

    } else {
        setError(modelConsent,'',false)
        valid = true

    }
    return valid
}


export const checkForm = ():void => {
    if (!checkFirstName() || !checkLastName() || !checkEmail() || !checkQueryType() || !checkMessage() || !checkConsent()){
        formModel.value.valid = false
    } else {
        formModel.value.valid = true
    }
}