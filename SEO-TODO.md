# 🎯 INSTRUKCE PRO DOKONČENÍ SEO OPTIMALIZACE

## ⚠️ DŮLEŽITÉ - PŘED NASAZENÍM DO PRODUKCE

### 1. 📸 Vytvořit Open Graph obrázek
**Cesta:** `public/og-image.jpg`

**Specifikace:**
- Rozměry: **1200 x 630 pixelů**
- Formát: JPG nebo PNG
- Velikost: < 1 MB
- Obsah doporučení:
  - Vaše fotka
  - Jméno: "Bc. Petr Mikeska"
  - Pozice: "Geoinformatik | GIS Analytik"
  - Logo/značka (pokud máte)
  - Jednoduchý design, dobře čitelný na mobilech

**Nástroje pro tvorbu:**
- Canva.com (šablony pro OG image)
- Figma
- Adobe Photoshop
- GIMP (zdarma)

**Testování:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

### 2. 🎨 Přidat favicon
**Cesta:** `public/favicon.ico`

**Specifikace:**
- Rozměry: 32x32, 16x16 (multi-size ICO)
- Případně přidat i PNG verze:
  - `public/favicon-16x16.png`
  - `public/favicon-32x32.png`
  - `public/apple-touch-icon.png` (180x180)

**Generátor:**
- https://realfavicongenerator.net/
- https://favicon.io/

---

### 3. 🌐 Aktualizovat URL adresy
Před nasazením změňte všechny odkazy z vývojové na produkční URL:

**V souboru `index.html` změňte:**
```html
<link rel="canonical" href="https://petrmikeska.cz/" />
<meta property="og:url" content="https://petrmikeska.cz/" />
<meta property="twitter:url" content="https://petrmikeska.cz/" />
<meta property="og:image" content="https://petrmikeska.cz/og-image.jpg" />
<meta property="twitter:image" content="https://petrmikeska.cz/og-image.jpg" />
```

**V souboru `public/sitemap.xml` změňte:**
```xml
<loc>https://petrmikeska.cz/</loc>
<!-- A všechny ostatní <loc> tagy -->
```

**V souboru `public/robots.txt` změňte:**
```
Sitemap: https://petrmikeska.cz/sitemap.xml
```

---

### 4. 📊 Nastavit Google Search Console

**Kroky:**
1. Přejít na: https://search.google.com/search-console/
2. Přidat novou property (doménu): `petrmikeska.cz`
3. Ověřit vlastnictví (HTML tag nebo DNS)
4. Odeslat sitemap: `https://petrmikeska.cz/sitemap.xml`
5. Sledovat indexaci a výkon

**Ověřovací meta tag přidat do `index.html`:**
```html
<meta name="google-site-verification" content="VÁŠ_OVĚŘOVACÍ_KÓD" />
```

---

### 5. 📈 Nastavit Google Analytics 4

**Kroky:**
1. Vytvořit GA4 účet: https://analytics.google.com/
2. Vytvořit novou property
3. Získat Measurement ID (G-XXXXXXXXXX)
4. Přidat tracking kód do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Umístění:** Před `</head>` tag v `index.html`

---

### 6. 🖼️ Optimalizovat obrázky

**Doporučené nástroje:**
- **TinyPNG**: https://tinypng.com/ (komprese PNG/JPG)
- **Squoosh**: https://squoosh.app/ (konverze do WebP)
- **ImageOptim** (Mac): https://imageoptim.com/

**Co udělat:**
1. Všechny obrázky v `src/assets/` zkomprimovat
2. Konvertovat do WebP formátu pro lepší výkon
3. Zachovat původní JPG/PNG jako fallback

**Příklad implementace:**
```tsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Popis" loading="lazy" />
</picture>
```

---

### 7. 🧪 Testování před nasazením

**Performance & SEO testy:**

1. **Lighthouse (Chrome DevTools):**
   - Otevřít DevTools (F12)
   - Tab "Lighthouse"
   - Spustit audit (Desktop + Mobile)
   - Cíl: Všechny skóre > 90

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Otestovat URL po nasazení
   - Opravit nalezené problémy

3. **Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly
   - Ověřit responzivitu

4. **Rich Results Test:**
   - https://search.google.com/test/rich-results
   - Ověřit strukturovaná data

5. **Schema Markup Validator:**
   - https://validator.schema.org/
   - Ověřit JSON-LD

---

### 8. 🔧 Build a nasazení

**Příkazy pro build:**
```bash
# Instalace závislostí
npm install

# Build pro produkci
npm run build

# Náhled buildu lokálně
npm run preview
```

**Před nahráním na server:**
- ✅ Zkontrolovat, že `build/` složka obsahuje všechny soubory
- ✅ Ověřit, že `.htaccess` je v root složce
- ✅ Ověřit, že `robots.txt` a `sitemap.xml` jsou přístupné
- ✅ Otestovat lokálně build verzi

---

### 9. 📝 Po nasazení - Checklist

- [ ] Otevřít web v prohlížeči a zkontrolovat funkčnost
- [ ] Ověřit, že HTTPS funguje správně
- [ ] Otestovat všechny odkazy (interní i externí)
- [ ] Zkontrolovat meta tagy přes "View Page Source"
- [ ] Otestovat OG image na Facebook Debuggeru
- [ ] Odeslat sitemap v Google Search Console
- [ ] Zkontrolovat robots.txt: `https://petrmikeska.cz/robots.txt`
- [ ] Zkontrolovat sitemap: `https://petrmikeska.cz/sitemap.xml`
- [ ] Spustit Lighthouse test
- [ ] Spustit PageSpeed Insights
- [ ] Nastavit monitorování v GA4

---

### 10. 🔄 Pravidelná údržba

**Měsíčně:**
- Zkontrolovat pozice v Google Search Console
- Analyzovat návštěvnost v GA4
- Aktualizovat obsah (projekty, skills)
- Zkontrolovat broken links

**Čtvrtletně:**
- Spustit kompletní SEO audit (Lighthouse)
- Aktualizovat sitemap.xml (`<lastmod>` datum)
- Review konkurence
- Aktualizovat klíčová slova

**Ročně:**
- Kompletní SEO audit
- Redesign strategie
- Aktualizace strukturovaných dat
- Review a optimalizace meta tagů

---

## 📞 Kontakty pro podporu

**SEO nástroje:**
- Google Search Console: https://search.google.com/search-console/
- Google Analytics: https://analytics.google.com/
- PageSpeed Insights: https://pagespeed.web.dev/

**Validátory:**
- HTML Validator: https://validator.w3.org/
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Schema Validator: https://validator.schema.org/

**Testovací nástroje:**
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/
- Pingdom: https://tools.pingdom.com/

---

## ✅ Finální kontrola před spuštěním

```
[x] SEO meta tagy nastaveny
[x] Strukturovaná data implementována
[x] robots.txt vytvořen
[x] sitemap.xml vytvořen
[x] .htaccess optimalizován
[x] Code splitting implementován
[x] ARIA atributy přidány
[ ] OG image nahrán
[ ] Favicon přidán
[ ] URL adresy aktualizovány
[ ] Google Search Console nastaven
[ ] Google Analytics 4 nastaven
[ ] Obrázky optimalizovány
[ ] Performance testy provedeny
[ ] Build vytvořen a otestován
```

---

**Poznámka:** Po dokončení všech kroků bude web plně SEO optimalizovaný a připravený na maximální viditelnost ve vyhledávačích! 🚀

Datum vytvoření: 7. ledna 2026
