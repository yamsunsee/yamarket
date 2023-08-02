import { FC, ReactNode } from "react";

const Icon: FC<{ name: string; children?: ReactNode }> = ({ name, children }) => {
  return (
    <div className="flex items-center gap-2">
      <ion-icon name={name} />
      {children}
    </div>
  );
};

export default Icon;
