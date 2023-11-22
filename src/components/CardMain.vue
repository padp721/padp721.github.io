<script setup lang="ts">
defineProps(['cardTitle', 'cardContent'])
</script>

<template>
	<div class="row">
		<div class="col s12 m12">
			<div class="card hoverable">
				<div class="card-content white-text center-align">
					<div class="row">
						<div class="col s12 m12">
							<span class="card-title">{{ cardTitle }}</span>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	background-color: #242424;
	border-radius: 1em;
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