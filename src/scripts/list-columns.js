const ListColumn = function () {
    let listColumns = document.querySelectorAll('.list-column-sec');
    if (listColumns.length) {
        listColumns.forEach(listColumn => {
            let bullets = listColumn.querySelectorAll('.list-column--column_content li');
            bullets.forEach(bullet => {
                let div = document.createElement("div");
                bullet.insertAdjacentElement("afterbegin", div);
            });
        });
    }
}

export default ListColumn;
