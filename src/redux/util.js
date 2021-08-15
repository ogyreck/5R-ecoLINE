export const remove = (arr, ...args) => {
    return arr.filter((item) => {
        return !args.some((arg, index) => {
            return arr.indexOf(item) === arg;
        });
    });
};