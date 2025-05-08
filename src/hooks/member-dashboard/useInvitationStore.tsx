// stores/useInvitationStore.ts
import { create } from "zustand"
import axios from "axios"
import { API_BASE_URL } from "@/config/api"


interface InvitationPayload {
  title: string
  date: string
  subdomain: string
  eventType: string
}

interface InvitationStore {
  loading: boolean
  error: string | null
  createInvitation: (payload: InvitationPayload) => Promise<any>
  setError: (msg: string | null) => void
  setLoading: (val: boolean) => void
}

export const useInvitationStore = create<InvitationStore>((set) => ({
  loading: false,
  error: null,

  setError: (msg) => set({ error: msg }),
  setLoading: (val) => set({ loading: val }),

  createInvitation: async (payload) => {
    set({ loading: true, error: null })

    try {
      const token = localStorage.getItem("auth_token")
      const res = await axios.post(
        `${API_BASE_URL}/member-dashboard/create-invitation`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      return res.data
    } catch (err: any) {
      const message = err.message || "Gagal membuat undangan."
      set({ error: message })
      throw new Error(message)
    } finally {
      set({ loading: false })
    }
  },
}))
