import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useI18nContext } from '@/contexts/I18nContext';
import { HeroScene } from '@/components/HeroScene';
import { HowItWorks } from '@/components/HowItWorks';
import { NavBar } from '@/components/NavBar';
import { CONTRACT_ID } from '@/lib/corridors';

export default function Landing() {
  const { t, isRTL } = useI18nContext();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <NavBar variant="landing" />

      <main className="flex-1 flex flex-col w-full relative">
        {/* Hero Section */}
        <section className="w-full relative">
          <HeroScene />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none pb-24">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-foreground mb-6 drop-shadow-2xl">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed drop-shadow-md mb-8">
              {t('heroSubtitle')}
            </p>
            <Link
              href="/app"
              className="pointer-events-auto inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all shadow-[0_0_25px_rgba(124,58,237,0.4)]"
            >
              {t('heroCTA')}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full relative z-20 border-t border-border/50">
          <HowItWorks />
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 pb-24 relative z-20">
          <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-[#0d0d13] p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{t('ctaTitle')}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t('ctaBody')}</p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all"
            >
              {t('launchApp')}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8 px-6 bg-[#08080c] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          {t('poweredByStellar')}
        </div>
        <div className="text-muted-foreground text-xs font-mono">
          {t('contractAddress')}: {CONTRACT_ID}
        </div>
        <div className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Jisr Pay.
        </div>
      </footer>
    </div>
  );
}
