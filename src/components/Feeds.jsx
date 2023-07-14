import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "react-modal";
import { Posts } from "../data";

const Feeds = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleDownload = () => {
    alert(
        "Download is not supported yet, but you can download it by long pressing the image or right-click."
      );
  };

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setImageIndex(0);
  };

  const customModalStyles = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 9999,
    },
    content: {
      position: "static",
      border: "none",
      background: "none",
      padding: 0,
      maxWidth: "90%",
      maxHeight: "90%",
      overflow: "auto",
      margin: "auto",
    },
  };

  return (
    <div className="w-full mt-10">
      {Posts.map((post) => (
        <div className="m-auto bg-primary w-full md:w-[1000px] rounded-lg shadow p-4 mb-4" key={post.postId}>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4 object-cover"
              src={post.userProfile}
              alt="Profile"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-100">{post.username}</h2>
              <p className="text-gray-500 text-sm">{post.Date}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-100">{post.caption}</p>
          <div className="mt-4">
            <Carousel showThumbs={false} swipeable={true} emulateTouch={true} infiniteLoop={true}>
              {post.noteImg.map((image, index) => (
                <div key={index} onClick={() => openImageModal(image, index)}>
                  <img
                    className="object-cover md:object-contain w-full h-auto md:h-[600px] rounded-lg cursor-pointer"
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="mt-4 flex items-center">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-md bg-paleBlue hover:bg-paleGreen text-white"
            >
              Download
            </button>
          </div>
        </div>
      ))}

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeImageModal}
        contentLabel="Image Modal"
        style={customModalStyles}
      >
        <button
          onClick={closeImageModal}
          className="absolute top-0 right-0 m-4 p-2 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400 hover:text-gray-900"
        >
          Close
        </button>
        <div className="flex justify-center items-center h-full">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-w-full max-h-full"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Feeds;
