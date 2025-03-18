import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="btn btn-outline-light"
    >
      {copied ? "Copyed!" : "Copy quote"}
    </button>
  );
}
