<template>
    <div>
        <v-layout>
            <v-flex xs8>
                <v-select
                    :items="options"
                    label="Sort By"
                    :small-chips="true"
                    max-height="350"
                    item-text="region"
                    item-value="id"
                    return-object></v-select>
            </v-flex>

            <v-flex xs4>
                <v-select
                    :items="directions"
                    label="Direction"
                    :small-chips="true"
                    max-height="350"
                    item-text="region"
                    item-value="id"
                    return-object></v-select>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    'DATE',
                    'BUY-IN',
                    'PRIZE',
                ],
                directions: ['ASC', 'DESC']
            }
        }
    }
</script>

<style scoped>

</style>
