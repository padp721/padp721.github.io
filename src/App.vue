<script setup lang="ts">
import CardMain from './components/CardMain.vue';
import socials from './common/social.json'
import FaIcon from './components/FaIcon.vue';
</script>

<template>
	<div class="container">
		<CardMain cardTitle="Welcome! Glad to see you here 😁">
			<template #card-text-slot>
				<span>Let's Connect!</span>
			</template>
			<template #socials-slot>
				<a v-for="(social, idx) in socials.data" :key="idx" class="waves-effect waves-light btn btn-icon"
					:style="{ 'background-color': social.color }" :href="social.link" target="_blank">
					<FaIcon :type="social.icon_type" :icon="social.icon" />
				</a>
			</template>
		</CardMain>
	</div>
</template>

<style scoped>
.btn-icon {
	display: flex;
	margin: 0.15em;
	font-size: 18pt;
	width: 2em;
	height: 2em;
	justify-content: center;
	align-items: center;
	border-radius: 25%;
}
</style>