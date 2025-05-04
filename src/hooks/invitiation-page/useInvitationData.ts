import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/config/api"


export const useInvitationData = (subdomain: string) => {
  const [data, setData] = useState<unknown | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/invitation-guest/get-invitation`, {
          subdomain,
        }, {
            headers: {
              "Content-Type": "application/json"
            }
          });

        const result = response.data;
        setData(result.data);

        const templateCode = result.data.templateCode;
        setIframeSrc(`/templates/${templateCode}/index.html`);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subdomain]);

  return { data, iframeSrc, loading, error };
};
