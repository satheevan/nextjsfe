'use client'
import { Navbar } from '@/components/ui/navbar';
export default function DashBoard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col grow gap-1 md:py-0">
      <Navbar/>
      <div className="mx-8 flex grow">
        {children}
      </div>
    </section>
  );
}
