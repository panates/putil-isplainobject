/* putil-isplainobject
 ------------------------
 (c) 2017-present Panates
 SQB may be freely distributed under the MIT license.
 For details and documentation:
 https://panates.github.io/putil-isplainobject/
 */

var objCtorStr = Function.prototype.toString.call(Object);

/**
 *
 * @param {Object} obj
 * @return {boolean}
 */
function isPlainObject(obj) {
  if (typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]') {
    var proto = Object.getPrototypeOf(obj);
    if (proto) {
      var ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof ctor === 'function' && (ctor instanceof ctor) &&
          Function.prototype.toString.call(ctor) === objCtorStr;
    } else return true;
  }
  return false;
}

module.exports = isPlainObject;
