import M from "materialize-css";
import "./toast.css"

const displayToast = (message, color) => {
    M.Toast.dismissAll();
    M.toast({
        html: message,
        classes:
          color === "green"
            ? "toast-green"
            : "toast-red",
      });
};

export default displayToast;