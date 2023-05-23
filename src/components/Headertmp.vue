<template>
    <div class="container-fluid d-flex align-items-center justify-content-between">

        <router-link to="/"  class="logo d-flex align-items-center scrollto me-auto me-lg-0"  href="#hero-animated" v-scroll-to="'#hero-animated'">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <!-- <img src="assets/img/logo.png" alt=""> -->
            <h1>Bihar Samaj<span>.</span></h1>
        </router-link>

        <nav id="navbar" class="navbar">
            <ul>

                <li><router-link to="/"  class="nav-link scrollto"  href="#hero-animated" v-scroll-to="'#hero-animated'">Home</router-link></li>

                <li><router-link to="/"  class="nav-link scrollto"   href="#about" v-scroll-to="'#about'" >About</router-link>
                </li>
                <li><router-link to="/" class="nav-link scrollto" href="#services" v-scroll-to="'#services'" >Events</router-link></li>

                <li><router-link to="/" class="nav-link scrollto" href="#portfolio" v-scroll-to="'#portfolio'" >Gallery</router-link></li>
                <li><router-link to="/" class="nav-link scrollto" href="#video" v-scroll-to="'#video'" >Video</router-link>
                </li>
                <li><router-link to="/" class="nav-link scrollto" href="#team" v-scroll-to="'#team'" >Team</router-link></li>
                <!-- <li><a class="nav-link scrollto" asp-controller="Home" asp-action="Blog">Blog</a></li> -->

                <li><router-link to="/" class="nav-link scrollto" href="#contact" v-scroll-to="'#contact'" >Contact</router-link></li>
                <!-- <li> <a class="nav-link scrollto" asp-controller="Login" asp-action="Index" target="_blank">Login</a></li> -->
            </ul>
            <i class="bi bi-list mobile-nav-toggle d-none"></i>
            
        </nav><!-- .navbar -->



    </div>
</template>