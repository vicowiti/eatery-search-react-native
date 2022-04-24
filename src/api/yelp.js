import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer hCO6OGl8hJVmmmDO5QuVjKcKE_FweKfJ46eBmnVSk9hXynq6KpK8UZy3Dl3DAO2DyAD56xe2OJcS0jE_pT84NdUwIPiDeV79FjFtTlash1py1_N7a0U9YJg0hhhlYnYx",
  },
});
