export interface ServiceItemProps {
    text: string;
  }
  
  export interface FeatureProps {
    number: string;
    title: string;
    description: string;
    features: string[];
    hasQuote?: boolean;
    quoteText?: string;
    imageSrc?: string;
    imageAlt?: string;
  }
  
  export interface ServiceListProps {
    items: string[];
  }