export const getAllProducts = async (token) => {
  try {
    const request = await fetch("https://dummyjson.com/products", {
      // example URL
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`, // <-- add token to request
        "Content-Type": "application/json",
      },
    });
    const json = await request.text();
    console.log(json);
    if (request.ok) {
      return json;
    } else {
      throw json.message;
    }
  } catch (e) {
    throw new Error(e);
  }
};
