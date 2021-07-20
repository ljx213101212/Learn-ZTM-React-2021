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
