import React from "react";
import styles from './FootNav.module.css'


interface FootNavProps {
  navPath: string;
  linkText: string;
  linkSymb?: string;
  linkIconImg: React.ReactNode;
}

const FootNav: React.FC<FootNavProps> = ({ navPath, linkText, linkSymb='→', linkIconImg: ico }) => {
  return (
    <div className="flex items-center gap-2">
      { ico }
        <a
        href={navPath}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} pr-5`}
        data-replace={`${linkText} ${linkSymb}`}
        >
          <span>{ linkText }</span>
        </a>
    </div>
  );
};

export default FootNav;
