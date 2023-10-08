---
title: Casdoor-SSO
description: Setup Casdoor for casibase
keywords: [Casdoor, SSO, Security, Authentication, Authorization]
authors: [palp1tate]
---

```mdx-code-block
import styles from '.././styles.module.css';
import CasdoorCard from "@site/src/components/CasdoorCard";
```

Casibase uses Casdoor as its backend service,so make sure to deploy it in advance.

Please refer to: <https://casdoor.org/docs/basic/server-installation> to install and configure Casdoor.

Follow these steps to setup Casdoor for casibase:

- Create an Organization

![create-organization](/img/create-organization.png)

- Configure information about the Organization

![configure-organization](/img/configure-organization.png)

- Create a new Application

![create-application](/img/create-application.png)

- Configuring Application Information (Remember Name, ClientID and ClientSecret)

![configure-application](/img/configure-application.png)

- Add a member to the newly created organization

![add-user](/img/add-user-1.png)

![add-user](/img/add-user-2.png)

- Configure member information (remember its Name as well as Password)

![configure-user](/img/configure-user-1.png)

![configure-user](/img/configure-user-2.png)
