const M = {
	  add: (a, b) => {
	     return +a + +b;
    },

    pow: (a, b) => {
         function pow(a, b) {
         if (b != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
         return a * pow(a, b - 1);
        } else {
         return a;
        }
      } 

         return a * pow(a, b - 1);
    },

    max: (a, b) => {
         if (a > b) {
         return a;
        }
         else if (a === b) {
         return 'a = b';
        }
         else {
         return b;
        }
    },

    disk: (a, b, c) => {
          let d = b * b - 4 * a * c;
          if (a = 0) {
          return undefined;
        }
          else if ( d < 0 ) {
          return a;
        } 
          else if ( d == 0 ) {
          return 'нет решений';  
        }
          else {
          return d;         
        }         
    },

    diam: (l) => {
          let d = l / 3.14;
         // где a - радиус круга, b - окружность
        
        if (l > 0) {
          return d;
        } else {
          return 'нет решения';
        }
    },
}

M.add(5, 6);
M.pow(5, 6);
M.max(5, 6);
M.disk(5, 6, 5);
M.diam(5);