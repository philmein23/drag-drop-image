const CLOUD_NAME = 'pnguyen23';
const RESOURCE_TYPE = 'image';
const UPLOAD_PRESET = 'j3k5iysx';

export async function uploadImage(file) {
  let uri = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${RESOURCE_TYPE}/upload`;

  let myInit = {
    method: 'POST',
    body: JSON.stringify({
      file,
      upload_preset: UPLOAD_PRESET
    })
  };

  await fetch(uri, myInit);
}
