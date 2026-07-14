// app/page.tsx - Landing Page en français
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* ========== NAVBAR ========== */}
      <nav className="bg-[#0F172A] shadow-lg fixed w-full z-10 border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo LEX-AI"
              width={40}
              height={40}
              className="rounded border-2 border-[#D4AF37]/30"
            />
            <span className="text-2xl font-serif font-bold italic text-[#D4AF37]">LEX-AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#" className="hover:text-[#D4AF37] transition">Accueil</a>
            <a href="#" className="hover:text-[#D4AF37] transition">À propos</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Pages</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Contact</a>
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-5 py-2 text-white border border-white/30 rounded hover:bg-white/10 transition"
            >
              Se connecter
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 bg-[#D4AF37] text-[#0F172A] rounded hover:bg-[#E6C86E] transition font-medium"
            >
              Réserver une consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* ========== SECTION HERO ========== */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Ligne dorée */}
            <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold italic text-white leading-tight mb-4">
              Une Compréhension
              <br />
              <span className="text-[#D4AF37]">Plus Profonde</span>
              <br />
              Des Solutions
              <br />
              <span className="text-[#D4AF37]">Plus Efficaces</span>
            </h1>
            <p className="text-[#B0B0B0] text-lg mb-8 max-w-lg">
              Une expertise juridique et financière propulsée par l'intelligence artificielle
              pour vous accompagner dans vos projets les plus complexes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="px-8 py-3 bg-[#D4AF37] text-[#0F172A] rounded hover:bg-[#E6C86E] transition font-medium"
              >
                Nous contacter
              </Link>
              <span className="px-4 py-3 text-[#B0B0B0] flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full inline-block"></span>
                Droit, Finance, IA
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 border-2 border-[#D4AF37]/20 rounded-full"></div>
              <div className="absolute inset-8 border-2 border-[#D4AF37]/10 rounded-full"></div>
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo LEX-AI"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-[#D4AF37]/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOS DOMAINES D'EXPERTISE ========== */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-white mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-[#B0B0B0] max-w-md mx-auto">
              Découvrez nos principaux domaines d'intervention juridique et financière.
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Droit de la famille */}
            <div className="bg-[#1E1E1E] p-8 rounded-lg hover:shadow-xl transition border-b-4 border-[#D4AF37] text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👨‍⚖️</span>
              </div>
              <h3 className="text-xl font-serif font-bold italic text-white mb-2">Droit de la Famille</h3>
              <p className="text-[#B0B0B0] text-sm">
                Nous accompagnons les familles dans leurs démarches juridiques avec une approche humaine et personnalisée.
              </p>
            </div>

            {/* Droit des affaires */}
            <div className="bg-[#1E1E1E] p-8 rounded-lg hover:shadow-xl transition border-b-4 border-[#D4AF37] text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-xl font-serif font-bold italic text-white mb-2">Droit des Affaires</h3>
              <p className="text-[#B0B0B0] text-sm">
                Conseil juridique et financier pour les entreprises, de la création à la transmission.
              </p>
            </div>

            {/* Gestion de patrimoine */}
            <div className="bg-[#1E1E1E] p-8 rounded-lg hover:shadow-xl transition border-b-4 border-[#D4AF37] text-center">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏛️</span>
              </div>
              <h3 className="text-xl font-serif font-bold italic text-white mb-2">Gestion de Patrimoine</h3>
              <p className="text-[#B0B0B0] text-sm">
                Optimisation fiscale, succession et transmission de patrimoine avec une expertise reconnue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== APPEL À L'ACTION ========== */}
      <section className="py-20 px-6 bg-[#0F172A] border-t border-[#D4AF37]/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-white mb-6">
              Le Choix Judicieux
              <br />
              <span className="text-[#D4AF37]">pour vos Dossiers Complexes</span>
            </h2>
            <p className="text-[#B0B0B0] text-lg mb-8">
              Faites confiance à notre équipe d'experts juridiques et financiers pour vous accompagner
              dans la résolution de vos dossiers les plus sensibles.
            </p>
            <Link
              href="/register"
              className="px-8 py-3 bg-[#D4AF37] text-[#0F172A] rounded hover:bg-[#E6C86E] transition font-medium inline-block"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PIED DE PAGE ========== */}
      <footer className="bg-[#0F172A] border-t border-[#D4AF37]/10 text-[#B0B0B0] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Logo LEX-AI"
                  width={32}
                  height={32}
                  className="rounded border border-[#D4AF37]/30"
                />
                <span className="text-xl font-serif font-bold italic text-[#D4AF37]">LEX-AI</span>
              </div>
              <p className="text-sm">Assistance juridique et financière professionnelle propulsée par l'IA.</p>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#D4AF37] transition">Accueil</a>
                <a href="#" className="block hover:text-[#D4AF37] transition">À propos</a>
                <a href="#" className="block hover:text-[#D4AF37] transition">Services</a>
                <a href="#" className="block hover:text-[#D4AF37] transition">Contact</a>
              </div>
            </div>

            {/* Domaines d'expertise */}
            <div>
              <h4 className="text-white font-semibold mb-4">Domaines d'expertise</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#D4AF37] transition">Droit de la famille</a>
                <a href="#" className="block hover:text-[#D4AF37] transition">Droit des affaires</a>
                <a href="#" className="block hover:text-[#D4AF37] transition">Gestion de patrimoine</a>
              </div>
            </div>

            {/* Contact - Sans emoji et sans .fr */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">📞 +212 700000000</p>
              <p className="text-sm">✉️ contact@lex-ai.com</p>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/10 pt-8 text-center text-sm">
            <p>© 2026 LEX-AI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}