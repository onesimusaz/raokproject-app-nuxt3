<template>
    <section class="causes-details-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="causes-details-column">
                        <div class="causes-details-content">
                            <div class="causes-details">
                                <div class="thumb">
                                    <img class="w-100" src="/images/causes/d1.jpg" alt="image">
                                </div>
                                <h3 class="cause-title">Children Education Needs For Change <br>The World.</h3>
                                <div class="donate-info-wrp">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <ul class="donate-info">
                                                <li class="info-item">
                                                    <span class="info-title">Goal:</span>
                                                    <span class="amount">$ 5,000</span>
                                                </li>
                                                <li class="info-item">
                                                    <span class="info-title">Raised:</span>
                                                    <span class="amount">$ 2,000</span>
                                                </li>
                                                <li class="info-item">
                                                    <span class="info-title">To Go:</span>
                                                    <span class="amount">$ 1,000</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="progress-item">
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 75%">
                                                        <span class="percent">75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged was popularised in the 1960s with the release of etraset sheets containing Lorem Ipsum passages.</p>
                                <p class="mb-26">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Cause Challenge</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged was popularised in the 1960s with the release of etraset sheets containing Lorem Ipsum passages.</p>
                                <p class="mb-26">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Summery And Documents</h3>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button class="document-item">
                                            Documents.pdf
                                            <img src="/images/icons/file.png" alt="Icon">
                                        </button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button class="document-item bgcolor-theme2">
                                            Documents.pdf
                                            <img src="/images/icons/file.png" alt="Icon">
                                        </button>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged was popularised in the 1960s with the release of etraset sheets containing Lorem Ipsum passages.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 an when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p></p>
                            </div>
                            <DonnerList />
                            <DonationForm />
                        </div>
                        <SidebarWrapper />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            DonnerList: () => import('@/components/DonnerList'),
            DonationForm: () => import('@/components/DonationForm'),
            SidebarWrapper: () => import('@/components/SidebarWrapper'),
        },
    };
</script>
