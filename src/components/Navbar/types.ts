export interface NavLinkProps {
    text: string;
    width: string;
    isActive: boolean;
    onClick: (text: string) => void;
  }
  
  export interface NavigationState {
    activeLink: string;
  }