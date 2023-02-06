const priceValidator = (value) => {
    return value >= 5000 && value < 1200000
}

export {priceValidator}