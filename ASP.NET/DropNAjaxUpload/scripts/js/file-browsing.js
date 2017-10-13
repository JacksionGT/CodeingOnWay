
$(document).ready(function () {

    $("#btnViewImage").hide();
    $("#validateImageInput ").hide();
    $("#validateSelectedImage").hide();
});

$("#txtImageName").keydown(function () {

    $("#validateImageInput").hide();
});

$("#selectedImage").click(function () {

    $("#validateSelectedImage").hide();
});

$("#btnBrowsedSave").click(function () {
    var imageName = $("#txtImageName").val();
    var formData = new FormData();
    var totalFiles = document.getElementById("selectedImage").files.length;
    var browsedFile = document.getElementById("selectedImage").files[0];

    if (imageName == "")
        $("#validateImageInput").show();

    if (totalFiles == 0)
        $("#validateSelectedImage").show()

    if ((imageName != "") && (totalFiles != 0)) {
        if (browsedFile.type.match('image.*')) {
            formData.append("FileUpload", browsedFile);
            formData.append("ImageName", imageName);
            $.ajax({
                type: "POST",
                url: '/Home/UploadImage',
                data: formData,
                dataType: "html",
                contentType: false,
                processData: false,
                success: function (result) {
                    $("#btnViewImage").show();
                }
            });
        }
        else {
            alert("Please browse image file only.");
        }
    }
});

$("#btnViewImage").click(function () {
    $.ajax({
        type: "Get",
        url: '/Home/ViewSavedImage',
        dataType: "html",
        contentType: false,
        processData: false,
        success: function (result) {
            $("#pvContainerDiv").empty().append(result);
        }
    });
});



