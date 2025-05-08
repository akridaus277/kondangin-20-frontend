// src/stores/dashboardStore.ts
import { create } from "zustand"
import axios from "axios"
import { API_BASE_URL } from "@/config/api"

export interface Invitation {
  title: string
  status: string
  mainEventDate: string
  subdomain: string
  coverPhoto: string
  owner: string
}

interface DashboardState {
  invitations: Invitation[]
  loading: boolean
  error: string | null
  fetchInvitations: () => Promise<void>
}

export const useDashboard = create<DashboardState>((set) => ({
  invitations: [],
  loading: false,
  error: null,

  fetchInvitations: async () => {
    set({ loading: true, error: null })
    try {
      const token = localStorage.getItem("auth_token")
      const res = await axios.get(`${API_BASE_URL}/member-dashboard/get-invitation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({ invitations: res.data.data })
    } catch (err) {
      set({ error: "Gagal mengambil data undangan" })
    } finally {
      set({ loading: false })
    }
  },
}))
