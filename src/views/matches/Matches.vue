<template>
    <div class="matches">
        <div class="sidebar"></div>
        <div class="container">
            <div class="box">
                <div class="box-header">
                    <h2>Matches</h2>
                </div>
                <div class="box-body">
                    <div class="box upcoming">
                        <div class="box-header">
                            <h4>Upcoming</h4>
                        </div>
                        <div class="box-body">
                            <div class="">Today, 22:00</div>
                            <button class="btn btn-danger">Leave</button>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="box">
                        <div class="box-header">
                            <h4>History</h4>
                        </div>
                        <div class="box-body">
                            Yesterday, 22:00
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import AppSidebar from '@views/matchmaking/components/Sidebar'

    export default {
        components: {
            AppSidebar,
        }
    }
</script>

<style lang="scss" scoped>

    .upcoming {
        .box-body {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

</style>
