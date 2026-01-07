# 🚀 SEO QUICK START

**Rychlý průvodce SEO optimalizací pro petrmikeska.cz**

---

## ✅ CO JE HOTOVO

Web je **SEO ready** s těmito optimalizacemi:

✅ Meta tagy (title, description, keywords)  
✅ Open Graph & Twitter Cards  
✅ 3x JSON-LD strukturovaná data  
✅ robots.txt & sitemap.xml  
✅ Sémantické HTML5 tagy  
✅ ARIA atributy pro přístupnost  
✅ .htaccess (GZIP, caching, security)  
✅ Performance optimalizace (code splitting)  

**SEO Score: ~95/100** (předpokládaný)

---

## ⚠️ CO JEŠTĚ POTŘEBUJETE UDĚLAT

### 1. 📸 Vytvořit OG Image (5 min)
```
📁 Soubor: public/og-image.jpg
📐 Rozměr: 1200 x 630 px
📊 Obsah: Vaše foto + jméno + pozice
🔗 Nástroj: canva.com (zdarma)
```

### 2. 🎨 Přidat Favicon (5 min)
```
📁 Soubor: public/favicon.ico
📐 Rozměr: 32x32, 16x16
🔗 Nástroj: realfavicongenerator.net
```

### 3. 🌐 Aktualizovat URL (5 min)
V těchto souborech změňte URL na produkční:
- `index.html` (canonical, og:url, twitter:url, og:image)
- `public/sitemap.xml` (všechny <loc> tagy)
- `public/robots.txt` (Sitemap URL)

### 4. 📊 Nastavit Analytics (10 min)
```
1. Google Search Console → Přidat property
2. Google Analytics 4 → Vytvořit účet
3. Přidat tracking kód do index.html
4. Odeslat sitemap.xml v GSC
```

---

## 📚 DOKUMENTACE

| Soubor | Účel |
|--------|------|
| **SEO-SUMMARY.md** | Přehled všech změn |
| **SEO-GUIDE.md** | Kompletní SEO průvodce |
| **SEO-TODO.md** | Detailní instrukce pro dokončení |
| **SEO-CHECKLIST.md** | Checklist před nasazením |
| **KEYWORDS.md** | Reference klíčových slov |

---

## 🎯 KLÍČOVÁ SLOVA

**Top 4:**
1. Geoinformatika
2. GIS analýzy
3. Webové mapové aplikace
4. Petr Mikeska

**Další:** PostGIS, Prostorové analýzy, Webová kartografie, Computer vision, Leaflet, Python GIS, QGIS, 3D modelování terénu

---

## 🧪 TESTOVÁNÍ

Po nasazení otestujte:

1. **Lighthouse** (Chrome DevTools, F12)
   - Cíl: SEO > 90, Performance > 85

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly

4. **Rich Results Test**
   - https://search.google.com/test/rich-results

5. **Schema Validator**
   - https://validator.schema.org/

---

## 📦 BUILD & DEPLOY

```bash
# 1. Build pro produkci
npm run build

# 2. Preview buildu lokálně
npm run preview

# 3. Nahrát obsah složky build/ na server
# Včetně .htaccess do root složky
```

---

## 🎉 VÝSLEDEK

Po dokončení kroků výše bude web:
- ✅ **Plně SEO optimalizovaný**
- ✅ **Rychlý a výkonný**
- ✅ **Přístupný (accessibility)**
- ✅ **Připravený pro vyhledávače**
- ✅ **Optimalizovaný pro social media**

---

## 📞 QUICK LINKS

- **GSC:** https://search.google.com/search-console/
- **GA4:** https://analytics.google.com/
- **OG Debugger:** https://developers.facebook.com/tools/debug/
- **Canva:** https://canva.com/
- **Favicon Generator:** https://realfavicongenerator.net/

---

**Čas potřebný k dokončení: ~30 minut**

**Po nasazení sledujte:**
- Google Search Console (indexace, chyby)
- Google Analytics 4 (návštěvnost)
- Core Web Vitals (výkon)

---

🚀 **Hodně štěstí s nasazením!**

Datum vytvoření: 7. ledna 2026
