<script setup lang="ts">
import CardMain from './components/CardMain.vue';
import socials from './common/social.json'
</script>

<template>
	<div class="container">
		<CardMain cardTitle="Welcome! Glad to see you here. 😁" cardContent="Connect with me.">
			<template #socials-slot>
				<a v-for="(social, idx) in socials.data" :key="idx" class="waves-effect waves-light btn valign-wrapper"
					:style="{ 'background-color': social.color }" :href="social.link" target="_blank">
					<fa-icon :icon="['fab', social.icon]" />
				</a>
			</template>
		</CardMain>
	</div>
</template>

<style scoped>
a {
	display: flex;
	margin: 0.15em;
	font-size: 25px;
	width: 50px;
	height: 50px;
	justify-content: center;
}
</style>