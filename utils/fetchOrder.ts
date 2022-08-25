import { CommerceLayerClient } from "@commercelayer/sdk"

export const fetchOrder = async (cl: CommerceLayerClient, orderId: string) => {
  return cl.orders.retrieve(orderId, {
    fields: {
      orders: [
        "id",
        "number",
        "guest",
        "shipping_country_code_lock",
        "customer_email",
        "status",
        "return_url",
        "cart_url",
        "tax_included",
        "requires_billing_info",
        "total_amount_with_taxes_float",
        "language_code",
        "shipping_address",
        "billing_address",
        "shipments",
        "payment_method",
        "payment_source",
        "customer",
        "placed_at",
        "approved_at",
      ],
      // shipments: ["shipping_method", "available_shipping_methods"],
      customer: ["customer_addresses"],
      customer_addresses: ["address"],
    },
    include: [
      "shipping_address",
      "billing_address",
      "shipments",
      "shipments.shipping_method",
      "shipments.available_shipping_methods",
      "payment_method",
      "payment_source",
      "customer",
      "customer.customer_addresses",
      "customer.customer_addresses.address",
    ],
  })
}
