const fs = require('fs');

const loadJSONFromFile = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    throw error;
  }
};

/// Check if the language code is valid.
const expectLanguageCode = (code) => {
  const parts = code.split('_');
  const [firstPart, secondPart, thirdPart] = parts;

  expect(firstPart).toBe(firstPart.toLowerCase());
  expect(firstPart.length).toBe(2);

  if (parts.length === 2 && secondPart !== 'Hant') {
    expect(secondPart).toBe(secondPart.toUpperCase());
    expect(secondPart.length).toBe(2);
  } else if (parts.length === 3) {
    expect(thirdPart).toBe(thirdPart.toUpperCase());
    expect(thirdPart.length).toBe(2);
  }

  return true;
};

module.exports = {
  expectLanguageCode,
  loadJSONFromFile,
};
