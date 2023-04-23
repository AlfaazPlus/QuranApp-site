import mainStyle from "res/css/main.module.css";
import { ReactComponent as CloseIcon } from "res/images/icons/close.svg";
import ReactDOMServer from "react-dom/server";

let lastSnackbar = null;
let isSnackbarTransitionInProcess = false;

class SnackBar {
  constructor(message, timeout) {
    this.message = message;
    this.snackBarElem = this.create();
    this.timeout = this.prepareTimeout(timeout);
  }

  create() {
    const snackElem = document.createElement("div");
    snackElem.classList = mainStyle.snackBar;

    const msgElem = document.createElement("p");
    msgElem.classList = mainStyle.snackBarText;
    msgElem.innerHTML = this.message;
    snackElem.appendChild(msgElem);

    const closeElem = document.createElement("div");
    closeElem.classList = mainStyle.closeSnackBar;
    closeElem.addEventListener("click", () => this.dismiss(snackElem));
    closeElem.innerHTML = ReactDOMServer.renderToString(<CloseIcon />);
    snackElem.appendChild(closeElem);

    return snackElem;
  }

  show() {
    if (isSnackbarTransitionInProcess) {
      return;
    }

    isSnackbarTransitionInProcess = true;

    if (lastSnackbar != null) {
      lastSnackbar.dismiss(lastSnackbar.snackBarElem);
      setTimeout(() => this.showInternal(), 400);
    } else {
      this.showInternal();
    }
  }

  showInternal() {
    isSnackbarTransitionInProcess = false;
    lastSnackbar = this;
    document.body.appendChild(this.snackBarElem);
    this.setDismissTimeout();
  }

  setDismissTimeout() {
    if (this.timeout <= 0) {
      return;
    }

    setTimeout(() => {
      this.dismiss(this.snackBarElem);
    }, this.timeout + 1000);
  }

  dismiss(snackBar) {
    if (snackBar) {
      snackBar.classList.add(mainStyle.concealing);
      setTimeout(() => {
        snackBar.remove();
      }, 500);
    }
  }

  prepareTimeout(timeout) {
    if (!timeout || timeout === SnackBar.SHORT) {
      return 1000;
    }

    if (timeout === SnackBar.LONG) {
      return 5000;
    }

    if (timeout === SnackBar.INFINITE) {
      return 0;
    }

    return timeout;
  }

  static get INFINITE() {
    return -1;
  }
  static get SHORT() {
    return 0;
  }
  static get LONG() {
    return 1;
  }
}

export default SnackBar;
