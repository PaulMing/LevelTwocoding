<template>

    <div>
        <div class="nav">
            <router-link :to="{name: 'academic'}">学术讨论</router-link>
            <router-link :to="{name: 'download'}">资源下载</router-link>
            <router-link :to="{name: 'personal'}">个人中心</router-link>
        </div>

        <router-view></router-view>
        
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.nav a {
    display: inline-block;
    padding: 5px 10px;
    margin-right: 20px;
}

.active {
    background-color: #000;
    color: #fff;
}

</style>