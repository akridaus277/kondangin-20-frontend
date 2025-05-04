import { useState } from "react"
import { useToast } from "@chakra-ui/react"
import axios from "axios"
import * as forge from "node-forge"
import { publicKeyPem } from "@/keys/publicKey"
import { API_BASE_URL } from "@/config/api"
import { useNavigate } from "react-router-dom"

const useRegister = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const encryptPassword = (plainPassword: string) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem)
    const encrypted = publicKey.encrypt(plainPassword, "RSAES-PKCS1-V1_5")
    return forge.util.encode64(encrypted)
  }

  const handleRegister = async () => {
    setLoading(true)
    try {
      const encryptedPassword = encryptPassword(password)

      const response = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password: encryptedPassword,
      })

      toast({
        title: "Registrasi Berhasil",
        description: "Silakan login menggunakan akun Anda.",
        status: "success",
        duration: 3000,
        isClosable: true,
      })

      // Redirect ke waiting email verification
      navigate("/waiting-email-verification")
    } catch (error: any) {
      toast({
        title: "Registrasi Gagal",
        description: error?.response?.data?.message || error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleRegister,
  }
}

export default useRegister
