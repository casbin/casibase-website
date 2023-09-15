---
title: Add a Store
description: Learn how to add a store to your Casibase knowledge base system.
keywords: [Casibase, Add a Store, Data Storage, Knowledge Base]
authors: [kv-chiu]
---

We have add a storage provider, a model provider, and a embedding provider. Now we need to configure a store to use these providers.

:::caution

This guide assumes that you have already deployed a Casibase knowledge base system. If you have not, please follow the [Deploy Casdoor and Casibase](./deploy-casdoor-and-casibase.md) guide.

Besides, this guide assumes that you have already added a storage provider, a model provider, and a embedding provider. If you have not, please follow the [Add a Storage Provider](./add-a-storage-provider.md), [Add a Model Provider](./add-a-model-provider.md), and [Add a Embedding Provider](./add-a-embedding-provider.md) guides.

:::

### Step 1: Add a New Store

Stores are used to integrate storage, model, and embedding providers into Casibase. You can add them by following these steps:

Click the `Stores` button on the home page and then click the `Add` button to add a store.

![Casibase-stores-add](/img/walkthrough-guides/casibase-stores-add.png)

### Step 2: Fill in Store Details

Fill in the store details and click the `Save & Exit` button.

This part we have done if you follow the [Add a Storage Provider](./add-a-storage-provider.md) guides.

![Casibase-stores-form-preview](/img/walkthrough-guides/casibase-stores-form-preview.png)

Select the storage provider, model provider, and embedding provider you added before.

![Casibase-stores-select](/img/walkthrough-guides/casibase-stores-select.png)

Click the `Save & Exit` button and return stores list page:

![Casibase-stores-view](/img/walkthrough-guides/casibase-stores-view.png)

Now, you can use the store to store knowledge base data, convert text to vectors, and chat with the chatbot.

In the next section, we will learn how to chat with the chatbot in Casibase.
