class BaseService {
  static async get(url) {
    const response = await fetch(url);
    return response.json();
  }

  static async post(url, data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    return response.json();
  }
}

export default BaseService;
