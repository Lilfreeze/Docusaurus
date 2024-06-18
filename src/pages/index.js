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
      <h1>
        <Translate>Bienvenue sur UnifiedConnect</Translate>
      </h1>
      <main>
        <Translate
          id="homepage.visitMyBlog"
          description="Le message de page d'accueil pour demander à l'utilisateur de visiter mon blog"
          values={{
            blogLink: (
              <Link to="https://docusaurus.io/blog">
                <Translate
                  id="homepage.visitMyBlog.linkLabel"
                  description="Le label pour le lien vers mon blog">
                  Blog
                </Translate>
              </Link>
            ),
          }}>
          {'Vous pouvez aussi visiter mon blog {blogLink}'}
        </Translate>

        <img
          src="/img/home.png"
          alt={
            translate({
              message: 'Icone d\'accueil',
              description: 'L\'icone de la page d\'accueil',
            })
          }
        />
      </main>
    </Layout>
  );
}