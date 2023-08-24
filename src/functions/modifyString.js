/**
 * Vytvoří short-url z názvu příspěvku
 * @param {} input Název příspěvku
 * @returns Short název
 * @author Matyáš Lorenz
 */
const createShort = (input) => {
  const stripped = input.replace(
    /[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g,
    (match) => {
      const replacements = {
        á: "a",
        č: "c",
        ď: "d",
        é: "e",
        ě: "e",
        í: "i",
        ň: "n",
        ó: "o",
        ř: "r",
        š: "s",
        ť: "t",
        ú: "u",
        ů: "u",
        ý: "y",
        ž: "z",
        Á: "A",
        Č: "C",
        Ď: "D",
        É: "E",
        Ě: "E",
        Í: "I",
        Ň: "N",
        Ó: "O",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ú: "U",
        Ů: "U",
        Ý: "Y",
        Ž: "Z",
      };
      return replacements[match];
    }
  );
  const modified = stripped.replace(/\s+/g, "_");
  return modified;
};
module.exports = createShort;
