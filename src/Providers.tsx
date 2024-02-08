import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { QueryClient, QueryClientProvider } from "react-query";
import { MusicContextProvider } from "./contexts/MusicContext";

const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <MusicContextProvider>{children}</MusicContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
