import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Feature 1",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
          detail description
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Feature 2",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
          detail description
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Feature 3",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate>
          detail description
        </Translate>
      </>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
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
