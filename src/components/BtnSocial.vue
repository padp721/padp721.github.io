<script lang="ts" setup>
import { reactive } from 'vue';
import FaIcon from './FaIcon.vue';

type Props = {
    url: string,
    icon_type: string,
    icon: string,
    bg_color: string
}

const { bg_color } = defineProps<Props>()
const background = reactive({
    background: bg_color,
})

function openNewTab(url: string) {
    window.open(url, '_blank', 'noreferrer')
}
</script>

<template>
    <button @click="() => openNewTab(url)" :style="background" :class="{ instagram: icon === 'instagram' }"
        class="flex m-1 text-4xl w-14 h-14 justify-center items-center rounded-2xl transition ease-in-out hover:shadow-lg hover:shadow-[#00000080] hover:-translate-y-1 hover:scale-110">
        <FaIcon :type="icon_type" :icon="icon" />
    </button>
</template>

<style scoped>
.instagram {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}
</style>