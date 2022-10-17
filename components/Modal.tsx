import React, { FC, ReactNode } from "react";

import styles from "../styles/Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  setOpen: () => void;
  children: ReactNode | JSX.Element[] | JSX.Element;
}

const Modal: FC<ModalProps> = ({ isOpen, setOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={setOpen}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0916 6.90834C13.0141 6.83023 12.922 6.76824 12.8204 6.72593C12.7189 6.68362 12.61 6.66184 12.4999 6.66184C12.3899 6.66184 12.281 6.68362 12.1795 6.72593C12.0779 6.76824 11.9857 6.83023 11.9083 6.90834L9.99994 8.825L8.09161 6.90834C7.93469 6.75142 7.72186 6.66326 7.49994 6.66326C7.27803 6.66326 7.0652 6.75142 6.90828 6.90834C6.75136 7.06526 6.6632 7.27809 6.6632 7.5C6.6632 7.72192 6.75136 7.93475 6.90828 8.09167L8.82494 10L6.90828 11.9083C6.83017 11.9858 6.76818 12.078 6.72587 12.1795C6.68356 12.2811 6.66178 12.39 6.66178 12.5C6.66178 12.61 6.68356 12.7189 6.72587 12.8205C6.76818 12.922 6.83017 13.0142 6.90828 13.0917C6.98575 13.1698 7.07791 13.2318 7.17946 13.2741C7.28101 13.3164 7.38993 13.3382 7.49994 13.3382C7.60995 13.3382 7.71888 13.3164 7.82042 13.2741C7.92197 13.2318 8.01414 13.1698 8.09161 13.0917L9.99994 11.175L11.9083 13.0917C11.9857 13.1698 12.0779 13.2318 12.1795 13.2741C12.281 13.3164 12.3899 13.3382 12.4999 13.3382C12.61 13.3382 12.7189 13.3164 12.8204 13.2741C12.922 13.2318 13.0141 13.1698 13.0916 13.0917C13.1697 13.0142 13.2317 12.922 13.274 12.8205C13.3163 12.7189 13.3381 12.61 13.3381 12.5C13.3381 12.39 13.3163 12.2811 13.274 12.1795C13.2317 12.078 13.1697 11.9858 13.0916 11.9083L11.1749 10L13.0916 8.09167C13.1697 8.0142 13.2317 7.92203 13.274 7.82049C13.3163 7.71894 13.3381 7.61001 13.3381 7.5C13.3381 7.38999 13.3163 7.28107 13.274 7.17952C13.2317 7.07797 13.1697 6.98581 13.0916 6.90834V6.90834ZM15.8916 4.10834C15.1229 3.31242 14.2033 2.67757 13.1866 2.24083C12.1699 1.80409 11.0764 1.5742 9.96995 1.56458C8.86346 1.55497 7.76613 1.76582 6.74199 2.18482C5.71786 2.60383 4.78743 3.22261 4.00499 4.00505C3.22255 4.78749 2.60377 5.71792 2.18476 6.74205C1.76576 7.76619 1.55491 8.86352 1.56452 9.97001C1.57414 11.0765 1.80402 12.17 2.24077 13.1867C2.67751 14.2034 3.31236 15.1229 4.10828 15.8917C4.877 16.6876 5.79654 17.3224 6.81324 17.7592C7.82994 18.1959 8.92344 18.4258 10.0299 18.4354C11.1364 18.445 12.2338 18.2342 13.2579 17.8152C14.282 17.3962 15.2125 16.7774 15.9949 15.995C16.7773 15.2125 17.3961 14.2821 17.8151 13.258C18.2341 12.2338 18.445 11.1365 18.4354 10.03C18.4258 8.9235 18.1959 7.83 17.7591 6.8133C17.3224 5.7966 16.6875 4.87706 15.8916 4.10834V4.10834ZM14.7166 14.7167C13.6266 15.8078 12.1921 16.4874 10.6573 16.6394C9.12248 16.7915 7.58245 16.4067 6.29955 15.5506C5.01664 14.6946 4.07024 13.4202 3.62159 11.9446C3.17293 10.469 3.24978 8.88346 3.83904 7.45816C4.4283 6.03286 5.49351 4.85596 6.85319 4.12797C8.21287 3.39999 9.7829 3.16595 11.2958 3.46573C12.8087 3.76552 14.1708 4.58058 15.1501 5.77206C16.1295 6.96353 16.6654 8.4577 16.6666 10C16.6696 10.8761 16.4988 11.744 16.1641 12.5537C15.8293 13.3633 15.3374 14.0985 14.7166 14.7167V14.7167Z"
              fill="#BCBCBC"
            />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
