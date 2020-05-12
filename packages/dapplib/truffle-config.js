require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle noise arrow half praise army gas'; 
let testAccounts = [
"0x5f88fc70d070692170b5c71bcf891c2cd30d4e916e01daf5367053a873f11745",
"0xd091daa7e06788d0101bd97a5930394e27ae4c74a0b34e005d8e6da9bc90f334",
"0xd4a149a0d0dbda9a0b651291e9ce683f9cfe5e592e33d673dc64983a9c96970b",
"0x20811a814150e4f97e1b1905f323e2f9ee222c9b90569387010a7589c3d111db",
"0x24eeb992569054780a27a8486e812cbafab1d52c052df4a699d401862fbf1ff3",
"0xfa8caa928731396485b6c1d48a4156007ccdf18c219168992469fcb6c3626d4a",
"0xd26010afab1414d994623cfe4e27efeb426b2cf6634a56753eaf6513f20ec65b",
"0x1381abad3ec322769f4b804d9e35278d9d21cd5ed447eaa66737ed0ac079950f",
"0x6034d44cd0a0fe105bba8bc2127775faaab2b22e535d8c92d994e35298dce601",
"0xd266da54b2822f8d472f9291ce9caf1478687a5704c2875412577574761f656c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
