import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import styled from "styled-components";
type Props = {
  open: boolean;
  handleClose: () => void;
};

const SubmitModal: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalCard>Modal</ModalCard>
    </Modal>
  );
};

const ModalCard = styled(Card)`
  height: 50%;
  width: 50%;
  margin: auto;
  margin-top: 15%;
`;

export default SubmitModal;
