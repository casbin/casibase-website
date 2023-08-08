---
title: Casdoor-SSO
description: Introduction of casdoor in casibase
keywords: [Casdoor, SSO, Security, Authentication, Authorization]
authors: [kv-chiu]
---

```mdx-code-block
import styles from '.././styles.module.css';
import CasdoorCard from "@site/src/components/CasdoorCard";
```

## Introduction

Casdoor is a powerful and lightweight open-source [Identity Access Management (IAM)](https://en.wikipedia.org/wiki/Identity_management) / [Single-Sign-On (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) server. It's developed and maintained by [**Casbin**](https://casbin.org).

```mdx-code-block
<div className={styles.gradientborder}>
  <CasdoorCard src="https://door.casdoor.com/login" />
</div>
```

Casdoor serves both the web UI and the login requests from the application users.

## Features

- **Single-Sign-On (SSO)**: Sign in to multiple applications with one set of login credentials.
- **Social Login**: Sign in with GitHub, Google, etc.
- **Integrated Provider Management**: Manage all your providers in one place.
- **Authentication**: Verify the identity of your users.

![Principle](/img/principles.gif)

:::tip

Casibase manages third-party service providers through Casdoor:

- **Storage**: Manage your storage providers, such as AWS, Azure, etc.
- **AI**: Manage your chat providers, such as OpenAI, ChatGLM, etc.

:::
