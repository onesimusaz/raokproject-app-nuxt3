<template>
    <ul class="main-menu nav">
        <li>
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about">About Us</nuxt-link>
        </li>
        <li class="has-submenu">
            <nuxt-link to="/causes">Causes</nuxt-link>
            <ul class="submenu-nav">
                <li>
                    <nuxt-link to="/causes">Causes</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/causes-details">Causes Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li class="has-submenu">
            <nuxt-link to="/blog">Blog</nuxt-link>
            <ul class="submenu-nav">
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog-details">Blog Details</nuxt-link>
                </li>
            </ul>
        </li>
        <li class="has-submenu">
            <nuxt-link to="/event-details">Pages</nuxt-link>
            <ul class="submenu-nav">
                <li>
                    <nuxt-link to="/event-details">Event Details</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/volunteer">Volunteer</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/donation">Donation</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
        </li>
    </ul>
</template>