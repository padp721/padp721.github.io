<script lang="ts" setup>
import CardMain from './components/CardMain.vue';
import BtnSocial from './components/BtnSocial.vue';
import socials from './common/social.json';
</script>

<template>
	<div class="container">
		<CardMain>
			<h1 class="text-3xl font-bold">Welcome! Glad to see you here 😁</h1>
			<p class="my-1">Let's Connect!</p>
			<div class="flex flex-row justify-center flex-wrap">
				<BtnSocial v-for="(social, idx) in socials.data" :key="idx" :url="social.url" :icon_type="social.icon_type"
					:icon="social.icon" :bg_color="social.color" />
			</div>
		</CardMain>
	</div>
</template>