import { createMenuIcon } from 'UI/kit/icons'

class SortableItem {
  /**
   *
   *  @constructor
   *  @param {HTMLElement} content - element to add to container
   *  @param {number} dataId - data attribute id
   */

  constructor(content, dataId = null) {
    this.content = content;
    this.dataId = dataId;
  }

  createElement(
    onClickEdit = () => {},
    onClickRemove = () => {}
  ) {
    const sortableItem = document.createElement('div');
    sortableItem.classList.add('LZTUpSortableItem');
    if (this.dataId) {
      sortableItem.dataset.id = this.dataId;
    }

    const draggableZone = document.createElement('div');
    draggableZone.classList.add('LZTUpSortableDraggable');
    const icon = createMenuIcon('far fa-grip-vertical', '');
    draggableZone.appendChild(icon);

    const contentContaner = document.createElement('div');
    contentContaner.classList.add('LZTUpSortableContent');
    // contentContaner.appendChild(this.content);
    contentContaner.innerHTML = `
      <p>${this.content}</p>
    `;

    const utilityContainer = document.createElement('div');
    utilityContainer.classList.add('LZTUpSortableUtility');

    const editButton = document.createElement('div');
    editButton.classList.add('LZTUpSortableEditButton');
    const editIcon = createMenuIcon('far fa-edit', '');
    editButton.appendChild(editIcon);
    editButton.onclick = async (e) => {
      console.log('Edit button clicked');
      await onClickEdit(e, sortableItem);
    }

    const removeButton = document.createElement('div');
    removeButton.classList.add('LZTUpSortableRemoveButton');
    const removeIcon = createMenuIcon('far fa-trash', '');
    removeButton.appendChild(removeIcon);
    removeButton.onclick = async (e) => {
      const result = confirm('Вы точно хотите удалить иконку?')
      if (result) {
        sortableItem.remove();
        await onClickRemove(e, sortableItem);
      }
    }

    utilityContainer.appendChild(editButton);
    utilityContainer.appendChild(removeButton);

    sortableItem.appendChild(draggableZone);
    sortableItem.appendChild(contentContaner);
    sortableItem.appendChild(utilityContainer);
    return sortableItem;
  }
}

export { SortableItem };