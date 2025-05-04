import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { encryptPassword } from "@/utils/encryption"
import axios from "axios"
import { API_BASE_URL } from "@/config/api"
import { useNavigate } from "react-router-dom"


// Hook untuk login
const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()
  
    // Fungsi handle login
    const handleLogin = async () => {
      setLoading(true)
      try {
        const encryptedPassword = encryptPassword(password)
  
        const response = await axios.post(`${API_BASE_URL}/login`, {
          email,
          password: encryptedPassword,
        })
  
        const token = response.data?.data?.token
        if (token) {
          localStorage.setItem("auth_token", token)
  
          toast({
            title: "Login Berhasil",
            description: "Anda berhasil masuk.",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
  
          // Navigasi manual tanpa next/router
          navigate("/member")
        } else {
          throw new Error("Token tidak ditemukan dalam response.")
        }
      } catch (error: any) {
        toast({
          title: "Login Gagal",
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
      email,
      setEmail,
      password,
      setPassword,
      loading,
      handleLogin,
    }
  }
  
  export default useLogin