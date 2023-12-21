import { generateSalt, deriveEncryptionKey } from "./utils";

const clisien = () => {
  const get = (url: RequestInfo | URL, init: RequestInit) => {
    fetch(url, {
      ...init,
      method: "GET",
    });
  };
  const post = (url: RequestInfo | URL, init: RequestInit) => {
    fetch(url, {
      ...init,
      method: "POST",
    });
  };
  const put = (url: RequestInfo | URL, init: RequestInit) => {
    fetch(url, {
      ...init,
      method: "PUT",
    });
  };
  const patch = (url: RequestInfo | URL, init: RequestInit) => {
    fetch(url, {
      ...init,
      method: "PATCH",
    });
  };
  const del = (url: RequestInfo | URL, init: RequestInit) => {
    fetch(url, {
      ...init,
      method: "DELETE",
    });
  };

  return {
    generateSalt,
    deriveEncryptionKey,
    get,
    post,
    put,
    patch,
    del,
  };
};

export default clisien;
