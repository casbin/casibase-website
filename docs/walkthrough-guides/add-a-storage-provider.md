---
title: Add a Storage Provider
description: Discover how to integrate a storage provider with Casibase.
keywords: [Casibase, Storage Provider, Integration]
authors: [kv-chiu]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a storage provider with Casibase, our powerful knowledge base system.

## Introduction

Adding a storage provider to Casibase enables you to efficiently manage and store data, making it an essential component for your knowledge base system.

If you're new to integrating storage providers, don't worry. We've broken down the process into simple steps that anyone can follow.

### Step 1: Deploy Casdoor and Casibase

In the last chapter, we learned how to deploy Casdoor and Casibase. If you haven't done so already, please refer to the [Deploy Casdoor and Casibase](./deploy-casdoor-and-casibase) tutorial.

### Step 2: Add a New Storage Provider

Storage providers are used to store data. They can be added in Casdoor by clicking the `Identity - Providers` button on the home page.

![Casdoor-home-providers](/img/walkthrough-guides/casdoor-home-providers.png)

#### Step 2.1: Add a storage provider

Click the `Add` button to add a storage provider.

![Casdoor-providers-add](/img/walkthrough-guides/casdoor-providers-add.png)

#### Step 2.2: Fill in the storage provider information

Fill in the storage provider information and click the `Save & Exit` button.

![Casdoor-providers-form-filling](/img/walkthrough-guides/casdoor-providers-form-filling.png)

:::tip

Casdoor supports many storage providers, including:

- [AWS S3](https://aws.amazon.com/s3/)
- [Azure Blob](https://azure.microsoft.com/en-us/products/storage/blobs)
- [Google Cloud Storage](https://cloud.google.com/storage)
- [MinIO](https://min.io/)
- [Qiniu Cloud Kodo](https://www.qiniu.com/)
- [Alibaba Cloud OSS](https://www.alibabacloud.com/product/oss)
......

:::

**Example**

##### Add an Aliyun OSS storage provider

:::caution

- Client ID: The AccessKey ID of your Aliyun OSS account.
- Client Secret: The AccessKey Secret of your Aliyun OSS account.

`****` is the placeholder for your Aliyun OSS account information.

![Casdoor-providers-form-filling-alioss](/img/walkthrough-guides/casdoor-providers-form-filling-alioss.png)

:::

#### Step 2.3: View the storage provider

After adding the storage provider, you can view the storage provider information.

![Casdoor-providers-view](/img/walkthrough-guides/casdoor-providers-view.png)

### Step 3: Add a New Storage Provider to Casibase

In Casibase, you can add a storage provider to manage your data. You can add a storage provider by clicking the `Providers - Add` button on the home page.

#### Step 3.1: Add a storage provider

Click the `Add` button to add a storage provider.

![Casibase-stores-add](/img/walkthrough-guides/casibase-stores-add.png)

#### Step 3.2: Fill in the storage provider information

Fill in the storage provider information and click the `Save & Exit` button.

If Edit page is not displayed, please click the `Edit` button.

You'll see the following page:

![Casibase-stores-form-preview](/img/walkthrough-guides/casibase-stores-form-preview.png)

:::tip

Storage providers comes from Casdoor. You can add a storage provider in Casdoor and then add it to Casibase.

Refer to [Step 2: Add a New Storage Provider](#step-2-add-a-new-storage-provider) for more information.

![Casibase-stores-select-storage](/img/walkthrough-guides/casibase-stores-select-storage.png)

:::

**Store Example**

![Casibase-stores-form-filling](/img/walkthrough-guides/casibase-stores-form-filling.png)

Save the configuration, return to the home page, and you'll see the file-tree of the storage provider.

![Casibase-home-filetree](/img/walkthrough-guides/casibase-home-filetree.png)

Now you can manage your data in Casibase.

In the next chapter, we'll learn how to add a `AI model provider` to Casibase.
