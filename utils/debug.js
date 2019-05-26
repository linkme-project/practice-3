const debug = (tag) => {
    if (!tag) {
        return () => {
            throw new Error();
        }
    } else {
        return msg => {
            console.log(`${tag} ${msg}`);
            return `${tag} ${msg}`
        }
    }
}

module.exports = debug;