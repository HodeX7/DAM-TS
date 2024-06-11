import React from "react";
import { Drawer } from "antd";

interface SideModalProps {
  visible: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const SideModal: React.FC<SideModalProps> = ({ visible, onClose, content }) => (
  <Drawer
    title="Custom Modal"
    placement="right"
    closable={true}
    onClose={onClose}
    visible={visible}
  >
    {content}
  </Drawer>
);

export default SideModal;
