import JSEncrypt from "jsencrypt";

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCS2+mtHVwPj3bN/8rmf+MWD6r5/pBNCTuQ8FQwT+LL5OIghn6JznYDjHjeet/dH6+yTMXxdFXIg4yDnqVQhl+Ok+BdybrbdG0xPs/6R7/7LoB+LYRxSe5yHwccMgCNZCNEAokdtUrqKzcl9AYvGXwaZ3dGonYJ3yKwlxfvC8viQwIDAQAB'

export function encrypt(txt){
    const encryptor = new JSEncrypt()
    encryptor.setPublicKey(publicKey)
    return encryptor.encrypt(txt)
}