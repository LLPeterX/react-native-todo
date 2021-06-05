export class Http {
  static async get(url) {
    try {
      return await request(url);
    } catch (e) {
      console.log(e);
    }
  }

  static async post(url, data = {}) {
    try {
      return await request(url,'POST',data);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(url) {
    try {
      return await request(url,'DELETE');
    } catch (e) {
      console.log(e);
    }
  }

  static async patch(url, data = {}) {
    try {
      return await request(url,'PATCH',data);
    } catch (e) {
      console.log(e);
    }
  }
}

// Это привaтная функция для http.js
async function request(url, method = 'GET', data) {
  const config = { method, headers: { 'Content-Type': 'application/json' } };
  if (data) {
    config.body = JSON.stringify(data);
  }
  const response = await fetch(url, config);
  return await response.json();
}