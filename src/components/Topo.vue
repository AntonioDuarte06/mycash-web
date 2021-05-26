<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        
        <span class="navbar-item">
            <strong>$ My Cash $</strong>
        </span>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        
        <router-link to="/" class="navbar-item">
            Lancamentos
        </router-link>

        <router-link to="/usuarios" class="navbar-item">
            Usuários
        </router-link>

        
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button ">
                <strong>Login</strong>
            </a>
            <a class="button is-danger">
                Logout
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>