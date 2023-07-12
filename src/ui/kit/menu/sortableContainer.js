class SortableContainer {
  /**
   *
   *  @constructor
   *  @param {object} elements - elements to add to container
   */

  constructor(elements) {
    this.elements = elements;
  }

  createElement(onMoveCallback = (e) => {}) {
    const sortableContainer = document.createElement('div');
    sortableContainer.classList.add('LZTUpSortableContainer');

    for (const element of this.elements) {
      sortableContainer.appendChild(element);
    }

    Sortable.create(sortableContainer, {
      handle: '.LZTUpSortableDraggable',
      animation: 150,
      onMove: onMoveCallback
    })

    return sortableContainer;
  }
}

export { SortableContainer };