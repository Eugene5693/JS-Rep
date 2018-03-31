const todo = [];

const addThing = (title, desc, dueDate) => {
	  const obj = {
      title,
      desc,
      dueDate
	}
	  todo.push(obj);
}	    

const getThings = (date) => {
      const result = todo.filter((val, i) => {
      	 if (date === val.dueDate) {
     	 	return val;
     	 }	
      });  

      if (result.length != 0) {
       return result;
     } else {
       return `На ${date} нет заданий`
     }
}

const deleteThing = (title) => {
	  if (todo.length = 0) {
       return 'В списке нет элементов todo'	
     }

      const result = todo.filter((val, i) => {
      if (title === val.title) {
        todo.splice(i, 1)
     }
     //   if (deleteCount != 0) {
     //   	return result;
     // } else {
     // 	return undefined;
     // }
     //   if (start != 0) {
     //   	return result;
     // }


 	  });

       
}



addThing('Найти закладку', 'Прийти домой', '25.03.18');
addThing('Найти закладку 2', 'Прийти домой ghjvgj', '265.03.18');
addThing('Найти закладку 3', 'Прийти домой fgjgfhj', '295.03.18');
