interface ColorsTypes {
  primary: string;
  warning: string;
  dark: {
    text: string;
    title: string;
    background: string;
    navBackground: string;
    iconColor: string;
    iconColorFocused: string;
    uiBackground: string;
  };
  light: {
    text: string;
    title: string;
    background: string;
    navBackground: string;
    iconColor: string;
    iconColorFocused: string;
    uiBackground: string;
  };
}

export const Colors: ColorsTypes = {
  primary: "#3399CC", 
  warning: "#ef4444", 

  dark: {
    text: "#cbd5e1",
    title: "#f8fafc",
    background: "#0f172a", 
    navBackground: "#1e293b", 
    iconColor: "#94a3b8", 
    iconColorFocused: "#a1a1aa", 
    uiBackground: "#1e293b", 
  },

  light: {
    text: "#475569", 
    title: "#0f172a", 
    background: "#f1f5f9", 
    navBackground: "#ffffff", 
    iconColor: "#94a3b8", 
    iconColorFocused: "#6366f1", 
    uiBackground: "#ffffff", 
  },
};