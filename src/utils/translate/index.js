import translations from './TranslationsGerman';


export default function index(template, replacements) {
  replacements = replacements || {};

  // Translate
  template = translations[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {

    var str = replacements[key];
    if ((translations[replacements[key]] !== null) && (translations[replacements[key]] !== 'undefined')) {
      str = translations[replacements[key]];
    }
    return str || '{' + key + '}';

  });
}
