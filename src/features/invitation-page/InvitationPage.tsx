import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useInvitationData } from "@/hooks/invitiation-page/useInvitationData";

const InvitationPage = ({ subdomain }: { subdomain: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { data, iframeSrc } = useInvitationData(subdomain);
  console.log("isi data api : ",data);
  

  useEffect(() => {
    const handleLoad = () => {
      iframeRef.current?.contentWindow?.postMessage(data, "*");
    };

    const iframeEl = iframeRef.current;
    if (iframeEl) {
      iframeEl.addEventListener("load", handleLoad);
    }

    return () => {
      if (iframeEl) {
        iframeEl.removeEventListener("load", handleLoad);
      }
    };
  }, [data]);

  return (
    <Box minHeight="100vh">
      {iframeSrc && (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          width="100%"
          height="1000px"
          style={{ border: "none" }}
          title="Undangan"
        />
      )}
    </Box>
  );
};

export default InvitationPage;
