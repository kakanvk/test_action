// Kiểm tra xem một số có phải là số nguyên tố không
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

export default isPrime;
