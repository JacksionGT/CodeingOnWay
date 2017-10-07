$(document).ready(function () {

    $("#btnViewImage").hide();
    $("#validateImageInput").hide();
    $("#validateCameraInput").hide();

    // assigning properties and adding callback fuctions
    $("#cameraArea").webcam({        
        width: 250,
        height: 160,
        mode: "save",
        swffile: "/Scripts/ExternalJs/jscam.swf",
        onTick: function () { },
        onSave: function () {
        },
        onCapture: function ()
        {
            var imageName = $("#txtImageName").val();
            var url = getContextPath() + "CameraCapture/" + imageName;          
            webcam.save(url);
            $("#btnViewImage").show();
        },
        debug: function (type, message)
        {
            if (message === "Camera started") { window.webcam.started = true; }            
        },
        onLoad: function () { }
    });

    // Validating and calling capture method of webcam
    $("#btnCaptureSave").click(function () {      
        var imageName = $("#txtImageName").val();
        if (imageName === "")
        {
            $("#validateImageInput").show();
        }
        else
        {
            $("#validateImageInput").hide();
            if (!webcam.started) {            
                $("#validateCameraInput").show();
            }
            else
            {
                $("#validateCameraInput").hide();
                $("#btnViewImage").hide();
                webcam.capture();
            }
        }
    });

    
    function getContextPath()
    {
        var ctx = window.location.pathname,
            path = '/' !== ctx ? ctx.substring(0, ctx.indexOf('/', 1) + 1) : ctx;
        return path + (/\/$/.test(path) ? '' : '/');
    }
    
    $("#txtImageName").keydown(function () {
        $("#validateImageInput").hide();
    });

    $("#btnViewImage").click(function () {
        $.ajax({
            type: "Get",
            url: '/Home/ViewSavedImage',
            dataType: "html",
            contentType: false,
            processData: false,
            success: function (result)
            {
                $("#pvContainerDiv").empty().append(result);
            }
        });
    });
});