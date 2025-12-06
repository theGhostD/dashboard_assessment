export interface customInputProps {
  isSubmitting?: boolean;
  isError?: boolean;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  type: "text" | "email";
  fieldName: string;
  label: string;
  isOtp?: boolean;
  placeholder?: string;
}

export interface btnProps {
  variant?:
    | "outlined"
    | "danger"
    | "filled"
    | "dangerOutlined"
    | "grayFilled"
    | "outline-black";
  icon?: any;
  handleSubmit: any;
  text: string;
  disable?: boolean;
  btnType?: string;
  loading?: boolean;
}

export interface SidebarTilesProps {
  name: string;
  path: string | null;
  icon: string;
  isActive: boolean;
}

export interface MetricsSectionProps {
  firstCardCopy: string;
  firstCardValue: string;
  secondCardCopy: string;
  secondCardValue: string;
  thirdCardCopy: string;
  thirdCardValue: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  status?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


export interface ProductContextType {
  products: Product[];
  isLoading: boolean;
}
