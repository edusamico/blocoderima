const linkSuffix = 'https://api.dicionario-aberto.net/suffix/';

export const api = {
    getSuffixRimas: async (wordSuffix) => {
        let req = await fetch(linkSuffix + wordSuffix);
        let json = await req.json();
        return json;
    }
}