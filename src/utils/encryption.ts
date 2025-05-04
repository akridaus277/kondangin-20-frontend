import * as forge from "node-forge"
import { publicKeyPem } from "@/keys/publicKey"

export const encryptPassword = (password: string) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem)
    const encryptedPassword = publicKey.encrypt(password)
    return forge.util.encode64(encryptedPassword)
}
