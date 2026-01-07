# Petr Mikeska - Osobní Portfolio

Profesionální webová prezentace geoinformatika a GIS analytika specializujícího se na vývoj webových mapových aplikací a prostorovou analýzu.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://petrmikeska.cz)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![SEO](https://img.shields.io/badge/SEO-Optimized-green)](https://petrmikeska.cz)

## 📋 O projektu

Moderní jednosloupcová webová stránka vytvořená v Reactu s využitím Vite a TypeScriptu. Design je zaměřen na profesionální prezentaci dovedností, projektů a služeb v oblasti geoinformatiky a GIS.

### Klíčové funkce

- ✨ **Responzivní design** - Plně optimalizováno pro všechna zařízení
- 🎨 **Moderní UI** - Postaveno na Tailwind CSS v4 a Radix UI komponentách
- 🚀 **Vysoký výkon** - Optimalizace pomocí Vite a lazy loading
- 🌐 **Česká lokalizace** - Veškerý obsah v češtině
- 📱 **Smooth scroll** - Plynulá navigace mezi sekcemi
- 🎯 **SEO Ready** - Kompletně připraveno pro vyhledávače (meta tagy, Schema.org, OpenGraph)
- ♿ **Přístupnost** - ARIA atributy, sémantické HTML5
- ⚡ **Performance** - Code splitting, GZIP komprese, browser caching

## 🛠️ Technologie

### Frontend

- **React 18.3.1** - Moderní UI knihovna
- **TypeScript** - Typová bezpečnost
- **Vite 6.3.5** - Rychlý build tool a dev server
- **Tailwind CSS v4.1.3** - Utility-first CSS framework
- **Radix UI** - Přístupné UI primitivy

### Komponenty

- Navigation - Fixní navigační menu s aktivní sekcí
- Hero - Úvodní sekce s background image a CTA tlačítky
- About - Detailní životopis a vzdělání
- Skills - Přehled technologií (QGIS, ArcGIS, Python, PostgreSQL, PostGIS, GDAL, Leaflet, JavaScript, HTML, CSS)
- Projects - Portfolio projektů v oblasti GIS a webových map
- Services - Nabízené služby (prostorové analýzy, webové mapy, dálkový průzkum Země, Python automatizace)
- Contact - Kontaktní formulář a informace
- Footer - Zápatí s odkazy na sociální sítě

## 🚀 Instalace a spuštění

### Požadavky

- Node.js 18+ 
- npm nebo yarn

### Lokální development

```bash
# Klonování repozitáře
git clone https://github.com/MetrPikeska/petrmikeska.git

# Přechod do složky projektu
cd petrmikeska

# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

Dev server poběží na `http://localhost:3001/` (pokud je port 3000 obsazený)

### Production build

```bash
# Vytvoření optimalizovaného buildu
npm run build

# Náhled production buildu
npm run preview
```

## 📁 Struktura projektu

```
petrmikeska.cz/
├── src/
│   ├── assets/          # Obrázky a statické soubory
│   ├── components/      # React komponenty
│   │   ├── ui/         # Radix UI komponenty
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── styles/         # Globální styly
│   ├── App.tsx         # Hlavní aplikační komponenta
│   └── main.tsx        # Entry point
├── public/             # Veřejné statické soubory
│   ├── robots.txt      # SEO - robots soubor
│   ├── sitemap.xml     # SEO - mapa stránek
│   └── .htaccess       # Apache konfigurace
├── SEO-GUIDE.md        # 📖 Kompletní SEO průvodce
├── SEO-SUMMARY.md      # 📊 Přehled SEO optimalizací
├── SEO-TODO.md         # ✅ TODO checklist pro SEO
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 SEO Optimalizace

Web je **plně SEO optimalizovaný** a připraven pro maximální viditelnost ve vyhledávačích:

### ✅ Implementováno

- **Meta tagy**: Title, description, keywords, author, robots
- **Open Graph**: Kompletní Facebook a Twitter Card tagy
- **Strukturovaná data**: 3x JSON-LD schema (Person, WebSite, ProfessionalService)
- **Sémantické HTML**: `<main>`, `<nav>`, `<article>`, `<address>`, `<section>`
- **ARIA atributy**: Plná podpora pro screen readery a přístupnost
- **Microdata markup**: Schema.org itemProp, itemScope
- **robots.txt**: Správné nastavení pro crawlery
- **sitemap.xml**: Kompletní mapa webu
- **.htaccess**: GZIP komprese, browser caching, security headers
- **Performance**: Code splitting, lazy loading, minifikace

### 🎯 Klíčová slova

**Primární**: Geoinformatika, GIS analýzy, Webové mapové aplikace, Petr Mikeska

**Sekundární**: PostGIS, Prostorové analýzy, Webová kartografie, Computer vision, Leaflet, Python GIS, QGIS, 3D modelování terénu

### 📚 SEO Dokumentace

Pro detailní informace o SEO optimalizacích viz:
- **[SEO-GUIDE.md](SEO-GUIDE.md)** - Kompletní průvodce a doporučení
- **[SEO-SUMMARY.md](SEO-SUMMARY.md)** - Přehled všech provedených změn
- **[SEO-TODO.md](SEO-TODO.md)** - Checklist před nasazením do produkce

## 🎨 Design

Design kombinuje moderní estetiku s profesionálním vzhledem:

- **Barevná paleta**: Neutrální odstíny šedi (grayscale) s akcenty
- **Typografie**: Systémová písma pro optimální čitelnost
- **Layout**: One-page scrolling design s fixní navigací
- **Hero sekce**: Full-width background s tmavým overlay pro čitelnost textu
- **Spacing**: Konzistentní systém mezer pro vizuální harmonii

## 📞 Kontakt

- **Email**: [piter.mikeska@gmail.com](mailto:piter.mikeska@gmail.com)
- **LinkedIn**: [petr-mikeska-b25669262](https://www.linkedin.com/in/petr-mikeska-b25669262/)
- **GitHub**: [MetrPikeska](https://github.com/MetrPikeska)
- **Web**: [petrmikeska.cz](https://petrmikeska.cz)

## 📝 Vzdělání

- **Magisterské studium** - Geoinformatika a kartografie, Univerzita Palackého v Olomouci (současnost)
- **Bakalářské studium** - Geoinformatika a kartografie, Univerzita Palackého v Olomouci
- **Střední škola** - Počítačové systémy a správa sítí, SŠIT

## 📄 Licence

Tento projekt je vytvořen jako osobní portfolio. Všechna práva vyhrazena © 2025 Petr Mikeska

---

Vytvořeno s ❤️ pomocí React, Vite a TypeScript
