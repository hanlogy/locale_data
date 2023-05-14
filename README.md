## Concepts

### Script Code

Script codes, such as `Hans` and `Hant`, are used only in Chinese languages.
The script code should be combined with a two-letter language code, for example:

```
zh_Hant
```

**Abount `zh_Hans`**

Since we use simplified Chinese as the default, `Hans` should not be used.
Therefore, there is no `zh*Hans` or `zh_Hans_[region]`. For example, `zh_Hans`
should be referred to as `zh`, and `zh_Hans_SG` should be referred to as
`zh_SG`.

**Abount `zh_Hant_[region]`**

`TW`,`HK` and `MO` must have the script code `Hant`, For example, these are
not allowed as the keys in our data:

```
zh_TW
zh_HK
zh_MO
```

All regions allow `Hant`, for example:

```
zh_Hant_US
```

### Language

A language consists of a **language code** and a **script code**, but it should
not include the **region code**.

For example:

```
zh //generic simplified Chinese
zh_Hant //generic traditional Chinese
en_US
fr_FR
```

### Region

A region code is composed of two capitalized letters, such as `CN`.

See:  
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Locale

A locale consists of a language and a region, for example:

```
zh_CN // simplified Chinese with region code
zh_Hant_HK // traditional Chinese with region code
zh_Hant_TW
```

See:  
[Flutter: Advanced locale definition](https://docs.flutter.dev/development/accessibility-and-localization/internationalization#advanced-locale-definition)

## Files

### languages.json

The key of each language item is the language code, optionally followed by the
script code if needed and when the language is Chinese.

Example:

```json
{
  "en": {
    "value": "English"
  },
  "zh": {
    "value": "简体中文"
  },
  "zh_Hant": {
    "value": "繁體中文",
    "TW": "正體中文"
  },
  "sv": {
    "value": "Svenska"
  },
  "de": {
    "value": "Deutsch"
  }
}
```

### regions.json

A region consists of `l10n` and `calling_code`.

The key of each `l10n` is the language code, optionally followed by the region
code if needed.

Example:

```json
{
  "CN": {
    "l10n": {
      "en": "China",
      "zh": "中国",
      "zh_Hant": "中國",
      "sv": "Kina"
    },
    "calling_code": "86"
  },
  "LA": {
    "l10n": {
      "en": "Laos",
      "zh": "老挝",
      "zh_Hant": "老撾",
      "zh_SG": "寮国",
      "zh_Hant_TW": "寮國"
    },
    "calling_code": "856"
  }
}
```

## Implementations

See: https://github.com/hanlogy/dart_packages/tree/master/locale

## Resources

https://countrycode.org/
