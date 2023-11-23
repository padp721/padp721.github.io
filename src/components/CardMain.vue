<script setup lang="ts">
defineProps(['cardTitle', 'cardContent'])
</script>

<template>
	<div class="card rounded-xl p-5 text-center mt-3 mx-3 transition hover:drop-shadow-2xl">
		<span class="text-3xl font-bold">{{ cardTitle }}</span>
		<div class="card-text">
			<slot name="card-text-slot"></slot>
		</div>
		<div class="socials">
			<slot name="socials-slot"></slot>
		</div>
		<div class="card-footer">
			<slot name="card-footer-slot"></slot>
		</div>
	</div>
</template>

<style scoped>
.card {
	background-color: rgb(36, 36, 36);
}

.card-text {
	margin-bottom: 0.5em;
}

.socials {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 0.5em;
	flex-wrap: wrap;
}

.card-footer {
	margin-bottom: 0.5em;
}
</style>