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
    <footer id="footer" className={styles.component}>
      <div className={styles.box}>
        <div className={styles.body}>
          <div className={styles.item}>
            <p>&copy; Copyright</p>
            <div className="w-16 h-1 mt-3 mb-4 mx-auto bg-amber-500 rounded-full"></div>
            <p>
              <span className="font-semibold">Bondy Builder</span>
            </p>
          </div>
          <div className={styles.item}>
            <p>Suivez-nous sur les réseaux</p>
            <div className="w-16 h-1 mt-3 mb-4 bg-amber-500 rounded-full"></div>
            <div className="inline-flex gap-2">
              <Link
                href={`https://www.facebook.com/profile.php?id=61555889212804`}
                target="_blank"
                className="w-8 h-8 text-blue-600 hover:scale-125 active:scale-90 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>

              <Link
                href={`https://www.instagram.com/bondybuilder93/`}
                target="_blank"
                className="w-8 h-8 text-pink-600 hover:scale-125 active:scale-90 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>

              <Link
                href={`https://www.linkedin.com/in/bondy-builder-ab25322ab/`}
                target="_blank"
                className="w-8 h-8 text-cyan-600 hover:scale-125 active:scale-90 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>

              <Link
                href={`https://twitter.com/BondyBuilder`}
                target="_blank"
                className="w-8 h-8 text-zinc-50 hover:scale-125 active:scale-90 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </div>
          </div>
          <div className={styles.item}>
            <p>Propulsé par</p>
            <div className="w-16 h-1 mt-3 mb-4 mx-auto bg-amber-500 rounded-full"></div>
            <Link
              href={`https://www.petitboutde.cloud`}
              target="_blank"
              className="hover:text-zinc-300 hover:scale-125 active:scale-95 transition-all duration-300"
            >
              <span className="font-semibold">PetitBoutDeCloud</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
