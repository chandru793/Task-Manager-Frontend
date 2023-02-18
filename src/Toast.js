import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//copied to clipboard
export function AddedSuccessfully() {
  toast.success("Task added Successfully", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}
