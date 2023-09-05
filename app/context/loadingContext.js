'use client';

// hooks
import { createContext, useState } from 'react';

export const LoadingContext = createContext({
  loading: true,
  setLoading: () => {},
});

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
