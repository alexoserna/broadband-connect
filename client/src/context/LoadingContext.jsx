import React, { createContext, useContext, useState } from "react";

// Create the context
const LoadingContext = createContext();

// Create a provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Global loading state

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom hook for accessing the context
export const useLoading = () => useContext(LoadingContext);
