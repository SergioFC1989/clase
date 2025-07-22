import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";

import { ResponseAnnualPlanProps } from "@/lib/types/type";

interface AppContextProps {
  educationPlans: ResponseAnnualPlanProps | null;
  setEducationPlans: React.Dispatch<React.SetStateAction<ResponseAnnualPlanProps | null>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [educationPlans, setEducationPlans] = useState<ResponseAnnualPlanProps | null>(null);

  const values = useMemo(() => ({ educationPlans, setEducationPlans }), [educationPlans]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
