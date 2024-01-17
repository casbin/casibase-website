import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
// eslint-disable-next-line unused-imports/no-unused-imports
import Translate, {translate} from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";
import {useWindowSize} from "@docusaurus/theme-common";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Casibase</Translate></h1>
        <br />
        <p className="hero__subtitle" style={{margin: "0 auto", maxWidth: 700}}>
          <Translate>
            🚀⚡️Open-source LangChain-like AI knowledge database with web UI and Enterprise SSO, supports OpenAI, Azure, Google Gemini, HuggingFace, OpenRouter, ChatGLM and local models
          </Translate>
        </p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/overview">
            <Translate>🚀Get Started⚡️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Showcase() {
  return (
    <div className="hero text--center showcase">
      <div className="container">
        <h1><Translate>Who&apos;s using Casibase?</Translate></h1>
        <p style={{
          width: "50vw",
          margin: "auto",
        }}>
          <Translate values={{
            UsersPage: (
              <Link to="/users">
                <Translate>check out these apps</Translate>
              </Link>
            ),
          }}>
            {"Hundreds of projects are using Casibase, from established Fortune 500 companies to hot new startups.If you're curious to see what can be accomplished Casbin, {UsersPage}!"}
          </Translate>
        </p>
        <br /><br />
        <UserList />
      </div>
    </div>
  );
}

function OpenCollective() {
  if (useWindowSize() === "mobile") {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "1100px", display: "block"}}></iframe>
    );
  } else {
    return (
      <iframe title="Sponsors" src="https://opencollective.com/casbin/banner.html" style={{width: "100%", height: "650px", display: "block"}}></iframe>
    );
  }
}

export default function Home() {
  return (
    <Layout
      title={"Casibase"}
      description="⚡️Open-source LangChain-like AI knowledge database with web UI and Enterprise SSO⚡️, supports OpenAI, Azure, Google Gemini, HuggingFace, OpenRouter, ChatGLM and local models">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Showcase />
        <OpenCollective />
      </main>
    </Layout>
  );
}
