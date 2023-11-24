<script lang="ts" setup>
import { reactive } from 'vue';
import FaIcon from './FaIcon.vue';

type Props = {
    url: string,
    iconType: string,
    icon: string,
    bgColor: string
}

const { bgColor } = defineProps<Props>()
const btnStyle = reactive({
    background: bgColor,
})

function openNewTab(url: string) {
    window.open(url, '_blank', 'noreferrer')
}
</script>

<template>
    <button @click="() => openNewTab(url)" :style="btnStyle" :class="{ instagram: icon === 'instagram' }"
        class="flex m-1 text-4xl w-14 h-14 justify-center items-center rounded-2xl transition ease-in-out hover:shadow-lg hover:shadow-[#00000080] hover:-translate-y-1 hover:scale-110">
        <FaIcon :type="iconType" :icon="icon" />
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