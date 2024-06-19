import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import React from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            UnifiedConnect - Wiki !
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <Heading as="h1" className="hero__title">
        <Translate>Bienvenue sur UnifiedConnect</Translate>
      </Heading>
      <main>
        <Translate
          id="homepage.visitMyBlog"
          description="Message de la page d'accueil pour souhaiter la bienvenue"
          values={{
          }}>
          {'Accès au Wiki et au Blog UnifiedConnect'}
        </Translate>
      </main>
    </Layout>
  );
}