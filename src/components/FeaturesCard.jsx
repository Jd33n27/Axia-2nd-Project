import React from "react";
import Card from "./Card";

const FeaturesCard = ({
  icon,
  title,
  description,
  iconBg = "bg-red-100",
  iconColor = "text-blue-600",
}) => {
  return (
    <Card className="md:w-70 md:h-50">
      <div
        className={`rounded-xl size-10 grid place-items-center ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <h2 className="mt-4 font-semibold md:text-xl">{title}</h2>
      <p className="mt-1 text-sm text-slate md:text-lg">{description}</p>
    </Card>
  );
};

export default FeaturesCard;
