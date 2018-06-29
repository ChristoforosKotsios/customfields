var config = {
config: {
    mixins: {
        /*'Magento_Checkout/js/action/place-order': {
            'Sugarcode_Deliverydate/js/order/place-order-mixin': true
        },
        'Magento_Checkout/js/action/set-payment-information': {
            'Sugarcode_Deliverydate/js/order/set-payment-information-mixin': true
        },*/
        'Magento_Checkout/js/action/set-shipping-information': {
            'SR_CheckoutAdditionalField/js/action/set-shipping-information-mixin': true
        }
    }
};
