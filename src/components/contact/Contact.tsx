import { useState, useEffect } from "react";
import { MainDiv, Title, Mail, CopiedTooltip } from "./Contact.styled";

const Contact = () => {
  const [copied, setCopied] = useState("hidden");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied("hidden");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  const copyMail = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied("visible");
  };

  return (
    <MainDiv>
      <CopiedTooltip copied={copied}>Mail copié</CopiedTooltip>
      <Title>WRITE US AT</Title>
      <Mail onClick={() => copyMail("antoine@ni-corp.net")}>
        antoine@ni-corp.net
      </Mail>
    </MainDiv>
  );
};

export default Contact;
