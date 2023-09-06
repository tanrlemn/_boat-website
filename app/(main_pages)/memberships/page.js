'use client';

// styles
import styles from './memberships.module.css';
import textStyles from '@/app/styles/text.module.css';
import spacingStyles from '@/app/styles/spacing.module.css';

// context
import { LoadingContext } from '@/app/lib/context/loadingContext';

// hooks
import { useEffect, useState, useContext } from 'react';

// components
import PricingCard from '@/app/components/pricingCard';
import Loading from '@/app/loading';

export default function Pricing() {
  const { loading, setLoading } = useContext(LoadingContext);

  const [currentMemberships, setCurrentMemberships] = useState(null);
  const [benefitsText, setBenefitsText] = useState(null);

  useEffect(() => {
    const getMemberships = async () => {
      const res = await fetch('/api/supabase/memberships');

      const membershipsData = await res.json();

      setCurrentMemberships(membershipsData);
    };

    const getText = async () => {
      const res = await fetch('/api/supabase/benefits');
      const benefits = await res.json();
      setBenefitsText(benefits);
    };

    if (benefitsText === null) {
      getText();
    }

    if (currentMemberships === null) {
      setLoading(true);
      getMemberships();
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [currentMemberships, setLoading, benefitsText]);

  const lightText = {
    color: '#d8eecd',
    opacity: '1',
  };

  return (
    <main className={styles.main}>
      {loading && <Loading />}
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={spacingStyles.bottomTopMarginMd}>
            <div className={styles.greenTag}>
              <div
                className={textStyles.labelTag}
                style={lightText}>
                YOURHEAD Memberships
              </div>
            </div>

            <h1 className={textStyles.headingLg}>Gimme the loot.</h1>
            <div className={spacingStyles.topMarginMd}>
              <p className={textStyles.paragraphSm}>
                Access behind-the-scenes content, unreleased files, free monthly
                prints and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardWrap}>
        {currentMemberships !== null &&
          benefitsText !== null &&
          currentMemberships.map((membership, i) => {
            return (
              <PricingCard
                key={i}
                membership={membership}
                index={i}
                benefitsText={benefitsText}
              />
            );
          })}
      </div>
    </main>
  );
}
