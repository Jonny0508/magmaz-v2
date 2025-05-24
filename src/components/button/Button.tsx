import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, style, href, onClick }) => {
  if (href) {
    return (
      <Link href={href} className={styles.button} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;