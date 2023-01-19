/**
 * function check text in string or not string
 * @param {String} text 
 * @returns {Boolean} true or false
 */
const string = (text) => {


    if (!(typeof text === "string"))
        return false;
    return true;


}


export {
    string,
}


