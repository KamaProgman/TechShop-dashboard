import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Button } from "../../components/ui/button";
import LoginForm from "./LoginForm";

const LoginModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Login</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[380px]">
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
