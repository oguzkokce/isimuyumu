This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Düzeltilecek Yer

Şu kısmı bul:
```tsx
<code_block_to_apply_changes_from>
```

Bunu **şununla değiştir**:

```tsx
<div className={styles.resultText}>
  <span className={clsx(styles.yay, sonuc >= 80 && styles.yayBig)}>
    {sonuc >= 90 && "Mükemmel bir uyum! 💖"}
    {sonuc >= 70 && sonuc < 90 && "Çok tatlı bir uyum! 💕"}
    {sonuc >= 50 && sonuc < 70 && "Fena değil, umut var! 😊"}
    {sonuc < 50 && "Biraz çaba gerek! 🙈"}
  </span>
</div>
```

---

**Yani tek yapman gereken:**  
1. Bu kodu yapıştırıp kaydetmek  
2. Sunucuyu tekrar başlatmak (`npm run dev`)

Artık Oğuz & İkra için özel mesaj ve %100 çıkacak!  
Deneyip sonucu bana bildir lütfen!
