import { promises as fs } from 'node:fs';

type JsonValue = JsonPrimitive | JsonObject | JsonArray;
type JsonPrimitive = string | number | boolean | null;
type JsonObject = {
  [key: string]: JsonValue;
};
type JsonArray = JsonValue[];

function renameCallingCode(value: JsonValue): JsonValue {
  if (Array.isArray(value)) {
    return value.map(renameCallingCode);
  }

  if (isJsonObject(value)) {
    return renameCallingCodeInObject(value);
  }

  return value;
}

function renameCallingCodeInObject(obj: JsonObject): JsonObject {
  const result: JsonObject = {};

  for (const [key, value] of Object.entries(obj)) {
    if (key === 'calling_code') {
      result.callingCode = renameCallingCode(value);
    } else {
      result[key] = renameCallingCode(value);
    }
  }

  return result;
}

function isJsonObject(value: JsonValue): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

(async () => {
  const inputPath = './data/regions.json';
  const outputPath = './output/regions.ts';

  const fileContent = await fs.readFile(inputPath, 'utf8');
  const json = JSON.parse(fileContent) as JsonValue;

  const transformed = JSON.stringify(renameCallingCode(json), null, 2);

  const tsContent = [
    `const regions = ${transformed} as const;`,
    '',
    `export default regions;`,
    '',
  ].join('\n');

  await fs.writeFile(outputPath, tsContent, 'utf8');
})();
