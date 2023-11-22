<script setup lang="ts">
defineProps(['cardTitle', 'cardContent'])
</script>

<template>
	<div class="row">
		<div class="col s12 m12">
			<div class="card hoverable">
				<div class="card-content white-text">
					<span class="card-title">{{ cardTitle }}</span>
					{{ cardContent }}<br>
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	background-color: #242424;
	border-radius: 15px;
}
</style>