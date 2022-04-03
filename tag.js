module.exports = {
  treasure: {
    type: 'text',
    name: 'treasure',
    regex: /[Tt]reasure/,
    searchTerm: 'treasure',
  },
  'attack trigger': {
    type: 'text',
    name: 'attack trigger',
    regex: /[Ww]henever(.+)attack/,
    searchTerm: 'whenever attack',
  },
  'token maker': {
    type: 'text',
    name: 'token maker',
    regex: /create(.+)token/,
    searchTerm: 'create token',
  },
  'mana producer': {
    type: 'text',
    name: 'mana producer',
    regex: /[Aa]dd(.+)mana/,
    searchTerm: 'add mana',
  },
  ETB: {
    type: 'text',
    name: 'enter trigger',
    regex: / enter(.+)battlefield/,
    searchTerm: 'o:enter o:battlefield',
  },
}
