import React, { Component } from "react";
import { uploadImage } from "./constants";

class DragDropInterface extends Component {
  state = {
    isDraggable: true
  };

  dragStartHandler = event => {
    console.log("drag start...");

    event.dataTransfer.setData("text/plain", event.target.src);
  };

  dragOverHandler = event => {
    console.log("move...");
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  dropHandler = event => {
    console.log("drop zone");
    event.preventDefault();
    // let data = event.dataTransfer.getData('text/plain');

    let files = event.dataTransfer.files;
    console.log("data", files);

    console.log("data transfer", event.dataTransfer);

    this.fileHandler(files[Symbol.iterator]());
  };

  createImage = src => {
    let image = new Image();
    image.src = src;

    return image;
  };

  fileHandler = files => {
    for (let file of files) {
      if (file.type.startsWith("image/")) {
        let img = new Image();
        let imageListingContainer = document.getElementById("image-listing");

        img.file = file;

        imageListingContainer.appendChild(img);

        let fileReader = new FileReader();
        fileReader.onload = (function(aImg) {
          return function(event) {
            aImg.src = event.target.result;
            console.log("result", aImg.src);

            uploadImage(event.target.result);
          };
        })(img);
        fileReader.readAsDataURL(file);
      }
    }
  };

  render() {
    let { isDraggable } = this.state;
    return (
      <div>
        <div>
          <input
            type="file"
            id="fileElem"
            multiple
            accept="image/*"
            className="visually-hidden"
          />
          <label htmlFor="fileElem">Select some files</label>
        </div>
        <div>
          <img
            id="123"
            draggable={isDraggable}
            onDragStart={this.dragStartHandler}
            src="https://res.cloudinary.com/pnguyen23/image/upload/c_scale,w_192/v1505179005/IMG_0203_3_jzv8oy.jpg"
            alt="deadpool"
          />
        </div>

        <div
          className="drop-zone"
          id="target"
          onDrop={this.dropHandler}
          onDragOver={this.dragOverHandler}
        >
          Drop Zone
          <div id="image-listing" />
        </div>
      </div>
    );
  }
}

export default DragDropInterface;
