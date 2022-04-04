const { tagParseDFC, tagParse, render, queryAssembler } = require('./utils')
const storedTags = require('./tag')
const card = {
  object: 'card',
  id: '0ec85db7-c8ec-4730-b692-c140977436aa',
  oracle_id: 'af247e2f-b271-4f5b-ab98-4579d2c17c21',
  multiverse_ids: [430570],
  tcgplayer_id: 132250,
  cardmarket_id: 298351,
  name: 'Archfiend of Depravity',
  lang: 'en',
  released_at: '2017-06-16',
  uri: 'https://api.scryfall.com/cards/0ec85db7-c8ec-4730-b692-c140977436aa',
  scryfall_uri:
    'https://scryfall.com/card/e01/31/archfiend-of-depravity?utm_source=api',
  layout: 'normal',
  highres_image: true,
  image_status: 'highres_scan',
  image_uris: {
    small:
      'https://c1.scryfall.com/file/scryfall-cards/small/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539',
    normal:
      'https://c1.scryfall.com/file/scryfall-cards/normal/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539',
    large:
      'https://c1.scryfall.com/file/scryfall-cards/large/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539',
    png: 'https://c1.scryfall.com/file/scryfall-cards/png/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.png?1592765539',
    art_crop:
      'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539',
    border_crop:
      'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539',
  },
  mana_cost: '{3}{B}{B}',
  cmc: 5,
  type_line: 'Creature — Demon',
  oracle_text:
    'Flying\n' +
    "At the beginning of each opponent's end step, that player chooses up to two creatures they control, then sacrifices the rest.",
  power: '5',
  toughness: '4',
  colors: ['B'],
  color_identity: ['B'],
  keywords: ['Flying'],
  legalities: {
    standard: 'not_legal',
    future: 'not_legal',
    historic: 'not_legal',
    gladiator: 'not_legal',
    pioneer: 'legal',
    modern: 'legal',
    legacy: 'legal',
    pauper: 'not_legal',
    vintage: 'legal',
    penny: 'legal',
    commander: 'legal',
    brawl: 'not_legal',
    historicbrawl: 'not_legal',
    alchemy: 'not_legal',
    paupercommander: 'not_legal',
    duel: 'legal',
    oldschool: 'not_legal',
    premodern: 'not_legal',
  },
  games: ['paper'],
  reserved: false,
  foil: false,
  nonfoil: true,
  finishes: ['nonfoil'],
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set_id: 'bf058cce-027d-4784-85e7-2750533a11df',
  set: 'e01',
  set_name: 'Archenemy: Nicol Bolas',
  set_type: 'archenemy',
  set_uri: 'https://api.scryfall.com/sets/bf058cce-027d-4784-85e7-2750533a11df',
  set_search_uri:
    'https://api.scryfall.com/cards/search?order=set&q=e%3Ae01&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/e01?utm_source=api',
  rulings_uri:
    'https://api.scryfall.com/cards/0ec85db7-c8ec-4730-b692-c140977436aa/rulings',
  prints_search_uri:
    'https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aaf247e2f-b271-4f5b-ab98-4579d2c17c21&unique=prints',
  collector_number: '31',
  digital: false,
  rarity: 'rare',
  flavor_text:
    '"Why would I kill you all? Who then would be left to worship me?"',
  card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
  artist: 'Daarken',
  artist_ids: ['e607a0d4-fc12-4c01-9e3f-501f5269b9cb'],
  illustration_id: '190cb7f9-e2cd-4858-9acc-76176df211ed',
  border_color: 'black',
  frame: '2015',
  security_stamp: 'oval',
  full_art: false,
  textless: false,
  booster: false,
  story_spotlight: false,
  edhrec_rank: 1441,
  prices: {
    usd: '3.65',
    usd_foil: null,
    usd_etched: null,
    eur: '3.44',
    eur_foil: null,
    tix: null,
  },
  related_uris: {
    gatherer:
      'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=430570',
    tcgplayer_infinite_articles:
      'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Archfiend+of+Depravity&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    tcgplayer_infinite_decks:
      'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Archfiend+of+Depravity&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    edhrec: 'https://edhrec.com/route/?cc=Archfiend+of+Depravity',
    mtgtop8:
      'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Archfiend+of+Depravity',
  },
  purchase_uris: {
    tcgplayer:
      'https://www.tcgplayer.com/product/132250?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    cardmarket:
      'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Archfiend+of+Depravity&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
    cardhoarder:
      'https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Archfiend+of+Depravity&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
  },
}
const cardDFC = {
  object: 'card',
  id: '8ad44884-ae0d-40ae-87a9-bad043d4e9ad',
  oracle_id: '2ee5f5ad-2f16-40d9-831a-2aefece31b36',
  multiverse_ids: [548294, 548295],
  arena_id: 79421,
  tcgplayer_id: 262183,
  cardmarket_id: 607052,
  name: 'Befriending the Moths // Imperial Moth',
  lang: 'en',
  released_at: '2022-02-18',
  uri: 'https://api.scryfall.com/cards/8ad44884-ae0d-40ae-87a9-bad043d4e9ad',
  scryfall_uri:
    'https://scryfall.com/card/neo/4/befriending-the-moths-imperial-moth?utm_source=api',
  layout: 'transform',
  highres_image: true,
  image_status: 'highres_scan',
  cmc: 4,
  type_line: 'Enchantment — Saga // Enchantment Creature — Insect',
  color_identity: ['W'],
  keywords: ['Flying', 'Transform'],
  card_faces: [
    {
      object: 'card_face',
      name: 'Befriending the Moths',
      mana_cost: '{3}{W}',
      type_line: 'Enchantment — Saga',
      oracle_text:
        '(As this Saga enters and after your draw step, add a lore counter.)\n' +
        'I, II — Target creature you control gets +1/+1 and gains flying until end of turn.\n' +
        'III — Exile this Saga, then return it to the battlefield transformed under your control.',
      colors: [Array],
      artist: 'Matt Stewart',
      artist_id: '20871267-2d8a-41d5-b03a-be3d557c5734',
      illustration_id: 'a35ceece-124c-41aa-b9f1-ef95f7d20228',
      image_uris: [Object],
    },
    {
      object: 'card_face',
      name: 'Imperial Moth',
      flavor_name: '',
      mana_cost: '',
      type_line: 'Enchantment Creature — Insect',
      oracle_text: 'Flying',
      colors: [Array],
      color_indicator: [Array],
      power: '2',
      toughness: '4',
      flavor_text:
        `"The moths of Eiganjo were once no different from any other great beast of Kamigawa's wilds. It took years of patience and dedication to convince them to bear riders."\n` +
        '—*History of the Empire*',
      artist: 'Matt Stewart',
      artist_id: '20871267-2d8a-41d5-b03a-be3d557c5734',
      illustration_id: 'c29c6dd3-47b3-4749-b172-cb68c21d3ccd',
      image_uris: [Object],
    },
  ],
  legalities: {
    standard: 'legal',
    future: 'legal',
    historic: 'legal',
    gladiator: 'legal',
    pioneer: 'legal',
    modern: 'legal',
    legacy: 'legal',
    pauper: 'legal',
    vintage: 'legal',
    penny: 'legal',
    commander: 'legal',
    brawl: 'legal',
    historicbrawl: 'legal',
    alchemy: 'legal',
    paupercommander: 'legal',
    duel: 'legal',
    oldschool: 'not_legal',
    premodern: 'not_legal',
  },
  games: ['paper', 'mtgo', 'arena'],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: ['nonfoil', 'foil'],
  oversized: false,
  promo: false,
  reprint: false,
  variation: false,
  set_id: '59a2059f-5482-433f-8761-eb2e17859b71',
  set: 'neo',
  set_name: 'Kamigawa: Neon Dynasty',
  set_type: 'expansion',
  set_uri: 'https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71',
  set_search_uri:
    'https://api.scryfall.com/cards/search?order=set&q=e%3Aneo&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/neo?utm_source=api',
  rulings_uri:
    'https://api.scryfall.com/cards/8ad44884-ae0d-40ae-87a9-bad043d4e9ad/rulings',
  prints_search_uri:
    'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A2ee5f5ad-2f16-40d9-831a-2aefece31b36&unique=prints',
  collector_number: '4',
  digital: false,
  rarity: 'common',
  artist: 'Matt Stewart',
  artist_ids: ['20871267-2d8a-41d5-b03a-be3d557c5734'],
  border_color: 'black',
  frame: '2015',
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  preview: {
    source: 'The Games Capital',
    source_uri:
      'https://thegamescapital.com.au/pages/exclusive-kamigawa-neon-dynasty-preview',
    previewed_at: '2022-01-27',
  },
  prices: {
    usd: '0.01',
    usd_foil: '0.02',
    usd_etched: null,
    eur: '0.01',
    eur_foil: '0.05',
    tix: null,
  },
  related_uris: {
    gatherer:
      'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=548294',
    tcgplayer_infinite_articles:
      'https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Befriending+the+Moths+%2F%2F+Imperial+Moth&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    tcgplayer_infinite_decks:
      'https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Befriending+the+Moths+%2F%2F+Imperial+Moth&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    edhrec: 'https://edhrec.com/route/?cc=Befriending+the+Moths',
    mtgtop8:
      'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Befriending+the+Moths',
  },
  purchase_uris: {
    tcgplayer:
      'https://www.tcgplayer.com/product/262183?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
    cardmarket:
      'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Befriending+the+Moths&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
    cardhoarder:
      'https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Befriending+the+Moths&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall',
  },
}

describe('tagParse', () => {
  it('returns an object with appropriate keys and arrays as values', () => {
    expect(tagParse(storedTags, card)).toEqual(
      expect.objectContaining({
        colors: expect.any(Array),
        types: expect.any(Array),
        keywords: expect.any(Array),
        text: expect.any(Array),
      })
    )
  })
})

describe('tagParseDFC', () => {
  it('returns an object with appropriate keys and arrays as values', () => {
    expect(tagParseDFC(storedTags, cardDFC)).toEqual(
      expect.objectContaining({
        colors: expect.any(Array),
        types: expect.any(Array),
        keywords: expect.any(Array),
        text: expect.any(Array),
      })
    )
  })
})

describe('render', () => {
  it('returns a string', () => {
    const dataArray = [1, 2, 3]
    const fn = (data) => {
      return `<p>${data}</p>`
    }
    expect(typeof render(dataArray, fn)).toBe('string')
  })

  it('renders for each element the array', () => {
    const dataArray = [1, 2, 3]
    const fn = (data) => {
      return `<p>${data}</p>`
    }
    expect(render(dataArray, fn).match(/<p>.<\/p>/g).length).toBe(3)
  })
})

describe('queryAssembler', () => {
  it('returns a string', () => {
    const formData = {
      name: 'test',
    }

    expect(typeof queryAssembler(formData)).toBe('string')
  })

  it('formats the query', () => {
    const formData = {
      name: 'test',
      color: 'test',
      type: 'test',
      text: 'test',
    }

    expect(queryAssembler(formData).includes('t:test')).toBe(true)
    expect(queryAssembler(formData).includes('c:test')).toBe(true)
    expect(queryAssembler(formData).includes('o:test')).toBe(true)
  })

  it('formats the query', () => {
    const formData = {
      type: 'test other more',
      text: 'test other more',
    }

    expect(queryAssembler(formData).includes('t:test t:other t:more')).toBe(
      true
    )
    expect(queryAssembler(formData).includes('o:test o:other o:more')).toBe(
      true
    )
  })

  it('formats the query', () => {
    const formData = {
      text: 'test or more',
    }

    expect(queryAssembler(formData).includes('o:test or o:more')).toBe(true)
  })

  it('formats the query', () => {
    const formData = {
      text: 'test -more',
    }

    expect(queryAssembler(formData).includes('o:test -o:more')).toBe(true)
  })
})
