import Modal from "react-modal";
import { useState } from "react";
import SearchModal from "../SearchModal";

import { AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSearch } from "react-icons/bs";

import { MenuModalProps } from "../../types/types";

function MenuModal({
  isOpen,
  onRequestClose,
  handleToggleTheme,
}: MenuModalProps) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  function handleOpenSearchModal() {
    setIsSearchModalOpen(true);
  }

  function handleCloseSearchModal() {
    setIsSearchModalOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlayMenu"
      className="menuModal"
    >
      <div className="closeModal">
        <AiOutlineClose onClick={onRequestClose} />
      </div>

      <section>
        <div onClick={handleToggleTheme}>
          <BsMoon />
          <h1>Alterar tema</h1>
        </div>

        <div onClick={handleOpenSearchModal}>
          <BsSearch />
          <h1>Pesquisar colaborador</h1>
        </div>
      </section>

      <SearchModal
        isOpen={isSearchModalOpen}
        onRequestClose={handleCloseSearchModal}
      />
    </Modal>
  );
}

export default MenuModal;
