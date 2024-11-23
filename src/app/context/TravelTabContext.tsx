import React, { createContext, useContext, useState } from "react";

type TravelTabContextType = {
  tab: string;
  handleChangeTab: (tab: string) => void;
};

const TravelTabContext = createContext<TravelTabContextType | null>(null);

export const TravelTabProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [travelTab, setTravelTab] = useState<string>("پرواز داخلی");

  const handleChangeTab = (tab: string) => {
    setTravelTab(tab);
  };

  return (
    <TravelTabContext.Provider value={{ tab: travelTab, handleChangeTab }}>
      {children}
    </TravelTabContext.Provider>
  );
};

export const useTravelTab = () => {
  const context = useContext(TravelTabContext);

  if (!context)
    throw new Error("useTravelTab must be used within a TravelTabProvider");

  return context;
};
