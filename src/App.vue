<script setup lang="ts">
import CardMain from './components/CardMain.vue';
import socials from './common/social.json';
import FaIcon from './components/FaIcon.vue';
</script>

<template>
	<div class="container">
		<CardMain cardTitle="Welcome! Glad to see you here 😁">
			<template #card-text-slot>
				<span>Let's Connect!</span>
			</template>
			<template #socials-slot>
				<a v-for="(social, idx) in socials.data" :key="idx" :href="social.link" target="_blank">
					<button class="btn-icon" :class="{ instagram: social.icon === 'instagram' }"
						:style="{ 'background-color': social.color }">
						<FaIcon :type="social.icon_type" :icon="social.icon" />
					</button>
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

.instagram {
	background: #f09433;
	background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}
</style>