import { ReactNode } from "react";
import styles from "@/app/style.module.css"


type Props = {children: ReactNode, modal: ReactNode}

export default function BeforeLogin({
    children,
    modal
  }: Props) {
    return (
      
        <div className={styles.main}>
        
    
            {children}
            {modal}
        
        </div>
      
    );
  }
  