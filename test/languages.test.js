const { loadJSONFromFile, expectLanguageCode } = require('./helpers');

const filePath = './data/languages.json';

describe('languages', () => {
  test('both key and value should be a string', async () => {
    const languages = await loadJSONFromFile(filePath);

    for (const key in languages) {
      expect(typeof key).toBe('string');
      expect(typeof languages[key]).toBe('object');
      const keys = Object.keys(languages[key]);
      expect(keys.includes('value')).toBe(true);
      keys.forEach((key) => {
        if (key === 'value') {
          return;
        }
        expect(key.toUpperCase()).toBe(key);
        expect(key.length).toBe(2);
      });
    }
  });

  test('name convention', async () => {
    const languages = await loadJSONFromFile(filePath);

    for (const key in languages) {
      expectLanguageCode(key);
    }
  });
});
