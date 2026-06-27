interface SmsBubbleProps {
  message: string;
  direction: "sent" | "received";
  timestamp?: string;
  ratingBadge?: { value: number; sentiment: "positive" | "negative" };
}

export function SmsBubble({
  message,
  direction,
  timestamp,
  ratingBadge,
}: SmsBubbleProps) {
  const isSent = direction === "sent";

  const containerStyles = `flex ${isSent ? "justify-end" : "justify-start"} mb-3`;

  const bubbleStyles = `max-w-[80%] px-4 py-3 text-base ${
    isSent
      ? "bg-navy text-white rounded-2xl rounded-br-sm"
      : "bg-lightGray text-navy rounded-2xl rounded-bl-sm"
  }`;

  const timestampStyles = `text-xs text-gray-400 mt-1 ${isSent ? "text-right" : "text-left"}`;

  return (
    <div className={containerStyles}>
      <div>
        <div className="flex items-end gap-2">
          {!isSent && ratingBadge && (
            <RatingBadge
              value={ratingBadge.value}
              sentiment={ratingBadge.sentiment}
            />
          )}
          <div className={bubbleStyles}>
            <p>{message}</p>
          </div>
          {isSent && ratingBadge && (
            <RatingBadge
              value={ratingBadge.value}
              sentiment={ratingBadge.sentiment}
            />
          )}
        </div>
        {timestamp && <p className={timestampStyles}>{timestamp}</p>}
      </div>
    </div>
  );
}

function RatingBadge({
  value,
  sentiment,
}: {
  value: number;
  sentiment: "positive" | "negative";
}) {
  const colorStyles =
    sentiment === "positive"
      ? "bg-teal text-white"
      : "bg-amber-500 text-white";

  return (
    <span
      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${colorStyles}`}
      aria-label={`Rating: ${value} out of 5, ${sentiment}`}
    >
      {value}
    </span>
  );
}
