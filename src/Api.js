import axios from "axios";
import CryptoJS from "crypto-js";

const CONSUMER_KEY = "ck_d0ad47f5ee3a46192c92169f0876cfb113c4d130";
const CONSUMER_SECRET_KEY = "cs_d1760a610b3592a3cf02ec69032de4cb1c8b4746";
const PROJECT_URL = "https://akustorebd.com";
const API_URL = PROJECT_URL + "/wp-json/wc/v3";
const WP_USER_API_URL = PROJECT_URL + "/wp-json/wc/v3/customers";

// Function to generate OAuth signature
const generateOAuthSignature = (url, method = "GET", params = {}) => {
  const nonce = Math.random().toString(36).substring(2);
  const timestamp = Math.floor(Date.now() / 1000);

  const oauthParams = {
    oauth_consumer_key: CONSUMER_KEY,
    oauth_nonce: nonce,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: timestamp,
    oauth_version: "1.0",
  };

  const allParams = { ...oauthParams, ...params };

  const paramString = Object.keys(allParams)
    .sort()
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(allParams[key])}`
    )
    .join("&");

  const baseUrl = url.split("?")[0]; // Ensure no query params in the base URL
  const baseString = `${method.toUpperCase()}&${encodeURIComponent(
    baseUrl
  )}&${encodeURIComponent(paramString)}`;
  const signingKey = `${encodeURIComponent(CONSUMER_SECRET_KEY)}&`;

  const signature = CryptoJS.HmacSHA1(baseString, signingKey).toString(
    CryptoJS.enc.Base64
  );

  return { ...oauthParams, oauth_signature: encodeURIComponent(signature) };
};

const api = axios.create({
  baseURL: API_URL,
});

// GET ALL PRODUCTS FROM WOOCOMMERCE STORE

export const getAllProducts = async () => {
  try {
    const res = await api.get("/products", {
      params: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET_KEY,
        per_page: 16,
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "getAllProducts error:",
      error.response?.data || error.message
    );
    return [];
  }
};

// Read single product data

export const getSingleProducts = async (productID) => {
  try {
    const url = `${API_URL}/products/${productID}`;
    const oauthParams = generateOAuthSignature(url);

    const res = await api.get(`/products/${productID}`, {
      params: oauthParams,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// -------------------------------------------------------------------
// 3.  Get single product by SLUG
// -------------------------------------------------------------------
export const getProductBySlug = async (slug) => {
  try {
    const url = `${API_URL}/products`;
    const oauthParams = generateOAuthSignature(url, "GET", { slug });

    // slug must be sent as a query param
    const res = await api.get("/products", {
      params: { ...oauthParams, slug },
    });

    // WooCommerce returns an array for slug queries
    return Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : null;
  } catch (error) {
    console.error(
      "getProductBySlug error:",
      error.response?.data || error.message
    );
    return null;
  }
};

// Get product variations
export const getProductVariations = async (productId) => {
  try {
    const res = await api.get(`/products/${productId}/variations`, {
      params: {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET_KEY,
        per_page: 100,
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "getProductVariations error:",
      error.response?.data || error.message
    );
    return [];
  }
};

// Resister use api
export const registerStoreUser = async ({
  name,
  username,
  email,
  password,
}) => {
  try {
    const res = await axios.post(
      WP_USER_API_URL,
      {
        email,
        first_name: name,
        username,
        password,
      },
      {
        auth: {
          username: "ck_d0ad47f5ee3a46192c92169f0876cfb113c4d130", // your consumer key
          password: "cs_d1760a610b3592a3cf02ec69032de4cb1c8b4746", // your consumer secret
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error("Register error:", err.response?.data || err.message);
    throw err;
  }
};

// Login user api
export const loginUser = async (userInfo) => {
  try {
    const response = await api.post(
      PROJECT_URL + "/wp-json/jwt-auth/v1/token",
      userInfo
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Create an order in WooCommerce
export const createAnOrder = async (userInfo) => {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cart") || []);

    // Check cartItems
    if (!cartItems.length) {
      console.log("cart is empty");
      return false;
    }

    const lineItems = cartItems.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    const data = {
      ...userInfo,
      line_items: lineItems,
    };

    const url = API_URL + "/orders";

    const oauthParams = generateOAuthSignature(url, "POST");

    // Generate oauth header

    const oauthHeader = Object.keys(oauthParams)
      .map((key) => `${key}="${encodeURIComponent(oauthParams[key])}"`)
      .join(", ");

    const response = await api.post("/orders", data, {
      headers: {
        Authorization: `OAuth ${oauthHeader}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
