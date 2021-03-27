export default function orderByProps(obj, properties = []) {
  const arraysorted = [];
  const arraysortedByAlphabet = [];
  properties.forEach((key) => {
    if (key in obj) {
      arraysorted.push({
        key,
        value: obj[key],
      });
    }
  });
  for (const key in obj) {
    if (!properties.includes(key)) {
      arraysortedByAlphabet.push({
        key,
        value: obj[key],
      });
    }
  }
  arraysortedByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...arraysorted, ...arraysortedByAlphabet];
}
