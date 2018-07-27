<template>
    <div class="deposit">
        <div class="box">
            <div class="box-header flex">
                <h2>DEPOSITS</h2>
                <h4>Current Balance: $129</h4>
            </div>

            <div class="box-body">

                <div class="form-group amount">
                    <label for="amount">Amount</label>
                    <input type="text" id="amount" ref="amount">
                </div>

                <!--<button class="btn">
                    <i class="fab fa-paypal"></i>
                    <h4>Paypal</h4>
                </button>

                <button class="btn">
                    <i class="fab fa-apple"></i>
                    <h4>Apple Pay</h4>
                </button>

                <button class="btn">
                    <i class="fab fa-bitcoin"></i>
                    <h4>Bitcoin</h4>
                </button>

                <button class="btn">
                    <i class="fab fa-ethereum"></i>
                    <h4>Ethereum</h4>
                </button>-->

            </div>
        </div>
    </div>
</template>

<script>
    import InputMask from 'inputmask'

    export default {
        mounted() {
            let moneyMask = new InputMask({alias: 'currency'})
            moneyMask.mask(this.$refs.amount)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@variables";

    .deposit {
        width: 100%;
        padding: 1rem;

        .box-header {
            justify-content: space-between;
            align-items: flex-end;
        }

        .form-group {
            &.amount {
                width: 25%;
            }
        }

        .btn {
            display: flex;
            justify-content: center;
            padding: 2rem 4rem;
            width: 25rem;
            text-shadow: 1px 1px 1px $grey;
            background-color: $white;
            border: 1px solid $grey;
            border-radius: 3px;

            i {
                font-size: 3rem;
                margin-right: 1rem;
            }
        }
    }
</style>
