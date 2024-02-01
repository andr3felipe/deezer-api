import "styled-components";
import { DefaultTheme } from "styled-components";

export type ThemeType = DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
