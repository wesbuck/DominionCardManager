<template>
    <div class="container-xl row">
        <h1 class="col-sm-8">{{title}}</h1>
        <ul class="nav nav-pills">
            <router-link v-for="route in this.$router.options.routes" tag="li" class="nav-item" :to="route.path">
                <a class="nav-link">{{ route.name }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: { title: String },
};
</script>

<style lang="scss" scoped>
@import "bootstrap";
.container-xl {
    background-color: #222831;
    color: #eeeeee;
}
.nav {
    margin-top: 7px;
}
.nav-item {
    margin-left: 8px;
    a {
        color: #d65a31;
    }
    a:hover {
        background-color: #393e46;
    }
}
.router-link-exact-active {
    a,a:hover {   
        background-color: #d65a31;     
        color: #222831;
        font-weight: bold;
    }
}
</style>
