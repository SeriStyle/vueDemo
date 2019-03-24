import "./table.css";
export default function CreateForm(opts) {
  opts = opts || {};
  this.el = opts.el || '';
  this.data = opts.data || [];
  this.layout = opts.layout || [];
  this.dom = document.querySelector(this.el);
  this.frag = document.createDocumentFragment();
  this.formWrapper = document.createElement('div');
  this.formWrapper.className = 'form_wrapper';
  this.create();
}

CreateForm.prototype = {
  constructor: CreateForm,
  createEle:function(ele){
     return document.createElement(ele)
  },
  create: function() {
      this.formWrapper.innerHTML = '';
      let divtitle=this.createEle('div');
          divtitle.className = 'divtitle';
          this.layout.forEach((value,index,arr)=>{
              let  spantitle=this.createEle('span'); //头部列
               spantitle.innerText=value.label;
               divtitle.appendChild( spantitle);
          })
      // --------------生成按钮------------------
      var operation = this.createEle('div');
      operation.className = 'btnadd';
      var add = this.createEle('button');
      add.type = 'button';
      add.innerHTML = '新增';
      operation.appendChild(add);
      divtitle.appendChild(operation);
      add.addEventListener('click', () => {
          this.event['add'].call(this, this.data);
      
      });
      this.formWrapper.appendChild(divtitle);

      this.data.forEach((row, index) => {
          var formGroup = '';
          var labelGroup = this.createEle('div');
          labelGroup.className = 'groupinput';
          formGroup = this.createEle('div');
          formGroup.className = 'formgroup';
          var label = this.createEle('label');
          this.layout.forEach(lay => {
              var colSm = this.createEle('div');
              colSm.className = 'inputcont';
              var input = this.createEle('input');
              input.type = 'text';
              input.className = 'formcontrol';
              input.value = row[lay.prop] || '';
              input.setAttribute('placeHolder', lay.placeHolder);
              input.addEventListener('input', (e) => {
                  row[lay.prop] = e.target.value;
              });
              // 添加节点
              colSm.appendChild(input);
              formGroup.appendChild(label);
              formGroup.appendChild(colSm);
              labelGroup.appendChild(formGroup);
              this.formWrapper.appendChild(labelGroup);
          });
          // --------------生成按钮------------------
          var del = this.createEle('button');
          del.type = 'button';
          del.innerHTML = '删除';
          del.className = 'btndel';
          del.addEventListener('click', () => {
              this.event['del'].call(this, this.data, row, index);
          });
          this.formWrapper.appendChild(del);
          this.frag.appendChild(this.formWrapper);
      });
      this.dom.appendChild(this.frag);
  },
  // 事件
  event: {
      add: function(data, row, index) {
          var obj = {};
          this.layout.forEach(col => {
              obj[col.prop] = '';
              
          });
          data.push(obj);
          this.create();
      },
      del: function(data, row, index) {
          data.splice(index, 1);
          this.create();
      }
  },

};

