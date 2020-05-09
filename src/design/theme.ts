export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
    dark: string;
    light: string;
    xLight: string;
  };
  borders: {
    radius: string;
    style: string;
  };
}

export type ColorType = keyof Theme["colors"];

const colors = {
  primary: "#f4e439",
  secondary: "#4A5D68",
  tertiary: "#87BBA2",
  error: "#C14443",
  dark: "#1a1a1a",
  light: "#D3ECDF",
  xLight: "#FAFEF8",
};

const borders = {
  radius: "4px",
  style: `1px solid`,
};

const theme: Theme = {
  colors,
  borders,
};

export default theme;
