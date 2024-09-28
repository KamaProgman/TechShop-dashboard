import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../../components/ui/dialog";
import AddProductForm from "./AddProductForm";

const AddProductDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add New Product</DialogTitle>
        <AddProductForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
