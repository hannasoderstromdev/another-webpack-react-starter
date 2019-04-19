export function isEmptyObject(obj) {
  if (obj === null) return true
  if (obj === undefined) return true

  return !Object.keys(obj).length > 0
}

export function removeObjectChildProperty(obj, propToSearch, propToRemove) {
  if (obj === null) return true
  if (obj === undefined) return true

  const { [propToSearch]: parentValue, ...noChild } = obj
  const { [propToRemove]: removedValue, ...childWithout } = parentValue // eslint-disable-line
  return { ...noChild, [propToSearch]: childWithout }
}
