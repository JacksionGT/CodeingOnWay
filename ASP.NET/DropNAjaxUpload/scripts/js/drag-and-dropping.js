
$(document).ready(function () {
    $("#btnViewImage").hide();
    $("#validateImageInput ").hide();
    $("#validateDroppedImage").hide();
});


var dropArea = $("#dropAreaDiv");
var newFile;
// Providing handlers three events to the drop area
dropArea.on({
    "drop": makeDrop,
    "dragenter": ignoreDrag,
    "dragover": ignoreDrag
});

//Stop default behavior 
function ignoreDrag(e) {
    e.stopPropagation();
    e.preventDefault();
}

//Handling drop event
function makeDrop(e) {
    var fileList = e.originalEvent.dataTransfer.files, fileReader;
    e.stopPropagation();
    e.preventDefault();
    if (fileList.length > 0) {
        newFile = fileList[0];
        if (newFile.type.match('image.*')) {
            $("#validateDroppedImage").hide();
            fileReader = new FileReader();
            fileReader.onloadend = handleReaderOnLoadEnd($("<img />"));
            fileReader.readAsDataURL(fileList[0]);
        }
        else {
            alert("Please select an image file only.");
        }
    }
}

//Setting the image source
function handleReaderOnLoadEnd($image) {
    return function (event) {
        $image.attr("src", this.result)
            .addClass("small")
            .appendTo("#dropAreaDiv");
    };
}

$("#txtImageName").keydown(function () {
    $("#validateImageInput").hide();
});

$("#btnDroppedSave").click(function () {
    var imageName = $("#txtImageName").val();

    if (imageName == "")
        $("#validateImageInput").show();

    var imgSource = $("#dropAreaDiv").find("img").attr("src");

    if (imgSource == undefined)
        $("#validateDroppedImage").show();

    if ((imageName != "") && (imgSource != undefined)) {
        var formData = new FormData();
        var totalFiles = 1;
        var dropedFile = newFile;
        formData.append("FileUpload", dropedFile);
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








