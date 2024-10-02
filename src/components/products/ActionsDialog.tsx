import { cloneElement, ReactElement, ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

interface props {
  title: string;
  trigger: ReactElement;
  children: (handleClose: () => void) => ReactNode;
}

const ActionsDialog = ({ title, trigger, children }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {cloneElement(trigger, { onClick: () => setIsOpen(true) })}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {children(handleClose)}
      </DialogContent>
    </Dialog>
  );
};

export default ActionsDialog;
