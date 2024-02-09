import { authStore } from "store/auth.store";

const useSiteBtnProps = () => {
  const onClick = () => {
    // authStore.logout();
    localStorage.clear("auth");
  };
  return{ onClick }
};

export default useSiteBtnProps
