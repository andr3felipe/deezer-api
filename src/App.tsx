import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { QueryClient, QueryClientProvider } from "react-query";
import { MusicContextProvider } from "./contexts/MusicContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <MusicContextProvider>
            <RouterProvider router={router} />
          </MusicContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
