import axios from "axios";
import { toast } from "../lib/hooks/use-toast";

async function Login(email: string, password: string) {
  const apiKey = "AIzaSyC90iTlSGZX82lWufq9yVnSOWDRnpGuYus";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      email,
      password,
      returnSecureToken: true,
    });

    return response.data;
  } catch (error) {
    toast({
      title: "Что-то пошло не так!",
      description: "Email или пароль были введены неправильно",
      variant: "destructive",
    });
  }
}

export default Login;
