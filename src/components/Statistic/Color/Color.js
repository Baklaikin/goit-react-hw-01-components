function Color(min, max) {
  const r = Math.floor(Math.random() * (max - min + 1) + min);
  const g = Math.floor(Math.random() * (max - min + 1) + min);
  const b = Math.floor(Math.random() * (max - min + 1) + min);
  return `rgb(${r},${g},${b})`;
}

function StatsColor() {
  const elems = [...document.querySelectorAll(".Statistic_item__A1MkH")];
  elems.map((elem) => (elem.style.backgroundColor = `${Color(150, 255)}`));
}

export default StatsColor;
