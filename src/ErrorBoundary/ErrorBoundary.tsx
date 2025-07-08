import { Component, type ErrorInfo, type ReactNode } from "react";
import error from "../../public/error.png";
import styles from "./style.module.css";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Можно добавить логирование ошибки
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Что-то пошло не так..</h1>
          <img src={error} alt="error" className={styles.error} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
