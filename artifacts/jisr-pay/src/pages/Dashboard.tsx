import { useState } from 'react';
import { useI18nContext } from '@/contexts/I18nContext';
import { AgentPipeline } from '@/components/AgentPipeline';
import { NavBar } from '@/components/NavBar';
import { connectFreighter } from '@/lib/stellar';
import { CONTRACT_ID } from '@/lib/corridors';

export default function Dashboard() {
  const { t } = useI18nContext();
  const [walletKey, setWalletKey] = useState<string | null>(null);

  const handleConnect = async () => {
    // Call connect directly — this is what makes the Freighter popup appear.
    const key = await connectFreighter();
    if (key) setWalletKey(key);
    else alert(t('installFreighter'));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <NavBar variant="dashboard" walletKey={walletKey} onConnectWallet={handleConnect} />

      <main className="flex-1 flex flex-col w-full relative">
        <section className="w-full px-4 pt-14 pb-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3">
            {t('heroTitle')}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </section>

        <section className="w-full px-4 pb-24 relative z-20">
          <AgentPipeline />
        </section>
      </main>

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
