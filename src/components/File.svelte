<script>
  import { deleteObject, objects } from "../lib/s3";

  export let fileName;
  const handleDelete = () => {
    const alert = window.confirm(
      `Are you sure you want to delete ${fileName}?`
    );
    if (!alert) return;
    deleteObject(fileName);
  };
</script>

<div class="file">
  <p>{fileName}</p>

  <button on:click={handleDelete}> Delete </button>
</div>

<style>
  .file {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  button {
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 2px 7px;
    transition: 0.3s;
  }
  button:hover {
    background-color: #d44036;
  }
</style>
