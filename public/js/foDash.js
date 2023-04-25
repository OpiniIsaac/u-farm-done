function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
        case "foRegistrartion":
            iframe.src = "foRegistrartion";
            break;
        case "foApprove":
            iframe.src = "foApprove";
            break;
        case "approve":
            iframe.src = "approve.html";
            break;
        case "bookingAndOrders":
            iframe.src = "bookingAndOrders.html";
            break;
        case "foAuth":
            iframe.src = "foAuth";
            break;
    }

}