---
title: Add a Model Provider
description: Learn how to add a model provider to enhance Casibase functionality.
keywords: [Casibase, Model Provider, Integration]
authors: [kv-chiu]
---

This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a model provider with Casibase, our powerful knowledge base system.

## Introduction

Adding a model provider to Casibase enables you to enhance its functionality by incorporating machine learning models and AI capabilities. Model providers allow you to analyze and process data within your knowledge base system, making it more intelligent and efficient.

If you're new to integrating model providers, don't worry. We've broken down the process into simple steps that anyone can follow.

### Step 1: Deploy Casdoor and Casibase

Before you can add a model provider, make sure you have Casdoor and Casibase deployed. If you haven't done this yet, please refer to the [Deploy Casdoor and Casibase](./deploy-casdoor-and-casibase) tutorial in our previous documentation.

### Step 2: Add a New Model Provider

Model providers are used to integrate LLM into Casibase. You can add them by following these steps:

Click the `Providers` button on the home page.

![Casibase-home-providers](/img/walkthrough-guides/casibase-home-providers.png)

#### Step 2.1: Add a Model Provider

Click the `Add` button to add a model provider.

![Casibase-providers-add](/img/walkthrough-guides/casibase-providers-add.png)

#### Step 2.2: Fill in Model Provider Details

Fill in the model provider details and click the `Save & Exit` button.

![Casibase-model-openai](/img/walkthrough-guides/casibase-model-openai.png)

:::tip

Casibase supports many model providers, including:

- [Hugging Face](https://huggingface.co/)
  - meta-llama/Llama-2-7b
  - THUDM/chatglm2-6b
  - baichuan-inc/Baichuan2-13B-chat
  - gpt2
  - ......
- [OpenRouter](https://openrouter.ai/)
  - anthropic/claude-2
  - palm-2-chat-bison
  - palm-2-codechat-bison
  - openai/gpt-4
  - ......
- [OpenAI](https://openai.com/)
  - text-davinci-003
  - gpt-3.5-turbo
  - gpt-4
  - ......

:::

:::caution

- Category: The first-level category of the model provider. For example, `Model` and `Embedding`.
- Type: The second-level category of the model provider. For example, `OpenAI` and `Hugging Face`.
- SecretKey: The secret key of your OpenAI account.

**Example**

##### Add a OpenAI model provider

![Casibase-model-select](/img/walkthrough-guides/casibase-model-select.png)

:::

:::caution

Some models don't support **streaming-output**. Known models that support streaming-output include:

- `gpt-3.5-turbo-0613`

:::

After adding a model provider, you can use it to analyze and process data in Casibase using chatbots, question answering, and other AI capabilities.

Return model provider list page:

![Casibase-providers-view](/img/walkthrough-guides/casibase-model-view.png)

Now that you've added a model provider, you can use it to analyze and process data in Casibase using chatbots, question answering, and other AI capabilities.

In the next chapter, we'll learn how to add an embedding provider to Casibase.
