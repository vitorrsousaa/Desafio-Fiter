import ReactModal from "react-modal";
import { useState } from "react";
import MenuModal from "../MenuModal";
import { HiMenu } from "react-icons/hi";

import LogoDark from "../../assets/LogoDark";
import LogoLight from "../../assets/LogoLight";
import { ContainerHeader } from "./styles";

import { HeaderProps } from "../../types/types";

ReactModal.setAppElement("#root");

function Header({ setTheme, isDarkTheme }: HeaderProps) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  function handleToggleTheme() {
    setTheme(!isDarkTheme);
  }

  function handleOpenMenuModal() {
    setIsMenuModalOpen(true);
  }

  function handleCloseMenuModal() {
    setIsMenuModalOpen(false);
  }

  return (
    <ContainerHeader>
      <div>{isDarkTheme ? <LogoDark /> : <LogoLight />}</div>

      <div onClick={handleOpenMenuModal}>
        <HiMenu />
        <h1>Menu</h1>
      </div>

      <MenuModal
        isOpen={isMenuModalOpen}
        onRequestClose={handleCloseMenuModal}
        handleToggleTheme={handleToggleTheme}
      />
    </ContainerHeader>
  );
}

export default Header;
