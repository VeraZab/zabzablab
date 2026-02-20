"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import Link from "next/link";

export default function QRPage() {
  const [dataUrl, setDataUrl] = useState<string>("");

  const vcardUrl = useMemo(() => {
    if (typeof window === "undefined") return "/vcard"; // SSR fallback
    const base = window.location.origin;
    return `${base}/vcard`;
  }, []);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const url = await QRCode.toDataURL(vcardUrl, {
          errorCorrectionLevel: "H",
          margin: 2,
          scale: 8,
        });
        if (isMounted) setDataUrl(url);
      } catch (e) {
        console.error("Failed to generate QR", e);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [vcardUrl]);

  return (
    <div className="page-container" style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-4)",
      padding: "var(--space-8) 0",
      textAlign: "center",
    }}>
      <h1>Scan to save contact</h1>
      {dataUrl ? (
        <img
          src={dataUrl}
          alt="QR code that downloads ZabZabLab vCard"
          style={{ width: 280, height: 280 }}
        />
      ) : (
        <p>Generating QR…</p>
      )}
      <p>
        Or tap here: <Link href="/vcard" download>download vCard</Link>
      </p>
    </div>
  );
}


