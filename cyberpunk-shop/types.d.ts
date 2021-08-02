interface MenuItemProps {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
}

interface DirectoryProps {
  menus: MenuItemProps[];
}

interface CollectionItemsProps {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CollectionPreviewProps {
  id?: number;
  title: string;
  items: CollectionItemsProps[];
}

interface ShopDataItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ShopData {
  id: number;
  title: string;
  routeName: string;
  items: ShopDataItem[];
}

interface ShopPageStates {
  collections: ShopData[];
}

interface SignInStates {
  email: string;
  password: string;
}
