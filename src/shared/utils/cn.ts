
export const cn = (...args: unknown[]) => {
  return args.map((arg) => {
    if(typeof arg === 'string' && arg.length > 0){
      return arg;
    }else if(typeof arg === 'object'){
      const res = [];

      for(const [key, value] of Object.entries(arg as object)){
        if(value){
          res.push(key);
        }
      }

      return res;
    }
  }).flat().join(' ');
}
