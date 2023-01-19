
/**
 * 
 * function for check element in DOM 
 * passed in parameter element
 * @param {Element} element 
 * @returns {boolean} true if element is checked 
 *                    or 
 *                    false if element is not checked
 */



const checkElement = (element) => {

    let checkEle;

    try {

        if (element instanceof Element)
            checkEle = true
        else
            checkEle = false


    } catch (error) {
        console.log(error);
        return error
    }


    return checkEle


}


export {
    checkElement
}







