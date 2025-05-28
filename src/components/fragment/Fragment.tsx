import Image, { StaticImageData } from 'next/image';
import styles from './Fragment.module.css';

interface FragmentProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
}

export const Fragment: React.FC<FragmentProps> = ({ imageSrc, title, text }) => {
  return (
    <div className={styles.article}>
      <Image src={imageSrc} alt={title} width={600} height={400} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};