import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <div>
      Stats
    </div>
  );
}

export default StatsCard;
