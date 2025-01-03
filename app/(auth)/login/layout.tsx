'use client'
import LeftSideNav from '@/components/ui/left-navbar';
export default function Login({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex grow gap-1 py-8 md:py-0">
      <div className="mx-3 flex grow">
        {children}
      </div>
    </section>
  );
}
