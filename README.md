# Commerce Layer My Account

The Commerce Layer My Account application (React) provides a production-ready reserved user area with order history and address management features, powered by Commerce Layer APIs. You can fork this repository and deploy it to any hosting service or use it as a reference application to build your own. A hosted version is also available.

![Commerce Layer My Account demo](./public/my-account.gif)

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

2. Set on your hosting provider the required environment variables `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SLUG` starting from example values found in `.env.local.example` file.

3. Deploy the forked repository to your preferred hosting service or host it yourself. You can deploy with one click below:

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" height="35">](https://app.netlify.com/start/deploy?repository=https://github.com/commercelayer/commercelayer-my-account) [<img src="https://vercel.com/button" alt="Deploy to Vercel" height="35">](https://vercel.com/new/clone?repository-url=https://github.com/commercelayer/commercelayer-my-account) [<img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" height="35">](https://heroku.com/deploy?template=https://github.com/commercelayer/commercelayer-my-account) [<img src="https://www.deploytodo.com/do-btn-blue.svg" alt="Deploy to Digital Ocean" height="35">](https://cloud.digitalocean.com/apps/new?repo=https://github.com/commercelayer/commercelayer-my-account/tree/main)

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

The My Account application's main features are currently focused on the management of customer [orders](#orders) and [addresses](#addresses). 

> Lots of other major and minor features (e.g. payments, refunds, and more) are already included in the development roadmap – check the Commerce Layer [changelog](https://docs.commercelayer.io/changelog/) to be regularly updated about all the new releases.

### Orders

#### Order history

As soon as you land on the application (or click on the *Orders* menu item) you will be shown the order history screen.

![Commerce Layer My Account orders page](./public/my-account-orders.jpg)

This works as the My Account app's welcome page, showing a list of the customer's orders. The list can be sorted based on each column piece of information:

- order number
- date of placement
- order status
- order amount

#### Order details

By clicking on one of the order numbers of the history list you can enter the selected order's details page where, by opening the related dropdowns, you can see:

- The order summary information with the single line items and total amounts.
- The billing and shipping address details.
- The shipments associated with the order (including the related parcels overview and tracking code).
- The payment method used for the order.

![Commerce Layer My Account order summary](./public/my-account-summary.jpg)

![Commerce Layer My Account order addresses](./public/my-account-addresses.jpg)

![Commerce Layer My Account order shipments](./public/my-account-shipments.jpg)

![Commerce Layer My Account order payments](./public/my-account-payments.jpg)

#### Parcel tracking details

By clicking a parcel's tracking link you can enter the selected parcel's detail page showing the full timeline of the parcel's movements and updates.

![Commerce Layer My Account parcel tracking](./public/my-account-parcel-tracking.jpg)

### Addresses

#### Addresses Management

By clicking on the *Addresses* menu item you can see the list of your saved addresses (if any). Each address can be edited or deleted. New addresses can be directly created from the app and added to the list. 

![Commerce Layer My Account address list](./public/my-account-select-address.jpg)

![Commerce Layer My Account address editing](./public/my-account-edit-address.jpg)

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

1. Fork [this repository](https://github.com/commercelayer/commercelayer-my-account) (you can learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/commercelayer-my-account.git && cd commercelayer-my-account
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

2. Create an [issue](https://github.com/commercelayer/commercelayer-my-account/issues) in this repository.

3. Ping us [on Twitter](https://twitter.com/commercelayer).

## License

This repository is published under the [MIT](LICENSE) license.
