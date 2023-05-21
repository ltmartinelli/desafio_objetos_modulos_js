import * as shippingService from './shipping-service.js'

export function total(order)
{
    const discountAmount = order.basic * (order.discount / 100);
    const shipmentFee = shippingService.shipment(order);
    return order.basic - discountAmount + shipmentFee;
} 