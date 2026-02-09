import { partnersData } from "@/utils/data";

import styles from "./styles.module.css";
import PartnerLogo from "./partnersLogo";

const PartnersSection: React.FC = () => {
  const duplicatedLogos = [...partnersData, ...partnersData];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <div className={styles.logoSlider}>
            {duplicatedLogos.map((partner, index) => (
              <PartnerLogo
                key={`${partner.id}-${index}`}
                name={partner.name}
                logo={partner.logo}
                url={partner.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
