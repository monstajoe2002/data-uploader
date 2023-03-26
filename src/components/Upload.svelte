<script>
  import { uploadObject } from "../lib/s3";

  const handleUpload = (e) => {
    uploadObject(e.target.file.files[0]);
    // console.log(e.target.file.files[0])
  };
</script>

<div>
  <form on:submit|preventDefault={handleUpload}>
    <input type="file" name="file" id="file" />
    <button type="submit" >Upload</button>

  </form>
</div>

<style>
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: #4d4d4d;
  }
  form{
    padding: 10px;
    background-color: #7c7979;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
</style>
