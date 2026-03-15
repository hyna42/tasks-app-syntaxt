<template>
  <nav class="container">
    <ul>
      <li><NuxtLink to="/">Acme Corp</NuxtLink></li>
    </ul>
    <ul>
      <li>
        <NuxtLink :to="{ name: 'create' }"> Create Task </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
