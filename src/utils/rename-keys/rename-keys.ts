// rename keys utility from v2


// import { curry, assoc, reduce, keys } from 'ramda';

// /**
//  * Creates a new object with the own properties of the provided object, but the
//  * keys renamed according to the keysMap object as `{oldKey: newKey}`.
//  * When some key is not found in the keysMap, then it's removed.
//  *
//  * Keep in mind that in the case of keys conflict is behaviour undefined and
//  * the result may vary between various JS engines!
//  *
//  * @sig {a: b} -> {a: *} -> {b: *}
//  */
// const renameKeys = curry((keysMap, obj) =>
//   reduce((acc, key) => (keysMap[key] ? assoc(keysMap[key], obj[key], acc) : acc), {}, keys(obj))
// );

// export default renameKeys;

export {};