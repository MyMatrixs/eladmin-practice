import JSEncrypt from "jsencrypt";

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='

export function encrypt(txt){
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey)
    return encryptor.encrypt(txt)
}