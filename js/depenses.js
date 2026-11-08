let depenses = [
    {
        id: 1,
        groupeId: 6,
        titre: 'Grocery Shopping',
        montant: 200,
        categorie: 'Food',
        date: '01/11/2026',
        payeurId: 20,
        parts: [
            { membreId: 10 },
            { membreId: 20 }
        ]
    },
    {
        id: 2,
        groupeId: 10,
        titre: 'Train tickets',
        montant: 200,
        categorie: 'Transportation',
        date: '01/11/2026',
        payeurId: 10,
        parts: [
            { membreId: 10 },
            { membreId: 20 }
        ]
    },
];

function expenseFetcher(member) {

    let total = 0;

    depenses.forEach((expense) => {

        if (expense.groupeId !== member.groupId) {
            return;
        }

        let memberShare = expense.parts.find(
            (part) => part.membreId === member.memberID
        );

        if (memberShare) {
            total += expense.montant / expense.parts.length;
        }

    });

    return total;
}
