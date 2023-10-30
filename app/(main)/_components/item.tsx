"use client";

import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: "12px" }}
      className="group min-h-[27px] text-sm py-1 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};

export default Item;
