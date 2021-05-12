require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow foot dad remember noise million coral light army genre'; 
let testAccounts = [
"0x66f303d5c49760242bca984d5751932892a63c7ecb436f9dc73df2d10f2c2476",
"0xdf8cf0464f2426853c19bff25494a449ee8a1c7df3610899a75b01dfc24c46ac",
"0x857ecd317c1a6322e1e9c20c91bfb2ed6be29bf02ed71d2f9e2480f21e68f11d",
"0xa2140e61aa66b30499b20d7f188bc8107ca89f2a874fb05ce03b459cd799bad6",
"0xb581dce2082cd06a017ece6a9ff4e339583a3fffa71c58fcc82eb6246527ffe1",
"0xfd5777d959204e4e2df3876230d0dee16b46ed398590b5a0ef5bec3ff53c6e7e",
"0x40ca098f1a60a38fe73aca5cf963117601da53c27130d776cf25425e5008114e",
"0xec81159cad67ce8028f069e0e5223bf16b8888fa6674d59d609056630285036c",
"0x8b35c10c81048281687540482671b90affacef056603b17d85a98101c71986f0",
"0x148225fdb322062bf57c55165caaa523bd0954a13c2d5980dd9eacadd1296875"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
