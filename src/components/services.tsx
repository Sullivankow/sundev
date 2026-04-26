

import useRevealOnScroll from '../hooks/useRevealOnScroll';

const services = [
  {
    name: '💼 Site One Page',
    id: 'offre-onepage',
    price: '590€',
    description: 'Un site simple sur une seule page, parfait pour présenter une activité.',
    features: [
      '1 page (scroll)',
      'Design responsive (mobile/tablette)',
      'Sections : accueil, services, à propos, contact',
      'Formulaire de contact',
      'Intégration réseaux sociaux',
      'SEO de base',
      '👉 Idéal pour démarrer rapidement',
    ],
    featured: false,
  },
  {
    name: '💼 Site Vitrine Standard',
    id: 'offre-vitrine',
    price: '890€',
    description: 'Un site professionnel avec plusieurs pages pour structurer l’information.',
    features: [
      '3 à 5 pages (Accueil, Services, À propos, Contact…) ',
      'Design personnalisé',
      'Responsive',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Intégration Google Maps',
      'Mentions légales',
      '👉 Le plus demandé (le “best seller”)',
      'Bonus possible : Blog simple (option)',
    ],
    featured: true,
  },
  {
    name: '💼 Site Vitrine Premium',
    id: 'offre-premium',
    price: '1490€',
    description: 'Un site complet avec plus de contenu et un design plus poussé.',
    features: [
      '6 à 10 pages',
      'Design sur mesure (plus travaillé)',
      'Responsive optimisé',
      'SEO avancé (balises, performance)',
      'Animations / interactions',
      'Formulaire avancé (devis, réservation simple)',
      'Intégration avis clients',
      'Optimisation vitesse',
      '👉 Pour une image pro + fonctionnalités avancées',
      'Bonus : Tableau de gestion simple (si tu veux le proposer)',
      'Bonus : Statistiques basiques',
    ],
    featured: false,
  },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  const [ref, visible] = useRevealOnScroll<HTMLElement>();
  return (
    <section
      id="services"
      ref={ref}
      className={`relative isolate bg-[#0a2342] px-6 py-24 sm:py-32 lg:px-8 text-white font-sans ${visible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Services</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Des solutions adaptées à chaque projet
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
        Que vous souhaitiez une présence simple et efficace ou un site entièrement personnalisé, je vous accompagne de A à Z avec la même exigence de qualité et d’écoute.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:mt-20 lg:max-w-4xl lg:grid-cols-1 gap-x-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={classNames(
                service.featured ? 'relative bg-gradient-to-b from-[#3B006E] to-[#0a2342] border-2 border-blue-400 shadow-2xl scale-105 z-10' : 'bg-white/5 border border-white/10',
                'rounded-3xl p-10 sm:p-14 flex flex-col h-full min-h-[600px] transition duration-300 hover:scale-[1.03] hover:shadow-2xl',
              )}
              style={service.featured ? { minWidth: '400px', maxWidth: '520px' } : { minWidth: '370px', maxWidth: '480px' }}
            >
              <div className="flex flex-col items-center gap-2">
                <h3
                  id={service.id}
                  className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'text-xl font-semibold text-center')}
                >
                  {service.name}
                </h3>
                <span className={classNames(
                  service.featured ? 'bg-blue-500' : 'bg-blue-400',
                  'text-white text-2xl font-bold rounded-full px-6 py-2 mt-1 mb-2 shadow-md')}
                >
                  {service.price}
                </span>
                <p className={classNames(service.featured ? 'text-gray-200' : 'text-gray-300', 'text-base text-center')}>{service.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-base text-gray-200 text-left w-full max-w-md mx-auto flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <svg className={classNames(service.featured ? 'text-blue-400' : 'text-blue-300', 'h-6 w-6 flex-none')} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex flex-col justify-end">
                <div className="mt-10"></div>
                <a
                  href="#contact"
                  aria-describedby={service.id}
                  className={classNames(
                    service.featured
                      ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white/75',
                    'block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200',
                  )}
                  style={{ marginTop: 'auto' }}
                >
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>



        {/* Section Packs */}
        <section className="mx-auto mt-20 max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-blue-400 mb-8">Options Sérénité & Hébergement</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch bg-white/10 rounded-3xl p-6 md:p-10">
            {/* Pack Maintenance */}
            <div className="flex-1 text-center flex flex-col h-full bg-white/5 border border-blue-400 rounded-2xl p-8 shadow-lg min-h-[540px] md:min-h-[540px] justify-between">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Pack Maintenance & Sérénité</h3>
              <p className="text-base text-gray-200 mb-4">Gardez l’esprit tranquille après la mise en ligne : je m’occupe de tout !</p>
              <div className="text-2xl font-bold text-white mb-2">49 €/mois <span className="text-base font-normal text-gray-300">(sans engagement)</span></div>
              <ul className="text-left text-gray-200 space-y-2 text-sm mb-4 mx-auto max-w-xs">
                <li>• Mises à jour régulières du site et des plugins</li>
                <li>• Sauvegardes automatiques et restauration rapide</li>
                <li>• Surveillance de la sécurité et corrections préventives</li>
                <li>• Support technique prioritaire (email & téléphone)</li>
                <li>• Petites évolutions incluses (textes, images, horaires...)</li>
                <li>• Rapport mensuel d’intervention</li>
              </ul>
              <div className="text-xs text-gray-400 mb-2">3 mois offerts avec toute création de site SunDev</div>
              <a href="#contact" className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200">Souscrire au pack maintenance</a>
            </div>
            {/* Pack Hébergement */}
            <div className="flex-1 text-center flex flex-col h-full bg-white/5 border border-blue-400 rounded-2xl p-8 shadow-lg min-h-[540px] md:min-h-[540px] justify-between">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Pack Hébergement & Nom de domaine</h3>
              <p className="text-base text-gray-200 mb-4">Hébergement professionnel, sécurisé et accompagné : je gère tout pour vous, de la technique au support.</p>
              <div className="text-2xl font-bold text-white mb-2">14 €/mois <span className="text-base font-normal text-gray-300">ou 149 €/an</span></div>
              <ul className="text-left text-gray-200 space-y-2 text-sm mb-4 mx-auto max-w-xs">
                <li>• Hébergement sécurisé et performant (France/EU)</li>
                <li>• Nom de domaine inclus (.fr ou .com)</li>
                <li>• Certificat SSL (https) offert</li>
                <li>• Comptes emails professionnels (sur demande)</li>
                <li>• Gestion technique complète (renouvellement, configuration, migrations...)</li>
                <li>• Support réactif et accompagnement humain</li>
                <li>• Conseils personnalisés pour la gestion de votre présence en ligne</li>
              </ul>
              <div className="text-xs text-gray-400 mb-2">Offre réservée aux clients SunDev</div>
              <a href="#contact" className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-400 transition-colors duration-200">Souscrire au pack hébergement</a>
            </div>
          </div>
        </section>

      </section>
    );
  }