<script setup lang="ts">
import CardMain from './components/CardMain.vue';
import socials from './common/social.json'
</script>

<template>
	<div class="container center-align">
		<CardMain cardTitle="Welcome! Glad to see you here. 😁" cardContent="Connect with me.">
			<a v-for="(social, idx) in socials.data" :key="idx" class="waves-effect waves-light btn valign-wrapper"
				:style="{ 'background-color': social.color }" :href="social.link" target="_blank">
				<fa-icon :icon="['fab', social.icon]" />
			</a>
		</CardMain>
	</div>
</template>

<style scoped>
a {
	margin: 0.15em;
	padding: 7px;
	font-size: 25px;
	width: 50px;
	height: 50px;
	text-align: center;
	text-decoration: none;
}
</style>