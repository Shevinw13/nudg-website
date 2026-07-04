interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  background?: 'white' | 'navy' | 'mint' | 'gray';
}

const backgroundStyles: Record<NonNullable<SectionWrapperProps['background']>, string> = {
  white: 'bg-white',
  navy: 'bg-navy text-white',
  mint: 'bg-mint',
  gray: 'bg-gray',
};

export function SectionWrapper({
  id,
  children,
  className = '',
  sectionClassName = '',
  background = 'white',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${backgroundStyles[background]} py-14 lg:py-24 overflow-hidden ${sectionClassName}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
        {children}
      </div>
    </section>
  );
}
