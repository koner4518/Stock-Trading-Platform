import useLocalStorage from "./useLocalStorage";

export default function useAuth() {

  const [token, setToken] = useLocalStorage("token", null);

  const login = (jwtToken) => {
    setToken(jwtToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = !!token;

  return {
    token,
    login,
    logout,
    isAuthenticated
  };
}