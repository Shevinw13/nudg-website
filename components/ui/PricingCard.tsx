import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  tier: string;
  price: string;
  smsQuota: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
  features?: string[];
}

export function PricingCard({
  tier,
  price,
  smsQuota,
  description,
  highlighted = false,
  badge,
  features,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-sm relative hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${
        highlighted
          ? "border-2 border-teal md:scale-105 shadow-lg"
          : "border border-lightGray"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-navy mb-2">{tier}</h3>
      <p className="text-4xl font-bold text-navy mb-1">{price}</p>
      <p className="text-base text-gray-500 mb-2">{smsQuota}</p>
      <p className="text-base text-gray-600 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0CBFA6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <Button variant={highlighted ? "primary" : "outline"} href="#" className="w-full">
        Coming Soon
      </Button>
    </div>
  );
}
