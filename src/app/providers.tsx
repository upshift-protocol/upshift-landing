import { ThemeProvider } from '@/stores/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>
          {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}