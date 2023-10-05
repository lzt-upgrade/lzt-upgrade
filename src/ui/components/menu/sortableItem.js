import Icon from 'UI/components/icon'


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
    const icon = new Icon('far fa-grip-vertical', '').createElement();
    draggableZone.appendChild(icon);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('LZTUpSortableContent');

    const containerDesc = document.createElement('p');
    containerDesc.innerText = this.content;
    contentContainer.append(containerDesc);

    const utilityContainer = document.createElement('div');
    utilityContainer.classList.add('LZTUpSortableUtility');

    const editButton = document.createElement('div');
    editButton.classList.add('LZTUpSortableEditButton');
    const editIcon = new Icon('far fa-edit', '').createElement();
    editButton.appendChild(editIcon);
    editButton.onclick = async (e) => {
      console.log('Edit button clicked');
      await onClickEdit(e, sortableItem);
    }

    const removeButton = document.createElement('div');
    removeButton.classList.add('LZTUpSortableRemoveButton');
    const removeIcon = new Icon('far fa-trash', '').createElement();
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
    sortableItem.appendChild(contentContainer);
    sortableItem.appendChild(utilityContainer);
    return sortableItem;
  }
}

export default SortableItem;