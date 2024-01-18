// src/components/Footer/Footer.tsx

import styles from "@/components/Footer/Footer.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.component}>
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.item}>
            <p>&copy; Copyright</p>
            <div className="w-16 h-1 mt-3 mb-4 mx-auto bg-amber-500 rounded-full"></div>
            <p>
              <span className="font-semibold">BONDY BUILDER</span>
            </p>
          </div>
          <div className={styles.item}>
            <p>Suivez-nous sur les réseaux</p>
            <div className="w-16 h-1 mt-3 mb-4 bg-amber-500 rounded-full"></div>
            <div className="inline-flex gap-2">
              <Link
                href={`https://www.facebook.com/profile.php?id=61555889212804`}
                target="_blank"
                className="w-8 h-8 text-blue-600 hover:scale-105 active:scale-95"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <FontAwesomeIcon
                icon={faInstagram}
                // className="w-8 h-8 text-pink-600"
                className="w-8 h-8 text-zinc-500"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                // className="w-8 h-8 text-cyan-600"
                className="w-8 h-8 text-zinc-500"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                // className="w-8 h-8 text-zinc-50"
                className="w-8 h-8 text-zinc-500"
              />
            </div>
          </div>
          <div className={styles.item}>
            <p>Propulsé par</p>
            <div className="w-16 h-1 mt-3 mb-4 mx-auto bg-amber-500 rounded-full"></div>
            <p>
              <span className="font-semibold">PETITBOUTDECLOUD</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
