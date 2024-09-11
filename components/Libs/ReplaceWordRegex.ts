export default (text:string, oldword:string, newword:string ) => {
    let exp = text;
    exp = exp.replace(new RegExp(" " + oldword + " ", "gi"), " " + newword + " ")
    exp = exp.replace(new RegExp(" " + oldword + "\\\\", "gi"), " " + newword + "\\")
    exp = exp.replace(new RegExp("\\\\" + oldword + " ", "gi"), "\\\\" + newword + " ")
    exp = exp.replace(new RegExp(" " + oldword + "/", "gi"), " " + newword + "/")
    exp = exp.replace(new RegExp("/" + oldword + " ", "gi"), "/" + newword + " ")
    exp = exp.replace(new RegExp("‌" + oldword + " ", "gi"), "‌" + newword + " ")
    exp = exp.replace(new RegExp("‌" + oldword + "‌", "gi"), "‌" + newword + "‌")
    exp = exp.replace(new RegExp(" " + oldword + "‌", "gi"), " " + newword + "‌")
    exp = exp.replace(new RegExp("\\(" + oldword + "\\)", "gi"), "(" + newword + ")")
    exp = exp.replace(new RegExp(" " + oldword + "\\.", "gi"), " " + newword + ".")
    exp = exp.replace(new RegExp("\\(" + oldword + "\\.", "gi"), "(" + newword + ".")
    exp = exp.replace(new RegExp(" " + oldword + "$", "gi"), " " + newword)
    exp = exp.replace(new RegExp("^" + oldword + " ", "gi"), " " + newword)
    exp = exp.replace(new RegExp(" " + oldword + ",", "gi"), " " + newword + ",")
    exp = exp.replace(new RegExp("," + oldword + " ", "gi"), "," + newword + " ")
    exp = exp.replace(new RegExp(" " + oldword + "،", "gi"), " " + newword + "،")
    exp = exp.replace(new RegExp("،" + oldword + " ", "gi"), "،" + newword + " ")
    return exp;
}

export const Includes = (text:string, word)=>{
    return new RegExp(" " + word + " ", "gi").test(text) 
    || new RegExp(" " + word + "\\\\", "gi").test(text) 
    || new RegExp("\\\\" + word + " ", "gi").test(text) 
    || new RegExp("/" + word + " ", "gi").test(text) 
    || new RegExp(" " + word + "/", "gi").test(text) 
    || new RegExp("‌" + word + " ", "gi").test(text) 
    || new RegExp("‌" + word + "‌", "gi").test(text) 
    || new RegExp(" " + word + "‌", "gi").test(text) 
    || new RegExp("\\(" + word + "\\)", "gi").test(text) 
    || new RegExp(" " + word + "\\.", "gi").test(text) 
    || new RegExp("\\(" + word + "\\.", "gi").test(text) 
    || new RegExp(" " + word + "$", "gi").test(text) 
    || new RegExp("^" + word + " ", "gi").test(text) 
    || new RegExp(" " + word + ",", "gi").test(text) 
    || new RegExp("," + word + " ", "gi").test(text) 
    || new RegExp(" " + word + "،", "gi").test(text) 
    || new RegExp("،" + word + " ", "gi").test(text) 
}