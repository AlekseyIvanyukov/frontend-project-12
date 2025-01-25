import AddChannelButton from './AddChannelButton';

const Title = ({
  renderModal, closeModal, openModal, modalType, t,
}) => (
  <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
    <b>{t('chatPage.title')}</b>
    <AddChannelButton t={t} openModal={openModal} />
    {renderModal(modalType, closeModal)}
  </div>
);

export default Title;