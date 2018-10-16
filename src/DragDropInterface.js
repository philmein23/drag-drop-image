import React, { Component } from 'react';

class DragDropInterface extends Component {
  state = {
    isDraggable: true
  };

  dragStartHandler = event => {
    console.log('drag start...');

    event.dataTransfer.setData('text/plain', event.target.src);
  };

  dragOverHandler = event => {
    console.log('copy...');
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  };

  dropHandler = event => {
    console.log('drop zone');
    event.preventDefault();
    let data = event.dataTransfer.getData('text/plain');

    console.log('data', data);

    let imageListingContainer = document.getElementById('image-listing');
    imageListingContainer.appendChild(this.createImage(data));
  };

  createImage = src => {
    let image = new Image();
    image.src = src;

    return image;
  };

  render() {
    let { isDraggable } = this.state;
    return (
      <div>
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
        </div>
        <div id="image-listing" />
      </div>
    );
  }
}

export default DragDropInterface;
