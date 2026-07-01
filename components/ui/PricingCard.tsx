import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  tier: string;
  price: string;
  smsQuota: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
}

export function PricingCard({
  tier,
  price,
  smsQuota,
  description,
  highlighted = false,
  badge,
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
      <p className="text-base text-gray-500 mb-4">{smsQuota}</p>
      <p className="text-base text-gray-600 mb-6">{description}</p>
      <Button variant={highlighted ? "primary" : "outline"} href="#" className="w-full">
        {highlighted ? "Start Free Trial" : "Get Started"}
      </Button>
    </div>
  );
}
