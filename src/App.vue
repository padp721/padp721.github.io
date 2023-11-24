<script lang="ts" setup>
import { ref, nextTick, defineAsyncComponent } from 'vue';
import CardMain from './components/CardMain.vue';
import BtnSocial from './components/BtnSocial.vue';
import socials from './common/social.json';

const LoadingIcon = defineAsyncComponent(() => import('./components/LoadingIcon.vue'))

const state = ref({
	init: true,
	isLoading: false
})

async function loadContent() {
	state.value.init = false
	state.value.isLoading = true

	await nextTick()
	if (!state.value.init && state.value.isLoading) {
		setTimeout(() => {
			state.value.isLoading = false
		}, 1000 * 10) // 1000ms * 10 = 10 detik
	}
}
</script>

<template>
	<div class="container">
		<CardMain>
			<h1 class="text-3xl font-bold mb-1">Welcome! Glad to see you here 😁</h1>
			<p class="text-lg mb-1">Let's Connect!</p>
			<div class="flex flex-row justify-center flex-wrap">
				<BtnSocial v-for="(social, idx) in socials.data" :key="idx" :url="social.url" :icon-type="social.icon_type"
					:icon="social.icon" :bg-color="social.color" />
			</div>
		</CardMain>
		<CardMain>
			<button @click="loadContent" v-if="state.init && !state.isLoading"
				class="p-3 rounded-2xl font-semibold transition hover:shadow-inner hover:shadow-[#00000080] active:shadow-inner active:shadow-black active:translate-y-1">Liat
				Dong</button>
			<div v-else-if="state.isLoading && !state.init" class="flex justify-center">
				<LoadingIcon class="h-20" />
			</div>
			<div v-else class="flex flex-col">
				<h1 class="text-3xl font-bold mb-1">Makasih udah nunggu</h1>
				<p class="text-lg mb-5">nih aku kasi es krim</p>
				<div class="flex flex-row justify-center">
					<span class="text-9xl animate-bounce">🍦</span>
				</div>
			</div>
		</CardMain>
	</div>
</template>