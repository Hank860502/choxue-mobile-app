export const config = {
  port: 3000,
  host: {
    android: '10.0.3.2',
    ios: 'localhost',
  },
  pubnub: {
    authKey: 'server-auth',
    subscribeKey: 'sub-c-cf17d8c6-4f55-11e7-99ed-0619f8945a4f',
    publishKey: 'pub-c-837822e9-e745-4ea5-a1f0-e4c00901f383',
    secretKey: 'sec-c-NDczNjQ3MzUtZGZiYy00Y2NjLWI0ZTctNGFhMDBmNjE0MGYw',
  },
  github: {
    android: {
      clientId: '512c5a68ac7def8deafa',
      clientSecret: '346cebbd0bbccf4cb05654b5de24225b2d9a455e',
    },
    ios: {
      clientId: '4591e867f77e815d446e',
      clientSecret: 'a96497bed46dd07786b9b2fff16d59e25c9758cc',
    },
  },
};
