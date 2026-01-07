# ✅ SEO PRE-LAUNCH CHECKLIST

Tento checklist použijte před nasazením webu do produkce.

---

## 📋 TECHNICKÉ SEO

### HTML & Meta Tagy
- [ ] Title tag je < 60 znaků a obsahuje hlavní klíčová slova
- [ ] Meta description je 150-160 znaků
- [ ] Meta keywords obsahuje 10-15 relevantních slov
- [ ] Lang atribut je nastaven na "cs"
- [ ] Canonical URL je správně nastavena
- [ ] Robots meta tag je "index, follow"

### Open Graph & Social Media
- [ ] OG title, description, image nastaveny
- [ ] OG image existuje (1200x630px)
- [ ] OG image je < 1MB
- [ ] Twitter Card tagy nastaveny
- [ ] OG locale je "cs_CZ"

### Strukturovaná Data
- [ ] JSON-LD schema pro Person je validní
- [ ] JSON-LD schema pro WebSite je validní
- [ ] JSON-LD schema pro ProfessionalService je validní
- [ ] Schema markup prošel validátorem (validator.schema.org)

### Soubory v root
- [ ] robots.txt existuje a je přístupný
- [ ] sitemap.xml existuje a je přístupný
- [ ] favicon.ico existuje
- [ ] .htaccess je nahrán (pro Apache server)
- [ ] 404 error page (volitelné)

---

## 🖼️ OBRÁZKY & MEDIA

### Optimalizace
- [ ] Všechny obrázky mají alt text
- [ ] Alt texty jsou popisné (ne jen "image1.jpg")
- [ ] Obrázky jsou komprimované (< 200KB každý)
- [ ] Velké obrázky mají lazy loading
- [ ] Obrázky mají width a height atributy
- [ ] Zváženo použití WebP formátu

### Specifické obrázky
- [ ] og-image.jpg nahrán (1200x630px)
- [ ] Favicon přidán (16x16, 32x32)
- [ ] Apple touch icon (180x180) - volitelné
- [ ] Profilová fotka má správný alt text

---

## 🔗 ODKAZY & NAVIGACE

### Interní odkazy
- [ ] Všechny interní odkazy fungují
- [ ] Navigation menu je funkční
- [ ] Smooth scroll funguje na všech sekcích
- [ ] Footer odkazy fungují

### Externí odkazy
- [ ] Všechny externí odkazy mají target="_blank"
- [ ] Externí odkazy mají rel="noopener noreferrer"
- [ ] Odkaz na LinkedIn je správný
- [ ] Odkaz na GitHub je správný
- [ ] Email odkaz funguje (mailto:)

---

## 🎨 SÉMANTICKÉ HTML

### HTML5 tagy
- [ ] `<main>` element je použit pro hlavní obsah
- [ ] `<nav>` pro navigaci
- [ ] `<article>` pro články/sekce
- [ ] `<section>` pro logické sekce
- [ ] `<header>` a `<footer>` použity správně
- [ ] `<h1>` tag je pouze jeden na stránce
- [ ] Headingy jsou v logické hierarchii (H1 → H2 → H3)

### ARIA Atributy
- [ ] aria-label na navigaci
- [ ] aria-label na tlačítkách a linkách
- [ ] aria-hidden na dekorativních ikonách
- [ ] aria-required na povinných formulářových polích
- [ ] aria-current na aktivní navigaci
- [ ] role atributy správně použity

---

## ⚡ VÝKON & RYCHLOST

### Build & Optimalizace
- [ ] Production build vytvořen (`npm run build`)
- [ ] Build otestován lokálně (`npm run preview`)
- [ ] JavaScript je minifikovaný
- [ ] CSS je minifikovaný
- [ ] Console.log jsou odstraněny z produkce
- [ ] Sourcemaps jsou vypnuté

### Server Konfigurace
- [ ] GZIP komprese je zapnutá (.htaccess)
- [ ] Browser caching je nastaven
- [ ] HTTPS je vynuceno (force redirect)
- [ ] Security headers jsou nastaveny
- [ ] WWW → non-WWW redirect (nebo naopak)

---

## 🧪 TESTOVÁNÍ

### Validátory
- [ ] HTML Validator (validator.w3.org) - bez chyb
- [ ] CSS Validator - bez kritických chyb
- [ ] Schema Markup Validator - validní
- [ ] Rich Results Test - validní

### SEO Nástroje
- [ ] Lighthouse SEO score > 90
- [ ] Lighthouse Performance score > 85
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse Best Practices score > 90
- [ ] PageSpeed Insights (Desktop) > 85
- [ ] PageSpeed Insights (Mobile) > 75

### Funkční testy
- [ ] Web funguje v Chrome
- [ ] Web funguje v Firefox
- [ ] Web funguje v Safari
- [ ] Web funguje v Edge
- [ ] Responsivní design funguje (Desktop, Tablet, Mobile)
- [ ] Formulář funguje správně
- [ ] Smooth scroll funguje

### Social Media Preview
- [ ] Facebook Debugger - OG image se zobrazuje
- [ ] Twitter Card Validator - náhled OK
- [ ] LinkedIn Post Inspector - náhled OK

---

## 📊 ANALYTICS & TRACKING

### Google Services
- [ ] Google Search Console je nastaven
- [ ] Vlastnictví domény ověřeno (GSC)
- [ ] Sitemap.xml odeslán v GSC
- [ ] Google Analytics 4 je nastaven
- [ ] GA4 tracking kód funguje (real-time test)
- [ ] Google Tag Manager (volitelné)

### Bing Webmaster
- [ ] Bing Webmaster Tools nastaven (volitelné)
- [ ] Sitemap odeslán do Bing

---

## 🌐 URL & REDIRECTS

### URL Struktura
- [ ] Všechny URL v `index.html` jsou produkční
- [ ] Canonical URL je správná
- [ ] OG URL je správná
- [ ] Twitter URL je správná
- [ ] URL v sitemap.xml jsou správné
- [ ] URL v robots.txt je správná

### Redirects
- [ ] HTTP → HTTPS redirect funguje
- [ ] WWW redirect funguje (pokud používáte)
- [ ] Trailing slash redirect funguje
- [ ] Žádné 404 chyby na důležitých stránkách

---

## 📱 MOBILNÍ OPTIMALIZACE

### Responsivní Design
- [ ] Web je plně responzivní
- [ ] Touch targets jsou min. 48x48px
- [ ] Text je čitelný bez zoomu (min 16px)
- [ ] Horizontální scroll není potřeba
- [ ] Obrázky se přizpůsobují obrazovce

### Mobile Testing
- [ ] Google Mobile-Friendly Test - passed
- [ ] Test na reálném mobilním zařízení
- [ ] Touch interakce fungují správně
- [ ] Formulář je použitelný na mobilu

---

## 🔐 BEZPEČNOST

### HTTPS & Certifikáty
- [ ] SSL certifikát je platný
- [ ] HTTPS funguje bez varování
- [ ] Mixed content problémy nejsou
- [ ] Security headers jsou nastaveny

### Data Protection
- [ ] Žádné citlivé soubory nejsou veřejně přístupné
- [ ] .env soubory jsou v .gitignore
- [ ] API klíče nejsou v kódu

---

## 📝 OBSAH

### Textový obsah
- [ ] Žádné překleply (spell check)
- [ ] Gramatika je správná
- [ ] Kontaktní informace jsou aktuální
- [ ] Odkazy na projekty fungují
- [ ] Copyright rok je aktuální

### Klíčová slova
- [ ] H1 obsahuje hlavní klíčové slovo
- [ ] První odstavec obsahuje klíčová slova
- [ ] Klíčová slova použita přirozeně v textu
- [ ] LSI keywords použity (synonyma)

---

## 🚀 FINÁLNÍ KONTROLA

### Před nasazením
- [ ] Všechny soubory z `build/` složky jsou nahrány
- [ ] `.htaccess` je v root složce serveru
- [ ] `robots.txt` je přístupný na /robots.txt
- [ ] `sitemap.xml` je přístupný na /sitemap.xml
- [ ] DNS je správně nastaven
- [ ] SSL certifikát je aktivní

### Po nasazení - první hodina
- [ ] Web se načítá bez chyb
- [ ] HTTPS funguje
- [ ] Všechny stránky jsou přístupné
- [ ] Formulář funguje
- [ ] Email notifikace fungují (pokud jsou)
- [ ] Analytics tracking funguje

### Po nasazení - první den
- [ ] Google Search Console - žádné chyby
- [ ] Lighthouse test na produkční URL
- [ ] PageSpeed Insights na produkční URL
- [ ] Mobile-Friendly Test passed
- [ ] Rich Results Test passed
- [ ] Social media preview OK

---

## 📊 METRIKY K SLEDOVÁNÍ

### První týden
- Indexace v Google Search Console
- První návštěvnost v GA4
- Core Web Vitals
- Chybovost (404, 500)

### První měsíc
- Pozice klíčových slov
- Organická návštěvnost
- Bounce rate
- Average session duration
- Backlinks (pokud nějaké vznikly)

---

## ✅ APPROVAL

**Web je připraven k nasazení když:**
- [ ] Všechny body v SEO checklist jsou splněny (90%+)
- [ ] Lighthouse SEO score je > 90
- [ ] Lighthouse Performance je > 85
- [ ] Žádné kritické chyby ve validátorech
- [ ] OG image se správně zobrazuje
- [ ] Sitemap je validní
- [ ] Google Search Console je připraven

---

**Datum kontroly:** _______________  
**Kontroloval:** _______________  
**Status:** ⬜ Schváleno ⬜ Potřebuje úpravy

---

**Poznámky:**
```
[Místo pro poznámky a komentáře]
```

---

Po dokončení tohoto checklistu je web SEO ready a připraven k nasazení! 🚀
