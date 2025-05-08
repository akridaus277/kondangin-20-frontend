import { create } from "zustand"
import axios from "axios"
import { API_BASE_URL } from "@/config/api"

export interface EventType {
  code: string
  name: string
}

interface EventTypeStore {
  eventTypes: EventType[]
  loading: boolean
  error: string | null
  fetchEventTypes: () => Promise<void>
}

export const useEventTypeStore = create<EventTypeStore>((set) => ({
  eventTypes: [],
  loading: false,
  error: null,

  fetchEventTypes: async () => {
    set({ loading: true, error: null })
    try {
      const token = localStorage.getItem("auth_token")
      const res = await axios.get(`${API_BASE_URL}/member-dashboard/lov-event-type`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({ eventTypes: res.data.data })
    } catch (err: any) {
      set({ error: "Gagal memuat jenis acara." })
    } finally {
      set({ loading: false })
    }
  },
}))
