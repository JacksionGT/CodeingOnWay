using DragUpload.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DragUpload.Controllers
{
    public class HomeController : Controller
    {
        private static ImageModel imageModel = new ImageModel();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPVforFileBrowsing()
        {
            return View();
        }

        public ActionResult GetPVDragDrop()
        {
            return View();
        }

        public ActionResult GetPVUsingWebCam()
        {
            return View();
        }

        [HttpPost]
        public void UploadImage()
        {
            foreach (string upload in Request.Files)
            {
                string path = AppDomain.CurrentDomain.BaseDirectory + "ImagesUploaded/";
                string filename = Path.GetFileName(Request.Files[upload].FileName);
                Request.Files[upload].SaveAs(Path.Combine(path, filename));
                imageModel.ImagePath = filename;
                imageModel.ImageName = Request.Form["ImageName"];
            }
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult ViewSavedImage()
        {
            return PartialView("ViewSavedImage", imageModel);
        }

        // Since Camera Capure Partial View is using
        // which put the image in InputStream instead of Files
        public ActionResult CameraCapture(string imageName)
        {

            var stream = Request.InputStream;
            string imageFileInStringFormat;

            using (var reader = new StreamReader(stream))
                imageFileInStringFormat = reader.ReadToEnd();

            string AppPath = AppDomain.CurrentDomain.BaseDirectory + "ImagesUploaded/";
            var path = Path.Combine(AppPath, imageName + ".jpg");
            System.IO.File.WriteAllBytes(path, stringToByteArrayConvertor(imageFileInStringFormat));

            imageModel.ImagePath = imageName + ".jpg";
            imageModel.ImageName = imageName;

            return null;
        }

        private byte[] stringToByteArrayConvertor(string strInput)
        {
            int numBytes = (strInput.Length) / 2;
            byte[] bytes = new byte[numBytes];

            for (int x = 0; x < numBytes; ++x)
            {
                bytes[x] = Convert.ToByte(strInput.Substring(x * 2, 2), 16);
            }

            return bytes;
        }
    }
}