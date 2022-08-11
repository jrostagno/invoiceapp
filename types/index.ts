//BUTTONS
export interface ButtonDangerProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export interface ButtonsPrimaryProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

// TEXT
export interface InfoLabels {
  children: React.ReactNode;
  className?: string;
}

export interface LabelsProps {
  className?: string;
  children: React.ReactNode;
}

export interface NumLabelsProps {
  children: React.ReactNode;
  className?: string;
  warningLimit?: boolean;
}

export interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export interface Title {
  className?: string;
  children: React.ReactNode;
}

// PANEL

export type Size = "sm" | "md" | "lg" | "full" | "xl";
export type SizeDialog = "xs" | "sm" | "md" | "lg" | "full";

export interface PanelCardsProps {
  className?: string;
  children: React.ReactNode;
  size: Size;
}
export interface PanelTableProps {
  children: React.ReactNode;
  size: Size;
}

export interface SubPanelInfoTypes {
  children: React.ReactNode;
}

//  CARDS

export interface CategoryCardProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isDisabled: boolean;
  category: number;
}

export interface InfoCardProps {
  invoiceLimit: string;
  currentMonth: string;
  lastMonth: string;
}

export interface YearlyInvoiceProps {
  amount: string;
  label: string;
}

// GRAPHICS

export interface InvoiceGraphicsProps {
  labels: string[];
  invoices: number[];
}

//IMAGES UPLOADS

export interface UploadImagesProps {
  className: string;
  avatar?: string;
}

// SESSION

export type Session = {
  expires: string;
  user: {
    _id: string;
    email: string | null;
    emailVerified: string | null;
    id: string;
    image: string;
    name: string;
  };
};

//Providers

export type Providers = {
  github: {
    id: string;
    callbackUrl: string;
    singinUrl: string;
    type: string;
    name: string;
  };
};

//INVOICES

export type Invoices = {
  amount: number;
  date: string;
  invoiceType: string;
  name: string;
  supplier: string;
  userId: string;
  _id?: string;
}[];

export type InvoiceProps = {
  amount: number;
  date: string;
  invoiceType: string;
  name: string;
  supplier: string;
  userId: string;
  _id?: string;
};
export type InvoiceElement = {
  amount: number;
  date: string;
  invoiceType: string;
  name: string;
  supplier: string;
  userId: string;
  _id: string;
};

//  CATEGORY

export type CategoyAmount = {
  amount: number;
  userId: string;
  _id: string;
};

export interface PostcategoryProps {
  amount: number;
  userId: string;
}

export interface CategoryProps {
  amount: number;
  userId: string;
}

// CALCULATIONS

export interface CalculationsProps {
  invoiceLimit: number;
  currentMonth: number;
  lastMonth: number;
}
