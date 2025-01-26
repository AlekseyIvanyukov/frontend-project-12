import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import RenameModal from './RenameModal';

const modals = {
  adding: AddModal,
  removing: DeleteModal,
  renaming: RenameModal,
};

const getModal = (actionModal) => modals[actionModal];

export default getModal;
