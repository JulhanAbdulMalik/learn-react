import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

// Custom Hook
export const useLogin = () => {
  const [username, setUsername] = useState("");

  // ComponentDidMount ini yang menyebabkan Tidak bisa masuk ke halaman '/products' dan lain-lain tanpa login
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
