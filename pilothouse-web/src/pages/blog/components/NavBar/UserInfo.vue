<template>
    <div class="bar-right w-80">
            <ul class="right-ui flex justify-center items-center">
                <li class="account flex-1 flex justify-center">100,00 €</li>
                <li class="compass flex-1 flex justify-center">
                    <Icon1 />
                </li>
                <li class="tips flex-1 flex justify-center">
                    <Icon2 />
                </li>
                <li class="avatar flex-1 flex justify-center">
                    <Icon3 />
                </li>
            </ul>
        </div>
</template>
<script setup lang="ts">
    import Icon1 from '~/assets/svg/nav-right/icon1.svg?component'
    import Icon2 from '~/assets/svg/nav-right/icon2.svg?component'
    import Icon3 from '~/assets/svg/nav-right/icon3.svg?component'
</script>