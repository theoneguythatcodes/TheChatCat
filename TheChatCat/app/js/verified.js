const VERIFIED_USERS = [
    "c2f26c43-47a8-4741-9a3a-8b675f39de02",
    "4e094c21-4f5f-495c-bcdd-84fc11783309"
];

function isVerified(userId) {
    return VERIFIED_USERS.includes(userId);
}

function createVerifiedBadge(userId) {
    if (!isVerified(userId)) {
        return null;
    }

    const badge = document.createElement("img");

    badge.src = "../assets/img/verified-badge.webp";
    badge.alt = "Verified account";
    badge.title = "Verified account";
    badge.className = "verified-badge";

    return badge;
}