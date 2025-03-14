"use client"; // Necesario porque usamos useState y useEffect
import styles from "./Loader.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Si la página ya está cargada (por ejemplo, al recargar), oculta el preloader
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup: eliminamos el event listener cuando el componente se desmonta
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null; // Oculta el preloader cuando la página ya cargó

  return (
    <>
      <div className={styles.loader__container}>
        <Image
          src="/loader.gif"
          alt="Cargando..."
          width={150}
          height={150}
          priority // Carga inmediatamente sin lazy loading
        />
      </div>
    </>
  );
}
