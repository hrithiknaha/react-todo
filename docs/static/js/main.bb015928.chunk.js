(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),s=a.n(i),l=(a(23),a(2)),c=a(3),r=a(5),d=a(4),u=a(6),m=a(15),h=a(1),p=a(7),b=a(34),g=(a(24),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={task:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(u.a)(Object(u.a)({},this.state),{},{id:Object(b.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"task"},"New Todo"),o.a.createElement("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Add Todo"))}}]),a}(n.Component)),v=(a(25),a(32)),f=a(33),k=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isEditing:!1,task:n.props.task},n.handleRemove=n.handleRemove.bind(Object(h.a)(n)),n.toggleForm=n.toggleForm.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(h.a)(n)),n.handleToggle=n.handleToggle.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){var e;return e=this.state.isEditing?o.a.createElement(v.a,{key:"editing",timeout:500,classNames:"form"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement(v.a,{key:"normal",timeout:500,classNames:"task-text"},o.a.createElement("li",{className:"Todo-task",onClick:this.handleToggle},this.props.task)),o.a.createElement(f.a,{className:this.props.completed?"Todo completed":"Todo"},e,o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),a}(n.Component),j=(a(28),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={todos:[]},n.create=n.create.bind(Object(h.a)(n)),n.remove=n.remove.bind(Object(h.a)(n)),n.update=n.update.bind(Object(h.a)(n)),n.toggleCompletion=n.toggleCompletion.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(m.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(u.a)(Object(u.a)({},a),{},{task:t}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(v.a,{key:t.id,timeout:500,classNames:"todo"},o.a.createElement(k,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.remove,updateTodo:e.update,toggleTodo:e.toggleCompletion}))}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Get To Work!"," ",o.a.createElement("span",null,"An Animated Todo List Made With React Hooks.")),o.a.createElement(g,{createTodo:this.create}),o.a.createElement("ul",null,o.a.createElement(f.a,{className:"todo-list"},t)))}}]),a}(n.Component)),O=(a(29),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bb015928.chunk.js.map