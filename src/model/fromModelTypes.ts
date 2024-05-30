export type FormModelType = {
    firstName: {
        value: string
        error: {
            value: boolean
            message: string
        }
    },
    lastName: {
        value: string
        error: {
            value: boolean
            message: string
        }
    },
    email: {
        value: string
        error: {
            value: boolean
            message: string
        }
    },
    queryType: {
        value: string
        error: {
            value: boolean
            message: string
        }
    },
    messages: {
        value: string
        error: {
            value: boolean
            message: string
        }
    },
    consent: {
        value: {
            isChecked: boolean
        }
        error: {
            value: boolean
            message: string
        }
    },
    valid: boolean
}

export interface setErrorType {
    (model:{error:{value:boolean, message:string}}, message:string, error?:boolean):void
}