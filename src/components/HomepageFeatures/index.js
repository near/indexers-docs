import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

import LakeImg from '@site/static/img/lake.png';
import FlowImg from '@site/static/img/flow.png';
import TutorialsImg from '@site/static/img/tutorials.png';

const FeatureList = [
  {
    title: 'NEAR Lake Framework',
    img: LakeImg,
    description: (
      <>
        We have created the most lightweight and cost efficient library to build your own indexer.
        Find out more about <Link to="https://docs.near.org/concepts/advanced/near-lake-framework">NEAR Lake Framework</Link>
      </>
    ),
  },
  {
    title: 'Learn NEAR Protocol Data Flow',
    img: FlowImg,
    description: (
      <>
        A lot of things happen in NEAR Protocol under the hood. In order to build your indexer you need to
        understand how data flows and what rules it follows. Start from <Link to="https://docs.near.org/concepts/data-flow/near-data-flow">NEAR Data Flow</Link> article
      </>
    ),
  },
  {
    title: 'Tutorials',
    img: TutorialsImg,
    description: (
      <>
        We believe in the power of examples and tutorials. That's why we are constantly working on creating new tutorials about indexers. Check out the <Link to="https://docs.near.org/tutorials/indexer/near-lake-state-changes-indexer">Getting started with NEAR Lake Framework tutorial</Link>
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img}  style={{ maxWidth: '40%' }}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
