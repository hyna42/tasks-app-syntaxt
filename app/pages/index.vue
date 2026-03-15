<script lang="ts" setup>
const { data: tasks, error, status } = useFetch("/api/tasks", { lazy: true });


</script>

<template>
  <div>
    <article v-if="status === 'pending'" aria-busy="true" />
    <div v-else>
      <article v-for="task in tasks" :key="task.id">{{ task.title }}</article>
    </div>
  </div>
</template>
