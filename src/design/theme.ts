export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
    xDark: string;
    dark: string;
    light: string;
    xLight: string;
  };
  borders: {
    radius: string;
    style: string;
  };
  padding: {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
}

export type ColorType = keyof Theme["colors"];

const colors = {
  primary: "#f4e439",
  secondary: "#4A5D68",
  tertiary: "#87BBA2",
  error: "#C14443",
  xDark: "#1a1a1a",
  dark: "#232B31",
  light: "#D3ECDF",
  xLight: "#FAFEF8",
};

const borders = {
  radius: "4px",
  style: `1px solid`,
};

const padding = {
  xSmall: "4px",
  small: "8px",
  medium: "16px",
  large: "24px",
  xLarge: "36px",
};

const theme: Theme = {
  colors,
  borders,
  padding,
};

export default theme;
