export interface SearchModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface MenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleToggleTheme: () => void;
}

export interface HeaderProps {
  setTheme: (theme: boolean) => void;
  isDarkTheme: boolean;
}

export interface UserProps {
  nome: string;
  cargo: string;
  telefone: string;
  foto: string;
}
