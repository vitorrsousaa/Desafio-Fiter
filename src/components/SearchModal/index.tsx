import Modal from "react-modal";

import { AiOutlineClose } from "react-icons/ai";

import { SearchModalProps } from "../../types/types";
import { useUsers } from "../../context/UsersContext";

function SearchModal({ isOpen, onRequestClose }: SearchModalProps) {
  const { searchName, setSearchName, setSearch } = useUsers();

  function handleSearchUser() {
    onRequestClose();
    setSearch(true);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlaySearch"
      className="searchModal"
    >
      <div className="closeModal">
        <AiOutlineClose onClick={onRequestClose} />
      </div>

      <div>
        <input
          type="text"
          placeholder="Digite o nome do colaborador"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button onClick={handleSearchUser}>Pesquisar</button>
      </div>
    </Modal>
  );
}

export default SearchModal;
