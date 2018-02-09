class tableResizable {
  constructor (id, options) {
    this._el = document.querySelector(`#{id}`);
    // 实际使用中需要对dom结构进行判断，这里就不做了
    this._tables = Array.from(this._el.querySelectorAll('table'));
    setTimeout(this._resolveDom);
  }

  _resolveDom() {
    const THeader = this._tables;
    let TBody;
    const column = header.tHead.rows[0];
    const columns = Array.from(column.cells);
    const Bcolgroup = document.createElement('colgroup');
    const cols = columns.map((item, index) => {
      const col = document.createElement('col');
      item.dataset.index = index;
      col.width = +item.offsetWidth;
      return col;
    });
    cols.reduce((newDom, item) => {
      newDom.appendChild(item);
      return newDom;
    }, Bcolgroup);
    const HColgroup = Bcolgroup.cloneNode(true);
    header.appendChild(HColgroup);

    //不管是一个table还是两个，都把header合body提出来
    if (tables.length === 1) {
      const [ , tbody ] = Array.from(header.children);
      tbody.remove();
      body = header.cloneNode();
      body.appendChild(Bcolgroup);
      body.appendChild(tbody);
      el.appendChild(body);
    } else {
      [ , body ] = tables;
      body.appendChild(Bcolgroup);
    }
  }
}