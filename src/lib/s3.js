import { S3 } from "@aws-sdk/client-s3";
import { writable } from "svelte/store";
const s3 = new S3({
  region: "eu-central-1",
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

export let objects = writable([]);

s3.listObjects(
  {
    Bucket: "chatbot-bucket-node",
  },
  (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      objects.set(data.Contents);
    }
  }
);

export const deleteObject = (key) => {
  s3.deleteObject(
    {
      Bucket: "chatbot-bucket-node",
      Key: key,
    },
    (err) => {
      if (err) {
        console.error("Error", err);
      } else {
        objects.update((items) => items.filter((item) => item.Key !== key));
      }
    }
  );
};

export const uploadObject = async (file) => {
  s3.putObject(
    {
      Bucket: "chatbot-bucket-node",
      Key: file.name,
      Body: file,
    },
    (err) => {
      if (err) {
        console.error("Error", err);
      } else {
        objects.update((items) => [...items, { Key: file.name }]);
      }
    }
  );
};
