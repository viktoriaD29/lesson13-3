export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
      return null;
  }
  const arrAbs = arr.map(el => Math.abs(el));
  const result = Math.min(...arrAbs)
  
  return result * result;
}

