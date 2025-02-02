export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      {
        name: "firstName",
        type: "string",
        title: "First Name",
      },
      {
        name: "lastName",
        type: "string",
        title: "Last Name",
      },
      {
        name: "address1",
        type: "string",
        title: "Address",
      },
      {
        name: "address2",
        type: "string",
        title: "Address",
      },
      {
        name: "city",
        type: "string",
        title: "City",
      },
      {
        name: "zipCode",
        type: "string",
        title: "Zip Code",
      },
      {
        name: "email",
        type: "string",
        title: "Email",
      },
      {
        name: "phone",
        type: "number",
        title: "Phone",
      },
      {
        name: "country",
        type: "string",
        title: "Country",
      },
      {
        name: "cartItem",
        type: "array",
        of: [
          {
            type: "reference",
            to: { type: "product" },
          },
        ],
        title: "Cart Items",
      },
      {
        name: "orderItems",
        type: "array",
        title: "Order Items",
        of: [
          {
            type: "reference",
            to: [
              {
                type: "product",
              },
            ],
          },
        ],
      },
      {
        name: "Subtotal",
        type: "number",
        title: "SubTotal",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Completed", value: "completed" },
            { title: "Cancelled", value: "cancelled" },
          ],
          layout: "radio",
        },
        initialValue: "pending", // default value
      },
    ],
  };