/**
 * @param {String} string
 * @returns String without spaces at the start or in the end
 */
function trimLeadingAndTrailing(string) {
  return string.replace(/(^\s+|\s+$)/g, '')
}

export default {
  trimLeadingAndTrailing,
}
