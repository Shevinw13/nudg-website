import { ReactNode } from "react";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export function StepCard({ stepNumber, title, description, icon }: StepCardProps) {
  return (
    <div className="text-center p-4">
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold text-lg mb-3">
          {stepNumber}
        </div>
      </div>
      <div className="flex justify-center text-navy mb-3">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-navy mb-1">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
