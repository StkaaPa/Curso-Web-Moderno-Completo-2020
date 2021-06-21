let compareComThis = function (param) {
  console.log(this === param);
};

compareComThis(global);
// -> true

const obj = {};
//apartir daqui o this vai deixar de fazer refencia ao global e passa a ser em relacao à funcao compareComThis
compareComThis = compareComThis.bind(obj);
compareComThis(global);
// -> false
compareComThis(obj);
// -> True

let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
// -> false --- o this nao é global numa arrow function
comparaComThisArrow(module.exports);
// -> true

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
// -> faslse
comparaComThisArrow(module.exports);
// -> true
