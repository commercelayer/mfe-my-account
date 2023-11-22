# Commerce Layer My Account

The Commerce Layer My Account application (React) provides a production-ready reserved user area with order history and address management features, powered by Commerce Layer APIs. You can fork this repository and deploy it to any hosting service or use it as a reference application to build your own. A hosted version is also available.

![my-account-low-res](https://user-images.githubusercontent.com/105653649/207382775-e1948090-9000-4dad-bf62-a73c94cf0a31.gif)

## What is Commerce Layer?

[Commerce Layer](https://commercelayer.io) is a multi-market commerce API and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, wearable, voice, or IoT device, with ease. Compose your stack with the best-of-breed tools you already mastered and love. Make any experience shoppable, anywhere, through a blazing-fast, enterprise-grade, and secure API.

## Table of contents

- [Getting started](#getting-started)
- [Hosted version](#hosted-version)
- [Features](#features)
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

The My Account application's main features are currently focused on the management of customer [orders](#orders), [addresses](#addresses), and [wallet](#wallet).

> Lots of other major and minor features (e.g. returns and more) are already included in the development roadmap – check the Commerce Layer [changelog](https://docs.commercelayer.io/changelog/) to be regularly updated about all the new releases.

### Orders

#### Order history

As soon as you land on the application (or click on the _Orders_ menu item) you will be shown the order history screen.

![my-account-orders](https://user-images.githubusercontent.com/105653649/207383160-c82818ab-c81f-43f9-b778-9c7c93ed8d12.jpg)

This works as the My Account app's welcome page, showing a list of the customer's orders. The list is paginated and can be sorted based on each column piece of information:

- order number (default)
- date of placement
- order status
- order amount

#### Order details

By clicking on one of the order numbers of the history list you can enter the selected order's details page where you can see:

- The order summary information with the single line items and total amounts.
- The billing and shipping address details.
- The shipments associated with the order (including the related parcels overview and tracking code).
- The payment method used for the order.

![my-account-order-details](https://user-images.githubusercontent.com/105653649/207383301-7fd246dd-af1d-41b4-a3db-f3318e712c9d.jpg)

#### Parcel tracking details

By clicking a parcel's tracking link you can enter the selected parcel's detail page showing the full timeline of the parcel's movements and updates.

![my-account-parcel-tracking](https://user-images.githubusercontent.com/105653649/207383343-fc38a0af-626c-4319-96ca-15a14b2c8200.jpg)

### Addresses

#### Addresses Management

By clicking on the _Addresses_ menu item you can see the list of your saved addresses (if any). Each address can be edited or deleted. New addresses can be directly created from the app and added to the list.

![my-account-select-address](https://user-images.githubusercontent.com/105653649/207383421-188971d7-d1d7-4ed1-b7c3-869613bd75d6.jpg)

![my-account-edit-address](https://user-images.githubusercontent.com/105653649/207383388-9a5c9658-d2d4-4ef8-b6d0-d4747223e518.jpg)

### Wallet

#### Saved cards list

By clicking on the _Wallet_ menu item you can see the list of your saved credit cards (if any). 

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

1. Join [Commerce Layer's Slack community](https://slack.commercelayer.app).

2. Create an [issue](https://github.com/commercelayer/mfe-my-account/issues) in this repository.

3. Ping us [on Twitter](https://twitter.com/commercelayer).

## License

This repository is published under the [MIT](LICENSE) license.
