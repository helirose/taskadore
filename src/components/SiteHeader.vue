<script setup>

</script>

<template>
    <header>
        <span class="logo"><router-link to="/">Taskadore</router-link></span>
        <nav>
            <ul>
            <li><button>Login</button></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        width: 100%;
        padding: 10px;
        color: #000000;
        margin-bottom: 1em;
        display: flex;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    header span {
        flex: 0 0 50%;
    }

    nav {
        flex: 1 0 50%;
        padding-right: 1em;
        text-align: right;
    }

    nav ul, nav ul li {
        margin: 0;
        text-indent: 0;
        list-style-type: none;
    }
</style>