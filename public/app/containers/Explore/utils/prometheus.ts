export const RATE_RANGES = ['1m', '5m', '10m', '30m', '1h'];

export function processLabels(labels, withName = false) {
  const values = {};
  labels.forEach(l => {
    const { __name__, ...rest } = l;
    if (withName) {
      values['__name__'] = values['__name__'] || [];
      if (values['__name__'].indexOf(__name__) === -1) {
        values['__name__'].push(__name__);
      }
    }

    Object.keys(rest).forEach(key => {
      if (!values[key]) {
        values[key] = [];
      }
      if (values[key].indexOf(rest[key]) === -1) {
        values[key].push(rest[key]);
      }
    });
  });
  return { values, keys: Object.keys(values) };
}

// Strip syntax chars
export const cleanText = s => s.replace(/[{}[\]="(),!~+\-*/^%]/g, '').trim();
