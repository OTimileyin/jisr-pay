import { Link } from 'wouter';
import { Globe, Wallet, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useI18nContext } from '@/contexts/I18nContext';

interface NavBarProps {
  variant: 'landing' | 'dashboard';
  walletKey?: string | null;
  onConnectWallet?: () => void;
}

export function NavBar({ variant, walletKey, onConnectWallet }: NavBarProps) {
  const { t, lang, toggleLang } = useI18nContext();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between z-50 bg-background/80 backdrop-blur-md sticky top-0 border-b border-border/50">
      <Link href="/" className="cursor-pointer">
        <Logo />
      </Link>

      {variant === 'landing' && (
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('navHome')}
          </Link>
          <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t('navHowItWorks')}
          </a>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-secondary px-3 py-1.5 rounded-full"
        >
          <Globe className="w-4 h-4" />
          {lang === 'en' ? 'عربي' : 'EN'}
        </button>

        {variant === 'landing' ? (
          <Link
            href="/app"
            className="flex items-center gap-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full transition-all"
          >
            {t('launchApp')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <button
            onClick={onConnectWallet}
            className="flex items-center gap-2 text-sm font-semibold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 rounded-full transition-all"
          >
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">
              {walletKey ? `${walletKey.slice(0, 4)}...${walletKey.slice(-4)}` : t('connectWallet')}
            </span>
          </button>
        )}
      </div>
    </nav>
  );
}
