## Concepts

### Script code

Only Chinese has script codes, which are `Hans` and `Hant`.
Script code must be used with two letters language code, such as `zh_Hant`.

**Abount zh_Hans**

Because of we use simplified Chinese by default, `Hans` should no be used,
it means there is no `zh_Hans` nor `zh_Hans_[region]` hanppens. For example,
`zh_Hans` should be `zh` and `zh_Hans_SG` should be `zh_SG`.  
_Exception:_  
`languages.json` uses `zh_Hans` as the key of `简体中文`, because of
we give `zh` and `zh_Hans` different names.

### Language

A language consists of **language code** and **script code**, the region code
must _not_ be included.

For example:

```
zh //generic Chinese
zh_Hant //generic traditional Chinese
en_US
fr_FR
```

### Region

A region code consists of two capitalized letters, such as `CN`

See:  
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Locale

A locale consits of language and region, for example:

```
zh_CN // simplified Chinese with region code
zh_Hant_HK // traditional Chinese with region code
zh_Hant_TW
```

See:  
[Flutter: Advanced locale definition](https://docs.flutter.dev/development/accessibility-and-localization/internationalization#advanced-locale-definition)

## Files

### languages.json

The key of each language item is the language code with region code if it is
needed.

Example:

```json
{
  "en": "English",
  "zh": "中文",
  "zh_Hans": "简体中文",
  "zh_Hant": "繁體中文",
  "zh_Hant_TW": "正體中文",
  "sv": "Svenska",
  "de": "Deutsch"
}
```

### regions.json

The key of each localized name is the language code with region code if it is
needed.

Example:

```json
{
  "CN": {
    "en": "China",
    "zh": "中国",
    "zh_Hant": "中國",
    "sv": "Kina"
  },
  "LA": {
    "en": "Laos",
    "zh": "老挝",
    "zh_Hant": "老撾",
    "zh_SG": "寮国",
    "zh_Hant_TW": "寮國"
  }
}
```

### calling_codes.json

Example:

```json
{
  "CN": "86",
  "SE": "46"
}
```

See:  
https://countrycode.org/
