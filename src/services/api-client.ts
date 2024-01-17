import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "325cc9506b664203b7d8ccb871cecb20",
  },
});
