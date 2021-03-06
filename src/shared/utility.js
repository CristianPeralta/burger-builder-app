export const updateObject = (object, updatedProperties) => {
    return {
        ...object,
        ...updatedProperties,
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) return true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
};