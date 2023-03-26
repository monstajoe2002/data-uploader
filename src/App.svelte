<script>
  import FileList from "./components/FileList.svelte";
  import Upload from "./components/Upload.svelte";
import { objects } from "./lib/s3";
</script>

<main>
  <h1>S3 Bucket Manager</h1>
  <FileList/>
  <Upload/>
</main>

<style>
</style>
