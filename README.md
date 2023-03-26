# data-uploader

A simple tool to upload data to or delete from an S3 bucket.

## Installation

```bash
git clone https://github.com/monstajoe2002/data-uploader
npm install 
```

## Usage

Firstly, you need to create a `.env` file in the root directory of the project.

There is already a `.env.example` file in the root directory. You can copy the contents of the `.env.example` file and paste it into the `.env` file.

Then, you need to add your AWS credentials to the `.env` file. The `.env` file should look like this

```bash
VITE_AWS_ACCESS_KEY_ID= XXXXXXXXXXX
VITE_AWS_SECRET_ACCESS_KEY= XXXXXXXXXXX
```

Now you can run the project:

```bash
npm run dev
```
