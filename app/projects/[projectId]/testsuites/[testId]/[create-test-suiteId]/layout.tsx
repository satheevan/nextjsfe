'use client';
export default function testId({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex grow gap-1 py-8 md:py-0">
        <div className="flex grow">
          {children}
        </div>
      </section>
    );
  }
  