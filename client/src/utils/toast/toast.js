import M from "materialize-css";
import "./toast.css";

const ToastColor = Object.freeze({ GREEN: "toast-green", RED: "toast-red" });

const displayToast = (message, color) => {
  M.Toast.dismissAll();
  M.toast({
    html: message,
    classes: color,
  });
};

export { ToastColor, displayToast };
