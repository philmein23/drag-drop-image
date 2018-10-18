const CLOUD_NAME = "pnguyen23";
const RESOURCE_TYPE = "image";
const UPLOAD_PRESET = "j3k5iysx";

export async function uploadImage(file) {
  let uri = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${RESOURCE_TYPE}/upload`;
  let form = new FormData();
  form.append("file", file);
  form.append("upload_preset", UPLOAD_PRESET);

  let myInit = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    mode: "cors",
    body: form
  };

  await fetch(uri, myInit);
}
