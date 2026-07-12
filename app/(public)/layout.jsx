import PublicHeader from '@/components/layout/PublicHeader';
import PublicFooter from '@/components/layout/PublicFooter';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#07130e] text-white font-sans selection:bg-emerald-500/30 flex flex-col">
      <PublicHeader />
      <div className="flex-grow flex flex-col">
        {children}
      </div>
      <PublicFooter />
    </div>
  );
}
