import React from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> de l'HTML original (ci-dessous) doit généralement
  être placé dans le fichier `public/index.html` de votre projet React.
  Les styles Tailwind avec @apply seraient dans votre fichier CSS principal (ex: src/index.css).

  <head>
    <meta charSet="utf-8"/>
    <link crossOrigin="" href="https://fonts.gstatic.com/" rel="preconnect"/>
    <link as="style" href="https://fonts.googleapis.com/css2?display=swap&family=Work+Sans%3Awght%40400%3B500%3B700%3B900" rel="stylesheet"/>
    <title>EPG - École - Catalogue des formations</title>
    <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <style type="text/tailwindcss">
      :root {
        --primary-50: #eff1f5;
        // ... autres variables CSS
      }
      body {
        font-family: 'Work Sans', sans-serif;
      }
      .card-hover-effect {
        @apply transition-all duration-300 ease-in-out;
      }
      .card-hover-effect:hover {
        @apply transform -translate-y-1 shadow-2xl;
      }
    </style>
  </head>
*/

// Données des formations (dans une application réelle, cela viendrait d'une API)
const coursesData = [
  {
    title: "Développement web complet",
    instructor: "par Jean Dupont",
    level: "Débutant",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuANAdYGkHOtsAqK83TbrddqKaHcDmWJ-hBjlwmlDrJ2pFY-kseWU7d_ix4wNvAsnjckBRhTfFJmSq9YtChJbkUZCPzBwfZtFb47xOYNk5i1aXmfx13E9oEj86l3SM10m73dtrU2woCNUc5HKDYH2cb_9qH3rXv5vdrm9LP2oDj1XD7Uw3iGrHsu02NRwBUxMKoD8ZQ-JoqpZ-1evR06T6f7vrsXFGAJfSwES1CbuMWVVP-1IGgQVIF8WIqzahlGxGBCusV7krs_q8Q",
  },
  {
    title: "Design d'interface utilisateur (UI)",
    instructor: "par Marie Dubois",
    level: "Intermédiaire",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPWt8XqXm-0AKlN9LwAmolWLHLiRqARgQM10imlX_K8eSJdVVU2GGppnE9UWjHrFB6ae05hKzaKbzo6-15xdy_W75KQqaRJzD5ZpeTTjlK_ppPPLRKqFIY92S2XvyNtB_dVptgNVKweSg32oSgPeQkmnGTHNvYGn9qlSNGOqZzWPgSnppitZogSmhF9lfJxFxlVWX_vfF0rHUChhwFrrLiScaeI_1hX1T8CNk5dTY0UgPXCekXrG-SK6Rf8IWQ2TpnkYOVeviPuMw",
  },
  {
    title: "Marketing digital pour les entreprises",
    instructor: "par Pierre Martin",
    level: "Avancé",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCM8i2lRAjWEG2irTbx-rW4kiL3tIZHLiruIZ3l3QvsktKW85Ak6reP3IA-LIyji0UoNQfimHG4E8wGvCPWNe-OchE-cD0mMIqLXTdf2MJzTAnIJU-pe-VrEmpHNibdQuO5R1IXXqfh8tikze7KNy2g5a75zZFSDi4AAgngi_ph4LIzTKS6J47h6XZkqylyaJuwk6DDJqq7LeVYcTSmM7yAcpZyxEDzu1sZBr299cBPOzPULHwDamPQt6us-sJ_RWIhMTvxLYVLd6U",
  },
  {
    title: "Introduction à la programmation Python",
    instructor: "par Sophie Leclerc",
    level: "Débutant",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3BjmTuIS8ONUjw1sc1q369B43KIfr28Wh9M8G4ScoTFSDz3izh1VJyZ2JsZJxFcGcOjFgz4p5gMHr6k80HSPKaohZfqDeSuldOb7g2itrpPN8ZCnGlLutmIMIPtkknN5wc8K3ZyWHR78liCoa9V6EVQrxZwMa5Sz58V1MdcnUxddtK8G-RKXgwpfOCnC3gxTL3IIktWPux80hoZrMsHnJSU-R6qyf_MoSiIPKSpG4nYX5m8OM8J2_yUgpuPsHrkCWzB6KB6XKPMk",
  },
  {
    title: "Gestion de projet agile",
    instructor: "par Thomas Moreau",
    level: "Intermédiaire",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtC24Om8oeuNwybFazC3eIFBAMjNQLJq7AwIWadYXHKZc3PQRJ6a-guQzkac0z1BGDLgKhhBM6UAODDcLoWSDIU4c9_48d22UkJ6OBtiATbHq4En8bz1VSqHbPKbh4qQm4ShgOLkb4RBIU7pgF3xZsltT7YT_v0RaNM8iAnxzDLANDocUM3dwaVM4kxRbAHtnhOZ04LYQSIqKoNUNHHoXTf4z9kASziH6JQaG_3fnlLEGlVSmICQOcspSsZLWwdYZ23dF_l-HOo_0",
  },
  {
    title: "Analyse de données avec Excel",
    instructor: "par Isabelle Girard",
    level: "Avancé",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv8oL5_XXOjmH2xaqyipsoYOVg8n43CD87d8hgpNpmdnF5fjG8RQCw7UzgiZZF_9niwAtkUrPr6zi25UXJ-hC4jFXD9gSWUUSAkijNVqU7E6FAXh6anedDSuMHn35hwt4rzm7PBl-u9Xv8XWZB0iC3wlmUHXT6tRQjB4FMBZF53nIHr0GrPCYD7Y6MzlJtJqxHBzFzWcMJhe2O9PlSlkbSklNaz41BxWWnWPpjmGdeb-gpl6SP3jDk2tz3lXp8GXf4R3PnEHUH8K0",
  },
  {
    title: "Création de contenu pour les réseaux sociaux",
    instructor: "par Antoine Roux",
    level: "Débutant",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQpr2nAJu9ySDi37jaGPQeySesiNsR4B087hH47WUpKEGYhWYvkjVOul4gadhyVU1AZcChRMqqMQsmyhutKFlKh-R5XEh6fVFmDDDlteQtCm-FF4o5DvrUuwGOPl_Mi6i7NtJzMeqtQrj5rPmYgVtaK60TLu1IgT_Z25YRLU02200sWkyhmpgnwRAyOVyIj1Ti09ZhRs2U1-_nfUJj6ZYvLzrvwJff04B-uuc9xQXw6mxLug7aVBkt21gD95weqjz7gaFGM5xvUV0",
  },
  {
    title: "Photographie numérique pour débutants",
    instructor: "par Camille Leroy",
    level: "Intermédiaire",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrRNHdqUu31Fj8JMnUVHulUtZivt2u9EHQAn3GgKWOJEZn2MYjfhP4FQtSoRYDEs1DtkUbp9o1aSovNM9mNtvqxrOdbnQfXMbgNDa9vsLXKJCBFMzT9mZw4Pyb5v2A_ZcKVVGDaduSTjpH2WQLYtxgIDbRkE0nmFsAbzOufmOnvsdesYk9ogDTELkHdHHOFZfsPM_82X01woXK0Iv5MfpNhI7VnRbNKRxexBep9TLdoxIPZTcUal2IWjxtjk1hSx-f7d-suLhlL9I",
  },
];

const CourseCard = ({ title, instructor, level, imageUrl }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-neutral-50 shadow-lg card-hover-effect">
      <div className="relative">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="absolute top-3 right-3 rounded-full bg-neutral-900/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {level}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-neutral-900 text-lg font-bold leading-tight">{title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{instructor}</p>
        <div className="mt-4 flex-1"></div>
        <button className="mt-4 w-full rounded-full bg-[var(--secondary)] py-2.5 text-sm font-bold text-neutral-950 shadow-sm hover:bg-primary-300 transition-colors">
          Voir
        </button>
      </div>
    </div>
  );
};


const AllCoursesPage = () => {
  return (
    <div className="bg-neutral-100">
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200 bg-neutral-50/80 px-10 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 text-neutral-900">
                <div className="size-8 text-[var(--secondary)]">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-neutral-900 text-xl font-bold tracking-tight">EPG</h1>
              </div>
              <nav className="flex items-center gap-8">
                <a className="text-neutral-700 hover:text-neutral-950 text-base font-medium transition-colors" href="#">Accueil</a>
                <a className="text-neutral-950 text-base font-bold" href="#">Formations</a>
                <a className="text-neutral-700 hover:text-neutral-950 text-base font-medium transition-colors" href="#">Catalogue</a>
                <a className="text-neutral-700 hover:text-neutral-950 text-base font-medium transition-colors" href="#">Mon compte</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSATQtl2Wwu3BULu-cWEh4Nz-4tOvBFM71_BNBLhDdYzc3WX0wRjcRv4mR36EGmx4rriVUuVJRdeBaZoUsEAVDwmpYWqabf4Rq38j9G3JGUAGzzoJ9Em-B3H4sXncBkM6tE1QYhhkqopbJBUgkLU1qCZNCh4zrUyZpQMkAgU4feGZjz0Ic7ulSccK5-HV8ZU2LSffawdPnX8cmoMcud_RvbOJaqCCScIRBaaTA98Hm7An9ecLLsnhUQcMpgJFa7E5rplHkTHBAvUk")',
                }}
              ></div>
            </div>
          </header>
          <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl">
              <div className="mb-8 text-center">
                <h2 className="text-neutral-900 text-4xl font-extrabold tracking-tighter lg:text-5xl">Catalogue des formations</h2>
                <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">Explorez nos cours et trouvez la formation parfaite pour vous.</p>
              </div>
              <div className="mb-8 px-4 sm:px-0">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="h-5 w-5 text-neutral-500" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    className="form-input w-full rounded-full border-neutral-300 bg-neutral-50 py-3 pl-11 pr-4 text-base text-neutral-900 placeholder-neutral-500 shadow-sm focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                    placeholder="Rechercher une formation, un sujet ou un formateur..."
                    type="search"
                  />
                </div>
              </div>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3 px-4 sm:px-0">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--secondary)] px-5 text-sm font-semibold text-neutral-950 shadow-sm">Tous</button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-200 px-5 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition-colors">Développement</button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-200 px-5 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition-colors">Design</button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-200 px-5 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition-colors">Marketing</button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-neutral-200 px-5 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition-colors">Langues</button>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {coursesData.map((course, index) => (
                  <CourseCard
                    key={index} // Idéalement, utilisez un ID unique de la formation
                    title={course.title}
                    instructor={course.instructor}
                    level={course.level}
                    imageUrl={course.imageUrl}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;