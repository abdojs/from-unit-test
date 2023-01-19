
/**
 * 
 * function for check 
 * passed in parameter element
 * @param {string} id  passed in parameter element
 * @returns {Element} isElelement  the id of the element
 */

const selectById = (id) => {



    try {


        if (id === "")
            throw `invalid parameter id is [ ${id} ]`

        if (typeof id === "number")
            throw `invalid parameter id is [ ${id} ]`

        if (typeof id === "undefined")
            throw `invalid parameter id is [ ${id} ]`

        if (typeof id === null)
            throw `invalid parameter id is [ ${id} ]`

        if (typeof id === "boolean")
            throw `invalid parameter id is [ ${id} ]`

        if (typeof id === "object")
            throw `invalid parameter id is [ ${id} ]`

        if (id instanceof Function)
            throw `invalid parameter id is [ ${id} ]`

        if (id instanceof Element)
            throw `invalid parameter id is [ ${id} ]`

        let isElelement = document.getElementById(id)

        if (isElelement === null)
            throw `opps ? !!! is not there element DOM width is id [ ${id} ]`

        return isElelement;

    } catch (error) {

        throw new Error(error);
    }

}


export {
    selectById
}







