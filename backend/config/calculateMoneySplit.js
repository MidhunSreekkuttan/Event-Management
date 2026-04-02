const calculateMoneySplit = (baseAmount, commissionPercent = 30) => {

    try {

        const adminCommissionAmount = Number((baseAmount * commissionPercent) / 100).toFixed(2)

        const eventManagerAmount = Number(baseAmount - adminCommissionAmount).toFixed(2)

        return {
            adminCommissionPercent: commissionPercent,
            adminCommissionAmount: adminCommissionAmount,
            eventManagerAmount,
            totalPaid: Number(baseAmount.toFixed(2))
        }
    } catch (error) {
        console.log(error);
    }

}

export default calculateMoneySplit