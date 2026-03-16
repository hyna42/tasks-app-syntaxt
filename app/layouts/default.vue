<script setup lang="ts"></script>

<template>
	<div>
		<AppNavBar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>

<style>
	.error{
		color: red;
		font-weight: bold;
	}

	.button-container{
		display: flex;
		justify-content: end;
	}
</style>