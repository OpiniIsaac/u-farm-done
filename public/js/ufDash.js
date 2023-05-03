function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
      case "upload":
        iframe.src = "upload";
        break;
      case "registeredFarmerOne":
        iframe.src = "registeredFarmerOne";
        break;
      case "foAppoint":
        iframe.src = "foAppoint";
        break;
      case "aoAuth":
        iframe.src = "aoAuth";
        break;
    }
  }