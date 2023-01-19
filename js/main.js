import { checkElement } from "./functions/CheckElement/CheckElement.js";
import { selectById } from "./functions/SelectById/SelectByID.js";

// const res = selectById(undefined)
// const res = selectById(null)
// const res = selectById(12)
// const res = selectById(function () { console.log(""); });
// const res = selectById([]);
// const res = selectById("undefined")
// const res = selectById(submit);

const submit = selectById("submit-test")
const check = checkElement(submit)


console.log(check);
