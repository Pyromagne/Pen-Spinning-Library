import * as author from "../authData";
const cat = 'pass';

export const passData = {
    name: 'pass',
    category: 'pass',
    diff: 'a',
    tLink: 'NimogvQTdUg',
    tAuthor: [author.auth1,author.CLauth1],
    tAlt: [],
};

export const passReverseData = {
    name: 'pass reverse',
    category: 'pass',
    diff: 'a',
    tLink: '',
    tAuthor: [,],
    tAlt: [],
};

export const fingerPassData = {
    name: 'fingerpass',
    category: 'pass',
    diff: 'a',
    tLink: '0EuJwfJHTyI',
    tAuthor: [author.auth2,author.CLauth2],
    tAlt: [
        ['https://youtu.be/NimogvQTdUg',author.auth1]
    ],
};

export const fingerPassReverseData = {
    name: 'fingerpass reverse',
    category: 'pass',
    diff: 'a',
    tLink: '-BLoyJtbpn8',
    tAuthor: [author.auth2,author.CLauth2],
    tAlt: [],
};

export const trianglePassData = {
    name: 'triangle pass',
    category: 'pass',
    diff: 'b',
    tLink: 'OTxlf8SZxGY',
    tAuthor: [author.auth2,author.CLauth2],
    tAlt: [],
};

export const trianglePassReverseData = {
    name: 'triangle pass reverse',
    category: 'pass',
    diff: 'b',
    tLink: '0eHQcIgNMUk',
    tAuthor: [author.auth5,author.CLauth5],
    tAlt: [],
};

export const powerPassData = {
    name: 'powerpass',
    category: 'pass',
    diff: 'b',
    tLink: '',
    tAuthor: [,],
    tAlt: [],
};

const passes = [
    cat,
    passData,
    passReverseData,
    fingerPassData,
    fingerPassReverseData,
    trianglePassData,
    trianglePassReverseData,
    powerPassData
];

export default passes;