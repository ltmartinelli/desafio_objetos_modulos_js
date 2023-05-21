export function shipment({ basic })
{
    if (basic < 100.00) { return 20.00 }
    else if (basic < 200) { return 12.00 }
    else { return 0.00 }
}