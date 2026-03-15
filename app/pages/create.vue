<script setup lang="ts">
import { FetchError } from "ofetch";
const loading = ref(false);
const errorMessage = ref("");

async function onSubmit() {
  try {
    loading.value = true;
    errorMessage.value = "";

    const result = await $fetch("/api/tasks", {
      method: "POST",
      body: {},
    });
    console.log("res::", result);
  } catch (e) {
    console.log("Error ::", e);
    const error = e as FetchError;
    errorMessage.value = error.statusMessage || "Unknown error occured";
  }
  loading.value = false;
}
</script>

<template>
  <div>
    <h1>Create Task</h1>
    <article v-if="loading" aria-busy />
    <article v-else-if="errorMessage">{{ errorMessage }}</article>
    <form @submit.prevent="onSubmit">
      <label for="">
        Task
        <input name="title" placeholder="task title" />
      </label>
      <div class="button-container">
        <button>Create</button>
      </div>
    </form>
  </div>
</template>
