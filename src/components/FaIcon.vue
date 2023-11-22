<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXTwitter, faFacebook, faInstagram, faGithub, faLinkedin, faTelegramPlane, faSpotify, faSteam, faThreads, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

defineProps(['type', 'icon', 'spin'])
// Brands
library.add(faXTwitter, faFacebook, faInstagram, faGithub, faLinkedin, faTelegramPlane, faSpotify, faSteam, faThreads, faDiscord)
// Solid
library.add(faEnvelope)
</script>

<template>
    <FontAwesomeIcon :icon="[type, icon]" :spin="spin" />
</template>