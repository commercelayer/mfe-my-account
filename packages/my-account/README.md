# Commerce Layer My Account

The Commerce Layer My Account application (React) provides a production-ready reserved user area with order history and address management features, powered by Commerce Layer APIs. You can fork this repository and deploy it to any hosting service or use it as a reference application to build your own. A hosted version is also available.

![my-account-gif](https://github.com/commercelayer/mfe-my-account/assets/55532244/1d18a1d6-4372-4af5-abc3-4d11ead8db99)

## What is Commerce Layer?

[Commerce Layer](https://commercelayer.io) is a multi-market commerce API and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, wearable, voice, or IoT device, with ease. Compose your stack with the best-of-breed tools you already mastered and love. Make any experience shoppable, anywhere, through a blazing-fast, enterprise-grade, and secure API.

## Table of contents

- [Getting started](#getting-started)
- [Hosted version](#hosted-version)
- [Features](#features)
- [Localization](#localization)
- [Using the CLI to get a valid customer token](#using-the-cli-to-get-a-valid-customer-token)
- [Contributors guide](#contributors-guide)
- [Help and support](#need-help)
- [License](#license)

---

## Getting started

1. Create your organization and get your credentials by following one of our [onboarding tutorials](https://docs.commercelayer.io/core/welcome).

2. Configure the `selfHostedSlug` property in `/public/config.local.js` to match your organization slug (subdomain).

3. Deploy the forked repository to your preferred hosting service.

4. Build your sales channel with your favorite technologies and frameworks by leveraging our [developer resources](https://commercelayer.io/developers) and [documentation](https://docs.commercelayer.io).

5. Get a [customer access token](https://docs.commercelayer.io/core/authentication/password) for your application. You should generate this in your sales channel (see how to do it [using the Commerce Layer CLI](#using-the-cli-to-get-a-valid-customer-token)) or use our Javascript [authentication library](https://github.com/commercelayer/commercelayer-js-auth). 

6. View the customer's account page using the URL format: `<your-deployed-my-account-url>/<my-account-base-path>?accessToken=<your-access-token>`.

### Example

`https://myaccount.yourbrand.com/?accessToken=eyJhbGciOiJIUzUxMiJ9`

## Hosted version

Any Commerce Layer account comes with a hosted version of the My Account application that is automatically enabled. You can customize it by adding your organization logo, favicon, and primary color.

You can use the hosted version of the My Account application with the following URL format: `https://<your-organization-subdomain>.commercelayer.app/my-account/?accessToken=<your-access-token>`

### Example

`https://yourbrand.commercelayer.app/my-account?accessToken=eyJhbGciOiJIUzUxMiJ9`

## Features

The My Account application's main features are currently focused on the management of customer [orders](#orders), [addresses](#addresses), and [subscriptions](#subscriptions), along with the overview of the customer [wallet](#wallet).

> Lots of other major and minor features (e.g. returns and more) are already included in the development roadmap – check the Commerce Layer [changelog](https://docs.commercelayer.io/changelog/) to be regularly updated about all the new releases.

### Orders

#### Order history

As soon as you land on the application (or click on the _Orders_ menu item) you will be shown the order history screen.

![my-account-orders](https://github.com/commercelayer/mfe-my-account/assets/105653649/6f93c442-bf27-460e-9602-c82044645ab9)

This works as the My Account app's welcome page, showing a list of the customer's orders. The list is paginated and can be sorted based on each column piece of information by clicking on the related column label:

- order number (default)
- date of placement
- order status
- order amount

#### Order details

By clicking on one of the order numbers in the history list you can enter the selected order's details page where you can see:

- The order summary information with the single line items and total amounts.
- The billing and shipping address details.
- The shipments associated with the order (including the related parcels overview and tracking code).
- The payment method used for the order.

![my-account-order-details](https://github.com/commercelayer/mfe-my-account/assets/105653649/4d9869d0-7ae8-4e0a-ae72-a81b9f4aca7f)

#### Parcel tracking details

By clicking a parcel's tracking link you can enter the selected parcel's detail page showing the full timeline of the parcel's movements and updates.

![my-account-parcel-tracking](https://github.com/commercelayer/mfe-my-account/assets/105653649/fdab7860-5605-47ad-9011-3a66c8f23050)

### Addresses

#### Addresses management

By clicking on the _Addresses_ menu item you can see the list of your saved addresses (if any). Each address can be edited or deleted. New addresses can be directly created from the app and added to the list.

![my-account-select-address](https://github.com/commercelayer/mfe-my-account/assets/105653649/7f32c95a-1292-4451-942d-8affdc909b02)

![my-account-edit-address](https://github.com/commercelayer/mfe-my-account/assets/105653649/9500665a-cc71-4012-af83-8082fdccbd8c)

### Subscriptions

#### Subscriptions history

By clicking on the _Subscriptions_ menu item you can see the history of your subscriptions (if any).

![my-account-subscriptions](https://github.com/commercelayer/mfe-my-account/assets/55532244/f4699377-adcc-4752-8720-4ba7aec6766e)

The list is paginated and can be sorted based on each column piece of information by clicking on the related column label:

- subscription number (default)
- subscription status
- subscription frequency
- subscription next run date

#### Subscription details

By clicking on one of the subscription numbers in the history list you can enter the selected subscription's details page where you can see:

- An introductory recap about the subscription settings (e.g. start date, frequency, next run date, and address)
- The subscription summary information with the list of subscription line items.
- The payment method used for the subscription renewal.
- The history of the recurring orders associated with the subscription.

![my-account-subscription-details](https://github.com/commercelayer/mfe-my-account/assets/55532244/40f31208-a10b-4b80-ac8e-1b3b7ba2a3ec)

If the subscription cannot be renewed (e.g. due to an expired payment method), an alert will appear at the top of the detail page. This alert highlights the issue and provides a [Checkout](https://github.com/commercelayer/mfe-checkout) link for the customer to place the order with a valid payment method, thereby updating the payment information for future transactions.

![my-account-failed-subscription-alert](https://github.com/commercelayer/mfe-my-account/assets/55532244/792cebe9-0b1a-4059-9dc0-da7c2c7bdde1)

> [!TIP]  
> You can track subscriptions' renewal failures by activating a [webhook](https://docs.commercelayer.io/core/real-time-webhooks) listening for the `order_subscriptions.last_run_failed` event. The `order_subscriptions.last_run_succeeded` event is available as well.

### Wallet

#### Saved cards list

By clicking on the _Wallet_ menu item you can see the list of your saved credit cards (if any).

![my-account-wallet](https://github.com/commercelayer/mfe-my-account/assets/105653649/23fb4719-37ae-47b8-965d-4b472d4a58bf)


### Back to shop

You could optionally provide a `returnURL` URL parameter to enable *Back to shop* and *Logout* navigation links.

`https://yourbrand.commercelayer.app/my-account?accessToken=eyJhbGciOiJIUzUxMiJ9&lang=en&returnUrl=https://yourbrand.com`

![my-account-orders-back-to-shop](https://github.com/user-attachments/assets/f6481d5a-7377-4715-bddf-bf867d5ecdcc)

## Localization

The application is actually localized in `en`, `it` and `nl` locales.
You could optionally provide a `lang` URL parameter to define the locale used to localize the app: `https://<your-organization-subdomain>.commercelayer.app/my-account/?accessToken=<your-access-token>&lang=<short-lang-code>`

### Example

`https://yourbrand.commercelayer.app/my-account?accessToken=eyJhbGciOiJIUzUxMiJ9&lang=en`

## Using the CLI to get a valid customer token

If you are using the [Commerce Layer CLI](https://github.com/commercelayer/commercelayer-cli) you can easily obtain a valid access token suitable for the generation of a My Account application working URL.

First, you need to log into your organization using the customer's credentials:

```bash
$ cl app:login -o <your-organization-slug> -e <customer-username> -p <customer-password> -i <client-id> -S <scope> -a <cli-login-alias>
```

Once the login is successful you can ask for the generation of a valid customer access token:

```bash
$ cl app:token
```

## Contributors guide

1. Fork [this repository](https://github.com/commercelayer/mfe-my-account) (you can learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/mfe-my-account.git && cd mfe-my-account
```

3. First, install dependencies and run the development server:

```
pnpm install
pnpm dev
```

4. (Optional) Set your environment with `.env.local` starting from `.env.local.sample`.

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can use the following format to open the My Account app: `http://localhost:3000/myaccount?accessToken=<your-access-token>`

6. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

7. Someone will attend to your pull request and provide some feedback.

## Need help?

- Join [Commerce Layer's Discord community](https://discord.gg/commercelayer).
- Ping us on [Bluesky](https://bsky.app/profile/commercelayer.io), [X (formerly Twitter)](https://x.com/commercelayer), or [LinkedIn](https://www.linkedin.com/company/commerce-layer).
- Is there a bug? Create an [issue](https://github.com/commercelayer/mfe-my-account/issues) on this repository.

## License

This repository is published under the [MIT](LICENSE) license.
