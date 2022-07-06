import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID LM9NV-W2O2Pos_5ppUc3N0BHc3yGuXeuBcifXuMKsRw",
  },
});
