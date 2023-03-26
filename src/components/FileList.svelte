<script>
  import File from "./File.svelte";
  import { objects } from "../lib/s3";
</script>

<div class="file-list">
  {#if $objects}
    {#each $objects as object}
      <File fileName={object.Key} />
      <hr />
    {/each}
  {/if}
</div>

<style>
  .file-list {
    display: flex;
    flex-direction: column;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px;
  }
  hr {
    width: 100%;
    border: 1px solid #333333;
  }
  hr:last-child {
    display: none;
  }
</style>
