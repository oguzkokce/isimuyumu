"use client";
import { useState } from "react";
import styles from "./page.module.css";
import clsx from "clsx";

// Türkçe karakter, büyük/küçük harf, boşluk farkı tamamen ortadan kalkar
function normalizeName(s: string) {
  const map = {
    "ç": "c", "Ç": "c",
    "ğ": "g", "Ğ": "g",
    "ı": "i", "I": "i", "İ": "i", "i": "i",
    "ö": "o", "Ö": "o",
    "ş": "s", "Ş": "s",
    "ü": "u", "Ü": "u"
  };
  return (s || "")
    .replace(/\s+/g, "")
    .split("")
    .map(ch => map[ch] || ch.toLowerCase())
    .join("")
    .replace(/[^a-z]/g, "");
}



function isimUyumu(isim1, isim2) {
  const isimA = normalizeName(isim1);
  const isimB = normalizeName(isim2);
  const isimler = [isimA, isimB].sort();

 
  if (isimler[0] === "ikra" && isimler[1] === "oguz") {
    return 100;
  }

  let birlesik = isimA + isimB;
  let harfler = [];
  let sayilar = [];
  for (let h of birlesik) {
    if (!harfler.includes(h)) {
      harfler.push(h);
      sayilar.push([...birlesik].filter((x) => x === h).length);
    }
  }
  while (sayilar.length > 2) {
    let yeni = [];
    for (let i = 0; i < Math.floor(sayilar.length / 2); i++) {
      yeni.push(sayilar[i] + sayilar[sayilar.length - 1 - i]);
    }
    if (sayilar.length % 2 === 1) {
      yeni.push(sayilar[Math.floor(sayilar.length / 2)]);
    }
    sayilar = yeni;
  }
  return parseInt(sayilar.join(""));
}

export default function Home() {
  const [isim1, setIsim1] = useState("");
  const [isim2, setIsim2] = useState("");
  const [sonuc, setSonuc] = useState(null);
  const [showResult, setShowResult] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (isim1.trim() && isim2.trim()) {
      setSonuc(isimUyumu(isim1, isim2));
      setShowResult(true);
    }
  }

  function reset() {
    setIsim1("");
    setIsim2("");
    setSonuc(null);
    setShowResult(false);
  }

  return (
    <div className={styles.lovePage}>
      <h1 className={styles.title}>İsim Uyumu <span className={styles.heart}>♥</span></h1>
      <p className={styles.subtitle}>İki ismi gir, aranızdaki tatlı uyumu hemen öğren!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Birinci isim"
          value={isim1}
          onChange={e => setIsim1(e.target.value)}
          maxLength={20}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="İkinci isim"
          value={isim2}
          onChange={e => setIsim2(e.target.value)}
          maxLength={20}
          required
        />
        <button className={styles.button} type="submit">
          Uyumu Hesapla
        </button>
      </form>
      {showResult && sonuc !== null && (
        <div className={styles.resultBox}>
          <div className={styles.animatedHeartBox}>
            <svg className={styles.animatedHeart} viewBox="0 0 100 90" width="80" height="72">
              <path
                d="M10,30 A20,20 0 0,1 50,30 A20,20 0 0,1 90,30 Q90,60 50,85 Q10,60 10,30 Z"
                fill="#ffb6c1"
                stroke="#ff69b4"
                strokeWidth="2"
              />
              <text x="50" y="55" textAnchor="middle" fontSize="22" fill="#d72660" fontWeight="bold">
                %{sonuc}
              </text>
            </svg>
          </div>
          <div className={styles.resultText}>
            <span className={clsx(styles.yay, sonuc >= 80 && styles.yayBig)}>
              {sonuc >= 90 && "Mükemmel bir uyum! 💖"}
              {sonuc >= 70 && sonuc < 90 && "Çok tatlı bir uyum! 💕"}
              {sonuc >= 50 && sonuc < 70 && "Fena değil, umut var! 😊"}
              {sonuc < 50 && "Biraz çaba gerek! 🙈"}
            </span>
          </div>
          <button className={styles.resetButton} onClick={reset}>
            Yeniden Dene
          </button>
        </div>
      )}
      <footer className={styles.footer}>
        <span>OK</span>
      </footer>
    </div>
  );
}
