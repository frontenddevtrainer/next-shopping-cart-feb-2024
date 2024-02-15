import { useEffect, useState } from "react";

const usePopupState = (state:any) => {

  const [show, setShow] = useState(state);
  let timeout: any = null;
  
  useEffect(() => {
    if (show) {
      timeout = setTimeout(() => {
        setShow(false);
        console.log("timeout");
      }, 10 * 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [show]);

  return [show, setShow];
};
export default usePopupState;

// const usePopupState = (state = false)=>{
//     return useState(state);
// }
