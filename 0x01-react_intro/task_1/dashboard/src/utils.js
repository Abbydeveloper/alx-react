function getFullYear() {
  return new Date().getFullYear;
}

function getFooterCopy(isIndex) {
  return (isIndex) ? 'ALX' : 'ALX main dashboard';
}

module.exports = {
  getFullYear,
  getFooterCopy,
}