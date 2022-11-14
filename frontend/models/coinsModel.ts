export interface IFlatCoin extends FlatMarketData {
    id: string
    symbol: string
    name: string
    image: string
}

export interface IRawData extends Omit<MarketData, 'roi' | 'total_supply'> {
    id: string
    image: Image
    name: string
    symbol: string
}

export interface ICoin {
    id: string
    symbol: string
    name: string
    block_time_in_minutes: null | string
    image: Image
    market_data: MarketData
    last_updated: Date
    localization: Localization
}

export interface Image {
    thumb: string
    small: string
    large: string
}

export interface Localization {
    en: string
    de: string
    es: string
    fr: string
    it: string
    pl: string
    ro: string
    hu: string
    nl: string
    pt: string
    sv: string
    vi: string
    tr: string
    ru: string
    ja: string
    zh: string
    'zh-tw': string
    ko: string
    ar: string
    th: string
    id: string
    cs: string
    da: string
    el: string
    hi: string
    no: string
    sk: string
    uk: string
    he: string
    fi: string
    bg: string
    hr: string
    lt: string
    sl: string
}

export interface FlatMarketData {
    current_price: number
    market_cap: number
    market_cap_rank: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_14d: number
    price_change_percentage_30d: number
    price_change_percentage_60d: number
    price_change_percentage_200d: number
    price_change_percentage_1y: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    price_change_24h_in_currency: number
    price_change_percentage_1h_in_currency: number
    price_change_percentage_24h_in_currency: number
    price_change_percentage_7d_in_currency: number
    price_change_percentage_14d_in_currency: number
    price_change_percentage_30d_in_currency: number
    price_change_percentage_60d_in_currency: number
    price_change_percentage_200d_in_currency: number
    price_change_percentage_1y_in_currency: number
    market_cap_change_24h_in_currency: number
    market_cap_change_percentage_24h_in_currency: number
}

export interface MarketData {
    current_price: CurrencyOptions
    roi: Roi | null
    market_cap: CurrencyOptions
    market_cap_rank: number
    total_volume: CurrencyOptions
    high_24h: CurrencyOptions
    low_24h: CurrencyOptions
    price_change_24h: number
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_14d: number
    price_change_percentage_30d: number
    price_change_percentage_60d: number
    price_change_percentage_200d: number
    price_change_percentage_1y: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    price_change_24h_in_currency: CurrencyOptions
    price_change_percentage_1h_in_currency: CurrencyOptions
    price_change_percentage_24h_in_currency: CurrencyOptions
    price_change_percentage_7d_in_currency: CurrencyOptions
    price_change_percentage_14d_in_currency: CurrencyOptions
    price_change_percentage_30d_in_currency: CurrencyOptions
    price_change_percentage_60d_in_currency: CurrencyOptions
    price_change_percentage_200d_in_currency: CurrencyOptions
    price_change_percentage_1y_in_currency: CurrencyOptions
    market_cap_change_24h_in_currency: CurrencyOptions
    market_cap_change_percentage_24h_in_currency: CurrencyOptions
    total_supply: null | string
    circulating_supply: string
}

export type stringDataLabels = 'symbol' | 'name' | 'image'

//prettier-ignore
export type marketDataLabels = 'current_price' | 'market_cap' | 'market_cap_rank' | 'total_volume' | 'high_24h' | 'low_24h' | 'price_change_24h' | 'price_change_percentage_24h' | 'price_change_percentage_7d' | 'price_change_percentage_14d' | 'price_change_percentage_30d' | 'price_change_percentage_60d' | 'price_change_percentage_200d' | 'price_change_percentage_1y' | 'market_cap_change_24h' | 'market_cap_change_percentage_24h' | 'price_change_24h_in_currency' | 'price_change_percentage_1h_in_currency' | 'price_change_percentage_24h_in_currency' | 'price_change_percentage_7d_in_currency' | 'price_change_percentage_14d_in_currency' | 'price_change_percentage_30d_in_currency' | 'price_change_percentage_60d_in_currency' | 'price_change_percentage_200d_in_currency' | 'price_change_percentage_1y_in_currency' | 'market_cap_change_24h_in_currency' | 'market_cap_change_percentage_24h_in_currency' | 'total_supply' | 'circulating_supply'

//prettier-ignore
export type marketDataCurrencyOptions = 'current_price' | 'market_cap' | 'total_volume' | 'high_24h' | 'low_24h' | 'price_change_24h_in_currency' | 'price_change_percentage_1h_in_currency' | 'price_change_percentage_24h_in_currency' | 'price_change_percentage_7d_in_currency' | 'price_change_percentage_14d_in_currency' | 'price_change_percentage_30d_in_currency' | 'price_change_percentage_60d_in_currency' | 'price_change_percentage_200d_in_currency' | 'price_change_percentage_1y_in_currency' | 'market_cap_change_24h_in_currency' | 'market_cap_change_percentage_24h_in_currency'

//prettier-ignore
export type marketDataNumber = 'market_cap_rank' | 'price_change_24h' | 'price_change_percentage_24h' | 'price_change_percentage_7d' | 'price_change_percentage_14d' | 'price_change_percentage_30d' | 'price_change_percentage_60d' | 'price_change_percentage_200d' | 'price_change_percentage_1y' | 'market_cap_change_24h' | 'market_cap_change_percentage_24h'

export type IColumns = keyof IFlatCoin

export const marketDataScalar = [
    'symbol',
    'name',
    'market_cap_rank',
    'price_change_24h',
    'price_change_percentage_24h',
    'price_change_percentage_7d',
    'price_change_percentage_14d',
    'price_change_percentage_30d',
    'price_change_percentage_60d',
    'price_change_percentage_200d',
    'price_change_percentage_1y',
    'market_cap_change_24h',
    'market_cap_change_percentage_24h',
    'current_price',
    'market_cap',
    'total_volume',
    'high_24h',
    'low_24h',
    'price_change_24h_in_currency',
    'price_change_percentage_1h_in_currency',
    'price_change_percentage_24h_in_currency',
    'price_change_percentage_7d_in_currency',
    'price_change_percentage_14d_in_currency',
    'price_change_percentage_30d_in_currency',
    'price_change_percentage_60d_in_currency',
    'price_change_percentage_200d_in_currency',
    'price_change_percentage_1y_in_currency',
    'market_cap_change_24h_in_currency',
    'market_cap_change_percentage_24h_in_currency',
]

export interface Roi {
    times: number
    currency: Currency
    percentage: number
}

export enum CurrencyEnum {
    aed = 'aed',

    ars = 'ars',

    aud = 'aud',

    bch = 'bch',

    bdt = 'bdt',

    bhd = 'bhd',

    bits = 'bits',

    bmd = 'bmd',

    bnb = 'bnb',

    brl = 'brl',

    btc = 'btc',

    chf = 'chf',

    clp = 'clp',

    cny = 'cny',

    czk = 'czk',

    dkk = 'dkk',

    dot = 'dot',

    eos = 'eos',

    eth = 'eth',

    eur = 'eur',

    gbp = 'gbp',

    hkd = 'hkd',

    huf = 'huf',

    idr = 'idr',

    ils = 'ils',

    inr = 'inr',

    jpy = 'jpy',

    krw = 'krw',

    kwd = 'kwd',

    link = 'link',

    lkr = 'lkr',

    ltc = 'ltc',

    mmk = 'mmk',

    mxn = 'mxn',

    myr = 'myr',

    ngn = 'ngn',

    nok = 'nok',

    nzd = 'nzd',

    php = 'php',

    pkr = 'pkr',

    pln = 'pln',

    rub = 'rub',

    sar = 'sar',

    sats = 'sats',

    sek = 'sek',

    sgd = 'sgd',

    thb = 'thb',

    try = 'try',

    twd = 'twd',

    uah = 'uah',

    usd = 'usd',

    vef = 'vef',

    vnd = 'vnd',

    xag = 'xag',

    xau = 'xau',

    xdr = 'xdr',

    xlm = 'xlm',

    xrp = 'xrp',

    yfi = 'yfi',

    zar = 'zar',
}

//prettier-ignore
export type CurrencyType = 'aed' | 'ars' | 'aud' | 'bch' | 'bdt' | 'bhd' | 'bits' | 'bmd' | 'bnb' | 'brl' | 'btc' | 'chf' | 'clp' | 'cny' | 'czk' | 'dkk' | 'dot' | 'eos' | 'eth' | 'eur' | 'gbp' | 'hkd' | 'huf' | 'idr' | 'ils' | 'inr' | 'jpy' | 'krw' | 'kwd' | 'link' | 'lkr' | 'ltc' | 'mmk' | 'mxn' | 'myr' | 'ngn' | 'nok' | 'nzd' | 'php' | 'pkr' | 'pln' | 'rub' | 'sar' | 'sats' | 'sek' | 'sgd' | 'thb' | 'try' | 'twd' | 'uah' | 'usd' | 'vef' | 'vnd' | 'xag' | 'xau' | 'xdr' | 'xlm' | 'xrp' | 'yfi' | 'zar'

export enum Currency {
    Btc = 'btc',
    Eth = 'eth',
    Usd = 'usd',
}

//prettier-ignore
export interface CurrencyOptions { aed: number; ars: number; aud: number; bch: number; bdt: number; bhd: number; bits: number; bmd: number; bnb: number; brl: number; btc: number; chf: number; clp: number; cny: number; czk: number; dkk: number; dot: number; eos: number; eth: number; eur: number; gbp: number; hkd: number; huf: number; idr: number; ils: number; inr: number; jpy: number; krw: number; kwd: number; link: number; lkr: number; ltc: number; mmk: number; mxn: number; myr: number; ngn: number; nok: number; nzd: number; php: number; pkr: number; pln: number; rub: number; sar: number; sats: number; sek: number; sgd: number; thb: number; try: number; twd: number; uah: number; usd: number; vef: number; vnd: number; xag: number; xau: number; xdr: number; xlm: number; xrp: number; yfi: number; zar: number; }
