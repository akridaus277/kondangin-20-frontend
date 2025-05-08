import { useToastMessage } from "@/hooks/global/useToastMessage"

export interface InvitationFormValues {
    title: string
    date: string
    subdomain: string
    eventType: string
  }
  
  export interface ValidationResult {
    isValid: boolean
    message?: string
  }

  
  export const useValidateCreateInvitationForm = () => {
    const { showToast } = useToastMessage()
  
    const validate = (values: InvitationFormValues): boolean => {
      const { title, date, subdomain, eventType } = values
  
      if (!subdomain.trim()) {
        showToast("Subdomain wajib diisi.", "warning")
        return false
      }

      if (!eventType.trim()) {
        showToast("Jenis acara wajib dipilih.", "warning")
        return false
      }

      if (!title.trim()) {
        showToast("Nama acara wajib diisi.", "warning")
        return false
      }
  
      if (!date.trim()) {
        showToast("Tanggal acara wajib diisi.", "warning")
        return false
      }
  
      
  
      
  
      return true
    }
  
    return { validate }
  }
  