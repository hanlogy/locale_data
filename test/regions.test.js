const { loadJSONFromFile, expectLanguageCode } = require('./helpers');

const filePath = './data/regions.json';

describe('regions', () => {
  test('key should be a two-letter uppercase code', async () => {
    const regions = await loadJSONFromFile(filePath);

    for (const key in regions) {
      expect(key).toBe(key.toUpperCase());
      expect(key.length).toBe(2);
    }
  });

  test('value should contain two fields: "l10n" and "calling_code"', async () => {
    const regions = await loadJSONFromFile(filePath);

    for (const key in regions) {
      const { l10n, calling_code } = regions[key];
      expect(typeof l10n).toBe('object');
      expect(typeof calling_code).toBe('string');
      expect(calling_code).toMatch(/^\d+-?\d*$/);
    }
  });

  test('if the language code is valid"', async () => {
    const regions = await loadJSONFromFile(filePath);

    for (const key in regions) {
      const { l10n, _ } = regions[key];

      for (const key in l10n) {
        expectLanguageCode(key);
      }
    }
  });
});
