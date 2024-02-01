import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router} />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
