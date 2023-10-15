import Swal from "sweetalert2";

const SuccessMsg = ({message}) => {
  Swal.fire({
    icon:"success",
    title:"Oops...",
    text:message,
  });
};

export default SuccessMsg;
