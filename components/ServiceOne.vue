<template>
    <section class="service-area service-default-area">
        <div class="container">
            <div class="row mtn-30" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 col-lg-4 mt-30" v-for="(service, index) in services" :key="index">
                    <div class="icon-box-item" :class="service.addClassName">
                        <div class="icon-box-top">
                            <div class="icon-box">
                                <img class="icon-img" :src="service.icon" alt="icon" />
                            </div>
                            <h4 class="title">{{ service.title }}</h4>
                        </div>
                        <div class="content">
                            <div class="separator-line">
                                <img src="/images/shape/line-s1.png" alt="shape" />
                            </div>
                            <p>{{ service.desc }}</p>
                            <nuxt-link to="/causes-details" class="btn-theme btn-white btn-border btn-size-md">
                                View Details
                                <img class="icon icon-img" src="/images/icons/arrow-line-right.png" alt="Icon" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Clean Water",
                        desc: "Lorem Ipsum is simply dummy text the printing typesetng industry lorem Ipsum has been industry standard dummy text ever since.",
                        addClassName: "item-one"
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Healthy Food",
                        desc: "Lorem Ipsum is simply dummy text the printing typesetng industry lorem Ipsum has been industry standard dummy text ever since.",
                        addClassName: "item-two"
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Medical Help",
                        desc: "Lorem Ipsum is simply dummy text the printing typesetng industry lorem Ipsum has been industry standard dummy text ever since.",
                        addClassName: "item-three"
                    }
                ]
            }
        },
    };
</script>
