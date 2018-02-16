const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // create new div and insert it after newTodo button
  list.previousElementSibling.insertAdjacentHTML('afterEnd', "<div id='add-todo'></div>");

  // create text field and append it to our new div
  let div = document.getElementById('add-todo');
  let inputField = document.createElement("input");
  div.appendChild(inputField)

  // creat addButton and append it also to our new div
  let addButton = document.createElement("button");
  addButton.textContent = "Add Todo";
  div.appendChild(addButton);

  // listen and respond to Added Todos
  addButton.addEventListener('click', function(event) {
    // get ul element
    let ul = document.getElementById('todo-list');

    // create li element and append it to our ul
    let li = document.createElement('li')
    li.setAttribute('class', classNames.TODO_ITEM);
    ul.appendChild(li);

    // create span element and append it to our li
    let span = document.createElement('span');
    span.setAttribute('class', classNames.TODO_TEXT);
    span.textContent = inputField.value;
    li.appendChild(span);

    // create checkBox and append it also to our li
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', classNames.TODO_CHECKBOX);
    li.appendChild(checkBox);

    // if  increment item count and unchecked count by 1
    itemCountSpan.textContent = Number(itemCountSpan.textContent) + 1;
    uncheckedCountSpan.textContent = Number(uncheckedCountSpan.textContent) + 1;

    // listen and respond to checkbox behaviour
    checkBox.addEventListener('change', function(event) {
      if (event.target.checked)
        // if checkbox is checked increment unchecked count by 1 else decrement it by 1
        uncheckedCountSpan.textContent = Number(uncheckedCountSpan.textContent) - 1;
      else
        uncheckedCountSpan.textContent = Number(uncheckedCountSpan.textContent) + 1;
    })
  })

}
