<template>
    <section class="causes-area causes-default-area">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-6 col-lg-4 mt-30" v-for="(causes, index) in causesData" :key="index">
                    <div class="causes-item">
                        <div class="thumb">
                            <img :src="causes.imgSrc" :alt="causes.title">
                        </div>
                        <div class="content">
                            <ul class="donate-info">
                                <li class="info-item" v-for="(info, index) in causes.infoList" :key="index">
                                    <span class="info-title">{{ info.infoTitle }}:</span>
                                    <span class="amount">{{ info.amount }}</span>
                                </li>
                            </ul>
                            <h4 class="title">
                                <nuxt-link to="/causes-details">{{ causes.title }}</nuxt-link>
                            </h4>
                            <p>{{ causes.desc }}</p>
                        </div>
                        <div class="causes-footer">
                            <div class="admin">
                                <h5>
                                    <nuxt-link to="/causes">
                                        <span class="icon-img">
                                            <img src="/images/icons/admin1.png" alt="Icon">
                                        </span> {{ causes.name }}
                                    </nuxt-link>
                                </h5>
                            </div>
                            <nuxt-link to="/donation" class="btn-theme btn-border-gradient gray-border btn-size-md">
                                <span>
                                    Donate Now 
                                    <img class="icon icon-img" src="/images/icons/arrow-line-right-gradient.png" alt="Icon">
                                </span>
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
                causesData: [
                    {
                        imgSrc: "/images/causes/01.jpg",
                        title: "Need your simple help for save children.",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Kristin Horton",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 5000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 2000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 1000"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/causes/02.jpg",
                        title: "Children Education Needs For Change The World.",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Cristian Dominy",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 3000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 4000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 2000"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/causes/03.jpg",
                        title: "Need Pure Water For All Mozambique People",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Maria Jeccy",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 8000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 7000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 3000"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/causes/01.jpg",
                        title: "Need your simple help for save children.",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Kristin Horton",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 5000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 2000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 1000"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/causes/02.jpg",
                        title: "Children Education Needs For Change The World.",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Cristian Dominy",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 3000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 4000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 2000"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/causes/03.jpg",
                        title: "Need Pure Water For All Mozambique People",
                        desc: "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
                        name: "Maria Jeccy",
                        infoList: [
                            {
                                infoTitle: "Goal",
                                amount: "$ 8000"
                            },
                            {
                                infoTitle: "Raised",
                                amount: "$ 7000"
                            },
                            {
                                infoTitle: "To Go",
                                amount: "$ 3000"
                            }
                        ]
                    }
                ]
            }
        },
    };
</script>