const isUnique = (arr) => {
    const breadcrumbs = {};
    let result = true;

    for (let i=0; i < arr.length; i++) {
        console.log(`~~~LOOP ~~~ i === ${i}`);
            if (breadcrumbs[arr[i]]) {
                result = false;
        } else {
            breadcrumbs[arr[i]] = true;
        }
    }

return result;
};

console.log(isUnique([1,2,3]) === true);


