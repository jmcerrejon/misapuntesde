---
title: Stripe Webhook Guide
description: Stripe Webhook Guide
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-03-15
category:
    - Developer
tags:
    - Stripe
    - Webhook
    - CLI
---

# Stripe Webhook Guide

![Stripe](/images/2025/03/stripe.jpg "Stripe")

A webhook (also known as reverse API) is a tool that allows a system or application to send notifications about specific events to another system or application in real-time.

## Define route in our application

The application will define the route where the webhook will listen for stripe events.

```python
@app.route('/webhook', methods=['POST'])
    def stripe_webhook():
        return webhook.webhook()
```

The webhook method will handle stripe events. It must be implemented to handle the desired events. You can see an example at: [https://stripe.com/docs/webhooks#webhook-endpoint-integration](https://stripe.com/docs/webhooks#webhook-endpoint-integration).

## Stripe CLI

Stripe CLI is a developer tool that helps create, test, and manage Stripe integration directly from a terminal

### 1. Installing Stripe CLI:

For Windows:

```
1. Download the latest windows tar.gz file from https://github.com/stripe/stripe-cli/releases/latest
2. Unzip the stripe_X.X.X_windows_x86_64.zip file
3. Run the uncompressed .exe file
```

For GNU/Linux or macOS:

```
1. Download the latest linux tar.gz file from https://github.com/stripe/stripe-cli/releases/latest
2. Unzip the file: tar -xvf stripe_X.X.X_linux_x86_64.tar.gz
3. Add ./stripe to your execution path.
```

### 2. Login to Stripe CLI

Use the stripe login command to authenticate to Stripe CLI in your browser. This command generates a restricted key set for your account (one in test mode and one in active mode) that is valid for 90 days.

```sh
$ stripe login
> Your pairing code is: glitz-boom-entice-quiet
> This pairing code verifies your authentication with Stripe.
> Press Enter to open the browser or visit <url> (^C to quit)
```

Optionally, if you don't want to use a browser, use the --interactive flag to authenticate with an API secret key or a restricted key.

```sh
$ stripe login --interactive
```

Optionally, you can use the --api-key flag to specify your API secret key inline each time you send a request

```sh
$ stripe login --api-key <stripe-test-api-key>
```

### 3. Sending events from Stripe CLI

The Stripe client allows us to send events to simulate the different operations that Stripe notifies.
First, you must indicate the route where our application will handle Stripe events

```sh
$ stripe listen --forward-to http://127.0.0.1:5000/webhook
```

To get the list of possible events, run the following command:

```sh
$ stripe trigger
```

To send a specific event, run the following command:

```sh
$ stripe trigger <event_name>
```

### 4. List of required events

Studying the webhook, the most common events when making a payment are (from bottom to top):

```
transfer.created
payment_intent.succeeded
charge.succeeded
charge.pending
payment_intent.processing
payment_intent.created
payment_intent.requires_action
customer.subscription.updated
invoice.created
```

Others interesting events:

```
customer.updated
customer.subscription.deleted
customer.subscription.updated
invoice.updated
invoice.voided
invoice.paid
invoice.finalized
subscription.triggered
invoice.draft.paid
```
